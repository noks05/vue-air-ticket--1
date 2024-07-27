<template>
  <div>
    <p class="address-delivery-descr">
      Добавляйте адреса доставки и Вам не придется вводить их каждый раз при
      оформлении заказа товара. Вы можете добавить несколько адресов и выбирать
      нужный при оформлении заказа.
    </p>

    <ul class="user-data-list">
      <li v-for="(it, i) in items" :key="it">
        <div class="user-data-name">{{ it }}</div>

        <div class="user-data-edit">
          <button class="user-data-pen" type="button">
            <PenIcon />
          </button>
          <button
            class="user-data-clear"
            type="button"
            @click.stop="() => removeItem(i)"
          >
            <CancelBoldIcon />
          </button>
        </div>
      </li>
    </ul>

    <router-link
      class="order-btn address-btn"
      :to="{
        path: $route.path,
        query: { ...$route.query, titleAddress: 'Добавление адреса' },
      }"
      @click.stop="console.log($route.query)"
    >
      Добавить адрес
    </router-link>
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
      items: ["Мой дом", "Друг"],
    };
  },
  methods: {
    removeItem(index) {
      this.items = [
        ...this.items.slice[(0, index)],
        this.items.slice[index + 1],
      ];
    },
  },
};
</script>

<style scoped>
.address-btn{
  display: block;
  width: fit-content;
  margin-left: auto;
}
</style>

<style>
.address-delivery-descr {
  margin-bottom: 16px;
  font-size: 12px;
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  line-height: 120%;
  color: var(--grey-79);
}
</style>
