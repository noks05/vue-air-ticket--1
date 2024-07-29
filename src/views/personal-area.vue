<template>
  <headerDef />

  <div class="p-area-alerts">
    <p class="p-area-alert p-area-alert_green" v-if="closeAlert1">
      Не забудьте&nbsp;потратить&nbsp;3000.00&nbsp;бонусов на витрине, иначе в начале
      следующего месяца они сгорят.
      <button @click="closeAlert1 = !closeAlert1" type="button">
        <CancelIcon />
      </button>
    </p>
    <p class="p-area-alert p-area-alert_red" v-if="closeAlert2">
      Товар закончился.
      <button @click="closeAlert2 = !closeAlert2" type="button">
        <CancelIcon />
      </button>
    </p>
  </div>

  <nav
    aria-label="breadcrumb"
    class="breadcrumb-nav breadcrumb-nav_mb breadcrumb-nav_mt"
  >
    <div class="container">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Главная</router-link>
        </li>
        <li
          class="breadcrumb-item breadcrumb-item_mobile breadcrumb-item_arrow"
        >
          <router-link :to="{ path: $route.path }">Личный кабинет</router-link>
        </li>
        <li
          :class="[
            'breadcrumb-item',
            'breadcrumb-item_mobile',
            'breadcrumb-item_arrow-none',
            id + 1 === crumbs.length ? 'active' : '',
            $route.query.titleAddress && id === 0 ? 'breadcrumb-item_none' : '',
          ]"
          v-for="(crumb, id) in crumbs"
          :key="id"
        >
          <router-link
            :style="
              id + 1 === crumbs.length
                ? 'color: #000 !important; text-transform: none !important'
                : ''
            "
            :to="{ path: $route.path, query: { titlePage: crumb } }"
          >
            {{ crumb }}
          </router-link>
        </li>
      </ol>
    </div>
  </nav>

  <div class="container p-area-container">
    <h2
      :class="[
        'p-area-title',
        $route.query.titlePage === 'Личные данные' ? 'p-area-title_data' : '',
      ]"
    >
      {{ crumbs[crumbs.length - 1] }}
    </h2>

    <div class="p-area-content">
      <Sidebar
        :class="[
          $route.query.titlePage === 'Заказы' ? 'p-area-sidebar_orders' : '',
          $route.query.titlePage === 'Добавление адреса'
            ? 'p-area-sidebar_add'
            : '',
        ]"
        v-if="!tablet"
      />
      <PersonalAreaContent />
    </div>
  </div>
</template>

<script>
import headerDef from "@/components/partial/headers/HeaderDefault.vue";
import Sidebar from "@/components/partial/personal-area/SidebarPersonalArea.vue";
import PersonalAreaContent from "@/components/partial/personal-area/ContentPersonalArea.vue";
import CancelIcon from "@/assets/images/icons/iconsComp/CancelIcon.vue";

export default {
  components: {
    headerDef,
    Sidebar,
    PersonalAreaContent,
    CancelIcon,
  },
  data() {
    return {
      closeAlert1: true,
      closeAlert2: true,
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    crumbs() {
      const item = this.$route.query.titlePage;
      const addAddress = this.$route.query.titleAddress;
      const arr = [];
      item && arr.push(item);
      addAddress && arr.push(addAddress);
      return arr;
    },
    mobile() {
      let result = this.windowWidth <= 576;
      return result;
    },
    tablet() {
      let result = false;

      if(this.$route.query.titlePage === 'Заказы'){
         result = this.windowWidth <= 991;
      }else{
         result = this.windowWidth <= 768;
      }
      return result;
    },
  },
  mounted() {
    console.log(this.windowWidth);
  },
};
</script>

<style scoped>
.breadcrumb-item.active {
  pointer-events: none;
}

.breadcrumb-nav_mt.breadcrumb-nav_mb {
  margin-bottom: 16px;
  border-bottom: none;
  border-top: 0.2rem solid rgba(235, 235, 235, 0.55);
}

.p-area-container {
  margin-bottom: 60px;
}

.p-area-title {
  margin: 0;
  margin-bottom: 16px;
  letter-spacing: 0;
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: #000;
}

.p-area-title_data {
  margin-bottom: 24px;
}

.p-area-content {
  display: flex;
  /* justify-content: space-between; */
  gap: 20px;
}

.p-area-alerts {
  display: block;
}

.p-area-alerts:empty {
  display: none;
}

.p-area-alert {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 18px;
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #000;
}

.p-area-alert button {
  padding: 0;
  transition: filter 0.2s;
}

.p-area-alert button:hover {
  filter: brightness(0.5);
}

.p-area-alert_green {
  color: #5c8a67;
  background-color: #d4edda;
}

.p-area-alert_red {
  color: #833838;
  background-color: #ff997a;
}

.p-area-container .p-area-sidebar_orders {
  letter-spacing: 0;
  min-width: 172px;
  max-width: 172px;
  margin-top: -2px;
}

.p-area-container .p-area-sidebar_add .p-area-widget {
  padding-block: 17px;
}
</style>

<style>
.p-area-alert button svg {
  height: 17px;
  width: 17px;
}

.p-area-alert_green svg path {
  stroke: #5c8a67;
}

.p-area-alert_red svg path {
  stroke: #833838;
}

.breadcrumb-item {
  display: flex;
}
.breadcrumb-item_arrow::after {
  display: none;
  color: #999999;
  content: ">";
  font-family: Gilroy-Medium;
  padding-left: 0.7rem;
  font-size: 1.5rem;
  vertical-align: middle;
  margin-top: -0.1rem;
}

.breadcrumb-item_none{
  display: none;
}

@media (max-width: 576px) {
  .breadcrumb-nav .container,
  .p-area-container.container{
    padding-inline: 16px;
  }

  .breadcrumb-nav_mt.breadcrumb-nav_mb{
    margin-bottom: 18px !important;
    border-bottom: var(--border-grey) !important;
  }

  .breadcrumb-item_mobile {
    font-size: 14px;
  }

  .breadcrumb-item + .breadcrumb-item.breadcrumb-item_arrow-none::before {
    display: none;
  }
  .breadcrumb-item + .breadcrumb-item.breadcrumb-item_arrow-none {
    padding-left: 0;
  }

  .breadcrumb-item_arrow::after {
    display: block;
  }

  .p-area-container .p-area-title {
    font-size: 22px;
  }

  .address-delivery-descr{
    margin-bottom: 24px;
  }

  .address-btn{
    text-align: center;
    width: 100%;
    margin-left: 0;
  }
}
</style>
