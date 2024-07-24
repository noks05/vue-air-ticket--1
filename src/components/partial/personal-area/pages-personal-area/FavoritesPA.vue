<template>
  <ul class="favor-list">
    <li class="favor-card" v-for="card in cards" :key="card.id">
      <div class="favor-box">
        <div class="favor-box-top">
          <div class="favor-img-wrap">
            <img
              :src="'src/assets/images/personal-area/' + card.nameImg"
              :alt="card.altImg"
            />
          </div>

          <span class="favor-box-marker" v-if="card.marker">
            {{ card.marker.text }}
          </span>
        </div>

        <div class="favor-box-bottom">
          <h3>
            {{ card.title }}
          </h3>

          <div class="favor-box-btns-wrap">
            <button
              :class="[
                'favor-box-action',
                card.action === 'В корзину' ? 'box-action_basket' : '',
              ]"
              type="button"
            >
              <BasketIcon v-if="card.action === 'В корзину'" />
              <span>{{ card.action }}</span>
            </button>

            <button class="favor-box-favorites" type="button">
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
.favor-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
}
.favor-card {
  width: calc((100% - 20px * 3) / 4);
}
.favor-box-top{
  position: relative;
  margin-bottom: 8px;
  padding-top: 40px;
  padding-bottom: 32px;
}
.favor-img-wrap{
  display: flex;
  border-radius: 7px;
  overflow: hidden;
}
.favor-box {
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
.favor-box-marker {
  position: absolute;
  left: 0;
  bottom: 0;
  display: inline-block;
  padding: 4px 8px;
  border-radius: 7px;
  text-wrap: nowrap;
  font-family: Gilroy-Bold !important;
  font-weight: 700;
  font-size: 12px;
  line-height: 100%;
  color: #fff;
  background-color: #ff997a;
  z-index: 10;
}
.favor-box-bottom{
  width: 100%;
}
.favor-box-bottom > h3 {
  margin-bottom: 8px;
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: var(--text_color);
}
.favor-box-btns-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.favor-box-action {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 15px;
  border-radius: 7px;
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: #fff;
  background-color: var(--primary_bg);
}
.favor-box-action_basket {
  justify-content: space-between;
  gap: 8px;
}
.favor-box-favorites {
  display: flex;
  padding: 0;
  width: 16px;
  height: 14px;
}
</style>
