<template>
  <div class="p-area-content-wrap">
    <div v-if="$route.query.titlePage === 'Операции'">
      <OperationPA />
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
import OperationPA from "./pages-personal-area/OperationPA.vue";

export default {
  components: {
    OrderPA,
    FavoritesPA,
    OperationPA,
  },
  props: {},
  data: function () {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.p-area-content-wrap{
  width: 100%;
  max-width: 884px;
}
</style>
