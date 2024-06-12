<template>
  <header class="header header-4 header-intro-clearance">
    <div class="header-top">
      <div :class="isFullwidth ? 'container-fluid' : 'container'">
        <div class="header-left">
          <a href="tell:#">
            <div class="call">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_280_957)">
                  <path
                    d="M3.2603 10.6357C4.83841 12.5222 6.73812 14.0075 8.90638 15.0584C9.73191 15.4496 10.8359 15.9138 12.0659 15.9934C12.1422 15.9967 12.2151 16 12.2914 16C13.1169 16 13.78 15.7149 14.3204 15.1281C14.3237 15.1247 14.3303 15.1181 14.3336 15.1115C14.5259 14.8794 14.7448 14.6705 14.9735 14.4484C15.1293 14.2992 15.2885 14.1434 15.441 13.9843C16.1472 13.2482 16.1472 12.3133 15.4344 11.6005L13.4418 9.60796C13.1036 9.25653 12.6992 9.07087 12.2748 9.07087C11.8504 9.07087 11.4426 9.25653 11.0945 9.60464L9.90762 10.7915C9.79821 10.7286 9.68549 10.6722 9.5794 10.6191C9.44678 10.5528 9.32412 10.4898 9.21471 10.4202C8.1339 9.73394 7.15255 8.83879 6.21429 7.68835C5.7402 7.08827 5.42192 6.58433 5.19979 6.07045C5.51144 5.78864 5.80319 5.49358 6.085 5.20514C6.18446 5.10236 6.28723 4.99959 6.39001 4.89681C6.74807 4.53875 6.94036 4.12433 6.94036 3.70327C6.94036 3.28222 6.75139 2.8678 6.39001 2.50974L5.40203 1.52176C5.28599 1.40572 5.17658 1.293 5.06386 1.17696C4.84505 0.951513 4.61628 0.719436 4.39084 0.510568C4.04936 0.175715 3.64819 0 3.22383 0C2.80277 0 2.3983 0.175715 2.04355 0.513883L0.803603 1.75383C0.352712 2.20472 0.097428 2.75176 0.044382 3.385C-0.0186101 4.17737 0.127266 5.01948 0.505219 6.0373C1.08541 7.6121 1.96067 9.07418 3.2603 10.6357ZM0.853334 3.45462C0.893118 3.01368 1.0622 2.64567 1.38048 2.32739L2.6138 1.09407C2.80609 0.908413 3.01827 0.812267 3.22383 0.812267C3.42606 0.812267 3.63162 0.908413 3.82059 1.1007C4.04272 1.30626 4.25159 1.52176 4.47704 1.75052C4.58976 1.86656 4.7058 1.98259 4.82184 2.10195L5.80982 3.08993C6.01537 3.29548 6.12146 3.50435 6.12146 3.7099C6.12146 3.91546 6.01537 4.12433 5.80982 4.32988C5.70704 4.43266 5.60427 4.53875 5.50149 4.64152C5.19316 4.95317 4.90472 5.24824 4.58645 5.53005C4.57982 5.53668 4.5765 5.53999 4.56987 5.54662C4.29469 5.8218 4.33779 6.08371 4.4041 6.28264C4.40742 6.29258 4.41073 6.29921 4.41405 6.30916C4.66933 6.9225 5.02408 7.50601 5.57774 8.20224C6.57236 9.42893 7.62001 10.3804 8.77376 11.1131C8.91633 11.206 9.06883 11.2789 9.21139 11.3518C9.34401 11.4182 9.46668 11.4811 9.57608 11.5508C9.58935 11.5574 9.59929 11.564 9.61255 11.5707C9.72196 11.627 9.82805 11.6535 9.93415 11.6535C10.1994 11.6535 10.3718 11.4845 10.4281 11.4281L11.6681 10.1881C11.8604 9.99586 12.0692 9.89308 12.2748 9.89308C12.5268 9.89308 12.7323 10.0489 12.8616 10.1881L14.8608 12.184C15.2586 12.5818 15.2553 13.0128 14.8508 13.4339C14.7116 13.5831 14.5657 13.7257 14.4099 13.8748C14.1778 14.1003 13.9358 14.3324 13.717 14.5943C13.3357 15.0054 12.8815 15.1977 12.2947 15.1977C12.2383 15.1977 12.1787 15.1944 12.1223 15.191C11.0349 15.1214 10.0237 14.6971 9.26444 14.3357C7.20228 13.3378 5.39208 11.9221 3.89022 10.1252C2.65358 8.63655 1.82142 7.25072 1.27107 5.76544C0.929587 4.85371 0.800288 4.12101 0.853334 3.45462Z"
                    fill="#777777"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_280_957">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              +7 800 250-70-07
            </div>
          </a>
        </div>
        <div class="header-right">
          <ul class="top-menu">
            <li>
              <a href="/sign_up">
                <span class="logIn"> Вход / Регистрация </span></a
              >
              <ul>
                <li>
                  <router-link to="/sign_up" class="callhov">
                    <span class="logIn"> Вход / Регистрация </span>
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header-middle">
      <div :class="isFullwidth ? 'container-fluid' : 'container'">
        <div class="header-left">
          <button class="mobile-menu-toggler" @click="openMobileMenu">
            <span class="sr-only">Toggle mobile menu</span>
            <img
              class="mobile-menu-cos"
              src="../../../assets/newImg/icons/menu.svg"
              alt=""
            />
          </button>
          <router-link to="/" class="logo">
            <img
              src="../../../assets/newImg/logotypes/logo.svg"
              class="bg-transparent"
              alt="Molla Logo"

            />
          </router-link>
        </div>
        <div class="header-center">
          <header-search></header-search>
        </div>
        <div class="header-right">
          <wishlist-menu></wishlist-menu>
          <cart-menu></cart-menu>
        </div>
      </div>
    </div>
    <sticky-header>
      <div class="header-bottom sticky-header">
        <div :class="isFullwidth ? 'container-fluid' : 'container'">
          <div class="header-left">
            <div class="dropdown category-dropdown">
              <a
                href="javascript:;"
                class="dropdown-toggle"
                title="Потратить бонусы"
              >
                <div class="drop-custom">
                  <svg
                    class="hover-menu"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
                      fill="#333333"
                    />
                  </svg>
                  <svg
                    class="hover-close"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
                      fill="#fff"
                    />
                  </svg>
                  Потратить бонусы
                </div>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="#000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.28548 6.08542L7.88184 2.48786C8.0393 2.33 8.0393 2.07424 7.88184 1.91599C7.72438 1.75813 7.46863 1.75813 7.31117 1.91599L4.00016 5.22819L0.689143 1.91638C0.531682 1.75853 0.275927 1.75853 0.118068 1.91638C-0.0393925 2.07424 -0.0393925 2.3304 0.118068 2.48826L3.71443 6.08582C3.87027 6.24129 4.13004 6.24129 4.28548 6.08542Z"
                    fill="#333333"
                  />
                </svg>
              </a>
              <div class="dropdown-menu">
                <nav class="side-nav">
                  <ul class="menu-vertical sf-arrows">
                    <li
                        class="item-lead"
                        :class="{
                        active: $route.query.category == 'electronics',
                      }"
                    >
                      <router-link to="/product/default/"
                      >Подарочные сертификаты</router-link
                      >
                    </li>
                    <li
                        class="item-lead"
                        :class="{ active: $route.query.category == 'gift-idea' }"
                    >
                      <router-link to="/flight-tickets"
                      >Путешествия</router-link
                      >
                    </li>
                    <!-- <li :class="{ active: $route.query.category == 'beds' }">
                      <router-link to="/flight-tickets">Авиабилеты
                      </router-link>
                    </li>
                    <li :class="{ active: $route.query.category == 'lighting' }">
                      <router-link to="/flight-tickets">ЖД билеты</router-link>
                    </li>
                    <li :class="{
                      active:
                        $route.query.category == 'sofas-and-sleeper-sofas',
                    }">
                      <router-link to="/flight-tickets">Отели </router-link>
                    </li> -->
                    <li
                        style="background-color: #f9f9f9"
                        :class="{ active: $route.query.category == 'storage' }"
                    >
                      <router-link to="/shop/without/3cols"
                      >Товары
                      </router-link>
                    </li>
                    <li
                        style="background-color: #f9f9f9"
                        :class="{
                        active:
                          $route.query.category == 'armchairs-and-chaises',
                      }"
                    >
                      <router-link to="#">Благотворительность </router-link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div class="header-center">
            <main-menu></main-menu>
          </div>
          <div class="header-right overflow-hidden">
            <p class="text-truncate">
              <img
                src="../../../assets/newImg/icons/user_icon.svg"
                alt="user"
              />
              Александр: 3300.00
            </p>
          </div>
        </div>
      </div>
    </sticky-header>
  </header>
</template>

<script>
import CartMenu from "../headers/shared/cart-catalog.vue";
import WishlistMenu from "../headers/shared/wishlist-cart.vue";
import MainMenu from "../headers/shared/MainMenu.vue";
import HeaderSearch from "../headers/shared/HeaderSearch.vue";
import StickyHeader from "../../elements/StickyHeader.vue";

export default {
  components: {
    CartMenu,
    WishlistMenu,
    MainMenu,
    HeaderSearch,
    StickyHeader,
  },
  computed: {
    isFullwidth: function () {
      return this.$route.path.includes("fullwidth");
    },
  },
  methods: {
    openMobileMenu: function () {
      document.querySelector("body").classList.add("mmenu-active");
    },
  },
};
</script>
<style scoped>
.dropdown-toggle {
  justify-content: space-between;
  border-top-right-radius: 0.8rem;
  border-top-left-radius: 0.8rem;
}

.dropdown-menu:hover .category-dropdown .dropdown-toggle {
  color: #fff !important;
}

.hover-close {
  display: none;
}

.call {
  display: flex;
  gap: 5px;
  font-size: 14px;
  font-family: Gilroy-Medium !important;
}

.call:hover svg path {
  fill: var(--primary_bg);
}

.logIn {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  font-family: Gilroy-Medium !important;
  color: #777777 !important;
}

.logIn:hover {
  fill: var(--primary_bg) !important;
  color: var(--primary_bg) !important;
}

.logIn:hover svg path {
  fill:var(--primary_bg);
}

.drop-custom {
  display: flex;
  align-items: center;
  font-family: Gilroy-Medium !important;
  gap: 10px;
}

.dropdown:hover .drop-custom {
  color: white;
}

.drop-custom:hover {
  color: #fff;
}

.category-dropdown {
  border-top-right-radius: 0.8rem;
  border-top-left-radius: 0.8rem;
}

.category-dropdown:hover {
  background-color: transparent !important;
  color: #fff !important;
}

.category-dropdown:hover svg path {
  fill: #fff;
}

.category-dropdown:hover .hover-menu {
  display: none;
}

.category-dropdown:hover .hover-close {
  display: block;
}

.text-truncate {
  display: flex;
  gap: 5px;
  font-family: Gilroy-Medium !important;
  color: #000;
}

.mobile-menu-cos {
  width: 50px;
  height: 50px;
}
</style>
