<template>
  <ul class="list">
    <li class="card" v-for="card in cards" :key="card.id">
      <div class="box">
        <div class="box-top">
          <img
            :src="'src/assets/images/personal-area/' + card.nameImg"
            :alt="card.altImg"
          />

          <span class="box-marker" v-if="card.marker">
            {{ card.marker.text }}
          </span>
        </div>

        <div class="box-bottom">
          <h3>
            {{ card.title }}
          </h3>

          <div class="box-btns-wrap">
            <button
              :class="[
                'box-action',
                card.action === 'В корзину' ? 'box-action_basket' : '',
              ]"
              type="button"
            >
              <BasketIcon v-if="card.action === 'В корзину'" />
              <span>{{ card.action }}</span>
            </button>

            <button class="box-favorites" type="button">
              <HeartIcon />
            </button>
          </div>
        </div>
      </div>
    </li>
  </ul>

  <pagination :per-page="perPage" :total="totalCount"></pagination>
</template>

<script>
import BasketIcon from "@/assets/images/icons/iconsComp/BasketIcon.vue";
import HeartIcon from "@/assets/images/icons/iconsComp/HeartIcon.vue";
import Pagination from "@/components/elements/Pagination.vue";

export default {
  components: {
    Pagination,
    HeartIcon,
    BasketIcon,
  },
  data() {
    return {
      perPage: 5,
      totalCount: 30,
      cards: [
        {
          id: 1,
          nameImg: "yandex-sale.jpg",
          altImg: "yandex sale",
          marker: false,
          title: "Яндекс Практикум",
          action: "В корзину",
        },
        {
          id: 2,
          nameImg: "yandex-sale.jpg",
          altImg: "yandex sale",
          marker: false,
          title: "Яндекс Практикум",
          action: "Уже в корзине",
        },
        {
          id: 3,
          nameImg: "yandex-sale.jpg",
          altImg: "yandex sale",
          marker: {
            text: "Нет в наличии",
          },
          title: "Яндекс Практикум",
          action: "Похожее",
        },
        {
          id: 4,
          nameImg: "yandex-sale.jpg",
          altImg: "yandex sale",
          marker: false,
          title: "Яндекс Практикум",
          action: "Уже в корзине",
        },
      ],
    };
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
}
.card {
  width: calc((100% - 20px * 3) / 4);
}
.box {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  height: 100%;
  padding: 16px;
  border: 1px solid #f4f7ff;
  border-radius: 7px;
  background-color: #fff;
}
.box-marker {
  display: inline-block;
  margin-bottom: 8px;
  padding: 4px 8px;
  border-radius: 7px;
  font-family: Gilroy-Bold !important;
  font-weight: 700;
  font-size: 12px;
  line-height: 100%;
  color: #fff;
  background-color: #ff997a;
}
.box-bottom{
  width: 100%;
}
.box-bottom > h3 {
  margin-bottom: 8px;
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: var(--text_color);
}
.box-btns-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.box-action {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 15px;
  border-radius: 7px;
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: #fff;
  background-color: var(--primary_bg);
}
.box-action_basket {
  justify-content: space-between;
  gap: 8px;
}
.box-favorites {
  display: flex;
  padding: 0;
  width: 16px;
  height: 14px;
}
</style>
