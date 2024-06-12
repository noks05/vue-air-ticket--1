<template>
  <div class="bg-light pt-5 pb-5" style="padding-bottom: 3.8rem !important;">
    <div class="container trending-products">
      <div class="heading heading-flex mb-3">
        <div class="heading-left">
          <h2 class="title">Популярные товары</h2>
        </div>
        <div class="heading-right">
          <tabs class="nav nav-pills nav-border-anim justify-content-center" :data="tabsData" id="trendy"></tabs>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-5col d-none d-xl-block">
          <div class="banner">
            <!-- shop/sidebar/3cols -->
            <router-link to="/shop/sidebar/3cols">
              <div class="top_product_card">
                <div class="top_product_card_heading">
                  <div class="top_card_title">Смартфон</div>
                  <div class="top_card_description">
                    iPhone XS <br />
                    5.8-inch display
                  </div>
                  <div class="top_card_price_parent">
                    <!-- <div class="top_card_price_start"></div> -->
                    <div class="top_card_price">83 456.78 Бонусов</div>
                  </div>
                </div>
                <div class="top_product_card_body">
                  <img class="iPhone_img" src="@/assets/newImg/product/iPhone.svg" alt="" />
                </div>
                <div class="top_product_card_footer">
                  <div class="top_product_buy_noew">
                    Купить сейчас

                    <svg class="ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M1 7.9999C1 7.86729 1.05268 7.74011 1.14645 7.64635C1.24021 7.55258 1.36739 7.4999 1.5 7.4999H13.293L10.146 4.3539C10.0521 4.26001 9.99937 4.13267 9.99937 3.9999C9.99937 3.86712 10.0521 3.73979 10.146 3.6459C10.2399 3.55201 10.3672 3.49927 10.5 3.49927C10.6328 3.49927 10.7601 3.55201 10.854 3.6459L14.854 7.6459C14.9006 7.69234 14.9375 7.74752 14.9627 7.80827C14.9879 7.86901 15.0009 7.93413 15.0009 7.9999C15.0009 8.06567 14.9879 8.13079 14.9627 8.19153C14.9375 8.25228 14.9006 8.30745 14.854 8.3539L10.854 12.3539C10.7601 12.4478 10.6328 12.5005 10.5 12.5005C10.3672 12.5005 10.2399 12.4478 10.146 12.3539C10.0521 12.26 9.99937 12.1327 9.99937 11.9999C9.99937 11.8671 10.0521 11.7398 10.146 11.6459L13.293 8.4999H1.5C1.36739 8.4999 1.24021 8.44722 1.14645 8.35345C1.05268 8.25968 1 8.13251 1 7.9999Z"
                        fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-xl-4-5col">
          <div class="tab-content tab-content-carousel just-action-icons-sm">
            <div class="tab-pane p-0 fade show active" id="trendy-top-rated">
              <div class="swiper-carousel carousel-with-shadow swiper-1">
                <swiper :breakpoints="{
                  '320': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  '576': {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },

                  '768': {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  '1200': {
                    slidesPerView: 5,
                  },
                  '1201': {
                    slidesPerView: 4,
                    spaceBetween: 35,
                  },
                }" :modules="modules" :navigation="false" :slidesPerView="1" :spaceBetween="10" class="row">
                  <swiper-slide v-for="(product, index) in ratedProducts" :key="index">
                    <ProductTwelve :product="product" class="mb-3" id="popular_products" />
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tabs from "../../elements/Tabs.vue";
import ProductTwelve from "../../elements/products/ProductTwelve.vue";

import { attrFilter } from "../../../utilities/common.js";
import { carouselSetting1 } from "../../../utilities/carousel.js";
import { Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default {
  data: function () {
    return {
      products: [
        {
          id: 122,
          name: "Apple – Watch Series 3 with White Sport Band",
          slug: 'apple-11"-ipad-pro-with-wi-fi-256-gb',
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ",
          price: null,
          sale_price: null,
          review: 2,
          ratings: 5,
          until: "2022-01-01",
          stock: 100,
          featured: true,
          new: null,
          top: true,
          author: null,
          sold: null,
          category: [
            {
              name: "Аксессуары",
              slug: "computers",
              pivot: {
                product_id: "122",
                "product-category_id": "20",
              },
            },
            {
              name: "Умные часы",
              slug: "tablets",
              pivot: {
                product_id: "122",
                "product-category_id": "21",
              },
            },
          ],
          brands: [
            {
              name: "F&F",
              slug: "fandf",
              pivot: {
                product_id: "122",
                brand_id: "20",
              },
            },
            {
              name: "UGG",
              slug: "ugg",
              pivot: {
                product_id: "122",
                brand_id: "1",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/watch.png",
              pivot: {
                related_id: "122",
                upload_file_id: "754",
              },
            },
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/watch.png",
              pivot: {
                related_id: "122",
                upload_file_id: "755",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "./assets/images/watch.png",
              pivot: {
                related_id: "122",
                upload_file_id: "756",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/watch.png",
              pivot: {
                related_id: "122",
                upload_file_id: "757",
              },
            },
          ],
          variants: [
            {
              id: 25,
              color: "#3399cc",
              color_name: "Blue",
              price: 10214.99,
              pivot: {
                product_id: "123",
                component_id: "25",
              },
              size: [
                {
                  id: 61,
                  name: "Large",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "25",
                    component_id: "61",
                  },
                },
                {
                  id: 62,
                  name: "Extra Large",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "25",
                    component_id: "62",
                  },
                },
              ],
            },
            {
              id: 24,
              color: "#ebebeb",
              color_name: "Grey",
              price: 12217.99,
              pivot: {
                product_id: "123",
                component_id: "24",
              },
              size: [
                {
                  id: 60,
                  name: "Small",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "24",
                    component_id: "60",
                  },
                },
                {
                  id: 63,
                  name: "Medium",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "24",
                    component_id: "63",
                  },
                },
                {
                  id: 64,
                  name: "Large",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "24",
                    component_id: "64",
                  },
                },
              ],
            },
          ],
        },
        {
          id: 123,
          name: "Подарочный сертификат Озон",
          slug: "apple-smart-folio-for-11-inch-ipad-pro",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 3000.0,
          sale_price: null,
          review: 2,
          ratings: 4,
          until: null,
          stock: 100,
          top: true,
          featured: null,
          new: null,
          author: null,
          sold: null,
          category: [
            {
              name: "Подарочный сертификат",
              slug: "computers",
              pivot: {
                product_id: "123",
                "product-category_id": "20",
              },
            },
          ],
          brands: [
            {
              name: "UGG",
              slug: "ugg",
              pivot: {
                product_id: "123",
                brand_id: "1",
              },
            },
            {
              name: "F&F",
              slug: "fandf",
              pivot: {
                product_id: "123",
                brand_id: "20",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "./assets/images/Frame_5.png",
              pivot: {
                related_id: "123",
                upload_file_id: "758",
              },
            },
            {
              width: "600",
              height: "600",
              url: "./assets/images/Frame_5.png",
              pivot: {
                related_id: "123",
                upload_file_id: "759",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "./assets/images/Frame_5.png",
              pivot: {
                related_id: "123",
                upload_file_id: "761",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/Frame_5.png",
              pivot: {
                related_id: "123",
                upload_file_id: "760",
              },
            },
          ],
          variants: [
            // {
            //   id: 25,
            //   color: "#3399cc",
            //   color_name: "Blue",
            //   price: 160.99,
            //   pivot: {
            //     product_id: "123",
            //     component_id: "25",
            //   },
            //   size: [
            //     {
            //       id: 61,
            //       name: "Large",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "25",
            //         component_id: "61",
            //       },
            //     },
            //     {
            //       id: 62,
            //       name: "Extra Large",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "25",
            //         component_id: "62",
            //       },
            //     },
            //   ],
            // },
            // {
            //   id: 24,
            //   color: "#ebebeb",
            //   color_name: "Grey",
            //   price: 150.99,
            //   pivot: {
            //     product_id: "123",
            //     component_id: "24",
            //   },
            //   size: [
            //     {
            //       id: 60,
            //       name: "Small",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "24",
            //         component_id: "60",
            //       },
            //     },
            //     {
            //       id: 63,
            //       name: "Medium",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "24",
            //         component_id: "63",
            //       },
            //     },
            //     {
            //       id: 64,
            //       name: "Large",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "24",
            //         component_id: "64",
            //       },
            //     },
            //   ],
            // },
          ],
        },
        {
          id: 124,
          name: "Google – Pixel 6.2-Inch 3 XL 128GB",
          slug: "apple-watch-series-3-with-white-sport-band",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 4000.0,
          sale_price: null,
          review: 2,
          ratings: 4,
          until: null,
          stock: null,
          top: true,
          featured: null,
          new: null,
          author: null,
          sold: null,
          category: [
            {
              name: "Планшеты",
              slug: "accessories",
              pivot: {
                product_id: "124",
                "product-category_id": "18",
              },
            },
            {
              name: " Развлечения",
              slug: "smartwatches",
              pivot: {
                product_id: "124",
                "product-category_id": "25",
              },
            },
          ],
          brands: [
            {
              name: "Geox",
              slug: "geox",
              pivot: {
                product_id: "124",
                brand_id: "21",
              },
            },
            {
              name: "UGG",
              slug: "ugg",
              pivot: {
                product_id: "124",
                brand_id: "1",
              },
            },
            {
              name: "River Island",
              slug: "river-island",
              pivot: {
                product_id: "124",
                brand_id: "18",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "./assets/images/watch_2.png",
              pivot: {
                related_id: "124",
                upload_file_id: "762",
              },
            },
            {
              width: "600",
              height: "600",
              url: "./assets/images/watch_2.png",
              pivot: {
                related_id: "124",
                upload_file_id: "763",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "./assets/images/google.png",
              pivot: {
                related_id: "124",
                upload_file_id: "765",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/google.png",
              pivot: {
                related_id: "124",
                upload_file_id: "764",
              },
            },
          ],
          variants: [
            // {
            //   id: 26,
            //   color: "#f2719c",
            //   color_name: "Red",
            //   price: 214.99,
            //   pivot: {
            //     product_id: "124",
            //     component_id: "26",
            //   },
            //   size: [
            //     {
            //       id: 65,
            //       name: "Small",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "26",
            //         component_id: "65",
            //       },
            //     },
            //     {
            //       id: 70,
            //       name: "Medium",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "26",
            //         component_id: "70",
            //       },
            //     },
            //     {
            //       id: 68,
            //       name: "Large",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "26",
            //         component_id: "68",
            //       },
            //     },
            //   ],
            // },
            // {
            //   id: 27,
            //   color: "#669933",
            //   color_name: "Green",
            //   price: 217.99,
            //   pivot: {
            //     product_id: "124",
            //     component_id: "27",
            //   },
            //   size: [
            //     {
            //       id: 69,
            //       name: "Medium",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "27",
            //         component_id: "69",
            //       },
            //     },
            //     {
            //       id: 66,
            //       name: "Large",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "27",
            //         component_id: "66",
            //       },
            //     },
            //     {
            //       id: 67,
            //       name: "Extra Large",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "27",
            //         component_id: "67",
            //       },
            //     },
            //   ],
            // },
          ],
        },
        {
          id: 125,
          name: "Apple Watch Series 4 Gold Aluminum Case",
          slug: "gopro-hero7-black-hd-waterproof-action",
          short_desc:
            "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus.",
          price: 30000.99,
          sale_price: 40499.99,
          review: 2,
          ratings: 4,
          until: null,
          stock: 100,
          top: true,
          featured: null,
          new: null,
          author: null,
          sold: null,
          category: [
            {
              name: "Развлечения",
              slug: "accessories",
              pivot: {
                product_id: "125",
                "product-category_id": "18",
              },
            },
            {
              name: "Телевизоры",
              slug: "camcorders",
              pivot: {
                product_id: "125",
                "product-category_id": "29",
              },
            },
          ],
          brands: [
            {
              name: "Geox",
              slug: "geox",
              pivot: {
                product_id: "125",
                brand_id: "21",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "./assets/images/google.png",
              pivot: {
                related_id: "125",
                upload_file_id: "766",
              },
            },
            {
              width: "600",
              height: "600",
              url: "./assets/images/google.png",
              pivot: {
                related_id: "125",
                upload_file_id: "767",
              },
            },
            {
              width: "600",
              height: "600",
              url: "./assets/images/Frame_3.png",
              pivot: {
                related_id: "125",
                upload_file_id: "768",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "./assets/images/watch_2.png",
              pivot: {
                related_id: "125",
                upload_file_id: "769",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/watch_2.png",
              pivot: {
                related_id: "125",
                upload_file_id: "771",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/watch_2.png",
              pivot: {
                related_id: "125",
                upload_file_id: "770",
              },
            },
          ],
          variants: [
            // {
            //   id: 25,
            //   color: "#ef837b",
            //   color_name: "Red",
            //   price: 30000.99,
            //   pivot: {
            //     product_id: "123",
            //     component_id: "25",
            //   },
            //   size: [
            //     {
            //       id: 61,
            //       name: "Large",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "25",
            //         component_id: "61",
            //       },
            //     },
            //     {
            //       id: 62,
            //       name: "Extra Large",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "25",
            //         component_id: "62",
            //       },
            //     },
            //   ],
            // },
            // {
            //   id: 24,
            //   color: "#ebebeb",
            //   color_name: "Grey",
            //   price: 40499.99,
            //   pivot: {
            //     product_id: "123",
            //     component_id: "24",
            //   },
            //   size: [
            //     {
            //       id: 60,
            //       name: "Small",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "24",
            //         component_id: "60",
            //       },
            //     },
            //     {
            //       id: 63,
            //       name: "Medium",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "24",
            //         component_id: "63",
            //       },
            //     },
            //     {
            //       id: 64,
            //       name: "Large",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "24",
            //         component_id: "64",
            //       },
            //     },
            //   ],
            // },
          ],
        },
      ],
      tabsData: [
        {
          id: "top-rated",
          title: "Все",
          active: true,
        },
      ],
      carouselSetting1: {
        ...carouselSetting1,
        slidesPerView: 4,
        navigation: {
          nextEl: ".trending-products .swiper-1 .swiper-next",
          prevEl: ".trending-products .swiper-1 .swiper-prev",
        },
      },
      carouselSetting2: {
        ...carouselSetting1,
        slidesPerView: 4,
        navigation: {
          nextEl: ".trending-products .swiper-2 .swiper-next",
          prevEl: ".trending-products .swiper-2 .swiper-prev",
        },
      },
      carouselSetting3: {
        ...carouselSetting1,
        slidesPerView: 4,
        navigation: {
          nextEl: ".trending-products .swiper-3 .swiper-next",
          prevEl: ".trending-products .swiper-3 .swiper-prev",
        },
      },
    };
  },
  computed: {
    featuredProducts: function () {
      return attrFilter(this.products, "featured");
    },
    ratedProducts: function () {
      return attrFilter(this.products, "rated");
    },
    saleProducts: function () {
      return attrFilter(this.products, "sale");
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    ProductTwelve,
    Tabs,
  },
  setup() {
    const onSwiper = (swiper) => {
      return swiper;
    };
    const onSlideChange = () => { };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar],
    };
  },
};
</script>
<style scoped>
.swiper-carousel {
  border-top-left-radius: 8px !important;
}

.swiper-carousel .swiper .swiper-wrapper .swiper-slide {
  width: 220px !important;
  margin-right: 17px !important;
}

@media screen and (max-width:425px) {
  .swiper-carousel .swiper .swiper-wrapper .swiper-slide {
    width:165px !important;
  }
  /* .pad{
    padding-bottom: 0 !important;
  } */
}
</style>
