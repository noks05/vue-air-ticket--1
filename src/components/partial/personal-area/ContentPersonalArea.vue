<template>
  <div
    :class="[
      'p-area-content-wrap',
      $route.query.titlePage === 'Заказы' ? 'p-area-content-wrap_op' : '',
      $route.query.titlePage === 'Адреса доставки' && !$route.query.titleAddress
        ? 'p-area-content-wrap_op'
        : '',
    ]"
  >
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
    <div
      v-if="
        $route.query.titlePage === 'Адреса доставки' &&
        !$route.query.titleAddress
      "
    >
      <AddressDeliveryPA />
    </div>
    <div
      v-if="
        $route.query.titlePage === 'Адреса доставки' &&
        $route.query.titleAddress
      "
    >
      <AddressAddPA />
    </div>
  </div>
</template>

<script>
import OrderPA from "./pages-personal-area/OrderPA.vue";
import FavoritesPA from "./pages-personal-area/FavoritesPA.vue";
import OperationPA from "./pages-personal-area/OperationPA.vue";
import UserDataPA from "./pages-personal-area/UserDataPA.vue";
import AddressDeliveryPA from "./pages-personal-area/AddressDeliveryPA.vue";
import AddressAddPA from "./pages-personal-area/AddressAddPA.vue";

export default {
  components: {
    OrderPA,
    FavoritesPA,
    OperationPA,
    UserDataPA,
    AddressDeliveryPA,
    AddressAddPA,
  },
  props: {},
  data: function () {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.p-area-content-wrap {
  width: 100%;
  max-width: 884px;
}
.p-area-content-wrap_op {
  margin-left: auto;
}
</style>
