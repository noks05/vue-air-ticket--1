<template>
  <div class="products mb-3">
    <p class="no-results" v-if="products.length === 0 && loaded">
      No products matching your selection.
    </p>
    <template v-else>
      <div v-if="type == 'list'" key="list">
        <template v-if="!loaded">
          <div class="skel-pro skel-pro-list" v-for="item in fakeArray" :key="item"></div>
        </template>
        <template v-else>
          <product-eight :product="product" v-for="(product, index) in products" :key="index"></product-eight>
        </template>
      </div>
      <div class="row" v-else key="grid">
        <template v-if="!loaded">
          <div class="skel-pro col col-6 col-md-4 col-lg-4" v-for="item in fakeArray" :key="item"></div>
        </template>
        <template v-else>
          <div class="col-6 " :class="gridClass" v-for="(product, index) in products" :key="index">
            <product-nine :product="product" class="w-100"></product-nine>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>
<script>
import ProductEight from "@/components/elements/products/SideBarProduct.vue";
import ProductNine from "@/components/elements/products/sideBarProduct2.vue";
export default {
  components: {
    ProductEight,
    ProductNine,
  },
  props: {
    products: Array,
    perPage: Number,
    loaded: Boolean,
  },
  data() {
    return {};
  },
  computed: {
    type: function () {
      return this.$route.params.without;
    },
    gridClass: function () {
      if (this.type === "list" || this.type === "2cols") return "col-6";
      if (this.type === "3cols") return "col-6 col-md-4 col-lg-4";
      if (this.type === "4cols") return "col-6 col-md-4 col-lg-4 col-xl-3";
      else {
        return "col-4";
      }
    },
    fakeArray: function () {
      let temp = [];
      for (let i = 0; i < this.perPage; i++) {
        temp.push(i);
      }
      return temp;
    },
  },
};
</script>
  