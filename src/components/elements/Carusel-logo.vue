<template>
  <div class="carousel">
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
        slidesPerView: 4,
      },
      '1201': {
        slidesPerView: 5,
        spaceBetween: 35,
      },
    }" :slidesPerView="5" :spaceBetween="30" :freeMode="true" :modules="modules" :navigation="showNavigation"
      class="mySwiper" style="padding: 10px;">
      <swiper-slide>
        <router-link to="#" style="cursor: pointer">
          <img src="../../assets/newImg/logotypes/bosch-logo-simple 1.png" alt="" />
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="#" style="cursor: pointer">
          <img src="../../assets/newImg/logotypes/ozon.png" alt="" />
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="#" style="cursor: pointer">
          <img src="../../assets/newImg/logotypes/xiaomi.png" alt="" />
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="#" style="cursor: pointer">
          <img src="../../assets/newImg/logotypes/десткий мир.png" alt="" />
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="#" style="cursor: pointer">
          <img src="../../assets/newImg/logotypes/аэрофлот.png" alt="" />
        </router-link>
      </swiper-slide>
      <swiper-slide>
        <router-link to="#" style="cursor: pointer">
          <img src="../../assets/newImg/logotypes/РЖД.png" alt="" />
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { FreeMode, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      showNavigation: true,
    }
  },
  methods: {
    shoWindow() {
      if (window.innerWidth <= 468) {
        this.showPagination = true
        this.showNavigation = false
      } else {
        this.showPagination = false
        this.showNavigation = true

      }
    }
  },
  mounted() {
    this.shoWindow()
  },
  setup() {
    return {
      modules: [FreeMode, Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
@media (max-width: 576px) {
  .carousel .swiper-button-next {
    display: none;
    background-color: transparent !important;
  }

  .carousel .swiper-button-prev {
    display: none;
    background-color: transparent !important;
  }

  .carousel .swiper-slide {
    height: auto !important;
  }

}
</style>
