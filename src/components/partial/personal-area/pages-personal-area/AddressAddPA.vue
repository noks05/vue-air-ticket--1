<template>
  <div class="address-add-wrap">
    <p class="address-delivery-descr">
      Добавляйте адреса доставки и Вам не придется вводить их каждый раз при
      оформлении заказа товара. Вы можете добавить несколько адресов и выбирать
      нужный при оформлении заказа.
    </p>

    <form
      @submit.prevent="() => {}"
      @input.stop="(e) => activeCancel(e)"
      @click.stop="(e) => clearInputValue(e)"
    >
      <label class="order-input-container order-input-container-required">
        <span class="order-input-label"> Название доставки </span>
        <input
          class="order-input"
          name="Название доставки"
          type="text"
          placeholder="Моя доставка"
        />
        <button class="order-clear" type="button">
          <CancelIcon />
        </button>
      </label>

      <div class="address-add-select-wrap">
        <span class="order-input-label"> Город, улица, номер дома </span>
        <v-select
          class="address-add-select order-input-container-required"
          v-model="selected.value"
          :options="options"
          @option:selected="(option) => (selected.value = option.value)"
          @option:selecting="markChoice"
        >
          <template #open-indicator="{ attributes }">
            <button v-bind="attributes" class="order-clear" type="button">
              <ArrowDown1Icon />
            </button>
          </template>
          <template #option="{ label, state }">
            <div
              :class="['select-option', state ? 'select-option--highlight' : '']"
            >
              {{ label }}
            </div>
          </template>
        </v-select>
      </div>

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

      <div class="user-data-btns">
        <button
          class="order-btn user-data-cancel-form"
          type="button"
          @click.stop="() => {}"
        >
          Отмена
        </button>
        <button class="order-btn" type="submit">Сохранить</button>
      </div>
    </form>
  </div>
</template>

<script>
import ArrowDown1Icon from "@/assets/images/icons/iconsComp/ArrowDown1Icon.vue";
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
      items: ["Мой дом", "Друг"],
      selected: { label: "", value: "" },
      options: [
        {
          id: 0,
          state: false,
          label: "Екатеринбург",
          value: "Екатеринбург, Екатеринбург, Маяковского, 104к4",
        },
        {
          id: 1,
          state: false,
          label: "Москва",
          value: "Москва, Москва, Маяковского, 177к4",
        },
        {
          id: 2,
          state: false,
          label: "Волгоград",
          value: "Волгоград, Волжский, Маяковского, 164к4",
        },
      ],
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
    removeItem(index) {
      this.items = [
        ...this.items.slice[(0, index)],
        this.items.slice[index + 1],
      ];
    },
    addAddress() {
      this.$route.query = {
        ...this.$route.query,
        titleAddress: "Добавление адреса",
      };
    },
    markChoice(selectedItem) {
      this.options.forEach((obj) => (obj.state = false));
      this.options[selectedItem.id].state = true;
      console.log(selectedItem);
    },
  },
  mounted() {
    const run = () => {
      setTimeout(() => {
        const it = document.querySelector(".vs__dropdown-menu");
        // if (it)  console.log(it.querySelectorAll('.vs__dropdown-option'))
        if (it) console.log(it.innerHTML);
        else console.log(it);

        run();
      }, 2000);
    };
    run();
  },
};
</script>

<style>
.address-add-select-wrap{
position: relative;
}

.address-add-select {
  margin-bottom: 16px;
}

.address-add-select .vs__dropdown-toggle {
  height: 64px;
  padding: 10px;
  padding-right: 40px;
  /* padding-bottom: 0; */
  border-radius: var(--bdrs-7);
  border: var(--border-grey);
}

.address-add-select .vs__dropdown-menu {
  padding-block: 10px;
  border-radius: 0 0 var(--bdrs-7) var(--bdrs-7);
  border: var(--border-grey);
  -webkit-box-shadow: -1px 5px 17px -4px rgba(34, 60, 80, 0.09);
  -moz-box-shadow: -1px 5px 17px -4px rgba(34, 60, 80, 0.09);
  box-shadow: -1px 5px 17px -4px rgba(34, 60, 80, 0.09);
}

.address-add-select .vs__dropdown-menu li {
  color: #adadad;
}

.address-add-select .vs__search,
.address-add-select .vs__selected,
.address-add-select .vs__dropdown-toggle {
  font-size: 16px;
  line-height: 100%;
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  color: var(--text_color);
}

.address-add-select .vs__search,
.address-add-select .vs__selected {
  padding-top: 13px;
  padding-inline: 4px;
  margin-inline: 0;
}

.address-add-select .select-option {
  position: relative;
  display: flex;
  align-items: center;
  padding-block: 4px;
  font-size: 14px;
  line-height: 100%;
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  color: #adadad;
  transition: color 0.2s;
}

.address-add-select .vs__dropdown-option.vs__dropdown-option--highlight {
  /* color: var(--text_color); */
  background-color: transparent;
}

.address-add-select .select-option--highlight,
.address-add-select
  .vs__dropdown-option.vs__dropdown-option--highlight
  .select-option {
  color: var(--text_color);
}
</style>
