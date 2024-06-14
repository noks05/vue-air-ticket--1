<template>
  <div class="pas__left">
    <span class="pas__age-group">{{ data.text[0] }}</span>
    <span>{{ data.text[1] }}</span>
  </div>

  <div class="pas__right">
    <button
      class="pas__minus"
      type="button"
      @click="
        () => {
          counterValue && --counterValue;
          changeCountPas();
        }
      "
    >
      <MinusIcon />
    </button>

    <input readonly type="text" :name="data.name" v-model="counterValue" />

    <button
      class="pas__plus"
      type="button"
      @click="
        () => {
          ++counterValue;
          changeCountPas();
        }
      "
    >
      <PlusIcon class="svg-plus" />
    </button>
  </div>
</template>

<script>
import PlusIcon from "@/assets/images/icons/iconsComp/PlusIcon.vue";
import MinusIcon from "@/assets/images/icons/iconsComp/MinusIcon.vue";

export default {
  props: {
    data: Object,
    modelValue: Object,
  },
  components: {
    PlusIcon,
    MinusIcon,
  },
  data() {
    return {
      counterValue: this.modelValue[this.data.name],
    };
  },
  methods: {
    changeCountPas() {
      this.modelValue[this.data.name] = this.counterValue;
      this.$emit("update:modelValue", this.modelValue);
    },
  },
};
</script>

<style scoped>
.pas__left {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 12px;
  line-height: 150%;
  font-weight: 400;
  color: #797979;
}
.pas__age-group{
  font-size: 14px;
}
.pas__right {
  display: flex;
  align-items: center;
  gap: 8px;
}
.pas__right > * {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
}
.pas__right input {
  border: none;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: #797979;
}
.pas__right button {
  border-radius: 100%;
  transition: background-color 0.2s;
  cursor: pointer;
}
.pas__right button:hover {
  background-color: #f4f7ff;
}
.pas__right button:active {
  background-color: rgb(138, 140, 149);
}
.pas__minus {
  background-color: #f9f9f9;
}
.pas__plus {
  border: var(--border-grey);
  background-color: transparent;
}
</style>
<style>
.pas__plus .svg-plus path {
  stroke: var(--primary_bg);
}
</style>