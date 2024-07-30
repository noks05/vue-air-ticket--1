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
          :to="{ path: $route.path, query: { titlePage: item.name } }"
          class="p-area-big-text"
          @click.prevent="() => switchContent(item.path)"
          v-if="!item.elements"
        >
          {{ item.name }}
        </router-link>

        <div
          :class="[
            'p-area-widget-list_w',
            'p-area-dropdown-wrap',
            slideState ? 'p-area-dropdown-wrap--active' : '',
          ]"
          v-if="item.elements"
        >
          <div
            class="p-area-big-text p-area-list-title"
            @click.stop="slideState = !slideState"
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

          <div class="p-area-widget-list p-area-dropdown-list">
            <router-link
              v-for="elem in item.elements"
              :key="elem"
              :to="{ path: $route.path, query: { titlePage: elem.name } }"
              :class="[
                'p-area-small-text',
                $route.query.titlePage === elem.name
                  ? 'p-area-small-text_b'
                  : '',
              ]"
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
      return justObj.find((obj) => {
        return String(obj.path) === String(nameContent);
      });
    },
  },
};
</script>
<style src="@vueform/slider/themes/default.css"></style>
<style scoped>
.p-area-wrap {
  min-width: 281px;
  max-width: 281px;
  padding: 24px;
  border: 1px solid #f4f7ff;
  border-radius: 7px;
  background-color: #fff;
}

.p-area-widget {
  margin-bottom: 13px;
  padding: 19px 12px;
  padding-right: 7px;
  padding-bottom: 15px;
  border-radius: 7px;
  background-color: #fef4f1;
}

.p-area-widget-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
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
  margin-top: 18px;
}

.p-area-widget-list > li {
  display: flex;
}

.p-area-list-title {
  padding-right: 5px;
  cursor: pointer;
}

.p-area-dropdown-wrap {
  height: auto;
  overflow: hidden;
  transition: height 0.3s;
}

.p-area-dropdown-wrap.p-area-dropdown-wrap--active {
  height: 100%;
}

.p-area-dropdown-list {
  display: none;
  animation: fadeIn 0.3s;
}

.p-area-dropdown-wrap.p-area-dropdown-wrap--active .p-area-dropdown-list {
  display: flex;
}

.p-area-dropdown-wrap .rotated_icon {
  transform: rotateZ(0deg);
  transition: transform 0.3s;
}

.p-area-dropdown-wrap.p-area-dropdown-wrap--active .rotated_icon {
  transform: rotateZ(180deg);
}

.p-area-widget-list_w {
  width: 100%;
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

.p-area-small-text_b,
.p-area-small-text:hover {
  color: var(--text_color);
}

.p-area-small-text.p-area-small-text--active {
  color: var(--text_color);
}

@media (max-width: 480px) {
  .p-area-wrap {
    margin-top: 24px;
    width: 100%;
    max-width: 100%;
    padding: 0;
    padding-inline: 7px;
    border: none;
  }
}
</style>
