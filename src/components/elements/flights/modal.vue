<template>
  <n-modal v-model:show="showModal">
    <n-card style="width: 600px" title="" :bordered="false" size="huge" role="dialog" aria-modal="true">
      <template #header-extra>
        <div @click="toggleFilter" style="cursor: pointer">
          <img src="../../../assets/newImg/icons/modal-close.svg" alt="modal" />
        </div>
      </template>
      <div class="top-modal-flight">
        <h3>Фильтры и сортировка</h3>
        <button class="close-modal" @click="toggleFilter">
          <img src="../../../assets/newImg/icons/modal-close.svg" alt="modal" />
        </button>
      </div>
      <div class="flight active">
        Москва
        <reusable color="#fff" />
        Волгоград
      </div>
      <div class="flight">
        Волгоград
        <reusable color="#000" />
        Москва
      </div>
      <div class="add-info">
        <div class="time">
          <h4>Время вылета</h4>
          <div class="time-info">
            <div class="time-start">01:00</div>
            <div class="time-line">
              <div class="line"></div>
            </div>
            <div class="time-end">22:45</div>
          </div>
        </div>
        <div class="time">
          <h4>Время прилета</h4>
          <div class="time-info">
            <div class="time-start">01:00</div>
            <div class="time-line">
              <div class="line"></div>
            </div>
            <div class="time-end">22:45</div>
          </div>
        </div>
        <hr />
        <div class="flight-check">
          <div class="departure">
            <h5>Вылет</h5>
            <div class="dep-check">
              <input type="checkbox" />
              <h6>Шереметьево</h6>
            </div>
          </div>
          <div class="arrival">
            <h5>Прибытие</h5>
            <div class="dep-check">
              <input type="checkbox" />
              <h6>Шереметьево</h6>
            </div>
          </div>
        </div>
        <hr />
        <div class="time">
          <h4>Длительность</h4>
          <div class="time-info">
            <div class="time-start">01:00</div>
            <div class="time-line">
              <div class="line"></div>
            </div>
            <div class="time-end">22:45</div>
          </div>
        </div>
        <hr />
        <div class="time-variants">
          <div class="variant">
            <h5>Варианты пересадок</h5>
            <div class="dep-check">
              <input type="checkbox" />
              <h6>Без пересадок</h6>
            </div>
            <div class="dep-check">
              <input type="checkbox" />
              <h6>Одна пересадка</h6>
            </div>
          </div>
          <div class="options">
            <h5>Опции возврата и багажа</h5>
            <div class="dep-check">
              <input type="checkbox" />
              <h6>Без возврата билета</h6>
            </div>
            <div class="dep-check">
              <input type="checkbox" />
              <h6>Без багажа</h6>
            </div>
            <div class="dep-check">
              <input type="checkbox" />
              <h6>С багажом</h6>
            </div>
          </div>
        </div>
        <hr />
        <div class="sort">
          <span class="title-span">Сортировка:</span> <span>Дешевле</span>
          <span>Быстрее</span>
        </div>
        <hr />
        <div class="filter-btn">
          <button @click="showFilter">Применить</button>
        </div>
      </div>
    </n-card>
  </n-modal>
  <!-- <div class="modal-popup d-none">
    <div class="fade-flight">
      <div class="modal-flight">
        <div class="top-modal-flight">
          <h3>Фильтры и сортировка</h3>
          <button class="close-modal" @click="toggleFilter">
            <img src="../../../assets/newImg/icons/modal-close.svg" alt="modal" />
          </button>
        </div>
        <div class="flight active">
          Москва
          <reusable color="#fff" />
          Волгоград
        </div>
        <div class="flight">
          Волгоград
          <reusable color="#000" />
          Москва
        </div>
        <div class="add-info">
          <div class="time">
            <h4>Время вылета</h4>
            <div class="time-info">
              <div class="time-start">01:00</div>
              <div class="time-line">
                <div class="line"></div>
              </div>
              <div class="time-end">22:45</div>
            </div>
          </div>
          <div class="time">
            <h4>Время прилета</h4>
            <div class="time-info">
              <div class="time-start">01:00</div>
              <div class="time-line">
                <div class="line"></div>
              </div>
              <div class="time-end">22:45</div>
            </div>
          </div>
          <hr />
          <div class="flight-check">
            <div class="departure">
              <h5>Вылет</h5>
              <div class="dep-check">
                <input type="checkbox" />
                <h6>Шереметьево</h6>
              </div>
            </div>
            <div class="arrival">
              <h5>Прибытие</h5>
              <div class="dep-check">
                <input type="checkbox" />
                <h6>Шереметьево</h6>
              </div>
            </div>
          </div>
          <hr />
          <div class="time">
            <h4>Длительность</h4>
            <div class="time-info">
              <div class="time-start">01:00</div>
              <div class="time-line">
                <div class="line"></div>
              </div>
              <div class="time-end">22:45</div>
            </div>
          </div>
          <hr />
          <div class="time-variants">
            <div class="variant">
              <h5>Варианты пересадок</h5>
              <div class="dep-check">
                <input type="checkbox" />
                <h6>Без пересадок</h6>
              </div>
              <div class="dep-check">
                <input type="checkbox" />
                <h6>Одна пересадка</h6>
              </div>
            </div>
            <div class="options">
              <h5>Опции возврата и багажа</h5>
              <div class="dep-check">
                <input type="checkbox" />
                <h6>Без возврата билета</h6>
              </div>
              <div class="dep-check">
                <input type="checkbox" />
                <h6>Без багажа</h6>
              </div>
              <div class="dep-check">
                <input type="checkbox" />
                <h6>С багажом</h6>
              </div>
            </div>
          </div>
          <hr />
          <div class="sort">
            <span class="title-span">Сортировка:</span> <span>Дешевле</span>
            <span>Быстрее</span>
          </div>
          <hr />
          <div class="filter-btn">
            <button @click="showFilter">Применить</button>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>
<script>
import { mapGetters } from "vuex";
// import flight from '@/store/flight.js'
import reusable from "./reusable.vue";
import { NCard } from "naive-ui";
import { NModal } from "naive-ui";
export default {
  components: {
    reusable,
    NCard,
    NModal,
  },
  computed: {
    showModal() {
      return this.$store.getters["flight/showFilter"];
    },
  },
  methods: {
    toggleFilter() {
      this.$store.dispatch("flight/toggleFilter");
    },
  },
};
</script>
<style scoped>
hr {
  margin: 2rem auto 2rem !important;
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
  justify-content: space-between;
  padding: 20px 30px;
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
  background-color: var(--primary_bg);
  color: #fff;
  font-family: Gilroy-Medium !important;
}


@media screen and (max-width:768px) {
 

  .variant h5,
  .options h5 {
    font-size: 16px !important;
  }
}

@media screen and (max-width:425px) {
 .add-info {
    padding: 10px;
  }
}
</style>
