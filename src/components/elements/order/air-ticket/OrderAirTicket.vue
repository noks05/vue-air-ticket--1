<template>
  <div class="container">
    <div class="order-wrap air-ticket">
      <h2>Оформление авиабилета</h2>

      <form
        @submit.prevent="() => {}"
        @input.stop="(e) => activeCancel(e)"
        @click.stop="(e) => clearInputValue(e)"
      >
        <h3 class="air-ticket-h3">Контактные данные</h3>

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
            class="order-input air-ticket-input_h"
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
            class="order-input air-ticket-input_h"
            name="phone"
            type="text"
            placeholder="+7 ("
          />
          <button class="order-clear" type="button">
            <CancelIcon />
          </button>
        </label>

        <h3 class="air-ticket-h3 air-ticket-h3_mt">Данные о пассажирах</h3>

        <DataPassenger class="air-ticket-block" title="Взрослый" />
        <DataPassenger class="air-ticket-block" title="Ребёнок" />
        <DataPassenger class="air-ticket-block" title="Младенец" />

        <div class="air-ticket-amount">
          <span class="air-ticket-amount-text"> Сумма заказа: </span>
          <span class="air-ticket-amount-money"> 475,66 бонусов </span>
        </div>

        <p class="certificate-policy order-price">
          <label>
            <input type="checkbox" />
            <span class="certificate-checkbox-marker"></span>
            <span> Подтверждаю правильность введённых данных </span>
          </label>
        </p>

        <button
          class="order-btn order-submit order-submit--disabled"
          type="submit"
        >
          Забронировать и оплатить
        </button>
      </form>
    </div>
  </div>
</template>


<script>
import CancelIcon from "@/assets/images/icons/iconsComp/CancelIcon.vue";
import DataPassenger from "./DataPassenger.vue";

export default {
  components: {
    CancelIcon,
    DataPassenger,
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

<style scoped>
.air-ticket-h3 {
  margin-bottom: 16px;
  font-size: 20px;
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;
  color: #000;
}

.air-ticket-h3_mt {
  margin-top: 40px;
}

.air-ticket-input_h {
  height: 68px;
}

.air-ticket-block {
  margin-bottom: 16px;
}

.air-ticket-replace {
  border: var(--border-grey);
}

.air-ticket-amount {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 30px;
}

.air-ticket-amount-text {
  font-size: 18px;
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  line-height: 100%;
  color: var(--text_color);
}

.air-ticket-amount-money {
  font-size: 24px;
  font-family: Gilroy-SemiBold !important;
  font-weight: 600;
  line-height: 100%;
  color: var(--text_color);
}

@media (max-width: 576px) {
  .air-ticket h2 {
    margin-bottom: 15px;
  }

  .air-ticket-h3 {
    font-size: 18px;
  }

  .air-ticket-amount-money{
    font-size: 20px;
  }

  .air-ticket-amount{
    margin-top: 24px;
    margin-bottom: 16px;
  }

  .air-ticket .certificate-policy {
    margin-bottom: 21px;
  }
}
</style>


<style>
.air-ticket h2 {
  margin-bottom: 23px;
}

.air-ticket .address-add-select {
  margin-bottom: 0;
}

.air-ticket .address-add-select-wrap:not(:last-child) {
  margin-bottom: 8px;
}
</style>
