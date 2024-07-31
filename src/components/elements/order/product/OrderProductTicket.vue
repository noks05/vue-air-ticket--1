<template>
  <div class="container order-product-ticket">
    <div class="order-wrap">
      <h2>Оформление заказа</h2>

      <form
        @submit.prevent="() => {}"
        @input.stop="(e) => activeCancel(e)"
        @click.stop="(e) => clearInputValue(e)"
      >
        <label class="order-input-container order-input-container-required">
          <span class="order-input-label"> ФИО </span>
          <input
            class="order-input"
            name="ФИО"
            type="text"
            placeholder="Кириллицей"
          />
          <button class="order-clear" type="button">
            <CancelIcon />
          </button>
        </label>

        <label class="order-input-container order-input-container-required">
          <span class="order-input-label"> Адрес электронной почты </span>
          <input
            class="order-input"
            name="email"
            type="text"
            placeholder="Введите эл. почту"
          />
          <button class="order-clear" type="button">
            <CancelIcon />
          </button>
        </label>

        <label class="order-input-container order-input-container-required">
          <span class="order-input-label"> Телефон </span>
          <input
            class="order-input"
            name="phone"
            type="text"
            placeholder="+7 ("
          />
          <button class="order-clear" type="button">
            <CancelIcon />
          </button>
        </label>

        <p class="order-paragraph">Указать дополнительный номер телефона</p>

        <label class="order-input-container">
          <span class="order-input-label"> Телефон дополнительный </span>
          <input
            class="order-input"
            name="add phone"
            type="text"
            placeholder="+7 ("
          />
          <button class="order-clear" type="button">
            <CancelIcon />
          </button>
        </label>

        <label class="order-input-container order-input-container-required">
          <span class="order-input-label"> Город, улица, номер дома </span>
          <input
            class="order-input"
            name="address"
            type="text"
            placeholder="Введите адрес"
          />
          <button class="order-clear" type="button">
            <CancelIcon />
          </button>
        </label>

        <label class="order-input-container">
          <span class="order-input-label"> Квартира </span>
          <input
            class="order-input"
            name="flat"
            type="text"
            placeholder="Введите номер квартиры"
          />
          <button class="order-clear" type="button">
            <CancelIcon />
          </button>
        </label>

        <input class="order-index" type="text" name="indexCountry" value="Индекс" readonly>

        <MethodDelivery
          :products="[
            'Чайник Xiaomi Thermostatic Electric Kettle 2 CN, белый',
            'Чайник Xiaomi Thermostatic Electric Kettle 2 CN, красный',
          ]"
        />

        <MethodDelivery :products="['Микроволновая печь Bosch']" />

        <ul class="order-amount">
          <li>
            <span class="order-price"> Цена подарка: </span>
            <span class="order-money"> 475,66 бонусов </span>
          </li>
          <li>
            <span class="order-price"> Цена доставки: </span>
            <span class="order-money"> 0,00 бонусов </span>
          </li>
          <li>
            <span class="order-price"> Итого с учетом доставки: </span>
            <span class="order-money"> 475,66 бонусов </span>
          </li>
        </ul>

        <!-- router-link для теста, так тут этой ссылки быть не должно  -->
        <router-link
          :to="{
            path: $route.path,
            query: { ...$route.query, orderConfirm: 'Подтверждение заказа' },
          }"
        >
          <button
            class="order-btn order-submit order-submit--disabled"
            type="submit"
          >
            Оформить заказ
          </button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
import CancelIcon from "@/assets/images/icons/iconsComp/CancelIcon.vue";
import MethodDelivery from "./MethodDelivery.vue";

export default {
  components: {
    CancelIcon,
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
    clearInputValue(e) {
      const clearBtn = e.target.closest(".order-clear");
      if (clearBtn) {
        const input = clearBtn?.previousElementSibling;
        input.value = "";
        input.classList.remove("order-input--active");
      }
    },
  },
};
</script>

<style>
.order-wrap {
  width: 100%;
  max-width: 883px;
  margin-bottom: 60px;
}

.order-product-ticket .order-wrap {
  margin-top: -26px;
}

.order-wrap h2 {
  margin-bottom: 24px;
  font-size: 24px;
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;
  color: #000;
}

.order-input-container {
  position: relative;
  display: flex;
  width: 100%;
}

.order-input-container-required::before {
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
  margin-bottom: 17px;
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
  height: 66px;
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
  display: none;
  height: 18px;
  width: 18px;
  padding: 0;
  transform: translateY(-50%);
  z-index: 10;
}

.order-input.order-input--active + .order-clear {
  display: flex;
}

.order-paragraph {
  padding: 0;
  margin-top: -9px;
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
  width: 100%;
  margin-top: -6px;
  margin-bottom: 41px;
  padding: 16px;
  border-radius: var(--bdrs-7);
  border: none;
  font-size: 16px;
  font-family: Gilroy-SemiBold !important;
  font-weight: 600;
  line-height: 100%;
  background-color: var(--light_gray);
  color: var(--grey-79);
}

.order-amount {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  margin-bottom: 32px;
}

.order-amount li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.order-money,
.order-price {
  font-size: 16px;
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  line-height: 100%;
  color: var(--grey-79);
}

.order-money {
  color: var(--text_color);
}

.order-submit {
  display: block;
  margin-left: auto;
}

.order-submit.order-submit--disabled {
  opacity: 0.5;
  pointer-events: none;
}

.order-clear {
  height: 20px;
  width: 20px;
}
</style>

<style>
.order-clear svg {
  height: 20px;
  width: 20px;
}

.order-clear svg path {
  stroke: #c8c8c8;
}

@media (max-width: 576px) {

  .order-wrap h2 {
    font-size: 22px;
  }
  .order-product-ticket .order-wrap {
    margin-top: 0;
  }
  .order-product-ticket .order-container container{
    padding-inline: 16px;
  }

  .order-product-ticket .order-wrap h2{
    margin-bottom: 16px;
    font-size: 22px;
  }

  .order-product-ticket .order-index{
    margin-bottom: 36px;
  }

  .order-product-ticket .delivery-top{
    padding: 15px;
  }

  .order-product-ticket .delivery-products {
    margin-bottom: 12px;
  }

  .order-product-ticket .delivery-products p{
    font-family: Gilroy-Medium !important;
    font-weight: 500;
    font-size: 18px;
  }

  .order-product-ticket button{
    margin-left: 0;
    width: 100%;
  }

  .order-product-ticket .delivery-bottom {
    padding-top: 16px;
    padding-inline: 15px;
  }

  .order-product-ticket .delivery-provider {
    padding-inline: 0;
    /* padding-top: 28px;   */
  }

  .order-product-ticket .delivery-provider:last-child {
    padding-bottom: 12px;
  }

  .order-product-ticket .delivery-provider-item {
    gap: 17px;
    padding-left: 0;
    padding-bottom: 17px;
  }

  .order-product-ticket .delivery-provider-item:last-child {
    padding-bottom: 0;
  }

  .order-product-ticket .delivery-provider-address {
    font-size: 14px;
    line-height: 113%;
  }

  .order-product-ticket .delivery-provider-date {
    line-height: 113%;
    font-size: 13px;
  }

  .order-product-ticket .order-amount {
    margin-bottom: 25px;
    margin-top: 27px;
  }

  .order-amount .order-price{
    font-size: 14px;
  }

  .order-amount .order-money{
    font-size: 16px;
  }
}
</style>
