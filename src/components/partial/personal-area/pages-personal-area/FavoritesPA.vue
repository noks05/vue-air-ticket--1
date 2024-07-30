<template>
  <ul class="favor-list">
    <li class="favor-card" v-for="card in cards" :key="card.id">
      <div class="favor-box">
        <div class="favor-box-top">
          <div class="favor-img-wrap">
            <img
              :src="card.nameImg"
            />
            <!-- <img
              src="../../../../assets/images/personal-area/yandex-sale.jpg"
              :src="'/src/assets/images/personal-area/' + card.nameImg"
              :alt="card.altImg"
            /> -->
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

            <button
              class="favor-box-favorites"
              type="button"
              @click="cards[card.id-1].favorite = !cards[card.id-1].favorite"
            >
              <HeartIcon v-if="card.favorite" />
              <HeartEmptyIcon v-if="!card.favorite" />
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
import HeartEmptyIcon from "@/assets/images/icons/iconsComp/HeartEmptyIcon.vue";
import HeartIcon from "@/assets/images/icons/iconsComp/HeartIcon.vue";
import Pagination from "@/components/elements/Pagination.vue";

const img = new URL(
  `../../../../assets/images/personal-area/yandex-sale.jpg`,
  import.meta.url
).href;

export default {
  components: {
    Pagination,
    HeartIcon,
    BasketIcon,
    HeartEmptyIcon,
  },
  data() {
    return {
      inFavorite: true,
      perPage: 5,
      totalCount: 30,
      cards: [
        {
          id: 1,
          favorite: false,
          nameImg: img,
          altImg: "yandex sale",
          marker: false,
          title: "Яндекс Практикум",
          action: "В корзину",
        },
        {
          id: 2,
          favorite: false,
          nameImg: img,
          altImg: "yandex sale",
          marker: false,
          title: "Яндекс Практикум",
          action: "Уже в корзине",
        },
        {
          id: 3,
          favorite: false,
          nameImg: img,
          altImg: "yandex sale",
          marker: {
            text: "Нет в наличии",
          },
          title: "Яндекс Практикум",
          action: "Похожее",
        },
        {
          id: 4,
          favorite: false,
          nameImg: img,
          altImg: "yandex sale",
          marker: false,
          title: "Яндекс Практикум",
          action: "Уже в корзине",
        },
        {
          id: 5,
          favorite: false,
          nameImg: img,
          altImg: "yandex sale",
          marker: false,
          title: "Яндекс Практикум",
          action: "В корзину",
        },
        {
          id: 6,
          favorite: false,
          nameImg: img,
          altImg: "yandex sale",
          marker: false,
          title: "Яндекс Практикум",
          action: "Уже в корзине",
        },
        {
          id: 7,
          favorite: false,
          nameImg: img,
          altImg: "yandex sale",
          marker: {
            text: "Нет в наличии",
          },
          title: "Яндекс Практикум",
          action: "Похожее",
        },
        {
          id: 8,
          favorite: false,
          nameImg: img,
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
  column-gap: 20px;
  row-gap: 19px;
  margin-bottom: 37px;
}

.favor-card {
  width: calc((100% - 20px * 3) / 4);
}

.favor-box-top {
  position: relative;
  margin-bottom: 8px;
  padding-bottom: 32px;
  padding-top: 34px;
}

.favor-img-wrap {
  display: flex;
  border-radius: 7px;
  overflow: hidden;
}

.favor-box {
  position: relative;
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

.favor-box-bottom {
  width: 100%;
}

.favor-box-bottom > h3 {
  margin-bottom: 9px;
  letter-spacing: 0;
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
  width: 100%;
  max-width: 137px;
  padding: 11px 15px;
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
  top: 33px;
  right: 18px;
  display: flex;
  padding: 0;
  width: 16px;
  height: 14px;
  z-index: 100;
}

@media (max-width: 1280px) {
  .favor-card {
    width: calc((100% - 20px * 2) / 3);
  }

  .favor-box-top {
    width: 100%;
  }

  .favor-card img {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .favor-card {
    width: calc((100% - 20px) / 2);
  }

  .favor-box {
    padding-block: 20px;
  }

  .favor-box-favorites {
    position: absolute;
  }

  .favor-list {
    margin-top: 8px;
    row-gap: 13px;
  }

  .favor-box-bottom > h3 {
    margin-bottom: 5px;
    font-size: 14px;
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .favor-box-top {
    padding-block: 27px;
  }

  .favor-box-action {
    height: 40px;
    font-size: 14px;
    padding-inline: 14px;
  }

  .favor-box-marker {
    bottom: 9px;
  }
}
</style>
