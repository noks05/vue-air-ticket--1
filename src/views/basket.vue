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
      v-if="$route.query.order && !$route.query.orderConfirm"
    />
    <OrderConfirm
      v-if="$route.query.orderConfirm"
    />
    <OrderCertificate
      v-if="$route.query.orderCer"
    />
    <OrderAirTicket
      v-if="$route.query.orderAir"
    />
  </div>
</template>

<script>
import headerDef from "@/components/partial/headers/HeaderDefault.vue";
import OrderProductTicket from "@/components/elements/order/product/OrderProductTicket.vue";
import OrderConfirm from "@/components/elements/order/OrderConfirm.vue";
import OrderCertificate from "@/components/elements/order/OrderCertificate.vue";
import OrderAirTicket from "@/components/elements/order/air-ticket/OrderAirTicket.vue";

export default {
  components: {
    headerDef,
    OrderProductTicket,
    OrderConfirm,
    OrderCertificate,
    OrderAirTicket,
  },
  data() {
    return {};
  },
  computed: {
    crumbs() {
      const crumbsArr = [];
      const order = this.$route.query.order;
      const orderCer = this.$route.query.orderCer;
      const orderAir = this.$route.query.orderAir;
      const orderConfirm = this.$route.query.orderConfirm;
      order && crumbsArr.push(['order',order])
      orderCer && crumbsArr.push(['orderCer',orderCer])
      orderAir && crumbsArr.push(['orderAir',orderAir])
      orderConfirm && crumbsArr.push(['orderConfirm', orderConfirm])

      return crumbsArr;
    },
    checkQuery1(){
      return this.$route.query.order === 'Оформление заказа'
    },
    checkQuery2(){
      return this.$route.query.order === 'Оформление заказа(сертификат)'
    },
  },
  mounted() {
    console.log(this.$route.query)
  },
};
</script>

<style scoped></style>
