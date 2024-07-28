<template>
  <headerDef />

  <div class="p-area-alerts">
    <p class="p-area-alert p-area-alert_green" v-if="closeAlert1">
      Не забудьте потратить 3000,00 бонусов на витрине, иначе в начале
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
        <li class="breadcrumb-item">
          <router-link :to="{path: $route.path}">Личный кабинет</router-link>
        </li>
        <li
          class="breadcrumb-item active"
          v-for="(crumb, id) in crumbs"
          :key="id"
        >
          <span
            :style="
              id + 1 === crumbs.length
                ? 'color: #000 !important; text-transform: none !important'
                : ''
            "
          >
            {{ crumb }}
          </span>
        </li>
      </ol>
    </div>
  </nav>

  <div class="container p-area-container">
    <h2 class="p-area-title">{{ $route.query.titlePage }}</h2>

    <div class="p-area-content">
      <Sidebar
        :class="[
          $route.query.titlePage === 'Заказы' ? 'p-area-sidebar_orders' : '',
        ]"
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
  },
};
</script>

<style scoped>
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
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: #000;
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
  min-width: 172px;
  max-width: 172px;
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
</style>
