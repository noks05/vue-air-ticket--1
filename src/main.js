import "./assets/scss/style.scss";
import "./assets/style/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Sticky from "vue-sticky-directive";
import VCalendar from "v-calendar";
import "v-calendar/style.css";
import VueSelect from "vue-select";
import PrimeVue from 'primevue/config'; 

const app = createApp(App);
app.component("v-select", VueSelect);
app.use(VCalendar, {
  locales: {
    "ru-RU": {
      dayNames: [
        "Воскресенье",
        "Понедельник",
        "Вторник",  
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
      ],
      dayNamesShort: [
        "Вс",
        "Пн",
        "Вт",  
        "Ср",
        "Чт",
        "Пт",
        "Сб",
      ],
      masks: {
        weekdays: "WW",
      },
    },
  },
});
app.use(PrimeVue);
app.use(Sticky);
app.use(router);
app.use(store);
app.mount("#app");
