<template>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 300px"
      title=""
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <div
        @click="togCalendar"
        style="cursor: pointer"
        class="close_btn ml-auto"
      >
        <img src="../../../assets/newImg/icons/modal-close.svg" alt="modal" />
      </div>

      <div class="top-modal-flight">
        <VDatePicker v-model.range="range"  mode="date"  :color="selectedColor" />
      </div>
    </n-card>
  </n-modal>
</template>

<script>
import { NCard } from "naive-ui";
import { NModal } from "naive-ui";
import VDatePicker from "v-calendar";

export default {
  components: {
    NCard,
    NModal,
    // VDatePicker
  },
  data() {
    return {
      range:{
        start: new Date(),
        end: new Date()
      },
      selectedColor: 'indigo'
    }
  },
  computed: {
    showModal() {
      return this.$store.getters["calendar/shCalendar"];
    },
  },
  methods: {
    togCalendar() {
      this.$store.dispatch("calendar/toggleCalendar");
    },
  },
};
</script>

<style scoped>
hr {
  margin: 2rem auto 2rem !important;
}
.close_btn {
  display: flex;
  float: right;
  margin-top: 4px;
  margin-right: 4px;
}

.modal-popup {
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 9999;
  /* overflow-y: hidden; */
}

.fade-flight {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  padding-right: 17px;
  box-sizing: content-box;
}

.fade-flight::-webkit-scrollbar {
  display: none;
}

.fade-flight {
  scrollbar-width: none;
}

.modal-flight {
  margin-top: 350px;
  margin-bottom: 50px;
  width: 580px;
  height: auto;
  background-color: #fff;
  border-radius: 12px;
}

.top-modal-flight {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 20px 0;
}

.top-modal-flight h3 {
  font-family: Gilroy-SemiBold !important;
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 0 !important;
}

.close-modal {
  background-color: transparent;
  border: none;
}

.flight {
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  color: #000;
  justify-content: center;
  font-family: Gilroy-Medium !important;
  font-size: 18px;
  padding: 10px 0;
}

.active {
  background-color: var(--primary_bg) !important;
  color: #fff;
}

.add-info {
  padding: 20px 30px;
}

.time {
  padding: 10px 0;
}

.time h4 {
  margin-bottom: 0 !important;
  font-family: Gilroy-Medium !important;
}

.time-info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.time-start,
.time-end {
  padding: 2px 23px;
  border-radius: 8px;
  font-family: Gilroy-Medium !important;
  background-color: #f4f7ff;
  border: 1px solid #777777;
  white-space: nowrap;
}

.time-line {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.line {
  width: 100%;
  height: 0px;
  border-bottom: 3px solid #000;
}

.flight-check {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.departure h5,
.arrival h5 {
  font-family: Gilroy-Medium !important;
  font-size: 18px;
}

.dep-check {
  display: flex;
  gap: 5px;
}

.dep-check input[type="checkbox"] {
  width: 20px;
  height: 20px;
  border-radius: 2px;
  background-color: #f4f7ff;
}

.dep-check h6 {
  font-size: 16px;
}

.time-variants {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.variant h5,
.options h5 {
  font-family: Gilroy-SemiBold !important;
  font-size: 18px;
}

.sort {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
}

.sort .title-span {
  font-family: Gilroy-SemiBold !important;
}

.filter-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.filter-btn button {
  padding: 16px 24px;
  border-radius: 8px;
  background-color:var(--primary_bg);
  color: #fff;
  font-family: Gilroy-Medium !important;
}

@media screen and (max-width: 768px) {
  .variant h5,
  .options h5 {
    font-size: 16px !important;
  }
}

@media screen and (max-width: 425px) {
  .add-info {
    padding: 10px;
  }
}
</style>
