<template>
  <headerDef />

  <nav
    aria-label="breadcrumb"
    class="breadcrumb-nav breadcrumb-nav_mb breadcrumb-nav_mt"
  >
    <div class="container">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Главная</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="{ path: $route.path }">Корзина</router-link>
        </li>
        <li class="breadcrumb-item active" v-for="(crumb, index) in crumbs" :key="index">
          <router-link
            :to="{path: $route.path, query:{[crumb[0]]: crumb[1]}}"
            :style="
              index + 1 === crumbs.length
                ? 'color: #000 !important; text-transform: none !important; pointer-events: none;'
                : ''
            "
          >
            {{ crumb[1] }}
          </router-link>
        </li>
      </ol>
    </div>
  </nav>

  <div class="order-container">
    <OrderProductTicket
      v-if="$route.query.order === 'Оформление заказа'"
    />
    <!-- <OrderProductTicket
      v-if="$route.path.order === 'Подтверждение заказа'"
    /> -->
  </div>
</template>

<script>
import headerDef from "@/components/partial/headers/HeaderDefault.vue";
import OrderProductTicket from "@/components/elements/order/OrderProductTicket.vue";
export default {
  components: {
    headerDef,
    OrderProductTicket,
  },
  data() {
    return {};
  },
  computed: {
    crumbs() {
      const crumbsArr = [];
      const order = this.$route.query.order;
      const orderConfirm = this.$route.query.orderConfirm;
      order && crumbsArr.push(['order',order])
      orderConfirm && crumbsArr.push(['orderConfirm', orderConfirm])

      return crumbsArr;
    }
  },
  mounted() {
    console.log(this.$route.query, this.crumbs)
  },
};
</script>

<style scoped></style>
