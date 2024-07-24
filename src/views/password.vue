<template>
  <headerDef />

  <div class="pass-container">
    <NewPassword />
    <!-- <RemindPassword /> -->
  </div>
</template>

<script>
import headerDef from "@/components/partial/headers/HeaderDefault.vue";
import NewPassword from "@/components/elements/password/NewPassword.vue";
import RemindPassword from "@/components/elements/password/RemindPassword.vue";

export default {
  components: {
    headerDef,
    NewPassword,
    RemindPassword,
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style>
.pass-container {
  max-width: fit-content;
  margin-inline: auto;
}
.pass-wrap {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.pass-wrap h2 {
  margin-bottom: 40px;
  font-size: 24px;
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  line-height: 100%;
  color: var(--text_color);
}
.pass-wrap label {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
}
.pass-wrap label:not(:last-child) {
  margin-bottom: 16px;
}
.pass-wrap input {
  height: 40px;
  width: 100%;
  padding: 12px 16px;
  border-radius: var(--bdrs-7);
  border: var(--border-grey);
  font-size: 16px;
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  line-height: 100%;
  color: var(--text_color);
}
.pass-wrap input::placeholder {
  font-size: 16px;
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  line-height: 100%;
  color: var(--grey-79);
  transition: outline 0.2s;
}
.pass-wrap input:focus {
  outline: 1px solid var(--primary_bg);
}
.pass-input-label {
  text-align: start;
  margin-bottom: 4px;
  font-size: 12px;
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  line-height: 100%;
  color: var(--grey-79);
}
.pass-btn {
  display: block;
  width: 100%;
  margin-top: 32px;
  padding: 12px 16px;
  border-radius: var(--bdrs-7);
  border: 1px solid var(--primary_bg);
  font-size: 16px;
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  line-height: 100%;
  color: var(--primary_bg);
  background-color: #fff;
  transition: background-color 0.2s, color 0.2s;
}
.pass-btn:hover {
  background-color: var(--primary_bg);
  color: #fff;
}
</style>
