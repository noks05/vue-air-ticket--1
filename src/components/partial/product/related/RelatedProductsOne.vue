<template>
  <div>
    <h2 class="title text-center mb-4">You May Also Like</h2>

    <div v-if="products.length == 0">
      <swiper
        :breakpoints="{
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
        }"
        :modules="modules"
        :navigation="true"
        :slidesPerView="1"
        :spaceBetween="10"
        class="row"
      >
        <swiper-slide class="" v-for="(item, index) in 4" :key="index">
          <div class="skel-pro"></div>
        </swiper-slide>
      </swiper>
    </div>
    <swiper
      v-else
      :breakpoints="{
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
      }"
      :modules="modules"
      :navigation="true"
      :slidesPerView="1"
      :spaceBetween="10"
      class="row"
    >
      <swiper-slide class="" v-for="(product, index) in products" :key="index">
        <ProductNine :product="product" class="mb-3" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import ProductNine from "@/components/elements/products/ProductNine.vue";
import { carouselSetting1 } from "@/utilities/carousel";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  components: {
    ProductNine,
    Swiper,
    SwiperSlide,
  },
  props: {
    products: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },

  data: function () {
    return {
      carouselSetting: {
        ...carouselSetting1,
        navigation: {
          nextEl: ".swiper-1 .swiper-next",
          prevEl: ".swiper-1 .swiper-prev",
        },
        pagination: {
          el: ".swiper-1 .swiper-dots",
          clickable: true,
        },
      },
    };
  },
  setup() {
    const onSwiper = (swiper) => {
      return swiper;
    };
    const onSlideChange = () => {};
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar],
    };
  },
};
</script>
