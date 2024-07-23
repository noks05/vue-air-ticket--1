<template>
  <headerDef />
  <nav aria-label="breadcrumb" class="breadcrumb-nav breadcrumb-nav_mb breadcrumb-nav_mt">
    <div class="container">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Главная</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/shop/sidebar/list">Личный кабинет</router-link>
        </li>
        <li class="breadcrumb-item active" v-for="(crumb, id) in crumbs" :key="id">
          <router-link to="/shop/sidebar/list"
            :style="id + 1  === crumbs.length ? 'color: #000 !important; text-transform: none !important' : ''">{{crumb}}</router-link>
        </li>
      </ol>
    </div>
  </nav>

  <div class="container p-area-container">
    <h2 class="p-area-title">{{ $route.query.titlePage }}</h2>

    <div class="p-area-content">
      <Sidebar/>
      <PersonalAreaContent/>
    </div>
  </div>

</template>

<script>
import headerDef from "@/components/partial/headers/HeaderDefault.vue";
import Sidebar from "@/components/partial/personal-area/SidebarPersonalArea.vue";
import PersonalAreaContent from "@/components/partial/personal-area/ContentPersonalArea.vue";

export default {
  components: {
    headerDef,
    Sidebar,
    PersonalAreaContent,
  },
  data(){
    return{

    }
  },
  computed:{
     crumbs(){
      return [String(this.$route.query.titlePage)]
     },
  }
}
</script>

<style scoped>
.breadcrumb-nav_mt.breadcrumb-nav_mb{
  margin-bottom: 16px;
  border-bottom: none;
  border-top: 0.2rem solid rgba(235, 235, 235, 0.55);
}
.p-area-container{
  margin-bottom: 60px;
}
.p-area-title{
  margin: 0;
  margin-bottom: 16px;
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: #000;
}
.p-area-content{
  display: flex;
  justify-content: space-between;
  gap: clamp(20px, 10vw, 129px);
}
</style>
