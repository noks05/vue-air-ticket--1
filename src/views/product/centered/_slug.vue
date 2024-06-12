<template>
  <headerProduct/>
  <main class="main">
    <nav aria-label="breadcrumb" class="breadcrumb-nav mb-6" style="border-top: 0.1rem solid rgba(235, 235, 235, 0.55);">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Главная</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/shop/sidebar/list">Товары</router-link>
          </li>
          <li class="breadcrumb-item">Электроника</li>
          <li class="breadcrumb-item active">Подарочный сертификат М.Видео</li>
          <!-- <li class="breadcrumb-item" v-if="$route.query.searchTerm">
            <span>Search - {{ $route.query.searchTerm }}</span>
          </li> -->
        </ol>
      </div>
    </nav>
    <div class="page-content">
      <div class="container skeleton-body">
        <div class="product-details-top">
          <div class="row skel-pro-single" :class="{ loaded: loaded }">
            <div class="col-md-6">
              <div class="skel-product-gallery"></div>
              <gallery-vertical :product="product"></gallery-vertical>
            </div>
            <div class="col-md-6">
              <div class="entry-summary row">
                <div class="col-md-12">
                  <div class="entry-summary1 mt-2 mt-md-0"></div>
                </div>
                <div class="col-md-12">
                  <div class="entry-summary2"></div>
                </div>
              </div>
              <detail-two :product="product" v-if="product"></detail-two>
            </div>
          </div>
        </div>

        <info-one :product="product"></info-one>
      </div>
    </div>
  </main>
</template>
<script>
import { mapGetters } from "vuex";

import GalleryVertical from "@/components/partial/product/gallery/GalleryVertical.vue";
import DetailTwo from "@/components/partial/product/details/DetailTwo.vue";
import InfoOne from "@/components/partial/product/info-tabs/InfoOne.vue";
import Breadcrumb from "@/components/partial/product/BreadCrumb.vue";
import RelatedProductsOne from "@/components/partial/product/related/RelatedProductsOne.vue";
import Repository, { baseUrl } from "@/repositories/repository.js";
import headerProduct from "@/components/partial/headers/HeaderDefault.vue";

export default {
  data: function () {
    return {
      product: {
        id: 126,
        name: "Подарочный сертификат М.Видео",
        slug: "Подарочный сертификат М.Видео",
        short_desc:
          "Подарочные сертификаты ОZОN вызовут бурю эмоций у деловых, занятых людей и тех, кто проживает в отдаленных уголках страны. Ведь совершать покупки в этом маркетплейсе можно не выходя из дома, что наиболее удобно тем, кто не может выкроить время на шопинг или тем, у кого рядом нет специализированного магазина. Подарочные сертификаты OZON помогут сэкономить время на выборе уникального и полезного подарка.",
        price: 500000,
        sale_price: null,
        review: 2,
        ratings: 0,
        until: null,
        stock: 100,
        top: true,
        featured: true,
        new: true,
        author: null,
        sold: null,
        category: [
          {
            name: "Accessories",
            slug: "accessories",
            pivot: {
              product_id: "126",
              "product-category_id": "18",
            },
          },
          {
            name: "Video Games",
            slug: "video-games",
            pivot: {
              product_id: "126",
              "product-category_id": "30",
            },
          },
          {
            name: "Entertainment",
            slug: "entertainment",
            pivot: {
              product_id: "126",
              "product-category_id": "23",
            },
          },
        ],
        brands: [
          {
            name: "New Balance",
            slug: "new-balance",
            pivot: {
              product_id: "126",
              brand_id: "22",
            },
          },
        ],
        pictures: [
          {
            width: "600",
            height: "600",
            url: "/",
            pivot: {
              related_id: "126",
              upload_file_id: "773",
            },
          },
          {
            width: "600",
            height: "600",
            url: "/assets/images/show.svg",
            pivot: {
              related_id: "126",
              upload_file_id: "772",
            },
          },
          {
            width: "600",
            height: "600",
            url: "/uploads/product_5_3_fdb59d93f8.jpg",
            pivot: {
              related_id: "126",
              upload_file_id: "774",
            },
          },
        ],
        sm_pictures: [
          {
            width: "300",
            height: "300",
            url: "/uploads/product_5_1_300x300_3dbc9b1611.jpg",
            pivot: {
              related_id: "126",
              upload_file_id: "775",
            },
          },
          {
            width: "300",
            height: "300",
            url: "/uploads/product_5_2_300x300_100e169228.jpg",
            pivot: {
              related_id: "126",
              upload_file_id: "776",
            },
          },
          {
            width: "300",
            height: "300",
            url: "/uploads/product_5_3_300x300_39035ca6ee.jpg",
            pivot: {
              related_id: "126",
              upload_file_id: "777",
            },
          },
        ],
        variants: [],
      },
      prevProduct: null,
      nextProduct: null,
      relatedProducts: [],
      loaded: true,
    };
  },
  components: {
    DetailTwo,
    InfoOne,
    Breadcrumb,
    GalleryVertical,
    RelatedProductsOne,
    headerProduct
  },
  computed: {
    ...mapGetters("demo", ["currentDemo"]),
  },
  created: function () {
    // this.getProduct();
  },
  methods: {
    getProduct: async function () {
      this.loaded = true;
      await Repository.get(`${baseUrl}/products/${this.$route.params.slug}`, {
        params: { demo: this.currentDemo },
      })
        .then((response) => {
          this.product = { ...response.data.product };
          this.relatedProducts = [...response.data.relatedProducts];
          this.prevProduct = response.data.prevProduct;
          this.nextProduct = response.data.nextProduct;
          this.loaded = true;
        })
        .catch((error) => ({ error: JSON.stringify(error) }));
    },
  },
};
</script>
