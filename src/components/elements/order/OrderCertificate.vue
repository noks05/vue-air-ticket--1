<template>
  <div class="container">
   <div class="order-wrap certificate-wrap">
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

        <div class="certificate-delivery">
          <div class="certificate-delivery-title">Способ доставки</div>

          <div class="certificate-delivery-content">
            <span class="certificate-marker delivery-provider-replace"></span>
            <p>
              Подарочный сертификат доступен для скачивания на странице «Заказы»
              в течении 60 минут после оплаты
            </p>
          </div>
        </div>

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

        <p class="certificate-policy order-price">
          <label>
            <input type="checkbox" />
            <span class="certificate-checkbox-marker"></span>
          </label>
          <span class="certificate-policy-text">
            <span> Согласен с условиями </span>
            <router-link class="certificate-link" to="#">
              Ограничение использования сертификата
            </router-link>
          </span>
        </p>

        <button
          class="order-btn order-submit order-submit--disabled"
          type="submit"
        >
          Оформить заказ
        </button>
      </form>
   </div>
  </div>
</template>

<script>
import CancelIcon from "@/assets/images/icons/iconsComp/CancelIcon.vue";

export default {
  components: {
    CancelIcon,
  },
  data() {
    return {
      rangeValue: 24,
    };
  },
  methods: {
    activeCancel(e) {
      const length = e.target?.value.trim().length;
      e.target.classList.toggle("order-input--active", !!length);
    },
    clearInputValue(e) {
      const clearBtn = e.target.closest(".order-clear");
      if (clearBtn) {
        console.log(clearBtn);
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

<style>
.certificate-wrap h2{
  margin-bottom: 16px;
}

.certificate-wrap .order-amount{
  margin-top: 0;
  margin-bottom: 24px;
}

.certificate-delivery {
  margin-top: 40px;
  margin-bottom: 23px;
  border-bottom: var(--border-grey);
}

.certificate-delivery-title {
  margin-bottom: 16px;
  font-size: 16px;
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  line-height: 100%;
  color: var(--grey-79);
}

.certificate-delivery-content {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px 24px;
}

.certificate-delivery-content p {
  font-size: 14px;
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  line-height: 100%;
  color: #000;
}

.certificate-marker {
  border-width: 8px;
}

.certificate-policy {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 33px;
}

.certificate-policy label {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 0;
  cursor: pointer;
}

.certificate-policy span,
.certificate-link {
  font-size: 14px;
}

.certificate-link {
  font-weight: 500;
  font-family: Gilroy-Medium !important;
  color: var(--text_color);
  text-decoration: underline;
}

</style>

<style>

.certificate-policy input[type="checkbox"] {
  display: none;
}

.certificate-checkbox-marker {
  display: block;
  min-width: 22px;
  max-width: 22px;
  min-height: 22px;
  max-height: 22px;
  border-radius: 4px;
  border: 1px solid var(--primary_bg);
  background-image: url("/src/assets/images/arrow-checkbox.svg");
  background-repeat: no-repeat;
  background-size: 14px 10px;
  background-position: center center;
  background-color: #fff;
  transition: background-color 0.2s;
}

.certificate-policy
  input[type="checkbox"]:checked
  + .certificate-checkbox-marker {
  background-color: var(--primary_bg);
}

.certificate-policy-text{
  display: flex;
  gap: 16px;
}

@media (max-width: 576px) {
  .certificate-delivery-content {
    gap: 14px;
    padding: 8px 0;
    align-items: initial;
  }

  .certificate-delivery-title {
    margin-bottom: 26px;
  }

  .certificate-delivery {
    border-bottom: none;
    margin-bottom: 7px;
  }

  .certificate-wrap .order-amount {
    margin-bottom: 32px;
  }

  .certificate-policy{
    margin-bottom: 37px;
    gap: 8px;
  }

  .certificate-policy-text{
    gap: 0;
    flex-direction: column;
  }

  .order-submit{
    margin-left: 0;
    width: 100%;
  }
}
</style>
