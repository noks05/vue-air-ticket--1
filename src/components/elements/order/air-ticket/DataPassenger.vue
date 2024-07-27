<template>
  <div
    :class="[
      'delivery-provider air-ticket-box',
      showProviderList ? 'delivery-provider--active' : '',
    ]"
  >
    <button
      class="delivery-provider-btn"
      type="button"
      @click.stop="showProviderList = !showProviderList"
    >
      <h4>{{ title }}</h4>
      <ArrowDown1Icon />
    </button>

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
      <span class="order-input-label"> Дата рождения </span>
      <input
        class="order-input"
        name="Дата рождения"
        type="text"
        placeholder=""
      />
      <button class="order-clear" type="button">
        <CancelIcon />
      </button>
    </label>

    <div class="address-add-select-wrap">
        <span class="order-input-label"> Страна </span>
        <v-select
          class="address-add-select order-input-container-required"
          v-model="selectedCountry.value"
          :options="optionsCountries"
          @option:selected="(option) => (selectedCountry.value = option.value)"
          @option:selecting="(sel)=>markChoice(sel,'optionsCountries')"
        >
          <template #open-indicator="{ attributes }">
            <button class="select-arrow-down" type="button">
              <ArrowDownLittleIcon v-bind="attributes"  />
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

      <div class="address-add-select-wrap">
        <span class="order-input-label">
          Тип документа
         </span>
        <v-select
          class="address-add-select order-input-container-required"
          v-model="selectedTypeDoc.value"
          :options="optionsTypeDoc"
          @option:selected="(option) => (selectedTypeDoc.value = option.value)"
          @option:selecting="(sel)=>markChoice(sel,'optionsTypeDoc')"
        >
          <template #open-indicator="{ attributes }">
            <button class="select-arrow-down" type="button">
              <ArrowDownLittleIcon v-bind="attributes"  />
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

    <label class="order-input-container order-input-container-required">
      <span class="order-input-label"> Номер документа </span>
      <input
        class="order-input"
        name="Номер документа"
        type="text"
        placeholder=""
      />
      <button class="order-clear" type="button">
        <CancelIcon />
      </button>
    </label>

    <div class="air-ticket-sex">
      <span class="air-ticket-sex-title"> Пол </span>

      <ul>
        <li>
          <label>
            <input type="radio" :name="title" checked/>
            <span class="delivery-provider-replace air-ticket-replace"></span>
            <span class="air-ticket-sex-text"> Мужской </span>
          </label>
        </li>
        <li>
          <label>
            <input type="radio" :name="title" />
            <span class="delivery-provider-replace air-ticket-replace"></span>
            <span class="air-ticket-sex-text"> Женский </span>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import ArrowDown1Icon from "@/assets/images/icons/iconsComp/ArrowDown1Icon.vue";
import ArrowDownLittleIcon from "@/assets/images/icons/iconsComp/ArrowDownLittleIcon.vue";
import CancelIcon from "@/assets/images/icons/iconsComp/CancelIcon.vue";

export default {
  props:{
    title: String,
  },
  components: {
    CancelIcon,
    ArrowDown1Icon,
    ArrowDownLittleIcon,
  },
  data() {
    return {
      showProviderList: false,
      selectedCountry: { label: "", value: "" },
      optionsCountries: [
        {
          id: 0,
          state: false,
          label: "Екатеринбург",
          value: "Екатеринбург",
        },
        {
          id: 1,
          state: false,
          label: "Москва",
          value: "Москва",
        },
        {
          id: 2,
          state: false,
          label: "Волгоград",
          value: "Волгоград",
        },
      ],
      selectedTypeDoc: { label: "", value: "" },
      optionsTypeDoc: [
        {
          id: 0,
          state: false,
          label: "Свидетельство о рождении",
          value: "Свидетельство о рождении",
        },
        {
          id: 1,
          state: false,
          label: "Паспорт",
          value: "Паспорт",
        },
        {
          id: 2,
          state: false,
          label: "Водительское удостоверение",
          value: "Водительское удостоверение",
        },
      ],
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
    markChoice(selectedItem, nameOptions) {
      this[nameOptions].forEach((obj) => (obj.state = false));
      this[nameOptions][selectedItem.id].state = true;
      console.log(selectedItem);
    },
  },
};
</script>

<style scoped>
.delivery-provider-btn{
  max-width: 100%;
  margin-bottom: 20px;
}
.air-ticket-box {
  height: 68px;
  padding: 24px;
  border-radius: var(--bdrs-7);
  border: var(--border-grey);
  overflow: hidden;
  animation: height 0.2s;
}
.air-ticket-box.delivery-provider--active {
  height: 100%;
}
.order-input-container{
  opacity: 0;
  transition: opacity 0.2s;
}
.air-ticket-box.delivery-provider--active .order-input-container{
  opacity: 1;
}
@keyframes height {
  from {
    height: 68px;
  }
  to {
    height: 100%;
  }
}
.air-ticket-box h4{
  margin-bottom: 0;
  font-size: 18px;
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  line-height: 100%;
  color: var(--primary_bg);
}
.air-ticket-box label:not(:last-child){
  margin-bottom: 8px;
}
.air-ticket-sex {
  margin-top: 20px;
}
.air-ticket-sex ul{
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 0;
}
.air-ticket-sex label{
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 0;
  cursor: pointer;
}
.air-ticket-sex-text{
  font-size: 16px;
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  line-height: 100%;
  color: #000;
}
.air-ticket-sex-title {
  margin-top: 8px;
  font-size: 14px;
  font-family: Gilroy-SemiBold !important;
  font-weight: 600;
  line-height: 100%;
  color: var(--text_color);
}
.air-ticket-replace {
  border: var(--border-grey);
}
</style>
