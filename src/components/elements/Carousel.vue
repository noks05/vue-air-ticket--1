<template>
  <div class="carousel">
    <div class="container items-center">
      <!-- -->
      <swiper
        :loop="true"
        :modules="modules"
        :navigation="showNavigation"
        :slides-per-view="1"
        :space-between="150"
        @slideChange="onSlideChange"
        @swiper="onSwiper"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :draggable="true"
        :pagination="showPagination"
      >
        <swiper-slide
          style="min-height: 400px"
          class="slide_item"
          v-for="slide in data"
          :key="slide.id"
        >
          <div class="container swiper-item swiper_custom_item items-center">
            <div class="left-swiper-item">
              <div
                v-if="slide.image"
                class="right-swiper-item-img d-flex justify-content-center align-center"
              >
                <img
                  format="webp"
                  class="main-img w-auto hero_img"
                  loading="lazy"
                  :class="slide?.is_card ? 'center_image' : null"
                  :alt="slide.name"
                  :src="slide.image"
                />
              </div>
            </div>
            <div
              class="right-swiper-item d-flex flex-column justify-content-center"
            >
              <div class="swiper-item-desc">
                {{ slide.description }}
              </div>
              <div class="swiper-item-content">
                {{ slide.name }}
              </div>
              <div class="w-100 d-flex justify-content-start">
                <router-link
                  to="/sign_up"
                  class="auth-btn text-white mb-2"
                  style="white-space: nowrap"
                >
                  <span style="height: 16px">Вход</span>
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
                      d="M1 7.99999C1 7.86738 1.05268 7.74021 1.14645 7.64644C1.24021 7.55267 1.36739 7.49999 1.5 7.49999H13.293L10.146 4.35399C10.0521 4.2601 9.99937 4.13277 9.99937 3.99999C9.99937 3.86721 10.0521 3.73988 10.146 3.64599C10.2399 3.5521 10.3672 3.49936 10.5 3.49936C10.6328 3.49936 10.7601 3.5521 10.854 3.64599L14.854 7.64599C14.9006 7.69244 14.9375 7.74761 14.9627 7.80836C14.9879 7.8691 15.0009 7.93422 15.0009 7.99999C15.0009 8.06576 14.9879 8.13088 14.9627 8.19162C14.9375 8.25237 14.9006 8.30754 14.854 8.35399L10.854 12.354C10.7601 12.4479 10.6328 12.5006 10.5 12.5006C10.3672 12.5006 10.2399 12.4479 10.146 12.354C10.0521 12.2601 9.99937 12.1328 9.99937 12C9.99937 11.8672 10.0521 11.7399 10.146 11.646L13.293 8.49999H1.5C1.36739 8.49999 1.24021 8.44731 1.14645 8.35354C1.05268 8.25978 1 8.1326 1 7.99999Z"
                      fill="white"
                    />
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import { Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  data() {
    return {
      showNavigation: true,
      showPagination: false,
      url: "slider-product",
      data: [
        {
          image: "/assets/images/iphone.svg",
          name: "Товары",
          description: "За баллы",
          is_card: false,
        },
        {
          image: "/assets/images/card.svg",
          name: "Подарки",
          description: "За баллы",
          is_card: true,
        },
        {
          image: "/assets/images/plane.svg",
          name: "Отпуск",
          description: "За баллы",
          is_card: false,
        },
        {
          image: "/assets/images/charity.svg",
          name: "Благотворительность",
          description: "Бонусы на",
          is_card: false,
        },
        {
          image: "/assets/images/apps.png",
          name: "Спецпредложения",
          description: "Для Вас",
          is_card: false,
        },
        {
          image: "/assets/images/action.png",
          name: "Акции",
          description: "Интересные",
          is_card: false,
        },
      ],
    };
  },
  props: {
    circle: Boolean,
    square: Boolean,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    shoWindow() {
      if (window.innerWidth <= 468) {
        this.showPagination = true;
        this.showNavigation = false;
      } else {
        this.showPagination = false;
        this.showNavigation = true;
      }
    },
  },
  mounted() {
    this.shoWindow();
  },
  setup() {
    const onSwiper = (swiper) => {
      return swiper;
    };
    const onSlideChange = () => {};
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Scrollbar, Pagination],
    };
  },
};
</script>
<style>
.hero_img {
  max-height: 400px;
}
.swiper-button-next,
.swiper-button-prev {
  background: white !important;
  border-radius: 50px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  border: 1px solid transparent;
  color: var(--black) !important;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  color: white !important;
  background: var(--primary_bg) !important;
}

.swiper-button-next::after {
  position: absolute;
  top: 5%;
  left: 20%;
  width: 10px;
  height: 10px;
  padding: 10px;
  font-size: 15px;
}

.swiper-button-prev::after {
  position: absolute;
  top: 5%;
  left: 10%;
  color: var(--grey) !important;
  width: 10px;
  height: 10px;
  padding: 10px;
  font-size: 15px;
}

@media (max-width: 576px) {
  .carousel .swiper-button-next {
    /* display: none; */
    position: absolute;
    top: 96% !important;
    bottom: 7px !important;
    right: 20px !important;
    width: 32px !important;
    height: 32px !important;
  }

  .carousel .swiper-button-prev {
    /* display: none; */
    position: absolute;
    width: 32px !important;
    height: 32px !important;
    top: 96% !important;

    bottom: 7px !important;
    right: 64px !important;
    left: auto !important;
  }

  .carousel .swiper-button-next::after {
    position: absolute;
    top: 25%;
    left: 13px !important;
    color: var(--grey) !important;
    width: 8px;
    height: 8px;
    padding: 0 !important;
  }

  .carousel .swiper-button-prev::after {
    position: absolute;
    top: 25%;
    right: 13px !important;
    left: auto !important;
    color: var(--grey) !important;
    width: 8px !important;
    padding: 0px !important;
  }
}
</style>
