<template>
    <main class="main">
        <page-header :title="pageTitle" subtitle="Shop"></page-header>
        <nav aria-label="breadcrumb" class="breadcrumb-nav mb-2">
            <div :class="containerClass">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <nuxt-link to="/">
                            Главная</nuxt-link>
                    </li>
                    <li class="breadcrumb-item">
                        <nuxt-link to="/shop/sidebar/list">Товары</nuxt-link>
                    </li>
                    <li class="breadcrumb-item active">{{ category }}</li>
                    <li class="breadcrumb-item" v-if="$route.query.searchTerm">
                        <span>Search - {{ $route.query.searchTerm }}</span>
                    </li>
                </ol>
            </div>
        </nav>

        <div class="page-content">
            <div :class="containerClass">
                <div class="toolbox">
                    <div class="toolbox-left">
                        <a href="#" class="sidebar-toggler mr-0 mr-md-5" @click.prevent="showSidebar"
                            style="font-family: Gilroy-Medium !important; gap: 5px; align-items: center;">
                            <img src="../../../assets/newImg/icons/menu.svg" alt="">
                            Фильтры
                        </a>
                    </div>

                    <div class="toolbox-center">
                        <div class="toolbox-info">
                            Показано
                            <span>{{ products.length }} of {{ totalCount }}</span> товаров
                        </div>
                    </div>
                    <div class="toolbox-right">
                        <div class="toolbox-sort">
                            <label for="sortby">Сортировка:</label>
                            <div class="select-custom">
                                <select name="sortby" id="sortby" class="form-control" @change.prevent="getProducts"
                                    v-model="orderBy" style="height: 29px;">
                                    <option value="default">По умолчанию</option>
                                    <option value="featured">Most Popular</option>
                                    <option value="rating">Most Rated</option>
                                    <option value="new">Date</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <shop-list-three :products="products" :per-page="perPage" :loaded="loaded" :class="{ loaded: loaded }"
                    class="skeleton-body skel-shop-products"></shop-list-three>

                <div class="load-more-container text-center">
                    <a href="#" class="btn btn-outline-darker btn-load-more" @click.prevent="loadMore"
                        v-if="loadMoreLoading || hasMore">
                        More Products
                        <img src="../../../assets/newImg/icons/refresh.svg" alt="">
                    </a>
                </div>
                <div class="sidebar-filter-overlay" @click="hideSidebar"></div>
                <shop-sidebar-one :is-sidebar="true"></shop-sidebar-one>
            </div>
        </div>
    </main>
</template>
<script>
import { mapGetters } from 'vuex';

import PageHeader from '../../../components/elements/PageHeader.vue';

import ShopListThree from '../../../components/partial/shop/list/ShopListThree.vue';
import ShopSidebarOne from '../../../components/partial/shop/sidebar/ShopSidebarOne.vue';

import Repository, { baseUrl } from '../../../repositories/repository.js';
import { scrollToPageContent } from '../../../utilities/common.js';

export default {
    components: {
        PageHeader,
        ShopListThree,
        ShopSidebarOne
    },
    data: function () {
        return {
            products: [],
            perPage: 8,
            type: 'list',
            totalCount: 0,
            orderBy: 'default',
            isSidebar: true,
            loaded: false,
            loadMoreLoading: false,
            category: ""
        };
    },
    computed: {
        ...mapGetters('demo', ['currentDemo']),
        pageTitle() {
            if (this.$route.params.type == 'boxed') return 'Boxed No Sidebar';
            else return 'Fullwidth No Sidebar';
        },
        containerClass: function () {
            if (this.$route.params.type == 'fullwidth')
                return 'container-fluid';
            else return 'container';
        },
        hasMore: function () {
            return this.perPage <= this.totalCount;
        }
    },
    watch: {
        $route: function () {
            this.getProducts(true);
        }
    },
    created: function () {
        this.getProducts();
        this.category = this.$route.query.category;
        this.$watch(
            () => this.$route.query.category,
            (newCategory) => {
                this.category = newCategory;

            }
        );
    },
    methods: {
        getProducts: async function (samePage = false, loadMore = false) {
            if (!loadMore) this.loaded = false;
            await Repository.get(`${baseUrl}/shop`, {
                params: {
                    ...this.$route.query,
                    orderBy: this.orderBy,
                    perPage: this.perPage,
                    demo: this.currentDemo
                }
            })
                .then(response => {
                    this.products = response.data.products;
                    this.totalCount = response.data.totalCount;
                    this.loaded = true;
                    if (samePage) {
                        scrollToPageContent();
                    }
                })
                .catch(error => ({ error: JSON.stringify(error) }));
        },
        toggleSidebar: function () {
            if (
                document
                    .querySelector('body')
                    .classList.contains('sidebar-filter-active')
            ) {
                document
                    .querySelector('body')
                    .classList.remove('sidebar-filter-active');
            } else {
                document
                    .querySelector('body')
                    .classList.add('sidebar-filter-active');
            }
        },

        showSidebar: function () {
            document
                .querySelector('body')
                .classList.add('sidebar-filter-active');
        },

        hideSidebar: function () {
            document
                .querySelector('body')
                .classList.remove('sidebar-filter-active');
        },

        loadMore: function () {
            if (this.perPage < this.totalCount) {
                this.perPage += 4;
                this.loadMoreLoading = true;
                setTimeout(() => {
                    this.getProducts(false, true);
                    this.loadMoreLoading = false;
                }, 400);
            }
        }
    }
};
</script>