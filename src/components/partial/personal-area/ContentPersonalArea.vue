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
    <div v-if="$route.query.titlePage === 'Личные данные'">
      <UserDataPA />
    </div>
  </div>
</template>

<script>
import OrderPA from "./pages-personal-area/OrderPA.vue";
import FavoritesPA from "./pages-personal-area/FavoritesPA.vue";
import OperationPA from "./pages-personal-area/OperationPA.vue";
import UserDataPA from "./pages-personal-area/UserDataPA.vue";

export default {
  components: {
    OrderPA,
    FavoritesPA,
    OperationPA,
    UserDataPA,
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
