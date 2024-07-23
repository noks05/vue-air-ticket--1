<template>
  <v-select
    class="filter-orders"
    v-model="filterSelected"
    :options="filterOptions"
    placeholder="Фильтр"
  ></v-select>

  <table class="table">
    <thead>
      <tr>
        <th>Дата</th>
        <th>Номер</th>
        <th>Статус</th>
        <th>Описание</th>
        <th>Бонусами</th>
        <th>Деньгами</th>
        <th>Сумма</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>28.03.2024</td>
        <td>777355791</td>
        <td>Аннулирован</td>
        <td>
          Подарочный сертификат МВидео, 100 Подарочный сертификат Детский мир,
          100
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
</template>

<script>
export default {
  data() {
    return {
      filterOptions: ["Optionnnn 1", "Option 3", "Option 3"],
      filterSelected: null,
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

.table tbody td {
  vertical-align: top;
  padding-block: 24px;
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
</style>
