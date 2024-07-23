<template>
  <div class="wrap">
    <div v-if="$route.query.titlePage === 'Операции'">
      <h1>Операции</h1>
    </div>
    <div v-if="$route.query.titlePage === 'Заказы'">
      <OrderPA />
    </div>
    <div v-if="$route.query.titlePage === 'Избранное'">
      <FavoritesPA />
    </div>
  </div>
</template>

<script>
import OrderPA from "./pages-personal-area/OrderPA.vue";
import FavoritesPA from "./pages-personal-area/FavoritesPA.vue";

export default {
  components: {
    OrderPA,
    FavoritesPA,
  },
  props: {},
  data: function () {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.wrap{
  width: 100%;
}</style>
