<template>
  <HeaderDefaultVue />
  <PageHeader title="Операции" subtitle="Личный кабинет" />
  <nav aria-label="breadcrumb" class="breadcrumb-nav mb-2">
    <div class="container">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Главная</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/shop/sidebar/list">Личный кабинет</router-link>
        </li>
        <li class="breadcrumb-item active">
          <router-link to="/shop/sidebar/list">Операции</router-link>
        </li>
        <!-- <li class="breadcrumb-item ">{{ pageTitle }}</li> -->
        <li class="breadcrumb-item" v-if="$route.query.searchTerm">
          <span>Search - {{ $route.query.searchTerm }}</span>
        </li>
      </ol>
    </div>
  </nav>
  <div class="operation_page">
    <div class="container">
      <div class="search-city" @click="toggleFilter">
        <div class="search">
          <img src="../assets/newImg/icons/search2.svg" alt="" />
        </div>
        <div class="result">
          <span> 01.12.2023 –20.12.2023 </span>
        </div>
      </div>
      <div class="buttons">
        <button class="date">01.12.2023 –16.12.2023</button>
        <button class="show">Показать</button>
      </div>
    </div>
    <div class="container">
      <div
        v-for="operation in operations"
        :key="operation"
        class="operation_line_parent d-flex flex-column"
        @click="openOperation(operation.id)"
      >
        <div class="operation_line">
          <div>{{ operation.date }}</div>
          <div>{{ operation.id }}</div>
          <div>{{ operation.order_id }}</div>
        </div>
        <div class="buttons" v-if="new_operations.includes(operation.id)">
          <button class="date">01.12.2023 –16.12.2023</button>
          <router-link :to="'operation/' + operation.order_id">
            <button class="show">Показать</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import PageHeader from "@/components/elements/PageHeader.vue";
import HeaderDefaultVue from "@/components/partial/headers/HeaderDefault.vue";
export default {
  data() {
    return {
      operations: [
        {
          date: "13.12.2023",
          id: "-105,82 –",
          order_id: "Заказ\n999313705-14",
        },
        {
          date: "13.12.2023",
          id: "-100,00 –",
          order_id: "Заказ\n999313705-14",
        },
      ],
      new_operations: [],
      open: false,
    };
  },
  computed: {
    modalShow() {
      return this.$store.getters["calendar/shCalendar"];
    },
  },
  methods: {
    openOperation(id) {
      this.new_operations.push(id);
    },
    toggleFilter() {
      this.$store.dispatch("calendar/toggleCalendar");
    },
  },
  components: {
    // PageHeader,
    HeaderDefaultVue,
  },
};
</script>

<style scoped>
.operation_page {
  margin-bottom: 6rem;
}

.operation_line {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
  padding: 10px 0;
  border-bottom: 1px solid var(--grey);
}
.operation_line div {
  font-family: Gilroy-Regular, sans-serif !important;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #333;
}
.result span {
  font-family: Gilroy-Regular, sans-serif !important;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #333;
}

.search-city {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.search-city:hover {
  background-color: #ebebeb;
}

.search {
  width: 20%;
  height: 100%;
}

.result {
  width: 60%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  gap: 5px;
}

.buttons {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
}

.buttons .date {
  padding: 0.5rem 2rem;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  font-size: 16px;
  white-space: nowrap;
  color: #777 !important;
}

.buttons .show {
  padding: 0.5rem 2rem;
  border: 1px solid var(--primary_bg);
  border-radius: 8px;
  color: var(--primary_bg);
  font-size: 16px;
  white-space: nowrap;
  font-family: Gilroy-Medium !important;
}

@media screen and (max-width: 610px) {
  .buttons .date {
    padding: 10px 50px 10px 20px;
  }

  .buttons .show {
    padding: 10px 80px;
  }
}

@media screen and (max-width: 610px) {
  .buttons .date {
    padding: 10px 40px;
  }

  .buttons .show {
    padding: 10px 40px;
  }
}

@media screen and (max-width: 400px) {
  .operation_line {
    gap: 0;
  }
}

@media screen and (max-width: 375px) {
  .buttons .date {
    padding: 10px 20px;
  }

  .buttons .show {
    padding: 10px 20px;
  }
}
</style>
