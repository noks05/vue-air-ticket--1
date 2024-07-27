<template>
  <div class="user-data-wrap">
    <form
      @submit.prevent="() => (allUsers = [...allUsers, 'new user'])"
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
        <span class="order-input-label"> Тип документа </span>
        <input class="order-input" name="type doc" type="text" placeholder="" />
        <button class="order-clear" type="button">
          <CancelIcon />
        </button>
      </label>

      <label class="order-input-container order-input-container-required">
        <span class="order-input-label"> Номер документа </span>
        <input
          class="order-input"
          name="number doc"
          type="text"
          placeholder="Введите номер квартиры"
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

      <div class="user-data-btns">
        <button
          class="order-btn user-data-cancel-form"
          type="button"
          @click.stop="removeFormAddUser = !removeFormAddUser"
        >
          Отмена
        </button>
        <button class="order-btn" type="submit">Сохранить</button>
      </div>
    </form>

    <h4 class="user-data-title">Все пользователи</h4>

    <ul class="user-data-list">
      <li v-for="it in items" :key="it">
        <div class="user-data-name">{{ it }}</div>

        <div class="user-data-edit">
          <button class="user-data-pen" type="button">
            <PenIcon />
          </button>
          <button class="user-data-clear" type="button">
            <CancelBoldIcon />
          </button>
        </div>
      </li>
    </ul>

    <button class="order-btn" type="button" @click="() => {}">
      Добавить пользователя
    </button>
  </div>
</template>

<script>
import CancelBoldIcon from "@/assets/images/icons/iconsComp/CancelBoldIcon.vue";
import CancelIcon from "@/assets/images/icons/iconsComp/CancelIcon.vue";
import PenIcon from "@/assets/images/icons/iconsComp/PenIcon.vue";

export default {
  components: {
    CancelBoldIcon,
    CancelIcon,
    PenIcon,
  },
  data() {
    return {
      items: ['Друг1', 'Друг2']
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
};
</script>

<style scoped>
.user-data-title {
  margin-bottom: 16px;
  font-size: 18px;
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  line-height: 100%;
  color: #000;
}

</style>

<style>

.user-data-list {
  margin-bottom: 16px;
}

.user-data-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 16px;
  border-bottom: 1px solid var(--light_gray);
  font-size: 16px;
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  line-height: 100%;
  color: var(--text_color);
}

.user-data-list li:first-child {
  border-top: 1px solid var(--light_gray);
}

.user-data-edit {
  display: flex;
  align-items: center;
  gap: 4px;
}

.user-data-clear,
.user-data-pen {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 20px;
  height: 20px;
}

.user-data-btns {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
}

.user-data-btns button {
  margin-left: 0;
}

button.user-data-cancel-form{
  background-color: #fff;
  color: var(--primary_bg);
  border: 1px solid var(--primary_bg);
}

.order-btn{
  display: block;
  margin-left: auto;
}

</style>
