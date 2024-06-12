<template>
  <div class="container">
    <div class="heading text-center mb-3">
      <h2 class="title">Популярные направления из Москвы</h2>
      <p class="title-desc">Предложения дня и распродажи</p>
    </div>
    <div class="row">
      <div class="col-lg-6 deal-col">
        <div class="deal deal1">
          <div class="deal-top">
            <h2 style="font-family: Gilroy-Medium !important;">Санкт-Петербург</h2>
            <h4>Авиабилеты</h4>
          </div>
          <div class="deal-content">
            <h3 class="product-title">
              <router-link to="/product/default/home-smart-speaker-with-google-assistant"
                style="font-family: Gilroy-Medium !important;">Туда - обратно</router-link>
            </h3>
            <div class="product-price">
              <span class="new-price" style="font-family: Gilroy-Medium !important;">12 159.99
                бонусов</span>
              <!-- <span class="old-price">Was $159.99</span> -->
            </div>
            <router-link to="/flight-tickets" class="btn btn-link"
              style="gap: 5px; margin-top: 40px;">
              <span style="font-family: Gilroy-Medium !important;">Бронировать</span>
              <img src="../../../assets/newImg/icons/bi_arrow-right.svg" alt="">
              <!-- <i class="icon-long-arrow-right"></i> -->
            </router-link>
          </div>
          <div class="deal-bottom">
            <!-- <count-down
              wrap="deal-countdown daily-deal-countdown"
              until="+10h"
              format="HMS"
            ></count-down> -->
          </div>
        </div>
      </div>
      <div class="col-lg-6 deal-col">
        <div class="deal deal2">
          <div class="deal-top">
            <h2 style="font-family: Gilroy-Medium !important;">Калининград</h2>
            <h4>Авиабилеты</h4>
          </div>
          <div class="deal-content">
            <h3 class="product-title">
              <router-link to="/product/default/microsoft-refurbish-xbox-one-s-500gb">В одну сторону</router-link>
            </h3>
            <div class="product-price">
              <span class="new-price">7 569.99
                бонусов</span>
            </div>
            <router-link to="/flight-tickets" class="btn btn-link" style="gap: 5px; margin-top: 40px;">
              <span style="font-family: Gilroy-Medium !important;">Бронировать</span>
              <img src="../../../assets/newImg/icons/bi_arrow-right.svg" alt="">
              <!-- <i class="icon-long-arrow-right"></i> -->
            </router-link>
          </div>
          <div class="deal-bottom">
            <!-- <count-down wrap="deal-countdown daily-deal-countdown" until="+11h" format="HMS"></count-down> -->
          </div>
        </div>
      </div>
    </div>
    <div class="more-container text-center mt-1 mb-5">
      <router-link to="/flight-tickets" class="btn btn-outline-dark-2 btn-round btn-more"
        style="gap: 5px; font-family: Gilroy-Medium !important; font-weight: 600;">        
        <span style="text-transform: none !important;height: 16px;">Смотреть все направления</span>
        <img src="../../../assets/newImg/icons/bl_arrow-right.svg" alt="">
        <!-- <i class="icon-long-arrow-right"></i> -->
      </router-link>
    </div>
  </div>
</template>
<script>
import CountDown from "../../elements/CountDown.vue";
export default {
  components: {
    CountDown,
  },
};
</script>
