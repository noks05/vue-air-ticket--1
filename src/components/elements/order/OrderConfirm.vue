<template>
  <div class="container">
    <div class="order-wrap">
      <h2>Подтверждение заказа</h2>

      <form
        @submit.prevent="() => {}"
        @input.stop="(e) => activeCancel(e)"
        @click.stop="(e) => clearInputValue(e)"
      >
        <div class="confirm-box confirm-box_pb">
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

        <div class="confirm-box confirm-box_pb1 confirm-box_price">
          <h3 class="confirm-box-h3_mb">Ваш заказ</h3>
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
              <span class="order-price"> 1 х Детский мир, номинал 100 </span>
              <span class="order-money"> 317,46 бонусов </span>
            </li>
          </ul>
        </div>

        <div class="confirm-box">
          <h3>Способ оплаты</h3>
          <ul class="order-amount order-amount_pb confirm-box_price">
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
              <span class="order-price">
                Вы оплачиваете банковской картой:
              </span>
              <span class="order-money"> 0,00 ₽ </span>
            </li>
          </ul>

          <!-- slider  -->
          <div class="confirm-slider">
            <Slider v-model="rangeValue" />
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
  </div>
</template>

<script>
import Slider from "primevue/slider";

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
      if (clearBtn) {
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
.order-wrap {
  max-width: 783px;
}

.order-amount {
  margin-bottom: 0;
}

.order-amount_pb {
  margin-bottom: 17px;
}

.confirm-box {
  margin-bottom: 16px;
  padding: 24px;
  border-radius: var(--bdrs-7);
  letter-spacing: 0;
  -webkit-box-shadow: -1px 1px 4px 2px rgba(34, 60, 80, 0.06);
  -moz-box-shadow: -1px 1px 4px 2px rgba(34, 60, 80, 0.06);
  box-shadow: -1px 1px 4px 2px rgba(34, 60, 80, 0.06);
}

.confirm-box_mb {
  /* padding-bottom: px; */
}

.confirm-box_pb {
  padding-bottom: 32px;
}

.confirm-box_pb1 {
  padding-bottom: 22px;
}

.confirm-box h3 {
  margin-bottom: 24px;
  letter-spacing: 0;
  font-size: 18px;
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  line-height: 100%;
  color: var(--text_color);
}

.confirm-box h3.confirm-box-h3_mb {
  margin-bottom: 16px;
}

.confirm-pay {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
}

.confirm-pay button {
  margin-left: 0;
}

.confirm-policy {
  max-width: 400px;
  text-align: end;
  font-size: 12px;
}

.confirm-policy a {
  font-size: 12px;
  line-height: 125%;
  text-decoration: underline;
}

.confirm-amount {
  gap: 0;
  margin-top: 0;
}

.confirm-amount li {
  padding-block: 16px;
}

.confirm-amount li:not(:last-child) {
  border-bottom: var(--border-grey);
}

.confirm-slider {
  margin-bottom: 17px;
}

.confirm-slider-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.confirm-slider-text span {
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  font-size: 16px;
}

.confirm-red-text span {
  color: #e64646;
}
</style>

<style>
.confirm-box .p-slider {
  margin-bottom: 0.4rem;
  background-color: #e6e6e6;
}

/* .confirm-box .p-slider-range {
  height: 3px;
  background-color: var(--primary_bg);
} */
.confirm-box .p-slider-handle {
  height: 20px;
  width: 20px;
}

@media (max-width: 576px) {
  .confirm-box {
    padding: 15px;
    padding-top: 10px;
    padding-bottom: 14px;
  }

  .confirm-box .order-price {
    max-width: 272px;
  }

  .confirm-box_pb1 {
    padding-top: 17px;
    margin-bottom: 14px;
  }

  .confirm-box_pb {
    margin-bottom: 15px;
  }

  .confirm-box .order-money {
    text-align: end;
    font-size: 14px;
  }

  .confirm-box_price .order-price,
  .confirm-box_price .order-price {
    max-width: 155px;
  }

  .confirm-box .order-amount {
    margin-top: 0;
  }

  .confirm-box h3.confirm-box-h3_mb {
    margin-bottom: 15px;
  }

  .confirm-box .order-amount_pb {
    margin-bottom: 22px;
  }

  .confirm-amount li {
    align-items: flex-start;
    padding-block: 8px;
  }

  .confirm-box .order-amount li{
    align-items: flex-start;
  }

  .confirm-box .confirm-slider-text span {
    font-size: 14px;
    font-family: Gilroy-Regular !important;
    font-weight: 400;
  }

  .confirm-slider {
    margin-bottom: 10px;
  }

  .confirm-box .confirm-pay{
    flex-direction: column-reverse;
  }

  .confirm-pay button{
    width: 100%;
  }

  .confirm-box .confirm-policy {
    max-width: 100%;
    text-align: center;
  }
}
</style>
