<template>
  <div class="product product-7 text-center">
    <figure class="product-media">
      <router-link to="/product/default/">
        <img :src="`${product.sm_pictures[0].url}`" alt="Product" :width="product.sm_pictures[0].width"
          :height="product.sm_pictures[0].height" class="product-image" />
        <img :src="`${product.sm_pictures[1].url}`" alt="Product" :width="product.sm_pictures[1].width"
          :height="product.sm_pictures[1].height" class="product-image-hover" v-if="product.sm_pictures[1]" />
      </router-link>
    </figure>
    <div class="product-body">
      <div class="product-cat" style="text-align: start">
        <span v-for="(cat, index) of product.category" :key="index">
          <router-link :to="{ path: '/shop/sidebar/list', query: { category: cat.slug } }">{{ cat.name }}</router-link>
          {{ index < product.category.length - 1 ? "," : "" }} </span>
      </div>
      <h3 class="product-title">
        <router-link to="/product/default/">{{
          product.name
        }}</router-link>
      </h3>
      <div class="product-price" v-if="product.stock == 0" key="outPrice">
        <span class="out-price">{{ product.price.toFixed(2) }}</span>
      </div>
      <template v-else>
        <div class="product-price" v-if="minPrice == maxPrice">
          {{ formatNumber(minPrice.toFixed(2)) }}
        </div>
        <template v-else>
          <div class="product-price" v-if="product.variants.length == 0">
            <span class="new-price">{{ formatNumber(minPrice.toFixed(2)) }}</span>
            <span class="old-price">{{ formatNumber(maxPrice.toFixed(2)) }}</span>
          </div>
          <div class="product-price" v-else>
            {{ formatNumber(minPrice.toFixed(2)) }}&ndash;{{ formatNumber(maxPrice.toFixed(2)) }}
          </div>
        </template>
        <div class="ratings-container d-flex justify-start">
          <div class="ratings_star">
            <svg v-for="(star, index) in totalStars" :key="index" :fill="star.color" width="12" height="12"
              viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.70897 11.5823C2.41947 11.7308 2.09097 11.4705 2.14947 11.1383L2.77197 7.59076L0.129717 5.07376C-0.117033 4.83826 0.0112166 4.40776 0.341967 4.36126L4.01547 3.83926L5.65347 0.594009C5.80122 0.301509 6.20097 0.301509 6.34872 0.594009L7.98672 3.83926L11.6602 4.36126C11.991 4.40776 12.1192 4.83826 11.8717 5.07376L9.23022 7.59076L9.85272 11.1383C9.91122 11.4705 9.58272 11.7308 9.29322 11.5823L5.99997 9.89026L2.70897 11.5823Z" />
            </svg>
          </div>
          <div class="ratings-text">( {{ product.review }} Reviews )</div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { baseUrl } from "@/repositories/repository";
import store from "@/store";
export default {
  props: {
    product: Object,
  },
  data: function () {
    return {
      baseUrl: baseUrl,
      maxPrice: 0,
      minPrice: 99999,
    };
  },
  computed: {
    totalStars() {
      const filledStars = this.product?.ratings;
      const totalStars = 5;
      const stars = [];
      for (let i = 0; i < totalStars; i++) {
        stars.push({ color: i < filledStars ? "#FCB941" : "#EBEBEB" });
      }
      return stars;
    },
  },

  created: function () {
    let min = this.minPrice;
    let max = this.maxPrice;
    this.product.variants.map((item) => {
      if (min > item.price) min = item.price;
      if (max < item.price) max = item.price;
    }, []);

    if (this.product.variants.length == 0) {
      min = this.product.sale_price
        ? this.product.sale_price
        : this.product.price;
      max = this.product.price;
    }

    this.minPrice = min;
    this.maxPrice = max;
  },
  methods: {
    ...mapActions("cart", ["addToCart"]),
    ...mapActions("wishlist", ["addToWishlist"]),
    ...mapActions("compare", ["addToCompare"]),
    isInWishlist(product) {
      store.commit("isInWishlist", product);
    },
    isInCompare(product) {
      this.$store.commit("isInCompare", product);
    },
    canAddToCart(product, qty) {
      this.$store.getters("canAddToCart", { product, qty });
    },
    addToCompare(product) {
      this.$store.commit("addToCompare", product);
    },
    addToWishlist(product) {
      this.$store.commit("addToWishlist", product);
    },

    formatNumber(number) {
      return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    // quickView: function () {
    //   this.$modal.show(
    //     () => import("@/components/elements/modals/QuickViewModal.vue"),
    //     {
    //       product: this.product,
    //     },
    //     { width: "1030", height: "auto", adaptive: true }
    //   );
    // },
  },
};
</script>
