<template>
  <headerDef />
  <PageHeader title="Авиабилеты" subtitle="Путешествия" />
  <nav aria-label="breadcrumb" class="breadcrumb-nav mb-2">
    <div class="container">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Главная</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/shop/sidebar/list">Путешествия</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/shop/sidebar/list">Авиабилеты</router-link>
        </li>
        <li class="breadcrumb-item active">
          <router-link
            to="/shop/sidebar/list"
            style="color: #000 !important; ext-transform: none !important"
            >Результаты поиска авиабилетов</router-link
          >
        </li>
      </ol>
    </div>
  </nav>
  <div class="container">
    <div class="search-city" @click="showSearch">
      <div class="search">
        <img src="../assets/newImg/icons/search2.svg" alt="" />
      </div>
      <div class="result">
        <span style="display: flex; gap: 7px">
          Волгоград
          <img src="../assets/newImg/icons/arrows.svg" alt="" />
          Москва ,
        </span>
        <span> 7 фев – 10 фев, </span>
        <span> 1 пасс, любой </span>
      </div>
    </div>
    <div class="search-fielsd" v-if="search">
      <div class="search-option">
        <h6>Туда</h6>
        <h6>Туда-обратно</h6>
        <h6>Cложный перелет</h6>
      </div>
      <div class="search-form-field">
        <input type="text" placeholder="Откуда" />
        <input type="text" placeholder="Куда" />
        <input type="date" />
        <div class="passenger">
          <div class="pax">
            <img src="../assets/newImg/icons/elder.svg" alt="elder" />
            x 1
          </div>
          <div class="pax">
            <img src="../assets/newImg/icons/teen.svg" alt="teen" />
            x 1
          </div>
          <div class="pax">
            <img src="../assets/newImg/icons/baby.svg" alt="baby" />
            x 1
          </div>
        </div>
        <button class="search-btn">Искать</button>
      </div>
    </div>
    <div class="serach-result-field">
      <!-- <ticket v-for="item in data" :data="item" />  -->
      <defaultT />
    </div>
  </div>
  <div class="filter">
    <div class="more-container text-center mt-1 mb-6">
      <div
          class="btn btn-outline-dark-2 btn-round btn-more"

          style="
          gap: 5px;
          font-family: Gilroy-Medium , sans-serif!important;
          font-weight: 600;
        "
      >
        <img src="../assets/newImg/icons/filter.svg" alt="" style="height: 16px;" />
        <span style="text-transform: none !important; height: 16px;">
          Фильтры и сортировка</span
        >
      </div>
    </div>
  </div>
</template>
<script>
// import PageHeader from "@/components/elements/PageHeader.vue";
import defaultT from "@/components/elements/flights/default.vue";
import ticket from "@/components/elements/flights/ticet-v2.vue";
import headerDef from "@/components/partial/headers/HeaderDefault.vue";
export default {
  components: {
    // PageHeader,
    ticket,
    headerDef,
    defaultT,
  },
  data() {
    return {
      category: "",
      search: false,
      data: [
        {
          img1: "/assets/images/ticet-logo3.png",
          address1: "20:20 VOG",
          data1: "07.02.2024",
          img2: "/assets/images/ticet-logo3.png",
          address2: "22:25 SVO",
          data2: "07.02.2024",
          time: "2 ч 5м",
          addition: "DP-6968",
          addName: "Победа",
          img3: "/assets/images/ticet-logo3.png",
          address3: "16:10 IST",
          data3: "24.03.2024",
          img4: "/assets/images/ticet-logo3.png",
          address4: "09:40 SVO",
          data4: "10.02.2024",
          time2: "2 ч 15м",
          addition2: "DP-6969",
          addName2: "Победа",
          price: "6439.00-",
          icons1: "/assets/Group-class.svg",
          icons2: "/assets/arrows.svg",
          icons3: "/assets/round-arrows.svg",
          icons21: "/assets/bagaj-close.svg",
          icons22: "/assets/arrows.svg",
          icons23: "/assets/resycle-close.svg",
        },
        {
          img1: "/assets/images/ticet-logo.png",
          address1: "20:20 VOG",
          data1: "07.02.2024",
          img2: "/assets/images/ticet-logo3.png",
          address2: "22:25 SVO",
          data2: "07.02.2024",
          time: "2 ч 5м",
          addition: "DP-6968",
          addName: "Победа",
          img3: "/assets/images/ticet-logo.png",
          address3: "7:25 SVO",
          data3: "10.02.2024",
          img4: "/assets/images/ticet-logo3.png",
          address4: "09:40 SVO",
          data4: "10.02.2024",
          time2: "2 ч 15м",
          addition2: "DP-6969",
          addName2: "Победа",
          price: "6964.00-",
          icons1: "/assets/Group-class.svg",
          icons2: "/assets/arrows.svg",
          icons3: "/assets/round-arrows.svg",
          icons21: "/assets/Group-class.svg",
          icons22: "/assets/arrows.svg",
          icons23: "/assets/round-arrows.svg",
        },
      ],
    };
  },
  created() {
    this.category = this.$route.query.category;
    this.$watch(
      () => this.$route.query.category,
      (newCategory) => {
        this.category = newCategory;
      }
    );
  },
  computed: {
    modalShow() {
      return this.$store.getters["flight/showFilter"];
    },
  },
  methods: {
    toggleFilter() {
      this.$store.dispatch("flight/toggleFilter");
    },
    showSearch() {
      this.search = !this.search;
    },
  },
};
</script>

<style scoped>
.filter {
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
  user-select: none;
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
  color: #000 !important;
}

.search-fielsd {
  width: 100%;
  height: auto;
  margin-top: 20px;
}

.search-option {
  display: flex;
  gap: 10px;
}

.search-form-field {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.search-form-field input {
  cursor: pointer;
}

.search-form-field input[type="text"] {
  padding: 16px 40px 16px 20px;
  border-radius: 8px;
  border: 1px solid #ebebeb;
  position: relative;
}
.search-form-field input[type="date"] {
  padding: 16px 80px 16px 20px;
  border-radius: 8px;
  border: 1px solid #ebebeb;
  position: relative;
}

.passenger {
  padding: 16px 80px 16px 20px;
  border-radius: 8px;
  border: 1px solid #ebebeb;
  position: relative;
  display: flex;
  gap: 10px;
  cursor: pointer;
}

.pax {
  display: flex;
  align-items: center;
  gap: 5px;
  height: 30px;
  width: 60px;
  padding: 0 5px;
  border-right: 1px solid #000;
}

.search-btn {
  width: 140px;
  height: auto;
  /*padding: 16px 37.5px;*/
  font-family: Gilroy-Medium !important;
  font-size: 16px;
  border-radius: 8px;
  color: var(--primary_bg);
  border: 1px solid var(--primary_bg);
}

.serach-result-field {
  width: 100%;
  height: auto;
  margin: 50px 0;
}

.filter-btn {
  width: 220px;
  background: transparent;
  border-radius: 8px;
  border: 1px solid var(--grey);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Gilroy-SemiBold !important;
  font-size: 16px;
}

@media screen and (max-width: 1024px) {
  .search-form-field {
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 768px) {
  .search-form-field {
    flex-direction: column;
  }

  .search-btn {
    width: 100%;
  }
}

@media screen and (max-width: 640px) {
  .result {
    width: 80%;
  }

  .search {
    width: auto;
  }
}

@media screen and (max-width: 490px) {
  .result {
    width: 90%;
  }
}

@media screen and (max-width: 435px) {
  .result span {
    font-size: 11px;
  }
}
</style>
