<template>
  <nav aria-label="Page navigation" v-if="shouldRender">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: currentPage < 2 }">
        <router-link
          class="page-link page-link-prev"
          :to="getPageUrl(currentPage - 1)"
          style="gap: 5px"
        >
          <span aria-hidden="true">
            <img src="../../assets/newImg/icons/left.svg" alt="" />
            <!-- <i class="icon-long-arrow-left"></i> --> </span
          >В начало
        </router-link>
      </li>
      <template v-if="pagesToBeShown.length">
        <li
          class="page-item"
          v-for="(page, index) in pagesToBeShown"
          :key="`page-${page}`"
        >
          <router-link
            class="page-link"
            :class="{ active: index === activeIndex }"
            :to="getPageUrl(page)"
            >{{ page }}</router-link
          >
          <span class="page-item-points" v-if="tablet">...</span>
        </li>
      </template>

      <li class="page-item-total pl-3" v-if="lastPage > 3">
        из {{ lastPage }}
      </li>

      <li class="page-item" :class="{ disabled: currentPage === lastPage }">
        <router-link
          class="page-link page-link-next"
          :to="getPageUrl(currentPage + 1)"
          style="gap: 5px"
        >
          Дальше
          <span aria-hidden="true">
            <!-- <i class="icon-long-arrow-right"></i> -->
            <img src="../../assets/newImg/icons/right.svg" alt="" />
          </span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    perPage: Number,
    total: Number,
  },
  data() {
    return {
      activeIndex: 0,
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    shouldRender: function () {
      return this.total > this.perPage;
    },
    currentPage: function () {
      return parseInt(this.$route.query.page ? this.$route.query.page : 1);
    },
    lastPage: function () {
      return (
        parseInt(this.total / this.perPage) +
        (this.total % this.perPage ? 1 : 0)
      );
    },
    startIndex: function () {
      if (!this.currentPage % this.perPage) {
        return this.currentPage;
      }
      return this.perPage * parseInt(this.currentPage / this.perPage);
    },
    pagesToBeShown: function () {
      let pageNumbers = [];
      this.pageCount =
        Math.floor(this.total / this.perPage) +
        (0 < this.total % this.perPage ? 1 : 0);

      if (!this.tablet) {
        for (let i = -1; i < 2 && this.pageCount >= 3; i++) {
          if (1 < this.currentPage && this.currentPage < this.pageCount)
            pageNumbers.push(this.currentPage + i);
          if (1 === this.currentPage)
            pageNumbers.push(this.currentPage + i + 1);
          if (this.currentPage === this.pageCount)
            pageNumbers.push(this.currentPage + i - 1);
        }

        for (let i = 0; i < this.pageCount && this.pageCount < 3; i++) {
          pageNumbers.push(i + 1);
        }
      }

      if (this.tablet) {
        pageNumbers.push(1);
      }
      return pageNumbers;
    },
    tablet() {
      let result = this.windowWidth <= 992;
      return result;
    },
  },
  methods: {
    getPageUrl: function (page) {
      let originQuery = {};
      for (let key in this.$route.query) {
        if (key !== "page") {
          originQuery[key] = this.$route.query[key];
        }
      }
      if (page > 1) {
        originQuery.page = page;
      }

      return {
        path: this.$route.path,
        query: originQuery,
      };
    },
  },
};
</script>

<style scoped>
@media (max-width: 991px) {
  .pagination .page-item-points {
    margin-left: 14px;
  }

  .pagination .page-item-total {
    padding-left: 0;
  }
}
</style>
