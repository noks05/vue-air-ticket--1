<template>
  <v-select
    class="filter-orders"
    v-model="filterSelected"
    :options="filterOptions"
    placeholder="Фильтр"
  >
    <template #open-indicator="{ attributes }">
      <ArrowDownIcon v-bind="attributes" />
    </template>
  </v-select>

  <table class="table">
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

export default {
  components: {
    Pagination,
    ArrowDownIcon,
  },
  data() {
    return {
      filterOptions: ["Optionnnn 1", "Option 3", "Option 3"],
      filterSelected: null,
      perPage: 5,
      totalCount: 30,
    };
  },
};
</script>

<style>
.table {
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

.table thead th:first-child,
.table thead th:last-child {
  padding-left: 24px;
}

.table thead th {
  padding-block: 20px;
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
  padding-block: 24px;
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

.filter-orders .vs__open-indicator {
  fill: none;
}
</style>
