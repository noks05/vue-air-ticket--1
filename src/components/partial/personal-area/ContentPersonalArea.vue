<template>
  <div class="wrap">
    <div v-if="$route.query.page === 'Операции'">
      <h1>operation</h1>
    </div>
    <div v-if="$route.query.page === 'Заказы'">
      <OrderPersonalArea />
    </div>
    <div v-if="$route.query.page === 'Избранное'">
      <h1>password</h1>
    </div>
  </div>
</template>

<script>
import OrderPersonalArea from "./pages-personal-area/OrderPersonalArea.vue";

export default {
  components: {
    OrderPersonalArea,
  },
  props: {},
  data: function () {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
