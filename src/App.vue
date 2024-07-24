<template>
  <div>
    <modal />
    <calendar />
    <!-- <HeaderDefault /> -->
    <RouterView />
    <button
      id="scroll-top"
      ref="scrollTop"
      title="Back to Top"
      @click.prevent="scrollTop"
    >
      <img src="./assets/newImg/icons/arrow-up.svg" alt="" />
    </button>
    <FooterDefault />
    <div class="mobile-menu-overlay" @click="hideMobileMenu"></div>
    <mobile-menu></mobile-menu>
  </div>
</template>
<script>
import HeaderDefault from "./components/partial/headers/HeaderDefault.vue";
import FooterDefault from "./components/partial/footers/FooterDefault.vue";
import modal from "./components/elements/flights/modal.vue";
import MobileMenu from "./components/partial/home/MobileMenu.vue";
import { isSafariBrowser, isEdgeBrowser } from "@/utilities/common.js";
import calendar from "./components/elements/vcalendar/vdatepicker.vue";

export default {
  components: {
    HeaderDefault,
    FooterDefault,
    modal,
    MobileMenu,
    calendar,
  },
  mounted: function () {
    let scrollTop = this.$refs.scrollTop;
    document.addEventListener(
      "scroll",
      function () {
        if (window.pageYOffset >= 400) {
          scrollTop.classList.add("show");
        } else {
          scrollTop.classList.remove("show");
        }
      },
      false
    );
    window.addEventListener("click", (e) => {
      const clickInDropdown = e.target.closest(".container-truncate");
      if (!clickInDropdown) {
        const userDropdown = document.querySelector(".container-truncate");
        userDropdown.classList.remove("container-truncate--active");
      }
    });
  },
  methods: {
    scrollTop: function () {
      if (isSafariBrowser() || isEdgeBrowser()) {
        let pos = window.pageYOffset;
        let timerId = setInterval(() => {
          if (pos <= 0) clearInterval(timerId);
          window.scrollBy(0, -120);
          pos -= 120;
        }, 1);
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    },
    hideMobileMenu: function () {
      document.querySelector("body").classList.remove("mmenu-active");
    },
  },
};
</script>

<style scoped>
#scroll-top {
  width: 64px;
  height: 64px;
  background-color: var(--primary_bg);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
}

@media screen and (max-width: 468px) {
  #scroll-top {
    display: none !important;
  }
}
</style>
