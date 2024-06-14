<template>
  <div
    :class="['flight-wrapper', ticketMore ? 'ticket--more' : '']"
    @click="ticketMore = !ticketMore"
  >
    <div class="flight-left">
      <div class="flight-left__wrapper">
        <div class="flight-title flight-text flight-text_l">
          <span class="img-wrap">
            <img src="/src/assets/images/icons/s7.svg" alt="S7 Airlines" />
          </span>

          <h3 class="flight-text flight-text_l">S7 Airlines</h3>

          <span class="separate-circle" v-if="!ticketMore"></span>

          <div class="flight-charter" v-if="!ticketMore">
            <span class="flight-text flight-text_l">Чартер</span>
            <QuestSymbolIcon />
            <div :class="['flight-tooltip', mobile ?'flight-tooltip--mobile':'']">
              <p>
                Лоукостер - бюджетная авиакомпания, предлагающая очень низкие
                цены на свои рейсы.
              </p>
              <span>Особенности:</span>
              <ul>
                <li>нет питания на борту;</li>
                <li>
                  в цену билета входит только ручная кладь (но возможна доплата
                  за багаж);
                </li>
                <li>билет не подлежит обмену или возврату;</li>
                <li>регистрация на рейс производится на сайте.</li>
              </ul>
            </div>
          </div>

          <BagIcon />
          <!-- <BagNoIcon /> -->
        </div>

        <div class="flight-content">
          <ticket-items-data
            :ticketMore="ticketMore"
            :dataTicket="obj"
            v-for="(obj, i) in dataTickets"
            :key="i"
          />

          <div class="transfer" v-if="ticketMore">
            <ticket-items-more :moreData="moreData[0]" />

            <div class="transfer-pointer">
              <PointerDownIcon />
              <p>
                Ночная пересадка<span class="transfer-pointer__point"
                  >, Екатеринбург</span
                >, 2 ч 55 мин
              </p>
            </div>

            <ticket-items-more :moreData="moreData[1]" classContent="transfer-content_custom"/>

            <p class="flight-text flight-text_l flight-text-descr">
              *Местное время отправления и прибытия
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flight-right">
      <div class="flight-right__default" v-if="!ticketMore">
        <div class="flight-right__left">
          <div class="flight-number flight-number_b">113 796,00</div>
          <span class="flight-text_l"> за всех пассажиров </span>
          <BagIcon />
          <BagNoIcon />
        </div>

        <button class="flight-btn" type="button">
          <span class="flight-btn__price">113 796,00</span>
          <span class="flight-btn__pay">Купить</span>
        </button>
      </div>

      <div class="flight-right__more" v-if="ticketMore">
        <ul>
          <li>
            <BagNoIcon class="flight-more-icon flight-more-icon_b" />
            <span>Багаж оплачивается отдельно</span>
          </li>
          <li class="item--active">
            <ReverseIcon class="flight-more-icon" />
            <span>Обмен платный</span>
          </li>
          <li>
            <ReloadIcon class="flight-more-icon" />
            <span>Без возврата</span>
          </li>
        </ul>

        <div>
          <span class="flight-number-price"> 41 796,00 бонусов </span>
          <button class="flight-btn" type="button">
            Выбрать<span class="flight-btn__transfer-price">&nbsp;за 113 796,00</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BagIcon from "@/assets/images/icons/iconsComp/BagIcon.vue";
import BagNoIcon from "@/assets/images/icons/iconsComp/BagNoIcon.vue";
import QuestSymbolIcon from "@/assets/images/icons/iconsComp/QuestSymbolIcon.vue";
import ticketItemV2 from "./ticket-item-v2.vue";
import PointerDownIcon from "@/assets/images/icons/iconsComp/PointerDownIcon.vue";
import TicketItemsMore from "./ticket-items-more.vue";
import ReverseIcon from "@/assets/images/icons/iconsComp/ReverseIcon.vue";
import ReloadIcon from "@/assets/images/icons/iconsComp/ReloadIcon.vue";
import TicketItemsData from "./ticket-items-data.vue";

export default {
  components: {
    ticketItemV2,
    QuestSymbolIcon,
    BagNoIcon,
    BagIcon,
    PointerDownIcon,
    TicketItemsMore,
    ReverseIcon,
    ReloadIcon,
    TicketItemsData,
  },
  props: {
    data: Object,
    mobile: Boolean
  },
  data() {
    return {
      ticketMore: false,
      moreData: [
        {
          title: {
            number: "S7 6362",
            label: "Embraer 170",
          },
          body: [
            {
              time: "07:25",
              point: "Кольцово",
              dayNumber: "18 мая",
              dayWeek: "сб",
              format: "SVX",
            },
            {
              time: "18:45",
              point: "Пекин",
              dayNumber: "18 мая",
              dayWeek: "сб",
              format: "PEK",
            },
          ],
        },
        {
          title: {
            number: "S7 6362",
            label: "Embraer 170",
          },
          body: [
            {
              time: "07:25",
              point: "Кольцово",
              dayNumber: "18 мая",
              dayWeek: "сб",
              format: "SVX",
            },
            {
              time: "18:45",
              point: "Пекин",
              dayNumber: "18 мая",
              dayWeek: "сб",
              format: "PEK",
            },
          ],
        },
      ],
      dataTickets: [
        {
          pathTime: "14ч20м",
          from: {
            time: "01:25",
            point: "Кольцово",
            dayNumber: "18 мая",
            dayWeek: "сб",
            format: "SVX",
          },
          to: {
            time: "18:45",
            point: "Пекин",
            dayNumber: "18 мая",
            dayWeek: "сб",
            format: "PEK",
          },
          transfers: {
            allTime: "14ч20м",
            count: "1 пересадка",
            timeTrans: "4ч 10м",
          },
        },
        {
          pathTime: "14ч20м",
          from: {
            time: "01:25",
            point: "Кольцово",
            dayNumber: "18 мая",
            dayWeek: "сб",
            format: "SVX",
          },
          to: {
            time: "18:45",
            point: "Пекин",
            dayNumber: "18 мая",
            dayWeek: "сб",
            format: "PEK",
          },
          transfers: {
            allTime: "14ч20м",
            count: "1 пересадка",
            timeTrans: "4ч 10м",
          },
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.flight-wrapper {
  width: 100%;
  height: auto;
  display: flex;
  border: var(--border-grey);
  border-radius: var(--bdrs-7);
  background-color: #fff;
  transition: box-shadow 0, 2s;
  cursor: pointer;
}
.flight-wrapper:hover {
  box-shadow: var(--shadow-light);
}
.flight-left {
  width: 70%;
  max-width: 795px;
  padding-left: 2.2rem;
  padding-right: 0;
  padding-top: 2.4rem;
  padding-bottom: 2rem;
}
.flight-left__wrapper {
  border-right: var(--border-grey);
  background-repeat: var(--border-grey);
  padding-right: 3.4rem;
}
.flight-title {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 1.6rem;
}
.flight-title h3 {
  margin-bottom: 0;
}
.flight-title > svg {
  display: none;
  margin-left: auto;
}
.img-wrap {
  display: flex;
}
.separate-circle {
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: #e6e6e6;
}
.flight-charter {
  position: relative;
  display: flex;
  align-items: center;
}
.flight-charter span {
  margin-right: 1rem;
}
.flight-charter svg {
  height: 20px;
  width: 20px;
}
.flight-tooltip {
  position: absolute;
  top: 32px;
  left: 85%;
  transform: translateX(-50%);
  min-width: 284px;
  max-width: 284px;
  padding: 1.6rem 2.4rem;
  border-radius: var(--bdrs-7);
  font-size: 14px;
  line-height: 150%;
  font-weight: 400;
  font-family: Gilroy-Regular;
  color: var(--text_color);
  background-color: var(--light_gray);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
  z-index: 100;
}
.flight-tooltip.flight-tooltip--mobile {
  position: fixed;
  top: auto;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 100%;
  transform: initial;
  border-radius: 7px 7px 0 0;
  border: var(--border-grey);
}
.flight-tooltip::after {
  position: absolute;
  content: "";
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  width: 32px;
  height: 22px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background-color: var(--light_gray);
  z-index: 1;
}
.flight-tooltip p {
  color: inherit;
}
.flight-tooltip ul {
  margin-bottom: 0;
  padding-left: 2.4rem;
}
.flight-tooltip ul li {
  list-style: initial;
}
.flight-charter:hover > .flight-tooltip {
  opacity: 1;
  visibility: visible;
}
.flight-data:first-child {
  padding-bottom: 1.9rem;
  border-bottom: var(--border-grey);
  margin-bottom: 2.9rem;
}
.flight-right {
  display: flex;
  align-items: center;
  flex-grow: 1;
  width: 30%;
  max-width: 387px;
  padding: 2.4rem;
  padding-left: 3.2rem;
}
.flight-right__default {
  display: flex;
  align-items: center;
  gap: 1.6rem;
}
.flight-right__more {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.6rem;
  height: 100%;
  max-width: 182px;
}
.flight-right__more li {
  display: flex;
  gap: 8px;
  font-weight: 400;
  line-height: 120%;
  color: #797979;
}
.flight-right__more li:not(:last-child) {
  margin-bottom: 2rem;
}
.flight-right__more .flight-more-icon {
  min-width: 18px;
  min-height: 18px;
  max-width: 18px;
  max-height: 18px;
}
.flight-right__more li.item--active .flight-more-icon path {
  fill: var(--primary_bg);
  stroke: var(--primary_bg);
}
.flight-right__more li.item--active span {
  color: var(--primary_bg);
}
.flight-right__more .flight-more-icon_b{  
  padding-top: 2px;
  min-width: 22px;
  min-height: 22px;
}
.flight-number-price {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.6rem;
  margin-bottom: 16px;
  background-color: #fbfbfb;
  font-size: 20px;
  line-height: 100%;
  font-weight: 500;
  font-family: Gilroy-Medium !important;
  color: #000;
}
.flight-right__left {
  min-width: 116px;
}
.flight-right__left svg{
 margin-left: 7px;
}
.flight-right__left .flight-text_l {
  display: block;
  line-height: 100%;
  margin-bottom: 8px;
}
.flight-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 197px;
  min-width: 197px;
  min-height: 48px;
  border-radius: var(--bdrs-7);
  font-size: 16px;
  line-height: 100%;
  font-weight: 500;
  font-family: Gilroy-Medium;
  color: #fff;
  background-color: var(--primary_bg);
  transition: color 0.2s, background-color 0.2s, filter 0.2s;
}
.flight-btn:hover {
  background-color: #f4f7ff;
  color: var(--primary_bg);
}
.flight-btn:active {
  filter: brightness(0.9);
}
.flight-btn__price {
  display: none;
}
.flight-wrapper.ticket--more .flight-btn__transfer-price {
  display: none;
}
.flight-wrapper.ticket--more .flight-btn {
  min-width: 167px;
  max-width: 167px;
}

.transfer {
  margin-top: 12px;
  width: 75%;
  max-width: 529px;
}
.transfer-pointer {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 36px;
  margin-bottom: 40px;
}
.transfer-pointer p {
  font-size: 14px;
  line-height: 100%;
  font-weight: 400;
  font-family: Gilroy-Regular;
  color: #000;
}
.flight-text-descr{
  margin-top: 10px;
}

.flight-wrapper.ticket--more .flight-left__wrapper {
  border: none;
}
.flight-wrapper.ticket--more .flight-data:first-child {
  display: flex;
  padding-bottom: 0;
  border-bottom: none;
  margin-bottom: 0;
}
.flight-wrapper.ticket--more .flight-data:nth-child(2) {
  display: none;
}
.flight-wrapper.ticket--more .flight-title svg {
  height: 32px;
  width: 32px;
}
.flight-wrapper.ticket--more .flight-title h3 {
  font-size: 17px;
  line-height: 100%;
  font-weight: 500;
  font-family: Gilroy-Medium!important;
  color: var(--text_color);
}
.flight-wrapper.ticket--more .flight-right {
  background-color: #fbfbfb;
  padding-left: 2.4rem;
}

.flight-wrapper.ticket--more .flight-title > .img-wrap {
  height: 33px;
}

@media screen and (max-width: 1280px) {
  .flight-right__default {
    flex-direction: column;
  }
}
@media screen and (max-width: 992px) {
  .flight-right__default {
    width: 100%;
  }
  .flight-btn {
    min-width: 100%;
  }
  .transfer {
    width: 100%;
    max-width: 100%;
  }
}
@media screen and (max-width: 768px) {
  .flight-left__wrapper {
    padding-right: 1.6rem;
  }
  .flight-left {
    padding: 1.6rem;
    padding-right: 0;
  }
  .flight-right {
    padding-inline: 0.8rem;
    padding-block: 1.6rem;
  }
}
@media screen and (max-width: 576px) {
  .flight-left {
    max-width: 60%;
  }
  .flight-left__wrapper {
    border-right: none;
    padding-right: 0;
  }
  .flight-data:first-child {
    padding-bottom: 0.5rem;
    margin-bottom: 0.8rem;
  }

  .flight-right {
    padding-left: 1.6rem;
  }
  .flight-right__left {
    display: none;
  }
  .flight-title > svg {
    display: block;
  }
  .flight-btn {
    min-width: max-content;
    padding-inline: 1.6rem;
  }
  .flight-btn__price {
    display: block;
    font-size: 16px;
    font-family: Gilroy-Bold;
    font-weight: 700;
  }
  .flight-btn__pay {
    display: none;
  }
  .flight-time .flight-text > span {
    display: none;
  }
  .flight-wrapper.ticket--more .flight-title {
    display: none;
  }
  .flight-wrapper.ticket--more .transfer {
    margin-top: 0;
  }
  .flight-wrapper.ticket--more {
    flex-direction: column;
  }
  .flight-wrapper.ticket--more .flight-left {
    width: 100%;
    max-width: 100%;
    padding-right: 1.6rem;
    padding-bottom: 0;
  }
  .flight-wrapper.ticket--more .flight-right {
    width: 100%;
    max-width: 100%;
    padding-right: 1.6rem;
  }
  .flight-wrapper.ticket--more .flight-right__more {
    max-width: initial;
    width: 100%;
  }
  .flight-wrapper.ticket--more .flight-btn {
    max-width: 100%;
  }
  .flight-wrapper.ticket--more .flight-right__more > ul,
  .flight-wrapper.ticket--more .flight-right__more .flight-number-price {
    display: none;
  }
}
</style>
<style>
.flight-text {
  display: block;
  font-size: 14px;
  line-height: 137%;
  font-weight: 400;
  font-family: Gilroy-Regular;
  color: #797979;
}
.flight-text_l {
  font-size: 12px;
}
.flight-text_b {
  font-size: 16px;
}
.flight-number {
  font-size: 20px;
  line-height: 100%;
  font-weight: 500;
  font-family: Gilroy-Medium !important;
  color: var(--text_color);
}
.flight-number_b {
  font-size: 24px;
  font-weight: 600;
  font-family: Gilroy-SemiBold;
}
@media screen and (max-width: 576px) {
  .flight-data .flight-time .flight-text > span:first-child {
    display: none;
  }
  .flight-title h3 {
    display: none;
  }
  .separate-circle {
    display: none;
  }
  .flight-wrapper.ticket--more .transfer-pointer__point {
    display: none;
  }
  .flight-wrapper.ticket--more .transfer-pointer {
    height: auto;
    margin-top: 1.3rem;
  }
  .flight-wrapper.ticket--more .transfer-pointer > p {
    margin-top: 0;
  }
  .flight-wrapper.ticket--more .transfer > p {
    display: none;
  }
  .flight-wrapper.ticket--more .flight-btn > .flight-btn__transfer-price {
    display: block;
  }
  .flight-number{
    font-size: 16px;
  }
  .flight-text{
    font-size: 12px;
  }
}
</style>
<style>
.transfer-content_custom .transfer-left,
.transfer-content_custom .transfer-right{
  flex-direction: column-reverse;
}
</style>