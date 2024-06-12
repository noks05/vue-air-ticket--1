<template>
  <div class="sidebar-shop" :class="isSidebar ? 'sidebar-filter' : 'sidebar'">
    <div :class="{ 'sidebar-filter-wrapper': isSidebar }">
      <div class="widget widget-clean">
        <label style="font-family: Gilroy-Medium !important;">Фильтры:</label>
        <a href="#" class="sidebar-filter-clear" style="font-size: 14px !important; "
          @click.prevent="cleanAll">Очистить</a>
      </div>
      <div class="widget widget-collapsible">
        <h3 class="widget-title mb-2">
          <a href="#widget-1" :class="{ collapsed: !toggleStates[0] }" @click.prevent="toggleSlide(0)"
            style="display: flex; justify-content: space-between; font-family: Gilroy-Medium !important;">
            Категории
            <img :class="{ rotated_icon: toggleStates[0] }" src="../../../../assets/newImg/icons/arrow_down.svg" alt="" />
          </a>
        </h3>
        <Transition name="slide-fade">
          <div v-if="toggleStates[0]" class="show" :duration="200">
            <div class="widget-body pt-0">
              <div class="filter-items filter-items-count">
                <div class="filter-item" v-for="(category, index) in filterData.categories" :key="index">
                  <router-link :to="{
                    path: $route.path,
                    query: { category: category.slug },
                  }" :class="{ active: categorySelected(category) }">{{ category.name }}</router-link>
                  <span class="item-count">{{ category.count }}</span>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
      <div class="widget widget-collapsible">
        <h3 class="widget-title mb-2">
          <a href="#widget-2" :class="{ collapsed: !toggleStates[1] }" @click.prevent="toggleSlide(1)"
            style="display: flex; justify-content: space-between ;font-family: Gilroy-Medium !important;">
            Размер экрана
            <img :class="{ rotated_icon: toggleStates[1] }" src="../../../../assets/newImg/icons/arrow_down.svg" alt="" />
          </a>
        </h3>
        <Transition name="slide-fade">
          <div v-if="toggleStates[1]" class="show" :duration="200">
            <div class="widget-body pt-0">
              <div class="filter-items">
                <div class="filter-item" v-for="(item, index) in filterData.sizes" :key="index">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" :id="'size-' + index" @click="setSizeFilter(item)"
                      :checked="sizeChecked(item)" />
                    <label class="custom-control-label" :for="'size-' + index">{{ item.slug }}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
      <div class="widget widget-collapsible">
        <h3 class="widget-title mb-2">
          <a href="#widget-3" :class="{ collapsed: !toggleStates[2] }" @click.prevent="toggleSlide(2)"
            style="display: flex; justify-content: space-between; font-family: Gilroy-Medium !important;">
            Цвет
            <img :class="{ rotated_icon: toggleStates[2] }" src="../../../../assets/newImg/icons/arrow_down.svg" alt="" />
          </a>
        </h3>
        <Transition name="slide-fade">
          <div v-if="toggleStates[2]" class="show" :duration="200">
            <div class="widget-body pt-0">
              <div class="filter-colors">
                <router-link :to="getColorUrl(item)" :style="{ 'background-color': item.color }"
                  v-for="(item, index) in filterData.colors" :key="index" :class="{ selected: colorSelected(item) }">
                  <span class="sr-only">{{ item.color_name }}</span>
                </router-link>
              </div>
            </div>
          </div>
        </Transition>
      </div>
      <div class="widget widget-collapsible" style="border-bottom: 1px solid #ebebeb;">
        <h3 class="widget-title mb-2">
          <a href="#widget-4" :class="{ collapsed: !toggleStates[3] }" @click.prevent="toggleSlide(3)"
            style="display: flex; justify-content: space-between;font-family: Gilroy-Medium !important;">Бренд
            <img :class="{ rotated_icon: toggleStates[3] }" src="../../../../assets/newImg/icons/arrow_down.svg" alt="" />
          </a>
        </h3>
        <Transition name="slide-fade">
          <div v-if="toggleStates[3]" class="show" :duration="200">
            <div class="widget-body pt-0">
              <div class="filter-items" v-for="(item, index) in filterData.brands" :key="index">
                <div class="filter-item" style="cursor: pointer;">
                  <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" :id="'brand-' + index"
                      @click="setBrandFilter(item)" :checked="brandChecked(item)" />
                  <label class="custom-control-label" :for="'brand-' + index">{{ item.brand }}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@vueform/slider";
import { shopData } from "@/utilities/data.js";

export default {
  props: {
    isSidebar: Boolean,
  },
  data: function () {
    return {
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
      filterData: shopData,
    };
  },
  components: {
    Slider,
  },
  computed: {
    priceRangeText: function () {
      return (
        "$" +
        parseInt(this.priceValues[0]) +
        " — $" +
        parseInt(this.priceValues[1])
      );
    },
    priceFilterRoute: function () {
      let query = {};
      if (this.$route.query.page) {
        for (let key in this.$route.query) {
          if (key !== "page") {
            query[key] = this.$route.query[key];
          }
        }
      } else {
        query = { ...this.$route.query };
      }

      return {
        path: this.$route.path,
        query: {
          ...query,
          minPrice: this.priceValues[0],
          maxPrice: this.priceValues[1],
        },
      };
    },
  },
  created: function () {
    document.querySelector("body").classList.remove("sidebar-filter-active");
    if (this.$route.query.minPrice && this.$route.query.maxPrice) {
      this.loaded = false;
      this.priceValues = [
        this.$route.query.minPrice,
        this.$route.query.maxPrice,
      ];
      this.$nextTick(function () {
        this.loaded = true;
      });
    } else {
      this.loaded = false;
      this.$nextTick(function () {
        this.loaded = true;
      });
    }
  },
  methods: {
    cleanAll: function () {
      this.loaded = false;
      this.priceValues = [0, 1000];
      this.$nextTick(function () {
        this.orderBy = "default";
        this.loaded = true;
        this.$router.push(this.$route.path);
      });
    },
    toggleSlide: function (index) {
      this.toggleStates = this.toggleStates.reduce((acc, cur, id) => {
        if (id == index) return [...acc, !cur];
        else return [...acc, cur];
      }, []);
    },
    sizeChecked: function (item) {
      return (
        this.$route.query.size &&
        this.$route.query.size.split(",").includes(item.slug)
      );
    },
    brandChecked: function (item) {
      return (
        this.$route.query.brand &&
        this.$route.query.brand.split(",").includes(item.slug)
      );
    },
    categorySelected: function (item) {
      return (
        this.$route.query.category && this.$route.query.category == item.slug
      );
    },
    colorSelected: function (item) {
      return (
        this.$route.query.color &&
        this.$route.query.color.split(",").includes(item.color_name)
      );
    },
    setSizeFilter: function (item) {
      let query = {};
      if (this.$route.query.page) {
        for (let key in this.$route.query) {
          if (key !== "page") {
            query[key] = this.$route.query[key];
          }
        }
      } else {
        query = { ...this.$route.query };
      }

      if (!this.$route.query.size) {
        query = {
          ...query,
          size: item.slug,
        };
      } else if (this.$route.query.size.split(",").includes(item.slug)) {
        query = {
          ...query,
          size: query.size
            .split(",")
            .filter((slug) => slug !== item.slug)
            .join(","),
        };
      } else {
        query = {
          ...query,
          size: [...query.size.split(","), item.slug].join(","),
        };
      }

      this.$router.push({
        path: this.$route.path,
        query: query,
      });
    },
    setBrandFilter: function (item) {
      let query = {};
      if (this.$route.query.page) {
        for (let key in this.$route.query) {
          if (key !== "page") {
            query[key] = this.$route.query[key];
          }
        }
      } else {
        query = { ...this.$route.query };
      }

      if (!this.$route.query.brand) {
        query = {
          ...query,
          brand: item.slug,
        };
      } else if (this.$route.query.brand.split(",").includes(item.slug)) {
        query = {
          ...query,
          brand: query.brand
            .split(",")
            .filter((slug) => slug !== item.slug)
            .join(","),
        };
      } else {
        query = {
          ...query,
          brand: [...query.brand.split(","), item.slug].join(","),
        };
      }

      this.$router.push({
        path: this.$route.path,
        query: query,
      });
    },
    getColorUrl: function (item) {
      let query = {};

      if (!this.$route.query.color) {
        query = {
          ...this.$route.query,
          color: item.color_name,
        };
      } else if (this.$route.query.color.split(",").includes(item.color_name)) {
        query = {
          ...this.$route.query,
          color: this.$route.query.color
            .split(",")
            .filter((slug) => slug !== item.color_name)
            .join(","),
        };
      } else {
        query = {
          ...this.$route.query,
          color: [...this.$route.query.color.split(","), item.color_name].join(
            ","
          ),
        };
      }

      let temp = {};
      if (query.page) {
        for (let key in query) {
          if (key !== "page") {
            temp[key] = query[key];
          }
        }
      } else {
        temp = { ...query };
      }

      return {
        path: this.$route.path,
        query: temp,
      };
    },
  },
};
</script>
<style src="@vueform/slider/themes/default.css"></style>
