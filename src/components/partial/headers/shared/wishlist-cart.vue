<template>
    <div class="wishlist">
      <router-link to="#" title="Wishlist">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 256 256">
            <path fill="currentColor"
              d="M223 57a58.07 58.07 0 0 0-81.92-.1L128 69.05l-13.09-12.19A58 58 0 0 0 33 139l89.35 90.66a8 8 0 0 0 11.4 0L223 139a58 58 0 0 0 0-82m-11.35 70.76L128 212.6l-83.7-84.92a42 42 0 0 1 59.4-59.4l.2.2l18.65 17.35a8 8 0 0 0 10.9 0l18.65-17.35l.2-.2a42 42 0 1 1 59.36 59.44Z" />
          </svg>
        </div>
        <p>Избранное</p>
      </router-link>
    </div>
  </template>

  <script>
  import { mapGetters } from "vuex";
  export default {
    computed: {
      ...mapGetters("wishlist", ["wishlistQty"]),
    },
  };
  </script>
  <style scoped>
  p {
    font-family: Gilroy-Regular;
    font-size: 12px;
  }

  .dropdown-toggle:hover svg path {
    fill: var(--primary_bg);
  }
  </style>
