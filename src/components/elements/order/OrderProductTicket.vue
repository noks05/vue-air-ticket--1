<template>
  <div class="order-container">
    <h2>Оформление заказа</h2>

    <form @submit.prevent="() => {}" @input.stop="(e) => activeCancel(e)">
      <label class="order-input-container">
        <span class="order-input-label"> ФИО </span>
        <input class="order-input" name="ФИО" type="text" placeholder="Кириллицей" />
        <button class="order-clear" type="submit">
          <CancelIcon />
        </button>
      </label>

      <p class="order-paragraph">Указать дополнительный номер телефона</p>

      <div class="order-index">Индекс</div>

      <MethodDelivery :products="[
          'Чайник Xiaomi Thermostatic Electric Kettle 2 CN, белый',
          'Чайник Xiaomi Thermostatic Electric Kettle 2 CN, красный']" />

      <MethodDelivery :products="[
          'Микроволновая печь Bosch']" />

      <!-- router-link для теста, так тут этой ссылки быть не должно  -->
      <router-link :to="{
          path: $route.path,
          query: { ...$route.query, orderConfirm: 'Подтверждение заказа' },
        }">
        <button class="order-btn" type="submit">Оформить заказ</button>
      </router-link>
    </form>
  </div>
</template>

<script>
import CancelIcon from "@/assets/images/icons/iconsComp/CancelIcon.vue";
import ArrowDownIcon from "@/assets/images/icons/iconsComp/ArrowDownIcon.vue";
import MethodDelivery from "./MethodDelivery.vue";

export default {
  components: {
    CancelIcon,
    ArrowDownIcon,
    MethodDelivery,
  },
  data() {
    return {};
  },
  methods: {
    activeCancel(e) {
      const length = e.target.value.trim().length;
      e.target.classList.toggle("order-input--active", !!length);
    },
  },
  computed: {},
  mounted() {},
};
</script>

<style>
.order-container {
  width: 100%;
  max-width: 883px;
  margin-inline: auto;
  margin-top: 16px;
  margin-bottom: 60px;
}

.order-container h2 {
  margin-bottom: 24px;
  font-size: 24px;
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  line-height: 100%;
  color: #000;
}

.order-input-container {
  position: relative;
  display: flex;
  width: 100%;
}

.order-input-container::before {
  content: "";
  position: absolute;
  top: 50%;
  right: 16px;
  display: flex;
  height: 8px;
  width: 8px;
  transform: translateY(-50%);
  background-image: url("/src/assets/images/required.svg");
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 10;
}

.order-input-container:not(:last-child) {
  margin-bottom: 16px;
}

.order-input-label {
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 12px;
  font-family: Gilroy-SemiBold !important;
  font-weight: 600;
  line-height: 100%;
  color: var(--grey-79);
  z-index: 10;
}

.order-input {
  position: relative;
  width: 100%;
  height: 64px;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 70px;
  border-radius: var(--bdrs-7);
  border: var(--border-grey);
  font-size: 16px;
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  line-height: 100%;
  color: var(--text_color);
}

.order-input:focus {
  outline: none;
  background-color: var(--light_gray);
}

.order-input::placeholder {
  font-size: 16px;
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  line-height: 100%;
  color: #c8c8c8;
}

.order-clear {
  position: absolute;
  top: 50%;
  right: 45px;
  /* display: none; */
  display: flex;
  height: 18px;
  width: 18px;
  padding: 0;
  transform: translateY(-50%);
  z-index: 10;
}

.order-input.order-input--active + order-clear {
  display: flex;
}

.order-paragraph {
  padding: 0;
  margin-top: 8px;
  margin-bottom: 16px;
  font-size: 14px;
  font-family: Gilroy-SemiBold !important;
  font-weight: 600;
  line-height: 100%;
  color: var(--primary_bg);
}

.order-btn {
  padding: 12px 24px;
  border-radius: var(--bdrs-7);
  font-size: 16px;
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  line-height: 100%;
  color: #fff;
  background-color: var(--primary_bg);
  transition: background-color 0.2s, color 0.2s;
}

.order-btn:hover {
  color: var(--primary_bg);
  background-color: var(--light_gray);
}

.order-index {
  height: 48px;
  padding: 16px;
  border-radius: var(--bdrs-7);
  font-size: 16px;
  font-family: Gilroy-SemiBold !important;
  font-weight: 600;
  line-height: 100%;
  color: var(--grey-79);
}
</style>

<style>
.order-clear svg path {
  stroke: #c8c8c8;
}
</style>
