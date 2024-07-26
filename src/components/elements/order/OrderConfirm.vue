<template>
  <div class="order-container">
    <h2>Подтверждение заказа</h2>

    <form
      @submit.prevent="() => {}"
      @input.stop="(e) => activeCancel(e)"
      @click.stop="(e) => clearInputValue(e)"
    >
      <div class="confirm-box">
        <h3>Способ получения</h3>
        <ul class="order-amount">
          <li>
            <p class="order-price">
              Курьером до двери Boxberry 02.07.2024, Волгоградская обл.,
              г.Волжский, ул.Маяковского, д.166, кв.33
            </p>
          </li>
          <li>
            <p class="order-price">
              Семёнов Александр Иванович, +7 909 379-48-88, ghdhd@gmail.com
            </p>
          </li>
        </ul>
      </div>

      <div class="confirm-box">
        <h3>Ваш заказ</h3>
        <ul class="order-amount confirm-amount">
          <li>
            <span class="order-price">
              1 х Отдельностоящая микроволновая печь CASO M 20 EASY
            </span>
            <span class="order-money"> 800 354,50 бонусов </span>
          </li>
          <li>
            <span class="order-price"> 1 х Детский мир, номинал 100 </span>
            <span class="order-money"> 317,46 бонусов </span>
          </li>
          <li>
            <span class="order-price">
              1 х Отдельностоящая микроволновая печь CASO M 20 EASY
            </span>
            <span class="order-money"> 800 354,50 бонусов </span>
          </li>
        </ul>
      </div>

      <div class="confirm-box">
        <h3>Способ оплаты</h3>
        <ul class="order-amount">
          <li>
            <span class="order-price"> Стоимость товаров: </span>
            <span class="order-money"> 800 354,50 бонусов </span>
          </li>
          <li>
            <span class="order-price"> Стоимость доставки: </span>
            <span class="order-money"> 317,46 бонусов </span>
          </li>
          <li>
            <span class="order-price">
              Стоимость заказа с учётом доставки:
            </span>
            <span class="order-money"> 3 592,06 бонусов </span>
          </li>
          <li class="confirm-red-text">
            <span class="order-price"> Вам не хватает </span>
            <span class="order-money"> 0,00 ₽ </span>
          </li>
          <li>
            <span class="order-price"> Вы оплачиваете бонусами: </span>
            <span class="order-money"> 3 592,06 бонусов </span>
          </li>
          <li>
            <span class="order-price"> Вы оплачиваете банковской картой: </span>
            <span class="order-money"> 0,00 ₽ </span>
          </li>
        </ul>

        <!-- slider  -->
        <div class="confirm-slider">
          <Slider
            v-model="rangeValue"
          />
          <span class="confirm-slider-text">
            <span>Деньги</span>
            <span>Баллы</span>
          </span>
        </div>

        <div class="confirm-pay">
          <p class="confirm-policy order-price">
            Нажимая “Оплатить” вы соглашаетесь с 
            <a class="order-price" href="#">
              публичной офертой агента Безопасность платежей
            </a>
          </p>

          <button class="order-btn" type="button">Оплатить</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Slider from 'primevue/slider';

export default {
  components: {
    Slider,
  },
  data() {
    return {
      rangeValue: 24,
    };
  },
  methods: {
    activeCancel(e) {
      const length = e.target.value.trim().length;
      e.target.classList.toggle("order-input--active", !!length);
    },
    clearInputValue(e) {
      const clearBtn = e.target.closest(".order-clear");
      if(clearBtn){
        const input = clearBtn?.previousElementSibling;
        input.value = "";
        input.classList.remove("order-input--active");
      }
    },
  },
  computed: {},
  mounted() {},
};
</script>

<style scoped>
.confirm-box {
  padding: 24px;
  border-radius: var(--bdrs-7);
  box-shadow: var(--shadow-light);
}

.confirm-box h3 {
  margin-bottom: 24px;
  font-size: 18px;
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  line-height: 100%;
  color: var(--text_color);
}

.confirm-pay {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
}

.confirm-policy {
  max-width: 400px;
  text-align: end;
  font-size: 12px;
}

.confirm-policy a {
  font-size: 12px;
  text-decoration: underline;
}

.confirm-amount {
  gap: 0;
}

.confirm-amount li {
  padding-block: 16px;
}

.confirm-amount li:not(:last-child) {
  border-bottom: var(--border-grey);
}

.confirm-slider{
  margin-bottom: 24px;
}

.confirm-slider-text{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.confirm-slider-text span{
  font-family: Gilroy-Medium !important;
  font-weight: 500;
}

.confirm-red-text span{
  color: #E64646;
}
</style>

<style>
.confirm-box .p-slider {
  margin-bottom: 0.4rem;
  background-color: #E6E6E6;
}
/* .confirm-box .p-slider-range {
  height: 3px;
  background-color: var(--primary_bg);
} */
.confirm-box .p-slider-handle {
  height: 20px;
  width: 20px;
}
</style>
