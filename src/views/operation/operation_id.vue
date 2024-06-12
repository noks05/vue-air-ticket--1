<template>
  <HeaderDefault/>
  <PageHeader :title="pageTitle" :subtitle="category" />
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
      <div
        v-for="operation in operations"
        :key="operation"
        class="operation_line_parent d-flex flex-column"
      >
        <div class="operation_line">
          <div
            :class="new_operations.includes(operation.id) ? 'blue_text' : null"
          >
            {{ operation.date }}
          </div>
          <div
            :class="new_operations.includes(operation.id) ? 'blue_text' : null"
          >
            {{ operation.price }}
          </div>
          <div class="d-flex justify-end ml-auto cursor-pointer">
            <img
              v-if="new_operations.includes(operation.id)"
              src="@/assets/newImg/icons/minus.svg"
              alt=""
              @click="closeMenu(operation.id)"
            />
            <img
              v-else
              @click="openOperation(operation.id)"
              src="@/assets/newImg/icons/plus.svg"
              alt=""
            />
          </div>
        </div>
        <Transition name="slide-fade">
          <div
            class="inside_operation"
            v-if="new_operations.includes(operation.id)"
          >
            <div
              class="operation_line border-0"
              v-for="item in operation.operation_about"
              :key="item"
            >
              <div></div>
              <div>{{ item.price }}</div>
              <div>{{ item.title }}</div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderDefault from "@/components/partial/headers/HeaderDefault.vue";
import PageHeader from "@/components/elements/PageHeader.vue";

export default {
  data() {
    return {
      operations: [
        {
          date: "26.10.2023",
          id: 1,
          price: "600,00 –",
          order_id: "Заказ 999313705-14",
          operation_about: [
            {
              price: "100,00 –",
              title: "В подарок",
            },
            {
              price: "600,00 –",
              title: "В подарок",
            },
          ],
        },
        {
          date: "25.10.2023",
          id: 2,
          price: "700,00 –",
          order_id: "Заказ 999313705-14",
          operation_about: [
            {
              price: "100,00 –",
              title: "В подарок",
            },
            {
              price: "600,00 –",
              title: "В подарок",
            },
          ],
        },
        {
          date: "24.10.2023",
          id: 3,
          price: "800,00 –",
          order_id: "Заказ 999313705-14",
          operation_about: [
            {
              price: "100,00 –",
              title: "В подарок",
            },
            {
              price: "600,00 –",
              title: "В подарок",
            },
          ],
        },
        {
          date: "23.10.2023",
          id: 4,
          price: "600,00 –",
          order_id: "Заказ 999313705-14",
          operation_about: [
            {
              price: "100,00 –",
              title: "В подарок",
            },
            {
              price: "600,00 –",
              title: "В подарок",
            },
          ],
        },
        {
          date: "22.10.2023",
          id: 5,
          price: "700,00 –",
          order_id: "Заказ 999313705-14",
          operation_about: [
            {
              price: "100,00 –",
              title: "В подарок",
            },
            {
              price: "600,00 –",
              title: "В подарок",
            },
          ],
        },
        {
          date: "21.10.2023",
          id: 6,
          price: "800,00 –",
          order_id: "Заказ 999313705-14",
          operation_about: [
            {
              price: "100,00 –",
              title: "В подарок",
            },
            {
              price: "600,00 –",
              title: "В подарок",
            },
          ],
        },
        {
          date: "20.10.2023",
          id: 7,
          price: "600,00 –",
          order_id: "Заказ 999313705-14",
          operation_about: [
            {
              price: "100,00 –",
              title: "В подарок",
            },
            {
              price: "600,00 –",
              title: "В подарок",
            },
          ],
        },
        {
          date: "19.10.2023",
          id: 8,
          price: "700,00 –",
          order_id: "Заказ 999313705-14",
          operation_about: [
            {
              price: "100,00 –",
              title: "В подарок",
            },
            {
              price: "600,00 –",
              title: "В подарок",
            },
          ],
        },
        {
          date: "18.10.2023",
          id: 9,
          price: "800,00 –",
          order_id: "Заказ 999313705-14",
          operation_about: [
            {
              price: "100,00 –",
              title: "В подарок",
            },
            {
              price: "600,00 –",
              title: "В подарок",
            },
          ],
        },
        {
          date: "17.10.2023",
          id: 10,
          price: "800,00 –",
          order_id: "Заказ 999313705-14",
          operation_about: [
            {
              price: "100,00 –",
              title: "В подарок",
            },
            {
              price: "600,00 –",
              title: "В подарок",
            },
          ],
        },
      ],
      new_operations: [],
      open: false,
      pageTitle: "Операции",
      category: "Операции",
    };
  },
  methods: {
    openOperation(id) {
      this.new_operations.push(id);
    },
    closeMenu(id) {
      const existIndex = this.new_operations.indexOf(id);
      if (existIndex !== -1) {
        this.new_operations.splice(existIndex, 1);
      }
    },
  },
  components: {
    PageHeader,
    HeaderDefault
  },
};
</script>

<style scoped>
.blue_text {
  color: var(--primary_bg);
}
.inside_operation {
  display: flex;
  flex-direction: column;
}
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
}
.buttons .show {
  padding: 0.5rem 2rem;
  border: 1px solid var(--primary_bg)a;
  border-radius: 8px;
  color: var(--primary_bg);
  font-size: 16px;
  font-family: Gilroy-Medium !important;
}
</style>
