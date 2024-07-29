<template>

 <div
        :class="[
          'delivery-provider',
          showProviderList ? 'delivery-provider--active' : '',
        ]"
      >
        <button
          class="delivery-provider-btn"
          type="button"
          @click.stop="showProviderList = !showProviderList"
        >
          <span>{{ provider }}</span>
          <ArrowDown1Icon />
        </button>

        <div
          class="delivery-provider-list"
        >

          <label class="delivery-provider-item" v-for="it in [1,2,3,4]" :key="it">
            <input type="radio" :name="provider" />
            <span class="delivery-provider-replace"></span>
            <div class="delivery-provider-text">
              <p class="delivery-provider-address">
                Воронеж, 20-летия Октября ул., д.101
              </p>
              <p class="delivery-provider-date">
                Ожидаемая дата доставки - 24.06.2024, Стоимость доставки -
                493,00 бонусов.
              </p>
            </div>
          </label>

        </div>
      </div>
</template>

<script>
import ArrowDown1Icon from "@/assets/images/icons/iconsComp/ArrowDown1Icon.vue";

export default {
  props: {
    provider: String,
  },
  components: {
    ArrowDown1Icon,
  },
  data() {
    return {
      showProviderList: false,
    };
  },
};
</script>

<style>
.delivery-provider {
  padding: 20px 22px;
}

.delivery-provider-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 104px;
  width: 100%;
  padding: 0;
  font-size: 16px;
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  line-height: 100%;
  color: var(--grey-79);
}

.delivery-provider.delivery-provider--active .delivery-provider-btn {
  color: var(--text_color);
}

.delivery-provider-list {
  height: 0;
  padding-top: 2px;
  overflow: hidden;
  transition: height 0.2s;
}

.delivery-provider.delivery-provider--active .delivery-provider-list {
  height: 100%;
}

.delivery-provider-item {
  display: flex;
  gap: 24px;
  margin-bottom: 0;
  padding-block: 16px;
  opacity: 0;
  transition: opacity 0.3s;
  cursor: pointer;
}

.delivery-provider.delivery-provider--active .delivery-provider-item {
  opacity: 1;
}

.delivery-provider-replace {
  display: block;
  min-height: 22px;
  max-height: 22px;
  min-width: 22px;
  max-width: 22px;
  border: 1px solid var(--primary_bg);
  border-radius: 100%;
  background-color: transparent;
  transition: border-width 0.2s;
}

input[type="radio"] {
  display: none;
}

input[type="radio"]:checked + .delivery-provider-replace {
  border-width: 7px;
  border-color: var(--primary_bg);
}

.delivery-provider-text p {
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  line-height: 100%;
  color: var(--grey-79);
}

.delivery-provider-address {
  margin-bottom: 8px;
  font-size: 16px;
}

.delivery-provider-date {
  font-size: 13px;
}
</style>

<style>
.delivery-provider-btn svg{
  height: 10px;
  width: 18px;
}

.delivery-provider .delivery-provider-btn svg{
  transition: transform 0.2s;
}

.delivery-provider.delivery-provider--active .delivery-provider-btn svg{
  transform: rotateZ(180deg);
}

.delivery-provider .delivery-provider-btn svg path{
  transition: stroke 0.2s;
}

.delivery-provider.delivery-provider--active .delivery-provider-btn svg path{
  stroke: var(--text_color);
}
</style>
