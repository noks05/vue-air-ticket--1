<template>
  <headerDef />
  <div class="main home-page">
    <div class="intro-slider-container mb-5">
      <carousel />
    </div>
    <div class="container">
      <h2
        class="title text-center mb-4"
        style="font-family: Gilroy-SemiBold !important"
      >
        Каталог призов
      </h2>
      <div class="cat-blocks-container">
        <div class="row">
          <div class="col-6 col-sm-4 col-lg-2">
            <router-link
              to="/product/default/apple-smart-folio-for-11-inch-ipad-pro"
              class="cat-block"
            >
              <figure>
                <span>
                  <img
                    src="../assets/images/category/cat_1.svg"
                    alt="Category"
                    class="bg-transparent"
                  />
                </span>
              </figure>
              <h3 class="cat-block-title">Подарочные сертификаты</h3>
            </router-link>
          </div>

          <div class="col-6 col-sm-4 col-lg-2">
            <router-link to="/shop/without/3cols" class="cat-block without_top">
              <figure>
                <span>
                  <img
                    src="/assets/images/iphone.svg"

                    alt="Category"
                    class="bg-transparent iphone_height"
                  />
                </span>
              </figure>

              <h3 class="cat-block-title">Товары</h3>
            </router-link>
          </div>

          <div class="col-6 col-sm-4 col-lg-2">
            <router-link to="/flight-tickets" class="cat-block without_top">
              <figure>
                <span>
                  <img
                    src="../assets/newImg/plane.png"
                    alt="Category"
                    class="bg-transparent"
                  />
                </span>
              </figure>

              <h3 class="cat-block-title">Путешествия</h3>
            </router-link>
          </div>

          <div class="col-6 col-sm-4 col-lg-2">
            <router-link to="/" class="cat-block without_top">
              <figure>
                <span>
                  <img
                    src="../assets/newImg/charity.svg"
                    alt="Category"
                    class="bg-transparent"
                  />
                </span>
              </figure>

              <h3 class="cat-block-title">Благотворительность</h3>
            </router-link>
          </div>

          <div class="col-6 col-sm-4 col-lg-2">
            <router-link to="/" class="cat-block without_top">
              <figure>
                <span>
                  <img
                    src="../assets/newImg/apps.png"
                    alt="Category"
                    class="bg-transparent"
                  />
                </span>
              </figure>

              <h3 class="cat-block-title">Спецпредложения</h3>
            </router-link>
          </div>

          <div class="col-6 col-sm-4 col-lg-2">
            <router-link to="/" class="cat-block without_top">
              <figure>
                <span>
                  <img
                    src="../assets/newImg/action.png"
                    alt="Category"
                    class="bg-transparent"
                  />
                </span>
              </figure>

              <h3 class="cat-block-title">Акции</h3>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-4"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
          <div class="banner banner-overlay banner-overlay-light">
            <router-link to="/shop/without/3cols">
              <img
                src="../assets/newImg/banner-1.png"
                width="376"
                height="160"
                alt="Banner"
              />
            </router-link>
            <div class="banner-content">
              <h4 class="banner-subtitle">
                <router-link to="/shop/without/3cols">Специальное предложение</router-link>
              </h4>
              <h3 class="banner-title">
                <router-link to="/shop/without/3cols" style="font-family: Gilroy-Medium !important">
                  Скидка 150 Б
                  <strong>
                    on Samsung
                    <br />Galaxy Note9
                  </strong>
                </router-link>
              </h3>
              <router-link to="/shop/without/3cols" class="banner-link">
                Купить
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 8.00002C1 7.86741 1.05268 7.74024 1.14645 7.64647C1.24021 7.5527 1.36739 7.50002 1.5 7.50002H13.293L10.146 4.35402C10.0521 4.26013 9.99937 4.1328 9.99937 4.00002C9.99937 3.86725 10.0521 3.73991 10.146 3.64602C10.2399 3.55213 10.3672 3.49939 10.5 3.49939C10.6328 3.49939 10.7601 3.55213 10.854 3.64602L14.854 7.64602C14.9006 7.69247 14.9375 7.74764 14.9627 7.80839C14.9879 7.86913 15.0009 7.93425 15.0009 8.00002C15.0009 8.06579 14.9879 8.13091 14.9627 8.19165C14.9375 8.2524 14.9006 8.30758 14.854 8.35402L10.854 12.354C10.7601 12.4479 10.6328 12.5007 10.5 12.5007C10.3672 12.5007 10.2399 12.4479 10.146 12.354C10.0521 12.2601 9.99937 12.1328 9.99937 12C9.99937 11.8672 10.0521 11.7399 10.146 11.646L13.293 8.50002H1.5C1.36739 8.50002 1.24021 8.44734 1.14645 8.35357C1.05268 8.25981 1 8.13263 1 8.00002Z"
                    fill="var(--primary_bg)"
                  />
                </svg>
              </router-link>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="banner banner-overlay banner-overlay-light">
            <router-link to="/shop/without/3cols">
              <img
                src="../assets/newImg/banner-2.png"
                width="376"
                height="160"
                alt="Banner"
              />
            </router-link>
            <div class="banner-content">
              <h4 class="banner-subtitle">
                <router-link to="/shop/without/3cols">Выгодно</router-link>
              </h4>

              <h3 class="banner-title">
                <router-link to="/shop/without/3cols" style="font-family: Gilroy-Medium !important">
                  <strong>Bose SoundSport</strong>
                  <br />Скидка –30%
                </router-link>
              </h3>
              <router-link to="/shop/without/3cols" class="banner-link">
                Купить
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 8.00002C1 7.86741 1.05268 7.74024 1.14645 7.64647C1.24021 7.5527 1.36739 7.50002 1.5 7.50002H13.293L10.146 4.35402C10.0521 4.26013 9.99937 4.1328 9.99937 4.00002C9.99937 3.86725 10.0521 3.73991 10.146 3.64602C10.2399 3.55213 10.3672 3.49939 10.5 3.49939C10.6328 3.49939 10.7601 3.55213 10.854 3.64602L14.854 7.64602C14.9006 7.69247 14.9375 7.74764 14.9627 7.80839C14.9879 7.86913 15.0009 7.93425 15.0009 8.00002C15.0009 8.06579 14.9879 8.13091 14.9627 8.19165C14.9375 8.2524 14.9006 8.30758 14.854 8.35402L10.854 12.354C10.7601 12.4479 10.6328 12.5007 10.5 12.5007C10.3672 12.5007 10.2399 12.4479 10.146 12.354C10.0521 12.2601 9.99937 12.1328 9.99937 12C9.99937 11.8672 10.0521 11.7399 10.146 11.646L13.293 8.50002H1.5C1.36739 8.50002 1.24021 8.44734 1.14645 8.35357C1.05268 8.25981 1 8.13263 1 8.00002Z"
                    fill="var(--primary_bg)"
                  />
                </svg>
              </router-link>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="banner banner-overlay banner-overlay-light">
            <router-link to="/shop/without/3cols">
              <img
                src="../assets/newImg/banner-3.png"
                class="bg-transparent"
                width="376"
                height="160"
                alt="Banner"
              />
            </router-link>
            <div class="banner-content">
              <h4 class="banner-subtitle">
                <router-link to="/shop/without/3cols">Выгодное предложение</router-link>
              </h4>
              <h3 class="banner-title">
                <router-link to="/shop/without/3cols" style="font-family: Gilroy-Medium !important">
                  <strong>GoPro - Fusion 360</strong>
                  <br />Экономия 70 Б
                </router-link>
              </h3>
              <router-link to="/shop/without/3cols" class="banner-link">
                Купить
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 8.00002C1 7.86741 1.05268 7.74024 1.14645 7.64647C1.24021 7.5527 1.36739 7.50002 1.5 7.50002H13.293L10.146 4.35402C10.0521 4.26013 9.99937 4.1328 9.99937 4.00002C9.99937 3.86725 10.0521 3.73991 10.146 3.64602C10.2399 3.55213 10.3672 3.49939 10.5 3.49939C10.6328 3.49939 10.7601 3.55213 10.854 3.64602L14.854 7.64602C14.9006 7.69247 14.9375 7.74764 14.9627 7.80839C14.9879 7.86913 15.0009 7.93425 15.0009 8.00002C15.0009 8.06579 14.9879 8.13091 14.9627 8.19165C14.9375 8.2524 14.9006 8.30758 14.854 8.35402L10.854 12.354C10.7601 12.4479 10.6328 12.5007 10.5 12.5007C10.3672 12.5007 10.2399 12.4479 10.146 12.354C10.0521 12.2601 9.99937 12.1328 9.99937 12C9.99937 11.8672 10.0521 11.7399 10.146 11.646L13.293 8.50002H1.5C1.36739 8.50002 1.24021 8.44734 1.14645 8.35357C1.05268 8.25981 1 8.13263 1 8.00002Z"
                    fill="var(--primary_bg)"
                  />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-3"></div>
    <NewCollection :products="newProducts" v-if="loaded"></NewCollection>
    <div class="mb-6"></div>
    <div class="container">
      <div
        class="cta cta-border ctaFL mb-5"
        style="background-image: url(../assets/newImg/box.png)"
      >
        <img
          src=" ../assets/newImg/plane.png"
          alt="camera"
          class="cta-img bg-transparent"
        />
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="cta-content d-flex">
              <div class="cta-text text-right text-white">
                <p>
                  Путешествия!
                  <br />
                  <strong style="font-family: Gilroy-SemiBold !important"
                    >Авиа и ж/д билеты, отели</strong
                  >
                </p>
              </div>
              <router-link
                to="/flight-tickets"
                class="btn btn-primary btn-round"
                style="display: flex; gap: 10px"
              >
                <span style="font-family: Gilroy-Medium !important"
                  >Смотреть</span
                >
                <img
                  src="../assets/newImg/icons/w_arrow-right.svg"
                  style="width: 16px; height: 16px"
                  alt="arrow-right"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DealCollection v-if="loaded"></DealCollection>
    <div class="container">
      <hr class="mb-0" />
      <div class="swiper-carousel brands-slider swiper-2 mb-5 mt-5">
        <CaruselLogo />
      </div>
    </div>
    <trendy-collection
      :products="topProducts"
      v-if="loaded"
    ></trendy-collection>
    <div class="mb-5"></div>
    <recommend-collection
      :products="products"
      v-if="loaded"
    ></recommend-collection>
    <div class="mb-4"></div>
    <div class="container">
      <hr class="mb-0" />
    </div>
    <div class="icon-boxes-container bg-transparent">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-lg-3">
            <div class="icon-box icon-box-side">
              <span class="icon-box-icon text-dark">
                <img src="../assets/newImg/icon_1.png" alt="" />
              </span>
              <div class="icon-box-content">
                <h3 class="icon-box-title">Быстрая доставка</h3>
                <p>любого товара</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="icon-box icon-box-side">
              <span class="icon-box-icon text-dark">
                <img src="../assets/newImg/icon_2.png" alt="" />
              </span>
              <div class="icon-box-content">
                <h3 class="icon-box-title">Удобный возврат</h3>
                <p>в течении 30 дней</p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3">
            <div class="icon-box icon-box-side">
              <span class="icon-box-icon text-dark">
                <img src="../assets/newImg/icon_3.png" alt="" />
              </span>
              <div class="icon-box-content">
                <h3 class="icon-box-title">Супер скидки</h3>
                <p>подписывайтесь на рассылку</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3">
            <div class="icon-box icon-box-side">
              <span class="icon-box-icon text-dark">
                <img src="../assets/newImg/icon_4.png" alt="" />
              </span>
              <div class="icon-box-content">
                <h3 class="icon-box-title">Поддержка</h3>
                <p>24/7 по любым вопросам</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="cta bg-image bg-dark pt-4 pb-5 mb-0"
      style="background-image: url(./assets/images/bg-nout.png) !important"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-sm-10 col-md-8 col-lg-6">
            <div class="cta-heading text-center">
              <h3 class="cta-title text-white">
                Получайте специальные предложения
              </h3>
              <p class="cta-desc text-white">подпишитесь на нашу рассылку</p>
            </div>
            <form action="#">
              <div class="input-group input-group-round">
                <input
                  type="email"
                  class="form-control form-control-white"
                  aria-label="Email Adress"
                  required
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-primary"
                    type="submit"
                    style="display: flex; gap: 5px"
                  >
                    <router-link
                      to="/sign_up"
                      style="display: flex; gap: 5px; color: #fff"
                    >                      
                      <span style="height: 16px;">Подписаться</span>
                      <!-- <i class="icon-long-arrow-right"></i> -->
                      <img
                        src="../assets/newImg/icons/w_arrow-right.svg"
                        alt="w_arrow"
                      />
                    </router-link>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import NewCollection from "../components/partial/home/NewCollection.vue";
import DealCollection from "../components/partial/home/DealCollection.vue";
import TrendyCollection from "../components/partial/home/TrendyCollection.vue";
import RecommendCollection from "../components/partial/home/RecommendCollection.vue";

import Repository, { baseUrl } from "../repositories/repository.js";
import { attrFilter } from "../utilities/common";
import {
  carouselSettingSingle,
  carouselSettingDefault,
} from "../utilities/carousel";
import { homeData } from "../utilities/data";
import Carousel from "@/components/elements/Carousel.vue";
import CaruselLogo from "../components/elements/Carusel-logo.vue";
import headerDef from "@/components/partial/headers/HeaderDefault.vue";

export default {
  components: {
    RecommendCollection,
    DealCollection,
    TrendyCollection,
    NewCollection,
    Carousel,
    CaruselLogo,
    headerDef,
  },
  data: function () {
    return {
      loaded: true,
      products: [],
      newProducts: [],
      topProducts: [],
      carouselSetting1: {
        ...carouselSettingSingle,
        pagination: {
          el: ".intro-slider-container .swiper-dots",
          clickable: true,
        },
        navigation: {
          nextEl: ".intro-slider-container .swiper-next",
          prevEl: ".intro-slider-container .swiper-prev",
        },
      },
      carouselSetting2: {
        ...carouselSettingDefault,
        slidesPerView: 6,
        spaceBetween: 30,
        navigation: {
          nextEl: ".brands-slider .swiper-next",
          prevEl: ".brands-slider .swiper-prev",
        },
        breakpoints: {
          992: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 4,
          },
          576: {
            slidesPerView: 3,
          },
          480: {
            slidesPerView: 2,
          },
        },
      },
      homeData: homeData,
    };
  },
  computed: {
    ...mapGetters("demo", ["newsletterShow"]),
  },
  created: function () {
    this.getProducts();
    this.setLocal();
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts: async function () {
      this.loaded = true;
      await Repository.get(`${baseUrl}/demo4`)
        .then((response) => {
          this.products = response.data.products;
          this.newProducts = attrFilter(this.products, "new");
          this.topProducts = attrFilter(this.products, "top");
          this.loaded = true;
        })
        .catch((error) => ({ error: JSON.stringify(error) }));
    },
    setLocal() {
      localStorage.setItem("showLogin", true);
    },
  },
};
</script>
<style scoped>
.iphone_height {
  transform: translateY(12px);
  height: 156px;
}
.icon-box-content p {
  font-size: 14px !important;
}

.banner-link:hover svg path {
  fill: #fff;
}

@media screen and (max-width: 468px) {
  .cat-block-title {
    height: 30px !important;
  }

  .ctaFL {
    height: 248px !important;
  }

  .cta-border .cta-img {
    top: -65px !important;
    left: -40px !important;
  }

  .cta-img {
    width: 258px !important;
    height: 168px !important;
  }

  .cta-text p {
    text-align: end;
    font-size: 20px !important;
  }

  .cta-border {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    margin-left: 0 !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cta .btn:not(.btn-block) {
    width: 50%;
  }
}
</style>
