<template>
  <div class="delivery">
    <div class="delivery-top">
      <div class="delivery-products">
        <p v-for="(prod, i) in products" :key="i">
          {{ prod }}
        </p>
      </div>

      <button
        :class="[
          'order-btn delivery-btn',
          choiceDelivery ? 'delivery-btn--active' : '',
        ]"
        type="button"
        @click.stop="choiceDelivery = !choiceDelivery"
      >
        Выбрать способ доставки
      </button>
    </div>

    <div class="delivery-bottom" v-if="choiceDelivery">
      <div
        class="delivery-methods"
      >
        <button
          :class="[
            'order-btn delivery-btn',
            himselfExport ? 'delivery-btn--active' : '',
          ]"
          type="button"
          @click.stop="himselfExport = true"
        >
          Самовывоз
        </button>
        <button
          :class="[
            'order-btn delivery-btn',
            !himselfExport ? 'delivery-btn--active' : '',
          ]"
          type="button"
          @click.stop="himselfExport = false"
        >
          Курьером
        </button>
      </div>

      <ProviderDelivery provider="Boxberry"/>
      <ProviderDelivery provider="СДЭК"/>

    </div>
  </div>
</template>

<script>
import ProviderDelivery from "./ProviderDelivery.vue";

export default {
  props: {
    products: Array,
  },
  components: {
    ProviderDelivery,
  },
  data() {
    return {
      himselfExport: true,
      choiceDelivery: false,
    };
  },
};
</script>

<style>
.delivery {
  margin-bottom: 16px;
  border-radius: var(--bdrs-7);
  border: var(--border-grey);
}

.delivery-top {
  display: flex;
  justify-content: space-between;
  padding: 23px;
}

.delivery-products {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}

.delivery-products p {
  font-size: 16px;
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  line-height: 100%;
  color: var(--text_color);
}

.delivery-bottom {
  position: relative;
  padding: 24px;
  padding-bottom: 20px;
}

.delivery-bottom::before {
  position: absolute;
  content: "";
  top: 0;
  left: 24px;
  right: 24px;
  height: 1px;
  padding-inline: 24px;
  border-top: var(--border-grey);
  z-index: 10;
}

.delivery-methods {
  display: flex;
  justify-content: flex-end;
}
.delivery-methods button{
  margin: 0;
}

.order-btn.delivery-btn {
  color: #fff;
  background-color: var(--primary_bg);
}

.order-btn.delivery-btn:hover,
.order-btn.delivery-btn--active {
  color: var(--primary_bg);
  background-color: var(--light_gray);
}
</style>

