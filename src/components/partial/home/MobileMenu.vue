<template>
  <div class="mobile-menu-container">
    <div class="mobile-menu-wrapper">
      <span class="mobile-menu-close" @click="hideMobileMenu">
        <!-- <i class="icon-close"></i> -->
        <img src="../../../assets/newImg/icons/modal-close.svg" alt="" />
      </span>
      <form
        action="#"
        method="get"
        class="mobile-search"
        @submit.prevent="submitSearchForm"
      >
        <label for="mobile-search" class="sr-only">Поиск</label>
        <input
          type="text"
          class="form-control borderCus"
          name="mobile-search"
          id="mobile-search"
          v-model="searchTerm"
          placeholder="Поиск по каталогу..."
          required
        />
        <button class="btn btn-primary" type="submit">
          <img src="../../../assets/newImg/icons/search.svg" alt="" />
        </button>
      </form>
      <tabs class="nav-pills-mobile text-center" :data="tabsData"></tabs>
      <div class="tab-content">
        <div class="tab-pane fade show active" id="mobile-nav">
          <nav class="mobile-nav">
            <ul class="mobile-menu">
              <li class="active">
                <router-link to="/" class="sf-with-ul">Главная</router-link>
                <ul>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-1"
                      >01 - furniture store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-2"
                      >02 - furniture store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-3"
                      >03 - electronic store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-4"
                      >04 - electronic store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-5"
                      >05 - fashion store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-6"
                      >06 - fashion store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-7"
                      >07 - fashion store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-8"
                      >08 - fashion store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-9"
                      >09 - fashion store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-10"
                      >10 - shoes store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-11"
                      >11 - furniture simple store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-12"
                      >12 - fashion simple store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-13"
                      >13 - market</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-14"
                      >14 - market fullwidth</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-15"
                      >15 - lookbook 1</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-16"
                      >16 - lookbook 2</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-17"
                      >17 - fashion store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-18"
                      >18 - fashion store (with sidebar)</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-19"
                      >19 - games store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-20"
                      >20 - book store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-21"
                      >21 - sport store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-22"
                      >22 - tools store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-23"
                      >23 - fashion left navigation store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-24"
                      >24 - extreme sport store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-25"
                      >25 - jewelry store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-26"
                      >26 - market store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-28"
                      >27 - fashion store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-29"
                      >28 - food market store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-30"
                      >29 - t-shirts store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-31"
                      >30 - headphones store</a
                    >
                  </li>
                  <li>
                    <a href="https://d-themes.com/vue/molla/demo-32"
                      >31 - yoga store</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/shop/sidebar/3cols"
                  >Спецпредложения</router-link
                >
                <ul>
                  <li>
                    <router-link to="/shop/sidebar/list">Shop List</router-link>
                  </li>
                  <li>
                    <router-link to="/shop/sidebar/2cols"
                      >Shop Grid 2 Columns</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/shop/sidebar/3cols"
                      >Shop Grid 3 Columns</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/shop/sidebar/4cols"
                      >Shop Grid 4 Columns</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/shop/nosidebar/boxed">
                      <span>
                        Shop Boxed No Sidebar
                        <span class="tip tip-hot">Hot</span>
                      </span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/shop/nosidebar/fullwidth"
                      >Shop Fullwidth No Sidebar</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/shop/category/boxed"
                      >Product Category Boxed</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/shop/category/fullwidth">
                      <span>
                        Product Category Fullwidth
                        <span class="tip tip-new">New</span>
                      </span>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li>
                <router-link
                  to="/product/default/dark-yellow-lace-cut-out-swing-dress"
                  class="sf-with-ul"
                  >Акции</router-link
                >
              </li>
            </ul>
          </nav>
        </div>
        <div class="tab-pane fade" id="mobile-categories">
          <nav class="mobile-cats-nav">
            <ul class="mobile-cats-menu">
              <li class="item-cats-lead">
                <router-link to="/product/default/"
                  >Подарочные сертификаты</router-link
                >
              </li>
              <li class="item-cats-lead">
                <router-link to="/flight-tickets">Путешествия</router-link>
              </li>
              <!-- <li>
                <router-link to="/flight-tickets">Авиабилеты</router-link>
              </li>
              <li>
                <router-link to="/flight-tickets">ЖД билеты</router-link>
              </li>
              <li>
                <router-link to="/flight-tickets">Отели</router-link>
              </li> -->
              <li>
                <router-link to="/shop/sidebar/3cols">Товары</router-link>
              </li>
              <li>
                <router-link to="#">Благотворительность </router-link>
              </li>
              <!-- <li>
                <router-link :to="'/shop/sidebar/3cols?category=decoration'">Украшение</router-link>
              </li>
              <li>
                <router-link :to="'/shop/sidebar/3cols?category=kitchen-cabinets'">Кухонные шкафы</router-link>
              </li>
              <li>
                <router-link :to="'/shop/sidebar/3cols?category=coffee-and-tables'">Журнальные столики</router-link>
              </li>
              <li>
                <router-link :to="'/shop/sidebar/3cols?category=furniture'">Уличная мебель</router-link>
              </li> -->
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tabs from "@/components/elements/Tabs.vue";
import { mobileMenu } from "@/utilities/common.js";
export default {
  components: {
    Tabs,
  },
  data: function () {
    return {
      tabsData: [
        {
          id: "mobile-nav",
          title: "Mеню",
          active: true,
        },
        {
          id: "mobile-categories",
          title: "Kатегории",
        },
      ],
      searchTerm: "",
    };
  },
  mounted: function () {
    mobileMenu();
  },
  methods: {
    hideMobileMenu: function () {
      document.querySelector("body").classList.remove("mmenu-active");
    },
    submitSearchForm: function () {
      this.hideMobileMenu();
      this.$router.push({
        path: "/shop/sidebar/3cols",
        query: {
          searchTerm: this.searchTerm,
        },
      });
    },
  },
};
</script>

<style scoped>
.borderCus {
  border-top-left-radius: 8px !important;
  border-bottom-left-radius: 8px !important;
}
.btn {
  border-top-right-radius: 8px !important;
  border-bottom-right-radius: 8px !important;
}
</style>
