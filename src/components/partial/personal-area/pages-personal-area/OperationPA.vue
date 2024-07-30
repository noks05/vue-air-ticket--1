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

  <table class="table operation-table">
    <thead>
      <tr>
        <th>Дата</th>
        <th>Списание</th>
        <th>Бонусы</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>28.03.2024</td>
        <td>Сгорание по сроку</td>
        <td>Списано: 481,67</td>
      </tr>
      <tr>
        <td>28.03.2024</td>
        <td>Заказ №5135</td>
        <td>Списано: 481,67</td>
      </tr>
      <tr>
        <td>28.03.2024</td>
        <td>Корректировка баланса</td>
        <td>Списано: 481,67</td>
      </tr>
      <tr>
        <td>28.03.2024</td>
        <td>За участие в акции</td>
        <td>Списано: 481,67</td>
      </tr>
    </tbody>
  </table>

  <pagination :per-page="perPage" :total="totalCount"></pagination>
</template>

<script>
import Pagination from "@/components/elements/Pagination.vue";
import ArrowDownIcon from "@/assets/images/icons/iconsComp/ArrowDownIcon.vue";
import CalendarIcon from "@/assets/images/icons/iconsComp/CalendarIcon.vue";
import PathIcon from "@/assets/images/icons/iconsComp/PathIcon.vue";
import { getFormatMonth } from "@/utilities/calendar";

export default {
  components: {
    Pagination,
    ArrowDownIcon,
    CalendarIcon,
    PathIcon,
  },
  data() {
    return {
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

.dropdown {
  padding: 2.4rem;
  border: var(--border-grey);
  border-radius: 0 0 7px 7px;
  background-color: #fff;
  box-shadow: var(--shadow-light);
  overflow: hidden;
  z-index: 1000;
}

.dropdown.transfers-dropdown {
  right: 123px;
}

</style>

<style>
.operation-label{
  position: relative;
  margin-bottom: 0;
}

.operation-label input{
  height: 40px;
  width: 121px;
  padding-inline: 16px;
  padding-right: 37px;
  border: var(--border-grey);
  border-radius: var(--bdrs-7);
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  text-wrap: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: var(--text_color);
}

.operation-label input:focus{
  outline: none;
  border-color: var(--primary_bg);
}

.operation-label input[placeholder="Дата от"]{
  border-radius: var(--bdrs-7) 0 0 var(--bdrs-7);
}

.operation-label input[placeholder="Дата до"]{
  border-radius: 0 var(--bdrs-7) var(--bdrs-7) 0;
}

.operation-label svg{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
}

.operation-top {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}

.operation-datepicker-wrap{
  display: flex;
  align-items: center;
}

.operation-datepicker-wrap .order-btn{
  margin-left: 20px;
}

.operation-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 125px;
  width: 100%;
  height: 40px;
  padding: 12px 15px;
  border-radius: var(--bdrs-7);
  border: var(--border-grey);
}

.operation-btn.operation-btn--active {
  width: fit-content;
}

.operation-btn.operation-btn--active span {
  display: none;
}

.operation-filter-icon {
  width: 20px;
  height: 9px;
  transition: transform 0.3s;
}

.operation-btn.operation-btn--active .operation-filter-icon {
  transform: rotateZ(180deg);
}

.operation-btn span {
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: var(--grey-79);
}

.operation-table{
  margin-top: 5px;
}

.operation-table thead th:nth-child(1){
  width: 38%;
}

.operation-table thead th:nth-child(2){
  width: 33%;
}

.order-btn {
  margin-left: 20px;
}

.date-picker__day {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.date-picker__selected {
  background-color: red;
  border-radius: 4px;
}

.date-picker__price {
  font-family: Gilroy-Medium;
  font-weight: 400;
  font-size: 10px;
  color: #797979;
}

.date-picker__price_b {
  color: #7dd2ea;
}

.date-picker__mobile-title {
  font-size: 16px;
  font-weight: 500 !important;
  font-family: Gilroy-Medium !important;
  color: #333;
}

.search-filter__item.date-picker__btn {
  gap: 8px;
  margin-left: auto;
  margin-top: 23px;
  font-size: 16px;
}


.table {
  width: 100%;
  bottom: none;
  margin-bottom: 37px;
}

.table thead th {
  text-align: start;
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: var(--grey-79);
}

.table thead th:first-child,
.table thead th:last-child {
  padding-left: 24px;
}

.table thead th {
  padding-block: 18px;
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

.table tbody td {
  vertical-align: top;
  padding-block: 23px;
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  font-size: 13px;
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

.filter-orders .vs__open-indicator {
  fill: none;
}

.operation-top .vc-popover-content-wrapper {
  left: -278px !important;
  right: auto !important;
  z-index: 1000 !important;
}
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


<style>
@media (max-width: 576px) {
  .operation-top{
    flex-direction: column-reverse;
    align-items: flex-end;
    gap: 15px;
    margin-top: -40px;
  }

  .operation-datepicker-wrap{
    gap: 8px;
    flex-direction: column;
    width: 100%;
  }

  .operation-datepicker-wrap .order-btn{
    margin-left: 0;
    width: 100%;
  }

  .operation-label-wrap{
    width: 100%;
  }

  .operation-label-wrap .operation-label {
    width: 50%;
  }

  .operation-label-wrap .operation-label input{
    width: 100%;
  }

  .operation-btn {
    max-width: 108px;
    padding: 12px 7px;
  }

  .operation-btn.operation-btn--active span {
    display: block;
  }

  .operation-btn.operation-btn--active {
    width: 100%;
  }

  .operation-table{
    margin-top: 15px;
  }

  .operation-table thead{
    display: none;
  }

  .operation-table tbody tr{
    border-top: none;
  }

  .operation-table tbody td:first-child{
    padding-left: 0;
    width: 35%;
  }

  .operation-table tbody td:last-child{
    width: 30%;
  }

  .operation-table tbody td{
    height: 56px;
    padding-block: 16px;
    line-height: 100%;
  }

  .operation-table{
    margin-top: 24px;
  }
}
</style>
<style scoped>

</style>
