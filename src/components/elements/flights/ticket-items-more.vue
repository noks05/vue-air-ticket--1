<template>
  <div class="transfer-title">
    <span>
      <span class="img-wrap">
        <img src="/src/assets/images/icons/s7.svg" alt="S7 Airlines" />
      </span>

      <span class="transfer-text-bold">
        {{ moreData.title.number }}
      </span>
    </span>

    <span class="transfer-text-light">
      {{ moreData.title.label }}
    </span>
    <span class="flight-text"> 14ч20м </span>
  </div>

  <div class="transfer-content">
    <div class="transfer-left">
      <span class="img-wrap">
        <img src="/src/assets/images/icons/airplane.svg" alt="S7 Airlines" />
      </span>

      <span class="transfer-point"></span>
    </div>

    <div class="transfer-right">
      <div class="flight-time" v-for="(it, i) in moreData.body" :key="i">
        <div class="flight-number">
          {{ it.time
          }}<span class="transfer-format_title">
            , {{ it.dayNumber }},
            {{ it.dayWeek }}
          </span>
        </div>
        <span class="flight-text">
          <span
            >{{ it.point
            }}<span class="transfer-format">, {{ it.format }}</span></span
          >
          <span
            >{{ it.dayNumber
            }}<span class="transfer-format">, {{ it.dayWeek }}</span></span
          >
        </span>
      </div>
    </div>

    <ul>
      <li>
        <BagNoIcon class="flight-more-icon" />
      </li>
      <li class="item--active">
        <ReverseIcon class="flight-more-icon" />
      </li>
      <li>
        <ReloadIcon class="flight-more-icon" />
      </li>
    </ul>
  </div>
</template>

<script>
import BagNoIcon from "@/assets/images/icons/iconsComp/BagNoIcon.vue";
import ReloadIcon from "@/assets/images/icons/iconsComp/ReloadIcon.vue";
import ReverseIcon from "@/assets/images/icons/iconsComp/ReverseIcon.vue";

export default {
  components:{
    BagNoIcon,
    ReloadIcon,
    ReverseIcon
  },
  props: {
    moreData: Object,
  },
  data() {},
};
</script>

<style scoped>
.transfer-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.6rem;
  border: var(--border-grey);
  border-radius: var(--bdrs-7);
  margin-bottom: 16px;
}
.transfer-title svg {
  height: 24px;
  width: 24px;
}
.transfer-title > span:first-child {
  display: flex;
  align-items: center;
  gap: 8px;
}
.transfer-title .flight-text {
  display: none;
}
.transfer-text-bold {
  display: inline-block;
  font-size: 14px;
  line-height: 100%;
  font-weight: 500;
  font-family: Gilroy-Medium !important;
  color: #000;
}
.transfer-text-light {
  font-size: 14px;
  line-height: 100%;
  font-weight: 500;
  font-family: Gilroy-Medium !important;
  color: #797979;
}
.transfer-content {
  display: flex;
  gap: 1.6rem;
}
.transfer-content ul {
  display: none;
  gap: 0.8rem;
  margin-left: auto;
}
.transfer-left {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.transfer-left::before {
  position: absolute;
  content: "";
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-left: 2px dotted #e6e6e6;
  z-index: 1;
}
.transfer-left .img-wrap {
  position: relative;
  background-color: #fff;
  z-index: 2;
}
.transfer-point {
  position: relative;
  display: inline-block;
  height: 10px;
  width: 10px;
  border-radius: 100%;
  border: 2px solid #bed600;
  background-color: #fff;
  z-index: 2;
}
.transfer-right .flight-time {
  text-align: start;
}
.transfer-right > div:not(:last-child) {
  margin-bottom: 4rem;
}
.transfer-right .flight-text > span {
  display: block;
}
.transfer-format_title {
  display: none;
}

@media screen and (max-width: 992px) {
}

@media screen and (max-width: 780px) {
}

@media screen and (max-width: 576px) {
  .flight-wrapper.ticket--more .transfer-title .transfer-text-light {
    display: none;
  }
  .flight-wrapper.ticket--more .transfer-title .flight-text {
    display: block;
  }
  .flight-wrapper.ticket--more .transfer-format_title {
    display: inline-block;
  }
  .flight-wrapper.ticket--more .transfer-right .flight-number,
  .flight-wrapper.ticket--more .transfer-right .transfer-format_title {
    font-size: 16px;
    font-family: Gilroy-Medium !important;
    font-weight: 500;
    line-height: 100%;
    color: #333;
  }
  .flight-wrapper.ticket--more .transfer-right .flight-text > span:last-child {
    display: none;
  }
  .flight-wrapper.ticket--more .transfer-content ul {
    display: flex;
  }
  .transfer-right > div:not(:last-child) {
  margin-bottom: 3rem;
}
}
</style>
