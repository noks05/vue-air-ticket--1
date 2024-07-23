<template>
  <div class="p-area-wrap">
    <div class="p-area-widget">
      <div class="p-area-widget-title">
        <img src="@/assets/images/icons/lightning.svg" alt="lightning" />
        <span>01.01.25 сгорят</span>
      </div>
      <span class="p-area-widget-sub-title"> 3000,00 баллов </span>
    </div>

    <ul class="p-area-widget-list">
      <li v-for="(item, id) in sidebarCategories" :key="id">
        <router-link
          :to="{ path: $route.path, query: {titlePage: item.name} }"
          class="p-area-big-text"
          @click.prevent="() => switchContent(item.path)"
          v-if="!item.elements"
        >
          {{ item.name }}
        </router-link>

        <div v-if="item.elements">
          <div
            class="p-area-big-text p-area-list-title"
            @click.prevent="slideState = !slideState"
          >
            <span>
              {{ item.name }}
            </span>

            <img
              :class="{ rotated_icon: true }"
              src="@/assets/newImg/icons/arrow_down.svg"
              alt="arrow"
            />
          </div>

          <div class="p-area-widget-list">
            <router-link
              v-for="elem in item.elements"
              :key="elem"
              :to="{ path: $route.path, query: {titlePage: elem.name} }"
              class="p-area-small-text"
              @click.prevent="slideState = !slideState"
            >
              {{ elem.name }}
            </router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Slider from "@vueform/slider";
import { personalAreaData } from "@/utilities/data.js";

export default {
  components: {
    Slider,
    personalAreaData,
  },
  props: {
    isSidebar: Boolean,
  },
  data: function () {
    return {
      slideState: true,
      // loaded: true,
      // priceValues: [0, 1000],
      // priceSliderConfig: {
      //   connect: true,
      //   step: 50,
      //   margin: 100,
      //   range: {
      //     min: 0,
      //     max: 1000,
      //   },
      // },
      toggleStates: [true, true, true, true, true],
      sidebarCategories: personalAreaData.categories,
    };
  },
  methods: {
    switchContent(nameContent) {
      const justObj = this.sidebarCategories.reduce((acc, it) => {
        if (it.elements) {
          acc = [...acc, ...it.elements];
        } else {
          acc = [...acc, it];
        }
        return acc;
      }, []);
      return justObj.find(obj => {
        return String(obj.path) === String(nameContent);
      });
    },
  },
};
</script>
<style src="@vueform/slider/themes/default.css"></style>
<style scoped>
.p-area-wrap {
  min-width: 172px;
  max-width: 172px;
  padding: 24px;
  border: 1px solid #f4f7ff;
  border-radius: 7px;
  background-color: #fff;
}
.p-area-widget {
  margin-bottom: 16px;
  padding: 16px 8px;
  border-radius: 7px;
  background-color: #fef4f1;
}
.p-area-widget-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  font-family: Gilroy-Bold !important;
  font-weight: 700;
  font-size: 12px;
  line-height: 100%;
  color: #ff6666;
}
.p-area-widget-title > svg {
  width: 10px;
  height: 15px;
}
.p-area-widget-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.p-area-widget-list > li{
  display: flex;
}
.p-area-list-title {
  margin-bottom: 16px;
  cursor: pointer;
}
.p-area-widget-sub-title {
  display: block;
  margin-left: 20px;
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  font-size: 10px;
  line-height: 100%;
  color: #885b5b;
}
.p-area-big-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  color: var(--text_color);
}
.p-area-big-text > span {
  font-family: Gilroy-Medium !important;
}
.p-area-small-text {
  display: block;
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  color: #797979;
}
.p-area-small-text:hover {
  color: var(--text_color);
}
.p-area-small-text.p-area-small-text--active {
  color: var(--text_color);
}
</style>
