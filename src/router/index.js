import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home-component.vue";
import loginVue from "@/views/pages/login.vue";
import flyghtTicketsVue from "@/views/flyght-tickets.vue";
import flyghtTicketsVue2 from "@/views/flyght-tickets2.vue";
import operationVue from "@/views/operation.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sign_up",
      name: "sign up",
      component: loginVue,
    },
    {
      path: "/product/default/:slug",
      name: "product show",
      component: () => import("@/views/product/centered/_slug.vue"),
    },
    {
      path: "/product/default",
      name: "product default",
      component: () => import("@/views/product/centered/_slug.vue"),
    },
    {
      path: "/shop/sidebar/3cols/:category",
      name: "category show",
      component: () => import("@/views/shop/sidebar/_type.vue"),
    },
    {
      path: "/shop/sidebar",
      name: "param layout two",
      component: () => import("@/views/shop/sidebar/_type.vue"),
    },
    {
      path: "/shop/sidebar/:loyaut",
      name: "param layout",
      component: () => import("@/views/shop/sidebar/_type.vue"),
    },
    {
      path: "/shop/without",
      name:"without two",
      component: () => import("@/views/shop/sidebar/_type2.vue"),
    },
    {
      path: "/shop/without/:without",
      name:"without",
      component: () => import("@/views/shop/sidebar/_type2.vue"),
    },
    {
      path: "/shop/nosidebar/boxed",
      name: "category show boxed",
      component: () => import("@/views/shop/nosidebar/_type.vue"),
    },
    {
      path: "/shop/nosidebar/fullwidth",
      name: "category show fullwidth",
      component: () => import("@/views/shop/nosidebar/_type.vue"),
    },
    {
      path: "/shop/fullwidth",
      name: "category fullwidth",
      component: () => import("@/views/shop/category/fullwidth.vue"),
    },
    {
      path: "/shop/category/fullwidth",
      name: "shop category fullwidth",
      component: () => import("@/views/shop/category/fullwidth.vue"),
    },
    {
      path: "/shop/category/boxed",
      name: "shop category boxed",
      component: () => import("@/views/shop/category/boxed.vue"),
    },
    {
      path: "/flight-tickets",
      name: "flight tickets",
      component: flyghtTicketsVue,
    },
    {
      path: "/flight-tickets2",
      name: "flight tickets2",
      component: flyghtTicketsVue2,
    },
    {
      path: "/operation",
      name: "operation",
      component: operationVue,
    },
    {
      path: "/operation/:id",
      name: "operation show",
      component: () => import("@/views/operation/operation_id.vue"),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
