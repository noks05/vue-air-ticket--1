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
      <li v-for="(item, id) in sidebarData.categories" :key="id">
        <a
          :href="item.path"
          :class="['p-area-big-text', { collapsed: true }]"
          @click.prevent="slideState = !slideState"
          v-if="!item.elements"
        >
          {{ item.name }}
        </a>

        <div v-if="item.elements">
          <div class="p-area-big-text p-area-list-title" @click.prevent="slideState = !slideState">
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
            <a
              v-for="elem in item.elements"
              :key="elem"
              :href="elem.path"
              :class="['p-area-small-text', { collapsed: true }]"
              @click.prevent="slideState = !slideState"
            >
              {{ elem.name }}
            </a>
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
      loaded: true,
      priceValues: [0, 1000],
      priceSliderConfig: {
        connect: true,
        step: 50,
        margin: 100,
        range: {
          min: 0,
          max: 1000,
        },
      },
      toggleStates: [true, true, true, true, true],
      sidebarData: personalAreaData,
    };
  },
  components: {
    Slider,
  },
};
</script>
<style src="@vueform/slider/themes/default.css"></style>
<style scoped>
.p-area-wrap {
  max-width: 281px;
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
.p-area-list-title{
  margin-bottom: 16px;
}
.p-area-widget-sub-title {
  display: inline-block;
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
.p-area-big-text>span{
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
.p-area-small-text:hover{
  color: var(--text_color);
}
.p-area-small-text.p-area-small-text--active {
  color: var(--text_color);
}
</style>
