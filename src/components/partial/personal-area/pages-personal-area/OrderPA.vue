<template>
  <div class="operation-top">
    <div class="operation-datepicker-wrap" v-if="filterActive">
      <VDatePicker
        class="date-picker operation-date-picker dropdown"
        :columns="tablet ? 1 : 2"
        locale="ru-RU"
        v-model.range="selectedDate"
      >
        <template #day-content="props">
          <div
            :class="{
              'dp-day-custom': true,
              'day-is-range': isDateInRange(props),
              'day-is-range-start': isDateIsStart(props),
              'day-is-range-end': isDateIsEnd(props),
            }"
            v-on="props.dayEvents"
          >
            <span class="dp-day-custom__day">{{ props.day.day }}</span>
            <!-- <span
              :class="[
                'dp-day-custom__price',
                day.weekday === 4 || day.weekday === 5
                  ? 'dp-day-custom__price--green'
                  : '',
              ]"
              >{{ prices[day.month][day.day] }}</span> -->
          </div>
        </template>
        <template #default="props">
          <div class="operation-label-wrap">
            <label class="operation-label">
              <input
                type="text"
                name="date-from"
                placeholder="Дата от"
                :value="formatDate(selectedDate.start)"
                @click.stop="props.togglePopover"
              />
              <CalendarIcon class="search-form-field__img" />
            </label>
            <label class="operation-label">
              <input
                type="text"
                name="date-to"
                placeholder="Дата до"
                :value="formatDate(selectedDate.end)"
                @click="props.togglePopover"
              />
              <CalendarIcon class="search-form-field__img" />
            </label>
          </div>
        </template>
      </VDatePicker>

      <button class="order-btn" type="button">Показать</button>
    </div>

    <button
      :class="['operation-btn', filterActive ? 'operation-btn--active' : '']"
      type="button"
      @click.stop="filterActive = !filterActive"
    >
      <span>Фильтр</span>
      <ArrowDownIcon class="operation-filter-icon" />
    </button>
  </div>

  <table class="table order-page-table" v-if="!tablet">
    <thead>
      <tr>
        <th>Дата</th>
        <th>Номер</th>
        <th>Статус</th>
        <th>Описание</th>
        <th class="order-text-end">Бонусами</th>
        <th class="order-text-end">Деньгами</th>
        <th>Сумма</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>28.03.2024</td>
        <td>777355791</td>
        <td>Аннулирован</td>
        <td>
          <p>1. Подарочный сертификат МВидео, 100</p>
          <p>2. Подарочный сертификат Детский мир, 100</p>

          <label class="input-file">
            <input class="visually-hidden" type="file" />
            <span>Скачать</span>
          </label>
        </td>
        <td>481,67-</td>
        <td>481,67-</td>
        <td>481,67-</td>
      </tr>
      <tr>
        <td>28.03.2024</td>
        <td>777355791</td>
        <td>Аннулирован</td>
        <td>
          ЖД Москва - Казань 31.07.2024
          <label class="input-file">
            <input class="visually-hidden" type="file" />
            <span>Скачать</span>
          </label>
        </td>
        <td>481,67-</td>
        <td>481,67-</td>
        <td>481,67-</td>
      </tr>
      <tr>
        <td>28.03.2024</td>
        <td>777355791</td>
        <td>Аннулирован</td>
        <td>
          Кружка 350 мл черная Бариста PP.L.Proff Cuisine ТК: СДЭК, трек-номер:
          10000000999
        </td>
        <td>481,67-</td>
        <td>481,67-</td>
        <td>481,67-</td>
      </tr>
    </tbody>
  </table>

  <div class="order-page-table-mobile-wrap" v-if="tablet">
    <div class="order-page-table-mobile" v-for="it in [1, 2, 3]" :key="it">
      <div class="top">
        <span class="date"> 28.03.2024 </span>

        <span>
          <span class="number"> №777355791 </span>

          <span class="status"> , Аннулирован </span>
        </span>
      </div>

      <p class="amount">Сумма заказа <span>110 000,00</span></p>

      <p class="paid">
        Оплачено бонусами <span class="paid-bonus">100 000,00</span>, оплачено
        деньгами <span class="paid-money">10 000,00</span>
      </p>

      <ul class="text-bold">
        <li
          v-for="(text, i) in [
            'Подарочный сертификат МВидео, 100',
            'Подарочный сертификат Детский мир, 100',
          ]"
          :key="i"
        >
          {{ i + 1 }}. {{ text }}
        </li>
      </ul>

      <p class="text-bold">
        <label class="input-file">
          <input class="visually-hidden" type="file" />
          <span>Скачать</span> </label
        >PIN для скачивания: 24509116
      </p>
    </div>
  </div>

  <pagination :per-page="perPage" :total="totalCount"></pagination>
</template>

<script>
import ArrowDownIcon from "@/assets/images/icons/iconsComp/ArrowDownIcon.vue";
import CalendarIcon from "@/assets/images/icons/iconsComp/CalendarIcon.vue";
import Pagination from "@/components/elements/Pagination.vue";
import { getFormatMonth } from "@/utilities/calendar";

export default {
  components: {
    Pagination,
    ArrowDownIcon,
    CalendarIcon,
  },
  data() {
    return {
      filterOptions: ["Optionnnn 1", "Option 3", "Option 3"],
      filterSelected: null,
      perPage: 5,
      totalCount: 30,
      filterActive: false,
      selectedDate: {
        start: null,
        end: null,
      },
      windowWidth: window.innerWidth,
      // prices: [
      //   ["15 995", "", "", "13 995", "15 995"],
      //   ["15 995", "", "", "15 995", "14 995"],
      //   ["15 995", "", "", "13 995", "15 995"],
      //   ["15 995", "", "", "15 995", "14 995"],
      //   ["15 995", "", "", "13 995", "15 995"],
      //   ["15 995", "", "", "15 995", "14 995"],
      //   ["15 995", "", "", "13 995", "15 995"],
      //   ["15 995", "", "", "15 995", "14 995"],
      //   ["15 995", "", "", "13 995", "15 995"],
      //   ["15 995", "", "", "15 995", "14 995"],
      //   ["15 995", "", "", "13 995", "15 995"],
      //   ["15 995", "", "", "15 995", "14 995"],
      //   ["15 995", "", "", "15 995", "14 995"],
      // ],
    };
  },
  computed: {
    mobile() {
      let result = this.windowWidth <= 576;
      return result;
    },
    tablet() {
      let result = this.windowWidth <= 992;
      return result;
    },
  },
  methods: {
    formatDate(date) {
      if (!date) return null;
      let days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
      let month = date.toLocaleString("ru-RU", { month: "long" });
      month = getFormatMonth(Number(date.getMonth()));
      let day = date.getDate();
      let dayWeek = days[Number(date.getDay())];
      return day + " " + month + ", " + dayWeek;
    },
    isDateInRange({ day }) {
      if (!this.selectedDate.start || !this.selectedDate.end) {
        return false;
      }
      return (
        day &&
        day.date > this.selectedDate.start &&
        day.date < this.selectedDate.end
      );
    },
    isDateIsStart({ day }) {
      if (day.date && this.selectedDate.start) {
        const result =
          this.selectedDate.start.getTime() === day.date.getTime();
        return result
      }
      return false
    },
    isDateIsEnd({ day }) {
      if (day.date && this.selectedDate.end) {
        const result =
          this.selectedDate.end.getTime() === day.date.getTime();
        return result
      }
      return false
    },
  },
};
</script>

<style scoped>
.order-page-table-mobile-wrap {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 31px;
  margin-bottom: 35px;
}

.order-page-table-mobile {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: var(--border-grey);
}

.order-page-table-mobile p.text-bold {
  display: flex;
  gap: 5px;
  margin-top: -8px;
}

.order-page-table-mobile p.text-bold label {
  margin-bottom: 0;
}

.order-page-table-mobile ul {
  margin-bottom: 0;
}

.order-page-table-mobile .input-file {
  margin-top: 0;
}

.order-page-table-mobile span,
.order-page-table-mobile p,
.order-page-table-mobile li {
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: var(--text_color);
}

.order-page-table-mobile .text-bold,
.order-page-table-mobile .text-bold span,
.order-page-table-mobile .text-bold li {
  font-size: 14px;
}

.order-page-table-mobile .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 18px;
}

.order-page-table thead th:nth-child(1) {
  width: 14%;
}

.order-page-table thead th:nth-child(2) {
  width: 12%;
}

.order-page-table thead th:nth-child(3) {
  width: 12%;
}

.order-page-table thead th:nth-child(4) {
  width: 27%;
}

.order-page-table thead th:nth-child(5) {
  width: 12%;
}

.order-page-table thead th:nth-child(6) {
  width: 11%;
}

.order-page-table thead th:nth-child(7) {
  width: 12%;
}

.order-page-table thead th:nth-child(5),
.order-page-table thead th:nth-child(6),
.order-page-table thead th:nth-child(7),
.order-page-table tbody td:nth-child(5),
.order-page-table tbody td:nth-child(6),
.order-page-table tbody td:nth-child(7) {
  text-align: end;
}

.order-page-table thead th:nth-child(7),
.order-page-table tbody td:nth-child(7) {
  padding-right: 22px;
}

.table {
  margin-top: 10px;
  width: 100%;
  bottom: none;
  margin-bottom: 40px;
}

.table thead th {
  text-align: start;
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: var(--grey-79);
}

.table thead th:first-child {
  padding-left: 25px;
}

.table thead th:last-child {
  padding-left: 20px;
}

.table thead th {
  padding-block: 14px;
}

.table thead th:not(:last-child) {
  padding-right: 20px;
}

.table tbody tr {
  border-top: 2px solid #f4f7ff;
}

.table tbody tr:last-child {
  border-bottom: 2px solid #f4f7ff;
}

.table tbody td p {
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: var(--text_color);
}

.table tbody td label {
  margin-bottom: 0;
}

.table tbody td {
  vertical-align: top;
  padding-block: 21px;
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: var(--text_color);
}

.table tbody td:first-child,
.table tbody td:last-child {
  padding-left: 24px;
}

.table tbody td:not(:last-child) {
  padding-right: 20px;
}

.order-text-end {
  text-align: end;
}

.order-table-item_pr {
  text-align: end;
}

.input-file {
  display: block;
  margin-top: 8px;
}

.input-file > span {
  color: var(--text_color);
  text-decoration: underline;
  cursor: pointer;
}

.filter-orders {
  min-width: 123px;
  max-width: 123px;
  margin-bottom: 9px;
  margin-left: auto;
  padding: 6px 8px;
  border-radius: 7px;
  border: 1px solid #e6e6e6;
}
</style>

<style>
.filter-orders .vs__dropdown-toggle {
  border: none;
}

.filter-orders .vs__selected-options {
  display: flex;
  align-items: center;
}

.filter-orders .vs__selected-options > span {
  margin: 0;
  padding: 0;
  max-width: 63px;
  display: inline-block;
}

.filter-orders .vs__selected-options > span {
  margin: 0;
}

.filter-orders .vs__selected-options > .vs__selected,
.filter-orders .vs__selected-options > input {
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: var(--grey-79);
  text-overflow: ellipsis;
  overflow: hidden;
  text-wrap: nowrap;
}

.filter-orders .vs__selected-options > .vs__selected + input {
  margin: 0;
  padding: 0;
  height: 0;
  width: 0;
  border: 0;
}

.operation-top .vc-popover-content-wrapper {
  left: -278px !important;
  right: auto !important;
  z-index: 1000 !important;
}

@media (max-width: 992px) {
  .operation-top .vc-popover-content-wrapper {
    left: 0 !important;
  }

  .vc-date-picker-content .vc-container,
  .operation-top .vc-popover-content.direction-bottom {
    width: 360px;
  }

  .vc-date-picker-content .vc-container{
    padding-top: 12px;
  }
}
</style>


<style scoped>
.dp-day-custom {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  padding: 7px 6px;
  border-radius: 4px !important;
  transition: background-color 0.2s;
  cursor: pointer;
}

.dp-day-custom:hover {
  border-radius: 4px;
  background-color: var(--primary_bg);
}

.vc-highlight {
  height: 40px !important;
}

.vc-highlights + .dp-day-custom {
  border-radius: 4px;
}

.dp-day-custom .dp-day-custom__day {
  color: var(--grey-79) !important;
}

.vc-highlights + .day-is-range {
  background-color: var(--light_gray) !important;
}

.vc-highlights + .day-is-range span {
  color: var(--primary_bg) !important;
}

.dp-day-custom:hover .dp-day-custom__day,
.vc-highlights + .dp-day-custom:hover span,
/* .vc-highlights + .dp-day-custom span, */
.vc-highlights + .day-is-range-start span,
.vc-highlights + .day-is-range-end span {
  color: #fff !important;
}

.vc-highlights + .day-is-range-start {
  border-radius: 7px 0 0 7px !important;
  overflow: hidden;
  background-color: var(--primary_bg);
}

.vc-highlights + .day-is-range-end {
  border-radius: 0 7px 7px 0 !important;
  overflow: hidden;
  background-color: var(--primary_bg);
}

.dp-day-custom__day {
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
}

.dp-day-custom__price {
  font-size: 10px;
  line-height: 100%;
  font-weight: 400;
  color: #797979;
}

.dp-day-custom__price.dp-day-custom__price--green {
  color: #7dd2ea;
}
</style>
