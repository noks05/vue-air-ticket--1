<template>
  <div class="container new new-arrivals">
    <div class="heading heading-flex mb-3">
      <div class="heading-left">
        <h2 class="title">Популярные сертификаты</h2>
      </div>
      <div class="heading-right">
        <tabs class="nav nav-pills nav-border-anim justify-content-center"  :data="tabsData" id="new"></tabs>
      </div>
    </div>
    <div class="tab-content tab-content-carousel just-action-icons-sm">
      <div class="tab-pane p-0 fade show active" id="new-all">
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
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }" :modules="modules" :navigation="false" :pagination="true" :slidesPerView="1" :spaceBetween="10" class="row">
          <swiper-slide class="" v-for="(product, index) in products.slice(0, 6)" :key="index">
            <ProductTwelve :product="product" class="mb-3" id="category_carousel" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import Tabs from "../../elements/Tabs.vue";
import ProductTwelve from "../../elements/products/ProductTwelve.vue";
import { catFilter } from "../../../utilities/common.js";
import { carouselSetting1 } from "../../../utilities/carousel.js";

import { attrFilter } from "../../../utilities/common.js";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default {
  // props: {
  //   products: Array,
  // },
  data: function () {
    return {
      tabsData: [
        {
          id: "all",
          title: "Все",
        },
        {
          id: "accessories",
          title: "Топ 10",
          active: true,
        },
      ],
      carouselSetting1: {
        ...carouselSetting1,
        slidesPerView: 5,
        navigation: {
          nextEl: ".new .swiper-1 .swiper-next",
          prevEl: ".new .swiper-1 .swiper-prev",
        },
        pagination: {
          el: ".new .swiper-1 .swiper-dots",
          clickable: true,
        },
      },
      carouselSetting2: {
        ...carouselSetting1,
        slidesPerView: 5,
        navigation: {
          nextEl: ".new .swiper-2 .swiper-next",
          prevEl: ".new .swiper-2 .swiper-prev",
        },
      },
      carouselSetting3: {
        ...carouselSetting1,
        slidesPerView: 5,
        navigation: {
          nextEl: ".new .swiper-3 .swiper-next",
          prevEl: ".new .swiper-3 .swiper-prev",
        },
      },
      carouselSetting4: {
        ...carouselSetting1,
        slidesPerView: 5,
        navigation: {
          nextEl: ".new .swiper-4 .swiper-next",
          prevEl: ".new .swiper-4 .swiper-prev",
        },
      },
      carouselSetting5: {
        ...carouselSetting1,
        slidesPerView: 5,
        navigation: {
          nextEl: ".new .swiper-5 .swiper-next",
          prevEl: ".new .swiper-5 .swiper-prev",
        },
      },
      products: [
        {
          id: 122,
          name: "Озон",
          slug: 'apple-11"-ipad-pro-with-wi-fi-256-gb',
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ",
          price: 3000.00,
          sale_price: null,
          review: 2,
          ratings: 5,
          until: "2022-01-01",
          stock: 100,
          top: null,
          featured: null,
          new: null,
          top: true,
          author: null,
          sold: null,
          // category: [
          //   {
          //     name: "Computers",
          //     slug: "computers",
          //     pivot: {
          //       product_id: "122",
          //       "product-category_id": "20",
          //     },
          //   },
          //   {
          //     name: "Tablets",
          //     slug: "tablets",
          //     pivot: {
          //       product_id: "122",
          //       "product-category_id": "21",
          //     },
          //   },
          //   {
          //     name: "Cell Phone",
          //     slug: "cell-phone",
          //     pivot: {
          //       product_id: "122",
          //       "product-category_id": "27",
          //     },
          //   },
          //   {
          //     name: "TV",
          //     slug: "tv",
          //     pivot: {
          //       product_id: "122",
          //       "product-category_id": "24",
          //     },
          //   },
          // ],
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
              url: "../../../../public/assets/images/Frame_5.png",
              pivot: {
                related_id: "122",
                upload_file_id: "754",
              },
            },
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/Frame_5.png",
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
              url: "./assets/images/Frame_5.png",
              pivot: {
                related_id: "122",
                upload_file_id: "756",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/Frame_5.png",
              pivot: {
                related_id: "122",
                upload_file_id: "757",
              },
            },
          ],
          variants: [],
        },
        {
          id: 123,
          name: "Детский Мир",
          slug: "apple-smart-folio-for-11-inch-ipad-pro",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 3000.00,
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
          // category: [
          //   {
          //     name: "Computers",
          //     slug: "computers",
          //     pivot: {
          //       product_id: "123",
          //       "product-category_id": "20",
          //     },
          //   },
          //   {
          //     name: "Tablets",
          //     slug: "tablets",
          //     pivot: {
          //       product_id: "123",
          //       "product-category_id": "21",
          //     },
          //   },
          // ],
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
              url: "../../../../public/assets/images/Frame_1.png",
              pivot: {
                related_id: "123",
                upload_file_id: "758",
              },
            },
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/Frame_1.png",
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
              url: "./assets/images/Frame_1.png",
              pivot: {
                related_id: "123",
                upload_file_id: "761",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/Frame_1.png",
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
          name: "Спортмастер",
          slug: "apple-watch-series-3-with-white-sport-band",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 3000.00,
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
          // category: [
          //   {
          //     name: "Accessories",
          //     slug: "accessories",
          //     pivot: {
          //       product_id: "124",
          //       "product-category_id": "18",
          //     },
          //   },
          //   {
          //     name: "Smartwatches",
          //     slug: "smartwatches",
          //     pivot: {
          //       product_id: "124",
          //       "product-category_id": "25",
          //     },
          //   },
          // ],
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
              url: "../../../../public/assets/images/Frame_2.png",
              pivot: {
                related_id: "124",
                upload_file_id: "762",
              },
            },
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/Frame_2.png",
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
              url: "./assets/images/Frame_2.png",
              pivot: {
                related_id: "124",
                upload_file_id: "765",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/Frame_2.png",
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
          name: "Л'этуаль",
          slug: "gopro-hero7-black-hd-waterproof-action",
          short_desc:
            "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus.",
          price: 3000,
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
          // category: [
          //   {
          //     name: "Accessories",
          //     slug: "accessories",
          //     pivot: {
          //       product_id: "125",
          //       "product-category_id": "18",
          //     },
          //   },
          //   {
          //     name: "Camcorders",
          //     slug: "camcorders",
          //     pivot: {
          //       product_id: "125",
          //       "product-category_id": "29",
          //     },
          //   },
          //   {
          //     name: "Cameras",
          //     slug: "cameras",
          //     pivot: {
          //       product_id: "125",
          //       "product-category_id": "28",
          //     },
          //   },
          // ],
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
              url: "/uploads/product_4_1_7fb85a90a1.jpg",
              pivot: {
                related_id: "125",
                upload_file_id: "766",
              },
            },
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/Frame_3.png",
              pivot: {
                related_id: "125",
                upload_file_id: "767",
              },
            },
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/Frame_3.png",
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
              url: "./assets/images/Frame_3.png",
              pivot: {
                related_id: "125",
                upload_file_id: "769",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/Frame_3.png",
              pivot: {
                related_id: "125",
                upload_file_id: "771",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/Frame_3.png",
              pivot: {
                related_id: "125",
                upload_file_id: "770",
              },
            },
          ],
          variants: [],
        },
        {
          id: 126,
          name: "М.Видео",
          slug: "microsoft-refurbish-xbox-one-s-500gb",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 3000.00,
          sale_price: null,
          review: 2,
          ratings: 0,
          until: null,
          stock: 100,
          top: true,
          featured: null,
          new: null,
          author: null,
          sold: null,
          // category: [
          //   {
          //     name: "Accessories",
          //     slug: "accessories",
          //     pivot: {
          //       product_id: "126",
          //       "product-category_id": "18",
          //     },
          //   },
          //   {
          //     name: "Video Games",
          //     slug: "video-games",
          //     pivot: {
          //       product_id: "126",
          //       "product-category_id": "30",
          //     },
          //   },
          //   {
          //     name: "Entertainment",
          //     slug: "entertainment",
          //     pivot: {
          //       product_id: "126",
          //       "product-category_id": "23",
          //     },
          //   },
          // ],
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
              url: "../../../../public/assets/images/Frame_4.png",
              pivot: {
                related_id: "126",
                upload_file_id: "773",
              },
            },
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/Frame_4.png",
              pivot: {
                related_id: "126",
                upload_file_id: "772",
              },
            },
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/Frame_4.png",
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
              url: "./assets/images/Frame_4.png",
              pivot: {
                related_id: "126",
                upload_file_id: "775",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/Frame_4.png",
              pivot: {
                related_id: "126",
                upload_file_id: "776",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/Frame_4.png",
              pivot: {
                related_id: "126",
                upload_file_id: "777",
              },
            },
          ],
          variants: [],
        },
        {
          id: 127,
          name: "Sony - Camera",
          slug: "sony-alpha-a5100-mirrorless-camera",
          short_desc:
            "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus.",
          price: 499.99,
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

          brands: [
            {
              name: "River Island",
              slug: "river-island",
              pivot: {
                product_id: "127",
                brand_id: "18",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "/uploads/product_6_1_741904409f.jpg",
              pivot: {
                related_id: "127",
                upload_file_id: "778",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_6_2_c6ac080105.jpg",
              pivot: {
                related_id: "127",
                upload_file_id: "780",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_6_3_e7ded9c086.jpg",
              pivot: {
                related_id: "127",
                upload_file_id: "779",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "./assets/images/Frame_4.png",
              pivot: {
                related_id: "127",
                upload_file_id: "781",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/Frame_4.png",
              pivot: {
                related_id: "127",
                upload_file_id: "782",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/Frame_4.png",
              pivot: {
                related_id: "127",
                upload_file_id: "783",
              },
            },
          ],
          variants: [],
        },
        
        {
          id: 128,
          name: "Canon – EOS 5D Mark IV DSLR Camera",
          slug: "canon-eos-5d-mark-iv-dslr-camera",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 399.99,
          sale_price: 359.99,
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
              name: "Cameras",
              slug: "cameras",
              pivot: {
                product_id: "128",
                "product-category_id": "28",
              },
            },
            {
              name: "Camcorders",
              slug: "camcorders",
              pivot: {
                product_id: "128",
                "product-category_id": "29",
              },
            },
          ],
          brands: [
            {
              name: "Nike",
              slug: "nike",
              pivot: {
                product_id: "128",
                brand_id: "19",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "/uploads/product_15_1_91c85ae0e4.jpg",
              pivot: {
                related_id: "128",
                upload_file_id: "785",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_15_2_52c6944780.jpg",
              pivot: {
                related_id: "128",
                upload_file_id: "784",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "/uploads/product_15_1_300x300_5a77c6dd85.jpg",
              pivot: {
                related_id: "128",
                upload_file_id: "786",
              },
            },
            {
              width: "300",
              height: "300",
              url: "/uploads/product_15_2_300x300_264b8b9e00.jpg",
              pivot: {
                related_id: "128",
                upload_file_id: "787",
              },
            },
          ],
          variants: [],
        },
        {
          id: 129,
          name: "Google – Pixel 6.2-Inch 3 XL 128GB",
          slug: "google-pixel-6.2-inch-3-xl-128gb",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 40,
          sale_price: null,
          review: 2,
          ratings: 5,
          until: null,
          stock: 100,
          top: true,
          featured: true,
          new: null,
          author: null,
          sold: null,
          category: [
            {
              name: "Tablets",
              slug: "tablets",
              pivot: {
                product_id: "129",
                "product-category_id": "21",
              },
            },
            {
              name: "Entertainment",
              slug: "entertainment",
              pivot: {
                product_id: "129",
                "product-category_id": "23",
              },
            },
            {
              name: "Cell Phone",
              slug: "cell-phone",
              pivot: {
                product_id: "129",
                "product-category_id": "27",
              },
            },
            {
              name: "Computers",
              slug: "computers",
              pivot: {
                product_id: "129",
                "product-category_id": "20",
              },
            },
          ],
          brands: [
            {
              name: "New Balance",
              slug: "new-balance",
              pivot: {
                product_id: "129",
                brand_id: "22",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "/uploads/product_14_1_1224d0c93f.jpg",
              pivot: {
                related_id: "129",
                upload_file_id: "788",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_14_2_e58c08d49a.jpg",
              pivot: {
                related_id: "129",
                upload_file_id: "789",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "/uploads/product_14_1_300x300_efbf227b95.jpg",
              pivot: {
                related_id: "129",
                upload_file_id: "790",
              },
            },
            {
              width: "300",
              height: "300",
              url: "/uploads/product_14_2_300x300_aa41f75b41.jpg",
              pivot: {
                related_id: "129",
                upload_file_id: "791",
              },
            },
          ],
          variants: [],
        },
        {
          id: 130,
          name: "Home Smart Speaker with Google Assistant",
          slug: "home-smart-speaker-with-google-assistant",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 150.99,
          sale_price: 129.99,
          review: 2,
          ratings: 3,
          until: "2022-01-01",
          stock: 100,
          top: null,
          featured: null,
          new: true,
          author: null,
          sold: null,
          category: [
            {
              name: "Accessories",
              slug: "accessories",
              pivot: {
                product_id: "130",
                "product-category_id": "18",
              },
            },
            {
              name: "Audio",
              slug: "audio",
              pivot: {
                product_id: "130",
                "product-category_id": "26",
              },
            },
          ],
          brands: [
            {
              name: "New Balance",
              slug: "new-balance",
              pivot: {
                product_id: "130",
                brand_id: "22",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "/uploads/product_11_1_406aa04e7f.jpg",
              pivot: {
                related_id: "130",
                upload_file_id: "792",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_11_2_1ce4dc30f2.jpg",
              pivot: {
                related_id: "130",
                upload_file_id: "794",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_11_3_2d28636d36.jpg",
              pivot: {
                related_id: "130",
                upload_file_id: "793",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "/uploads/product_11_1_300x300_c7664ff065.jpg",
              pivot: {
                related_id: "130",
                upload_file_id: "795",
              },
            },
            {
              width: "300",
              height: "300",
              url: "/uploads/product_11_2_300x300_563c9a4c7f.jpg",
              pivot: {
                related_id: "130",
                upload_file_id: "796",
              },
            },
            {
              width: "300",
              height: "300",
              url: "/uploads/product_11_3_300x300_1cbe3af5cb.jpg",
              pivot: {
                related_id: "130",
                upload_file_id: "797",
              },
            },
          ],
          variants: [],
        },
        {
          id: 131,
          name: "Sony – Class LED 2160p Smart 4K Ultra HD",
          slug: "sony-class-led-2160p-smart-4k-ultra-hd",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 999.99,
          sale_price: 899.99,
          review: 2,
          ratings: 5,
          until: null,
          stock: 100,
          top: null,
          featured: null,
          new: true,
          author: null,
          sold: null,
          category: [
            {
              name: "Entertainment",
              slug: "entertainment",
              pivot: {
                product_id: "131",
                "product-category_id": "23",
              },
            },
            {
              name: "TV",
              slug: "tv",
              pivot: {
                product_id: "131",
                "product-category_id": "24",
              },
            },
          ],
          brands: [
            {
              name: "New Balance",
              slug: "new-balance",
              pivot: {
                product_id: "131",
                brand_id: "22",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "/uploads/product_7_1_ba7a5197ad.jpg",
              pivot: {
                related_id: "131",
                upload_file_id: "798",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_7_2_e951bc82a6.jpg",
              pivot: {
                related_id: "131",
                upload_file_id: "799",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "/uploads/product_7_1_300x300_7d52e44699.jpg",
              pivot: {
                related_id: "131",
                upload_file_id: "800",
              },
            },
            {
              width: "300",
              height: "300",
              url: "/uploads/product_7_2_300x300_141620b1d4.jpg",
              pivot: {
                related_id: "131",
                upload_file_id: "801",
              },
            },
          ],
          variants: [],
        },
        {
          id: 132,
          name: "MacBook Pro 13″ laptop Display, i5",
          slug: "macbook-pro-13-laptop-display-i5",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 199.99,
          sale_price: null,
          review: 2,
          ratings: 2,
          until: null,
          stock: 100,
          top: null,
          featured: null,
          new: true,
          author: null,
          sold: null,
          category: [
            {
              name: "Tablets",
              slug: "tablets",
              pivot: {
                product_id: "132",
                "product-category_id": "21",
              },
            },
            {
              name: "Computers",
              slug: "computers",
              pivot: {
                product_id: "132",
                "product-category_id": "20",
              },
            },
            {
              name: "Laptops",
              slug: "laptops",
              pivot: {
                product_id: "132",
                "product-category_id": "22",
              },
            },
          ],
          brands: [
            {
              name: "UGG",
              slug: "ugg",
              pivot: {
                product_id: "132",
                brand_id: "1",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "/uploads/product_9_1_7a1ef0e54f.jpg",
              pivot: {
                related_id: "132",
                upload_file_id: "802",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_9_2_28fee92c79.jpg",
              pivot: {
                related_id: "132",
                upload_file_id: "803",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_9_3_0a795fde5f.jpg",
              pivot: {
                related_id: "132",
                upload_file_id: "804",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "/uploads/product_9_1_300x300_3bcf580b2b.jpg",
              pivot: {
                related_id: "132",
                upload_file_id: "805",
              },
            },
            {
              width: "300",
              height: "300",
              url: "/uploads/product_9_2_300x300_dc60e9079f.jpg",
              pivot: {
                related_id: "132",
                upload_file_id: "806",
              },
            },
            {
              width: "300",
              height: "300",
              url: "/uploads/product_9_3_300x300_a6904bf7ba.jpg",
              pivot: {
                related_id: "132",
                upload_file_id: "807",
              },
            },
          ],
          variants: [],
        },
        {
          id: 133,
          name: "Apple Watch Series 4 Gold Aluminum Case",
          slug: "apple-watch-series-4-gold-aluminum-case",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 499.99,
          sale_price: 300.99,
          review: 2,
          ratings: 5,
          until: null,
          stock: 100,
          top: true,
          featured: null,
          new: null,
          author: null,
          sold: null,
          category: [
            {
              name: "Entertainment",
              slug: "entertainment",
              pivot: {
                product_id: "133",
                "product-category_id": "23",
              },
            },
            {
              name: "Accessories",
              slug: "accessories",
              pivot: {
                product_id: "133",
                "product-category_id": "18",
              },
            },
            {
              name: "Smartwatches",
              slug: "smartwatches",
              pivot: {
                product_id: "133",
                "product-category_id": "25",
              },
            },
          ],
          brands: [
            {
              name: "Geox",
              slug: "geox",
              pivot: {
                product_id: "133",
                brand_id: "21",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "/uploads/product_13_1_58f26fb6b0.jpg",
              pivot: {
                related_id: "133",
                upload_file_id: "808",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_13_2_fff26f80dc.jpg",
              pivot: {
                related_id: "133",
                upload_file_id: "809",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "/uploads/product_13_1_300x300_0fbdf2ba54.jpg",
              pivot: {
                related_id: "133",
                upload_file_id: "810",
              },
            },
            {
              width: "300",
              height: "300",
              url: "/uploads/product_13_2_300x300_8ee25c33ec.jpg",
              pivot: {
                related_id: "133",
                upload_file_id: "811",
              },
            },
          ],
          variants: [],
        },
        {
          id: 134,
          name: "Samsung – 55″ Class LED 2160p Smart",
          slug: "samsung-55-class-led-2160p-smart",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 899.99,
          sale_price: null,
          review: 2,
          ratings: 5,
          until: null,
          stock: 100,
          top: null,
          featured: null,
          new: null,
          author: null,
          sold: null,
          category: [
            {
              name: "Entertainment",
              slug: "entertainment",
              pivot: {
                product_id: "134",
                "product-category_id": "23",
              },
            },
          ],
          brands: [
            {
              name: "Geox",
              slug: "geox",
              pivot: {
                product_id: "134",
                brand_id: "21",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "/uploads/product_8_1_c204a16f27.jpg",
              pivot: {
                related_id: "134",
                upload_file_id: "812",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_8_2_ee25b64922.jpg",
              pivot: {
                related_id: "134",
                upload_file_id: "813",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "/uploads/product_8_1_300x300_8f56b6b2cf.jpg",
              pivot: {
                related_id: "134",
                upload_file_id: "814",
              },
            },
            {
              width: "300",
              height: "300",
              url: "/uploads/product_8_2_300x300_0f3131e54f.jpg",
              pivot: {
                related_id: "134",
                upload_file_id: "815",
              },
            },
          ],
          variants: [
            {
              id: 28,
              color: "#333333",
              color_name: "Grey",
              price: 899.99,
              pivot: {
                product_id: "134",
                component_id: "28",
              },
              size: [
                {
                  id: 71,
                  name: "Small",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "28",
                    component_id: "71",
                  },
                },
                {
                  id: 72,
                  name: "Medium",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "28",
                    component_id: "72",
                  },
                },
              ],
            },
            {
              id: 29,
              color: "#3399cc",
              color_name: "Blue",
              price: 1099.99,
              pivot: {
                product_id: "134",
                component_id: "29",
              },
              size: [
                {
                  id: 74,
                  name: "Small",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "29",
                    component_id: "74",
                  },
                },
                {
                  id: 73,
                  name: "Medium",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "29",
                    component_id: "73",
                  },
                },
              ],
            },
          ],
        },
        {
          id: 135,
          name: "Lenovo – Laptop 330-15IKBR Pro 15.6″",
          slug: "lenovo-laptop-330-15ikbr-pro-15.6",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 339.99,
          sale_price: null,
          review: 2,
          ratings: 0,
          until: null,
          stock: 0,
          top: null,
          featured: null,
          new: null,
          author: null,
          sold: null,
          category: [
            {
              name: "Tablets",
              slug: "tablets",
              pivot: {
                product_id: "135",
                "product-category_id": "21",
              },
            },
            {
              name: "Computers",
              slug: "computers",
              pivot: {
                product_id: "135",
                "product-category_id": "20",
              },
            },
            {
              name: "Laptops",
              slug: "laptops",
              pivot: {
                product_id: "135",
                "product-category_id": "22",
              },
            },
          ],
          brands: [
            {
              name: "Geox",
              slug: "geox",
              pivot: {
                product_id: "135",
                brand_id: "21",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "/uploads/product_10_1_3739ad6682.jpg",
              pivot: {
                related_id: "135",
                upload_file_id: "817",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_10_2_7e3efcb79c.jpg",
              pivot: {
                related_id: "135",
                upload_file_id: "816",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_10_3_23293abb39.jpg",
              pivot: {
                related_id: "135",
                upload_file_id: "819",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_10_4_bc3ef10ce7.jpg",
              pivot: {
                related_id: "135",
                upload_file_id: "818",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "/uploads/product_10_1_300x300_fde9949208.jpg",
              pivot: {
                related_id: "135",
                upload_file_id: "820",
              },
            },
            {
              width: "300",
              height: "300",
              url: "/uploads/product_10_2_300x300_a0afeaad6e.jpg",
              pivot: {
                related_id: "135",
                upload_file_id: "821",
              },
            },
            {
              width: "300",
              height: "300",
              url: "/uploads/product_10_3_300x300_6ee66bdd87.jpg",
              pivot: {
                related_id: "135",
                upload_file_id: "822",
              },
            },
            {
              width: "300",
              height: "300",
              url: "/uploads/product_10_4_300x300_b47fe44862.jpg",
              pivot: {
                related_id: "135",
                upload_file_id: "823",
              },
            },
          ],
          variants: [],
        },
        {
          id: 136,
          name: "Bose – SoundSport wireless headphones",
          slug: "bose-soundsport-wireless-headphones",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 199,
          sale_price: null,
          review: 2,
          ratings: 3,
          until: null,
          stock: 100,
          top: null,
          featured: null,
          new: null,
          author: null,
          sold: null,
          category: [
            {
              name: "Accessories",
              slug: "accessories",
              pivot: {
                product_id: "136",
                "product-category_id": "18",
              },
            },
            {
              name: "Headphones",
              slug: "headphones",
              pivot: {
                product_id: "136",
                "product-category_id": "19",
              },
            },
          ],
          brands: [
            {
              name: "New Balance",
              slug: "new-balance",
              pivot: {
                product_id: "136",
                brand_id: "22",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "/uploads/product_12_1_b78d4034f6.jpg",
              pivot: {
                related_id: "136",
                upload_file_id: "825",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_12_2_e1f0e014f0.jpg",
              pivot: {
                related_id: "136",
                upload_file_id: "824",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "/uploads/product_12_1_300x300_c593ef09c9.jpg",
              pivot: {
                related_id: "136",
                upload_file_id: "826",
              },
            },
            {
              width: "300",
              height: "300",
              url: "/uploads/product_12_2_300x300_29499be6c4.jpg",
              pivot: {
                related_id: "136",
                upload_file_id: "827",
              },
            },
          ],
          variants: [],
        },
      ],
    };
  },
  components: {
    Tabs,
    ProductTwelve,
    Swiper,
    SwiperSlide,
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
  computed: {
    computers: function () {
      return catFilter(this.products, ["computers", "tablets"]);
    },
    accessories: function () {
      return catFilter(this.products, ["accessories"]);
    },
    camera: function () {
      return catFilter(this.products, ["cameras", "camcorders"]);
    },
    entertainment: function () {
      return catFilter(this.products, ["entertainment"]);
    },
    ratedProducts: function () {
      return attrFilter(this.products, "rated");
    },
  },
};
</script>
