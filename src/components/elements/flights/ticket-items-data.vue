<template>
  <div class="flight-data">
    <div class="flight-row">
      <div class="flight-time">
        <div class="flight-number">{{ dataTicket.from.time }}</div>
        <span class="flight-text">
          <span>{{ dataTicket.from.point }}</span>
          <span>
            <span class="flight-day-number">{{ dataTicket.to.dayNumber }}</span>
            <span class="flight-day-week">, {{ dataTicket.to.dayWeek }}</span>
          </span>
        </span>
      </div>

      <div class="flight-path flight-text">
        <span class="flight-text_b">{{ dataTicket.from.format }}</span>
        <span class="flight-path__center"
          ><span>{{ dataTicket.pathTime }}</span></span
        >
        <span class="flight-text_b">{{ dataTicket.to.format }}</span>
      </div>

      <div class="flight-time">
        <div class="flight-number">{{ dataTicket.to.time }}</div>
        <span class="flight-text">
          <span>{{ dataTicket.to.point }}</span>
          <span>
            <span class="flight-day-number">{{ dataTicket.to.dayNumber }}</span>
            <span class="flight-day-week">, {{ dataTicket.to.dayWeek }}</span>
          </span>
        </span>
      </div>
    </div>

    <div class="flight-time" v-if="!ticketMore">
      <div class="flight-number">{{ dataTicket.transfers.allTime }}</div>
      <span class="flight-text">
        <span class="flight-text_l">{{ dataTicket.transfers.count }}</span>
        <span class="flight-text_b">{{ dataTicket.transfers.timeTrans }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataTicket: Object,
    ticketMore: Boolean,
  },
  mounted() {
    console.log(this.ticketMore);
  },
};
</script>

<style scoped>
.flight-data {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.flight-row {
  display: flex;
  align-items: center;
  gap: 4rem;
  width: 70%;
  max-width: 512px;
}
.flight-time {
  min-width: 70px;
  text-align: end;
}
.flight-row > *:first-child {
  text-align: start;
}
.flight-time span {
  display: block;
}
.flight-time .flight-day-number,
.flight-time .flight-day-week {
  display: inline-block;
}
.flight-time .flight-number {
  margin-bottom: 5px;
}
.flight-path {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
}
.flight-path__center {
  position: relative;
  width: 100%;
  text-align: center;
  overflow: hidden;
}
.flight-path__center span {
  position: relative;
  display: inline-block;
  background-color: #fff;
  padding-inline: 8px;
  z-index: 2;
}
.flight-path__center::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  border-bottom: 3px dotted #e6e6e6;
  overflow: hidden;
  z-index: 1;
}

@media screen and (max-width: 992px) {
  .flight-btn {
    min-width: auto;
  }
  .flight-data > .flight-time {
    display: none;
  }
  .flight-row {
    width: 100%;
    max-width: 100%;
  }
}
@media screen and (max-width: 768px) {
  .flight-row {
    gap: 1.6rem;
  }
}
@media screen and (max-width: 576px) {
  .flight-path .flight-text_b {
    display: none;
  }
  .flight-path__center::before {
    display: none;
  }
  .flight-number .flight-text > span:first-child {
    display: none;
  }
  .flight-time .flight-day-week {
    display: none;
  }
  .flight-time {
    min-width: auto;
  }
  .flight-wrapper.ticket--more .flight-row {
    display: none;
  }
  .flight-time .flight-number {
  margin-bottom: 0;
}
}
</style>
