<template>
  <div class="dropdown compare-dropdown">
    <a href="#" class="dropdown-toggle">
      <div class="icon">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.0192 2L18.7266 3.08986L20.5796 5.28648H15.3584L8.01101 17.0356H1.5V18.7253H8.94879L16.2934 6.97619H20.5796L18.7266 9.17281L20.0192 10.2627L23.5 6.13133L20.0192 2Z"
            fill="#333333" />
          <path
            d="M20.0193 22.0343L23.5001 17.903L20.0193 13.7716L18.7266 14.8615L20.5797 17.0581H16.2934L13.9954 13.3802L12.562 14.2757L15.3585 18.7478H20.5797L18.7266 20.9444L20.0193 22.0343Z"
            fill="#333333" />
          <path d="M10.3822 10.7893L11.8157 9.89375L8.94879 5.30901H1.5V6.99872H8.01101L10.3822 10.7893Z"
            fill="#333333" />
        </svg>

      </div>
      <p>Сравнить</p>
    </a>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { baseUrl } from "../../../../repositories/repository.js";

export default {
  data: function () {
    return {
      baseUrl: baseUrl,
    };
  },
  computed: {
    ...mapGetters("compare", ["compareList"]),
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

