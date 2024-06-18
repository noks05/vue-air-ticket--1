<template>
  <headerDef />
  <PageHeader title="Авиабилеты" subtitle="Путешествия" />
  <nav aria-label="breadcrumb" class="breadcrumb-nav breadcrumb-nav_mb">
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
            style="color: #000 !important; text-transform: none !important"
            >Результаты поиска авиабилетов</router-link
          >
        </li>
      </ol>
    </div>
  </nav>

  <div class="container">
    <div class="search-fields">
      <form
        class="search-form-field"
        action="#"
        method="get"
        @submit.prevent="submitSearchForm"
      >
        <div
          :class="[
            'search-form-field__fields-wrapper',
            mobile && hardRouteActive ? 'mobile--active' : '',
          ]"
        >
          <div
            class="search-form-field__fields"
            v-for="item in dataFields"
            :key="item"
          >
            <div class="search-form-path">
              <label>
                <v-select
                  class="search-form-select"
                  v-model="selectedDefault.from"
                  :options="selectOptions"
                  @option:selected="
                    obj => (selectedDefault.from.format = obj.format)
                  "
                >
                  <template #option="{ label, imgName }">
                    <div class="select-option">
                      <img
                        :src="'/src/assets/images/icons/' + imgName + '.jpg'"
                        :alt="imgName"
                        width="20"
                        height="14"
                      />
                      <span>{{ label }}</span>
                    </div>
                  </template>
                </v-select>
                <span class="search-form-path__label">{{
                  selectedDefault.from.format
                }}</span>
              </label>

              <button class="search-form-path__button" type="button">
                <ReverseIcon />
              </button>

              <label>
                <v-select
                  class="search-form-select"
                  v-model="selectedDefault.to"
                  :options="selectOptions"
                  @option:selected="
                    obj => (selectedDefault.to.format = obj.format)
                  "
                >
                  <template #option="{ label, imgName }">
                    <div class="select-option">
                      <img
                        :src="'/src/assets/images/icons/' + imgName + '.jpg'"
                        :alt="imgName"
                        width="20"
                        height="14"
                      />
                      <span>{{ label }}</span>
                    </div>
                  </template>
                </v-select>
                <span class="search-form-path__label">
                  {{ selectedDefault.to.format }}
                </span>
              </label>
            </div>

            <VDatePicker
              class="date-picker dropdown"
              :columns="tablet ? 1 : 2"
              locale="ru-RU"
              v-model.range="selectedDate"
            >
              <template #day-content="{ day, dayEvents }">
                <div :class="['dp-day-custom']" v-on="dayEvents">
                  <span class="dp-day-custom__day">{{ day.day }}</span>
                  <span
                    :class="[
                      'dp-day-custom__price',
                      day.weekday === 4 || day.weekday === 5
                        ? 'dp-day-custom__price--green'
                        : '',
                    ]"
                    >{{ prices[day.month][day.day] }}</span
                  >
                </div>
              </template>
              <template #default="props">
                <label>
                  <input
                    class=""
                    type="text"
                    placeholder="Когда"
                    :value="formatDate(selectedDate.start)"
                    @click.stop="props.togglePopover"
                    @focusin="console.log(props.locale)"
                  />
                  <CalendarIcon class="search-form-field__img" />
                </label>
                <label>
                  <input
                    class=""
                    type="text"
                    placeholder="Обратно"
                    :value="formatDate(selectedDate.end)"
                    @click="props.togglePopover"
                  />
                  <CalendarIcon class="search-form-field__img" />
                </label>
              </template>
              <template #footer>
                <div class="date-picker__mobile-title" v-if="mobile">Когда</div>
                <button
                  class="search-filter__item date-picker__btn"
                  type="button"
                >
                  <PathIcon v-if="!mobile" />
                  Обратный билет не нужен
                </button>
              </template>
            </VDatePicker>

            <div
              class="search-form-route-mobile"
              v-if="mobile && hardRouteActive"
            >
              <div
                class="search-form-route-mobile__wrapper"
                v-for="it in routesMobile"
                :key="it"
              >
                <label>
                  <v-select
                    :class="[
                      'search-form-select',
                      selectedDefaultHardRoutes.from.value.trim().length
                        ? 'search-form-select--active'
                        : '',
                    ]"
                    v-model="selectedDefaultHardRoutes.from"
                    :options="selectOptions"
                    @option:selected="
                      obj => (selectedDefaultHardRoutes.from.format = obj.format)
                    "
                  >
                    <template #option="{ label, imgName }">
                      <div class="select-option">
                        <img
                          :src="'/src/assets/images/icons/' + imgName + '.jpg'"
                          :alt="imgName"
                          width="20"
                          height="14"
                        />
                        <span>{{ label }}</span>
                      </div>
                    </template>
                  </v-select>
                  <span
                    class="search-form-path__label"
                    v-if="selectedDefaultHardRoutes.from.value.trim().length"
                  >
                    {{ selectedDefaultHardRoutes.from.format }}
                  </span>
                </label>

                <label>
                  <v-select
                    :class="[
                      'search-form-select search-form-select_to',
                      selectedDefaultHardRoutes.to.value.trim().length
                        ? 'search-form-select--active'
                        : '',
                    ]"
                    v-model="selectedDefaultHardRoutes.to"
                    :options="selectOptions"
                    @option:selected="
                      obj => (selectedDefaultHardRoutes.to.format = obj.format)
                    "
                  >
                    <template #option="{ label, imgName }">
                      <div class="select-option">
                        <img
                          :src="'/src/assets/images/icons/' + imgName + '.jpg'"
                          :alt="imgName"
                          width="20"
                          height="14"
                        />
                        <span>{{ label }}</span>
                      </div>
                    </template>
                  </v-select>
                  <span
                    class="search-form-path__label"
                    v-if="selectedDefaultHardRoutes.to.value.trim().length"
                  >
                    {{ selectedDefaultHardRoutes.to.format }}
                  </span>
                </label>

                <VDatePicker
                  class="date-picker dropdown"
                  :columns="mobile ? 1 : 2"
                  locale="ru-RU"
                  v-model.range="selectedDate"
                >
                  <template #day-content="{ day, dayEvents }">
                    <div :class="['dp-day-custom']" v-on="dayEvents">
                      <span class="dp-day-custom__day">{{ day.day }}</span>
                      <span
                        :class="[
                          'dp-day-custom__price',
                          day.weekday === 4 || day.weekday === 5
                            ? 'dp-day-custom__price--green'
                            : '',
                        ]"
                        >{{ prices[day.month][day.day] }}</span
                      >
                    </div>
                  </template>
                  <template #default="{ inputEvents }">
                    <label>
                      <input
                        class=""
                        type="text"
                        placeholder="Когда"
                        :value="formatDate(selectedDate.start)"
                        v-on="inputEvents.start"
                      />
                    </label>
                  </template>
                  <template #footer>
                    <div class="date-picker__mobile-title" v-if="mobile">
                      Когда
                    </div>
                    <button
                      class="search-filter__item date-picker__btn"
                      type="button"
                    >
                      <PathIcon v-if="!mobile" />
                      Обратный билет не нужен
                    </button>
                  </template>
                </VDatePicker>

                <button
                  class="search-form-route-mobile__btn"
                  type="button"
                  @click="() => removeRouteMobile()"
                >
                  <CancelIcon />
                </button>
              </div>
            </div>

            <label class="search-form-field__pas">
              <input
                readonly
                type="text"
                placeholder="Пассажиров ?"
                :value="`${
                  countPas.adults + countPas.childs + countPas.babies
                } пассажир`"
                @click="
                  item['pasSelected' + item.id] =
                    !item['pasSelected' + item.id];
                  showAndHideDropdown();
                "
              />
              <UserIcon class="search-form-field__img" />
              <pas-dropdown
                :class="['dropdown', mobile ? 'dropdown--mobile' : '']"
                v-model="countPas"
                v-if="item['pasSelected' + item.id]"
              />
            </label>
          </div>
        </div>

        <router-link to="/flight-tickets2">
          <button class="search-btn" type="submit" onsubmit.default="">
            <LoupIcon />
            Найти
          </button>
        </router-link>
      </form>

      <div :class="['search-filter', false ? 'search-filter--mobile' : '']">
        <button
          class="search-filter__item search-filter__hard-path"
          type="button"
          @click="()=>switchFormatRoutes()"
        >
          <PathIcon />
          <span>
            {{
              hardRouteActive
                ? "Вернуться к простому маршруту"
                : "Составить сложный маршрут"
            }}
          </span>
        </button>

        <button
          v-if="mobile"
          class="search-filter__item search-filter__item-sort"
          type="button"
          @click="
            () => {
              filterMobileActive = !filterMobileActive;
              listSortActive = false;
              sliderListActive = false;
              listTransActive = false;
              listBagActive = false;
            }
          "
        >
          <FilterIcon />
          <span> Фильтры и сортировка </span>
          <ArrowDownIcon />
        </button>

        <div class="search-filter__center" v-if="!mobile">
          <button
            :class="[
              'search-filter__item',
              sliderListActive ? 'search-filter__item--active' : '',
            ]"
            type="button"
            @click="() => showAndHideDropdown('sliderListActive')"
          >
            <span>Отправление и прибытие</span>
            <ArrowDownIcon />
          </button>

          <button
            :class="[
              'search-filter__item',
              listTransActive ? 'search-filter__item--active' : '',
            ]"
            type="button"
            @click="() => showAndHideDropdown('listTransActive')"
          >
            <span>Пересадки</span>
            <ArrowDownIcon />
          </button>

          <button
            :class="[
              'search-filter__item',
              listBagActive ? 'search-filter__item--active' : '',
            ]"
            type="button"
            @click="() => showAndHideDropdown('listBagActive')"
          >
            <span>Багаж</span>
            <ArrowDownIcon />
          </button>

          <list-sliders
            class="dropdown"
            :listData="sliderListPath"
            v-if="sliderListActive"
          />
          <list-checkbox
            class="dropdown transfers-dropdown"
            :listData="checkboxListTrans"
            listTitle="Пересадки"
            v-if="listTransActive"
          />
          <list-checkbox
            class="dropdown"
            :listData="checkboxListBag"
            listTitle="Багаж"
            v-if="listBagActive"
          />
        </div>

        <button
          class="search-filter__item"
          type="button"
          v-if="!mobile && hardRouteActive"
          @click="addRoute"
        >
          <PlusIcon />
          <span>Добавить перелёт</span>
        </button>

        <div
          :class="[
            'search-filter__item',
            'search-filter__item_sort',
            listSortActive ? 'search-filter__item--active' : '',
          ]"
          v-if="!mobile"
        >
          <button
            class="search-filter__item"
            type="button"
            @click="() => showAndHideDropdown('listSortActive')"
          >
            <FilterIcon />
            <span>Сортировать по</span>
            <ArrowDownIcon />
          </button>

          <list-sort
            class="dropdown"
            :listData="radioListSort"
            v-if="!mobile && listSortActive"
          />
        </div>
      </div>

      <div
        :class="[
          'search-filter-mobile',
          mobile && filterMobileActive ? 'search-filter-mobile--active' : '',
        ]"
      >
        <ul>
          <li>
            <h3 class="search-filter-mobile__title">Фильтры и сортировка</h3>
            <button type="button" class="search-filter-mobile__clear">
              Сбросить
            </button>
            <button
              type="button"
              class="search-filter-mobile__close"
              @click="filterMobileActive = !filterMobileActive"
            >
              <CancelIcon />
            </button>
          </li>
          <li>
            <button
              class="search-filter-mobile__text"
              type="button"
              id="sliderListActiveState"
              @click="e => activeFilterDropdown(e.target)"
            >
              Отправление и прибытие
            </button>
          </li>
          <li>
            <button
              class="search-filter-mobile__text"
              type="button"
              id="listTransActiveState"
              @click="e => activeFilterDropdown(e.target)"
            >
              Пересадки
            </button>
          </li>
          <li>
            <button
              class="search-filter-mobile__text"
              type="button"
              id="listBagActiveState"
              @click="e => activeFilterDropdown(e.target)"
            >
              Багаж
            </button>
          </li>
          <li>
            <button
              class="search-filter-mobile__text"
              type="button"
              id="listSortActiveState"
              @click="e => activeFilterDropdown(e.target)"
            >
              Сортировка
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div class="search-result-field">
      <ticket
        v-for="item in data"
        :data="item"
        :mobile="mobile"
        :key="item.addName"
      />
    </div>
  </div>

  <list-sliders
    class="dropdown dropdown-mobile"
    :listData="sliderListPath"
    v-if="mobile && sliderListActive"
  />
  <list-checkbox
    class="dropdown dropdown-mobile"
    :listData="checkboxListTrans"
    listTitle="Пересадки"
    v-if="mobile && listTransActive"
  />
  <list-checkbox
    class="dropdown dropdown-mobile"
    :listData="checkboxListBag"
    listTitle="Багаж"
    v-if="mobile && listBagActive"
  />
  <list-sort
    class="dropdown dropdown-mobile"
    :listData="radioListSort"
    v-if="mobile && listSortActive"
  />
</template>
<script>
import PageHeader from "@/components/elements/PageHeader.vue";
import ticket from "@/components/elements/flights/ticket-items.vue";
import headerDef from "@/components/partial/headers/HeaderDefault.vue";
import { getFormatMonth } from "@/utilities/calendar.js";
import PasDropdown from "@/components/elements/flights/pas-dropdown.vue";
import ListCheckbox from "@/components/elements/flights/list-checkbox.vue";
import ListSort from "@/components/elements/flights/list-sort.vue";
import ListSliders from "@/components/elements/flights/list-sliders.vue";
import { DatePicker } from "v-calendar";

import ArrowDownIcon from "@/assets/images/icons/iconsComp/ArrowDownIcon.vue";
import CalendarIcon from "@/assets/images/icons/iconsComp/CalendarIcon.vue";
import FilterIcon from "@/assets/images/icons/iconsComp/FilterIcon.vue";
import LoupIcon from "@/assets/images/icons/iconsComp/LoupIcon.vue";
import PathIcon from "@/assets/images/icons/iconsComp/PathIcon.vue";
import PlusIcon from "@/assets/images/icons/iconsComp/PlusIcon.vue";
import ReverseIcon from "@/assets/images/icons/iconsComp/ReverseIcon.vue";
import UserIcon from "@/assets/images/icons/iconsComp/UserIcon.vue";
import CancelIcon from "@/assets/images/icons/iconsComp/CancelIcon.vue";

export default {
  components: {
    PageHeader,
    ticket,
    headerDef,
    CalendarIcon,
    ArrowDownIcon,
    FilterIcon,
    PathIcon,
    LoupIcon,
    PlusIcon,
    ReverseIcon,
    UserIcon,
    PasDropdown,
    ListCheckbox,
    ListSort,
    ListSliders,
    CancelIcon,
  },
  data() {
    return {
      popoverDatePicker: false,
      category: "",
      search: false,
      listTransActive: false,
      listBagActive: false,
      listSortActive: false,
      sliderListActive: false,
      hardRouteActive: false,
      filterMobileActive: false,
      hardRouteActive: false,
      routesMobile: [1, 2],
      selectedOption: {},
      windowWidth: window.innerWidth,
      dataFields: [
        {
          id: 1,
          pasSelected1: false,
        },
      ],
      countPas: {
        adults: 1,
        childs: 0,
        babies: 0,
      },
      selectedDate: {
        start: null,
        end: null,
      },
      highlightedDates: [
        // Добавьте даты, которые нужно выделить
      ],
      disabledDates: [
        // Добавьте даты, которые нужно отключить
      ],
      prices: [
        ["15 995", "", "", "13 995", "15 995"],
        ["15 995", "", "", "15 995", "14 995"],
        ["15 995", "", "", "13 995", "15 995"],
        ["15 995", "", "", "15 995", "14 995"],
        ["15 995", "", "", "13 995", "15 995"],
        ["15 995", "", "", "15 995", "14 995"],
        ["15 995", "", "", "13 995", "15 995"],
        ["15 995", "", "", "15 995", "14 995"],
        ["15 995", "", "", "13 995", "15 995"],
        ["15 995", "", "", "15 995", "14 995"],
        ["15 995", "", "", "13 995", "15 995"],
        ["15 995", "", "", "15 995", "14 995"],
        ["15 995", "", "", "15 995", "14 995"],
      ],
      showCalendar: {
        when: false,
        back: false,
      },
      selectedDefault: {
        from: { label: "Откуда", value: "", format: "SVX" },
        to: { label: "Куда", value: "", format: "РЕК" },
      },
      selectedDefaultHardRoutes: {
        from: { label: "Откуда", value: "", format: "" },
        to: { label: "Куда", value: "", format: "" },
      },
      selectOptions: [
        {
          label: "Алма-Ата, Центральный, Казахстан (DME)",
          value: "Алма-Ата, Центральный, Казахстан (DME)",
          imgName: "kazakhstan",
          format: "DME",
        },
        {
          label: "Токио, Цунь-жань, Япония (PEK)",
          value: "Токио, Цунь-жань, Япония (PEK)",
          imgName: "japan",
          format: "PEK",
        },
        {
          label: "ТЕкатеринбург, Кольцово, Россия (SVO)",
          value: "ТЕкатеринбург, Кольцово, Россия (SVO)",
          imgName: "russia",
          format: "SVO",
        },
      ],
      checkboxListTrans: [
        {
          name: "noTrans",
          state: "enabled",
          text: "Без пересадок",
        },
        {
          name: "oneTrans",
          state: "disabled",
          text: "1 пересадка",
        },
        {
          name: "twoTrans",
          state: "checked",
          text: "2 пересадки",
        },
        {
          name: "noNightTrans",
          state: "disabled",
          text: "Без ночных пересадок",
        },
        {
          name: "noChangeAir",
          state: "enabled",
          text: "Без смены аэропорта",
        },
      ],
      checkboxListBag: [
        {
          name: "noBag",
          state: "disabled",
          text: "Без багажа",
        },
        {
          name: "withBag",
          state: "enabled",
          text: "С багажом",
        },
      ],
      sliderListPath: {
        departureAndArrival: {
          title: "Отправление и прибытие",
          pointStartTitle: "Екатеринбург",
          pointEndTitle: "Пекин",
          pathData: [
            [
              {
                title: "Отправление",
                from: "01:00",
                to: "01:00",
                day: "19 мая",
              },
              {
                title: "Прибытие",
                from: "01:00",
                to: "01:00",
                day: "19 мая",
              },
            ],
            [
              {
                title: "Отправление",
                from: "01:00",
                to: "01:00",
                day: "19 мая",
              },
              {
                title: "Прибытие",
                from: "01:00",
                to: "01:00",
                day: "19 мая",
              },
            ],
          ],
        },
        otherSliders: [
          {
            title: "Длительность пересадок",
            from: "1",
            to: "15",
          },
          {
            title: "Время в пути",
            from: "1",
            to: "15",
          },
        ],
      },
      radioListSort: {
        name: "sortTicket",
        items: [
          {
            id: "timeDepart",
            checked: false,
            text: "По времени отправления",
          },
          {
            id: "timeArrival",
            checked: false,
            text: "По времени прибытия",
          },
          {
            id: "timeTrans",
            checked: false,
            text: "По времени пересадок",
          },
          {
            id: "timeInPath",
            checked: false,
            text: "По времени в пути",
          },
          {
            id: "price",
            checked: true,
            text: "По цене",
          },
        ],
      },
      data: [
        {
          id: () => new Date().getTime(),
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
          address3: "7:25 SVO",
          data3: "10.02.2024",
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
          id: () => new Date().getTime(),
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
        {
          id: () => new Date().getTime(),
          img1: "/assets/images/ticet-logo2.png",
          address1: "20:20 VOG",
          data1: "07.02.2024",
          img2: "/assets/images/ticet-logo3.png",
          address2: "22:25 SVO",
          data2: "07.02.2024",
          time: "2 ч 5м",
          addition: "DP-6968",
          addName: "Победа",
          img3: "/assets/images/ticet-logo2.png",
          address3: "7:25 SVO",
          data3: "10.02.2024",
          img4: "/assets/images/ticet-logo3.png",
          address4: "09:20 SVO",
          data4: "10.02.2024",
          time2: "2 ч 15м",
          addition2: "DP-6969",
          addName2: "Победа",
          price: "7248.00-",
          icons1: "/assets/bagaj-close.svg",
          icons2: "/assets/arrows.svg",
          icons3: "/assets/resycle-close.svg",
          icons21: "/assets/bagaj-close.svg",
          icons22: "/assets/arrows.svg",
          icons23: "/assets/resycle-close.svg",
        },
      ],
    };
  },
  created() {
    this.category = this.$route.query.category;
    this.$watch(
      () => this.$route.query.category,
      newCategory => {
        this.category = newCategory;
      }
    );
  },
  computed: {
    /* modalShow() {
      return this.$store.getters["flight/showFilter"];
    },*/

    mobile() {
      let result = this.windowWidth <= 576;
      return result;
    },
    tablet() {
      let result = this.windowWidth <= 992;
      return result;
    },
  },
  mounted() {
    window.addEventListener("resize", e => {
      this.windowWidth = e.target.innerWidth;
    });
    window.addEventListener("click", e => {
      const searchFilterMobileEl = document.querySelector(
        ".search-filter-mobile"
      );
      const searchFilterMobile = e.target.closest(".search-filter-mobile");
      const dropdown = e.target.closest(".dropdown");
      const btnFilter = e.target.closest(".search-filter__item");
      const btnFilterSort = e.target.closest(".search-filter__item-sort");

      if (!btnFilter && !dropdown && !searchFilterMobile) {
        this.showAndHideDropdown();
        searchFilterMobileEl.classList.remove("search-filter-mobile--active");
      }
      const btnPas = e.target.closest(".search-form-field__pas");
      if (!btnPas && !btnFilterSort) {
        this.hidePasDropdowns();
        searchFilterMobileEl.classList.remove("search-filter-mobile--active");
      }
    });
  },
  methods: {
    switchFormatRoutes() {
      if (!this.mobile && this.hardRouteActive) {
        this.removeAllRoute();
      } else if (!this.mobile) {
        this.addRoute();
      }
      this.hardRouteActive = !this.hardRouteActive;
    },
    hidePasDropdowns() {
      this.dataFields.forEach(obj => {
        obj["pasSelected" + obj.id] = false;
      });
    },
    showAndHideDropdown(key) {
      const states = [
        "listTransActive",
        "listBagActive",
        "listSortActive",
        "sliderListActive",
      ];
      if (key) {
        this[key] = !this[key];
      }
      states.forEach(state => {
        if (state !== key) {
          this[state] = false;
        }
      });
    },
    activeFilterDropdown(target) {
      this.filterMobileActive = !this.filterMobileActive;
      const nameState = target.id.replace("State", "");
      console.log(nameState, this[nameState], !this[nameState]);
      this[nameState] = !this[nameState];
    },
    removeRouteMobile() {
      if (this.routesMobile.length > 1) {
        this.routesMobile.pop();
      } else {
        this.routesMobile = [1, 2];
        this.hardRouteActive = false;
      }
    },
    addRoute() {
      const lastIndex = this.dataFields.length - 1;
      const lastObj = this.dataFields[lastIndex];
      const keys = Object.keys(lastObj);
      const newObj = {};
      const newObjIndex = lastObj.id + 1;
      keys.forEach(key => {
        if (key !== "id") {
          const str = key.replace(/[0-9]/g, "");
          newObj[str + newObjIndex] = false;
        } else {
          newObj.id = newObjIndex;
        }
      });
      this.dataFields.push(newObj);
    },
    removeRoute() {
      if (this.dataFields.length > 1) {
        this.dataFields.pop();
      }
    },
    removeAllRoute() {
      this.dataFields = [this.dataFields.shift()];
    },
    toggleFilter() {
      this.$store.dispatch("flight/toggleFilter");
    },
    showSearch() {
      this.search = !this.search;
    },
    formatDate(date) {
      if (!date) return null;
      let days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
      let month = date.toLocaleString("ru-RU", { month: "long" });
      month = getFormatMonth(Number(date.getMonth()));
      let day = date.getDate();
      let dayWeek = days[Number(date.getDay())];
      return day + " " + month + ", " + dayWeek;
    },
  },
};
</script>

<style scoped>
.breadcrumb {
  padding-left: 10px;
}
.breadcrumb-nav_mb {
  margin-bottom: 0;
}
.dropdown {
  padding: 2.4rem;
  border: var(--border-grey);
  border-radius: 0 0 7px 7px;
  background-color: #fff;
  box-shadow: var(--shadow-light);
  overflow: hidden;
  z-index: 1000;
}
.dropdown.transfers-dropdown {
  right: 123px;
}
.date-picker__day {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.date-picker__selected {
  background-color: red;
  border-radius: 4px;
}
.date-picker__price {
  font-family: Gilroy-Medium;
  font-weight: 400;
  font-size: 10px;
  color: #797979;
}
.date-picker__price_b {
  color: #7dd2ea;
}
.date-picker__mobile-title {
  font-size: 16px;
  font-weight: 500 !important;
  font-family: Gilroy-Medium !important;
  color: #333;
}
.search-filter__item.date-picker__btn {
  gap: 8px;
  margin-left: auto;
  margin-top: 23px;
  font-size: 16px;
}
.select-option img {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-fields {
  width: 100%;
  height: auto;
  margin-top: 0;
  padding: 10px;
  padding-block: 14px;
  padding-bottom: 18px;
  border-radius: var(--bdrs-7);
  font-size: 16px;
  font-family: Gilroy-Medium;
  background-color: var(--light_gray);
}

.search-form-field {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  margin-bottom: 16px;
}

.search-form-field__fields-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}
.search-form-field__fields {
  display: flex;
  width: 100%;
}
.search-form-field__fields > label {
  max-width: 192px;
  border-top: var(--border-grey);
  border-bottom: var(--border-grey);
}
.search-form-field__fields > label:first-child {
  border-radius: 7px 0 0 7px;
  border-right: var(--border-grey);
}
.search-form-field__fields > label:last-child {
  border-radius: 0 7px 7px 0;
  border: var(--border-grey);
  border-left: none;
}

.search-form-field input {
  width: 100%;
  height: 100%;
  border: none;
  padding: 13px 16px;
  padding-right: 0;
  background-color: transparent;
  font-family: inherit;
}

.search-form-field input::placeholder {
  font-size: 14px;
  font-weight: 400;
  color: var(--text_color);
}

.search-form-field label {
  position: relative;
  display: flex;
  width: 100%;
  max-height: 40px;
  margin-bottom: 0;
  background-color: #fff;
  cursor: pointer;
}

.search-form-field label:focus-within {
  background-color: var(--light_gray);
}
.search-form-field input:focus {
  outline: none;
}
.search-form-field label:not(:last-child) {
  border-right: var(--border-grey);
}

.search-form-field__img {
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
}

search-form-field__pas {
  position: relative;
}

.search-form-path {
  position: relative;
  display: flex;
  height: 40px;
  border: var(--border-grey);
  border-right: var(--border-grey);
  border-radius: 7px 0 0 7px;
}

.search-form-path label {
  position: relative;
  min-width: 183px;
  max-width: 183px;
  padding-right: 58px;
  background-color: #fff;
  border-radius: var(--bdrs-7);
}
.search-form-path label:last-child {
  padding-left: 7px;
}

.search-form-path__label {
  position: absolute;
  right: 22px;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 400;
  font-size: inherit;
  background-color: transparent;
}

.search-form-path label:last-child input {
  padding-left: 25px;
}

.search-form-path__button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 36px;
  width: 36px;
  border-radius: 100%;
  border: var(--border-grey);
  background-color: #fff;
  box-shadow: 0px 6px 11px 2px#f5f5f5;
  transition: background-color 0.2s;
  z-index: 10;
}
.search-form-path__button:hover {
  background-color: var(--light_gray);
}

.search-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 21.7rem;
  min-height: 40px;
  border-radius: var(--bdrs-7);
  font-family: Gilroy-Medium !important;
  font-size: 16px;
  color: #fff;
  background-color: var(--primary_bg);
  transition: filter 0.2s, background-color 0.2s;
}

.search-btn:hover {
  background-color: #470d60;
}
.search-btn:active {
  filter: brightness(0.8);
}

.search-result-field {
  width: 100%;
  height: auto;
  margin: 50px 0;
  padding-inline: 9px;
}

.search-result-field > *:first-child {
  position: relative;
  /* padding-top: 20px; */
}
.search-result-field > *:first-child::before,
.search-result-field > *:first-child::after {
  position: absolute;
  top: -20px;
  min-width: 111px;
  padding: 4px 8px;
  border-radius: 7px 7px 0 0;
  font-size: 12px;
  line-height: 100%;
  font-family: Gilroy-Bold;
  color: #fff;
  z-index: 1;
}
.search-result-field > *:first-child::before {
  content: "Самый дешевый";
  left: 1.4rem;
  background-color: var(--red);
}
.search-result-field > *:first-child::after {
  content: "Самый быстрый";
  left: 13.2rem;
  background-color: #7dd2ea;
}

.search-result-field > *:not(:last-child) {
  margin-bottom: 2.4rem;
}

.search-filter {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
}

.search-filter__hard-path {
  margin-right: 9rem;
}
.search-filter__hard-path svg {
  min-width: 21px;
  height: auto;
}

.search-filter button {
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.search-filter > button {
  gap: 8px;
  width: 100%;
}
.search-filter > button:first-child {
  /* max-width: 259px; */
  max-width: fit-content;
}
.search-filter > button:nth-child(3),
.search-filter > button:nth-child(4) {
  max-width: 196px;
}
.search-filter > button svg {
  min-width: 20px;
  height: auto;
}
.search-filter > button svg.arrow-down {
  min-width: 11px;
  height: auto;
}

.search-filter__center {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
}
.search-filter__center button {
  gap: 13px;
}

.search-filter__item {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  border-radius: var(--bdrs-7);
  border: var(--border-grey);
  padding: 8px 16px;
  font-family: Gilroy-SemiBold;
  font-size: 14px;
  color: #797979;
  background-color: #fff;
}
.search-filter__item .arrow-down {
  transition: transform 0.3s;
}
.search-filter__item.search-filter__item--active .arrow-down {
  transform: rotate(180deg);
}
.search-filter__sort-wrap {
  position: relative;
}
.search-filter__sort-wrap.search-filter__item--active svg {
  transform: rotate(180deg);
}
.search-filter__item_sort {
  margin-left: auto;
  padding: 0;
  border: none;
  background-color: transparent;
}
.search-filter__item_sort button {
  padding-inline: 19px;
}
.search-filter__item_sort .dropdown {
  padding: 1.6rem;
  border-top-left-radius: 7px;
}
.search-filter-mobile {
  position: fixed;
  left: 0;
  bottom: 0;
  display: none;
  width: 100%;
  border-radius: 7px 7px 0 0;
  border: var(--border-grey);
  opacity: 0;
  overflow: auto;
  transition: opacity 0.5s;
  z-index: 10000;
}
.search-filter-mobile.search-filter-mobile--active {
  display: block;
  opacity: 1;
}
.search-filter-mobile ul {
  margin-bottom: 0;
}
.search-filter-mobile li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 24px;
  height: 72px;
  background-color: #fff;
}
.search-filter-mobile li:not(:last-child) {
  border-bottom: var(--border-grey);
}
.search-filter-mobile__text {
  border: none;
  font-size: 14px;
  font-family: Gilroy-Regular;
  font-weight: 400;
  line-height: 100%;
  color: #797979;
  transition: color 0.2s;
  cursor: pointer;
}
.search-filter-mobile__text:hover {
  color: #333;
}
.search-filter-mobile__title {
  margin-bottom: 0;
  font-size: 16px;
  font-family: Gilroy-Medium !important;
  font-weight: 500;
  line-height: 100%;
  color: #333;
}
.search-filter-mobile__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background-color: transparent;
  transition: background-color 0.2s;
  cursor: pointer;
  z-index: 100;
}
.search-filter-mobile__close:hover {
  background-color: var(--light_gray);
}
.search-filter-mobile__clear {
  border: none;
  margin-left: auto;
  font-size: 12px;
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  line-height: 150%;
  color: #797979;
  background-color: transparent;
  transition: color 0.2s;
  cursor: pointer;
}
.search-filter-mobile__clear:hover {
  color: #333;
}
.dropdown.dropdown-mobile {
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
.search-form-route-mobile {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}
.search-form-field__fields-wrapper.mobile--active .search-form-field__fields {
  flex-direction: column;
  gap: 16px;
}
.search-form-field__fields-wrapper.mobile--active
  .search-form-field__fields
  > *:nth-child(1),
.search-form-field__fields-wrapper.mobile--active
  .search-form-field__fields
  > *:nth-child(2),
.search-form-field__fields-wrapper.mobile--active
  .search-form-field__fields
  > *:nth-child(3) {
  display: none;
}
.search-form-field__fields-wrapper.mobile--active
  .search-form-field__fields
  > label:nth-child(2) {
  max-width: 100%;
}
.search-form-route-mobile__wrapper {
  position: relative;
  display: flex;
}
.search-form-route-mobile__wrapper .search-form-path__label {
  left: 15px;
  top: 33px;
  right: auto;
  font-size: 12px;
}
.search-form-route-mobile__wrapper > label {
  width: calc(100% / 3);
  padding-right: 16px;
}
.search-form-route-mobile__wrapper > label:nth-child(1) {
  border-radius: 7px 0 0 7px;
}
.search-form-route-mobile__wrapper > label:nth-child(3) {
  border-radius: 0 7px 7px 0;
}
.search-form-route-mobile__wrapper > label:not(:nth-child(3)) {
  border-right: var(--border-grey);
}
.search-form-route-mobile__btn {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  top: 0;
  transform: translate(40%, -40%);
  height: 20px;
  width: 20px;
  padding: 0;
  border-radius: 100%;
  border: 1px solid #797979;
  z-index: 10;
}
.dp-day-custom {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  padding: 7px 6px;
  border-radius: 4px !important;
  transition: background-color 0.2s;
  cursor: pointer;
}
.dp-day-custom:hover {
  border-radius: 4px;
  background-color: var(--primary_bg);
}
.vc-highlight {
  height: 32px !important;
}
.vc-highlights + .dp-day-custom {
  border-radius: 4px;
  /* height: 40px;
  width: 40px; */
  /* background-color: var(--primary_bg); */
  color: #fff;
}
.dp-day-custom:hover span,
.vc-highlights + .dp-day-custom:hover span,
.vc-highlights + .dp-day-custom span {
  color: #fff !important;
}
.dp-day-custom__day {
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
}
.dp-day-custom__price {
  font-size: 10px;
  line-height: 100%;
  font-weight: 400;
  color: #797979;
}
.dp-day-custom__price.dp-day-custom__price--green {
  color: #7dd2ea;
}

@media screen and (max-width: 1280px) {
  .search-filter {
    flex-wrap: wrap;
  }
  .search-filter > button:nth-child(3) {
    order: 4;
  }
  .search-filter > *:nth-child(4) {
    order: 3;
  }
}
@media screen and (max-width: 1200px) {
  .search-filter__hard-path {
    margin-right: 0;
  }
  .search-filter__center {
    margin-left: auto;
  }
  .search-form-field__fields > *:nth-child(2) {
    flex-wrap: wrap;
    row-gap: 8px;
    border-left: var(--border-grey);
    border-radius: 7px 0 0 7px;
  }
  .search-form-field__fields {
    flex-wrap: wrap;
    row-gap: 8px;
  }
  .search-form-path {
    width: 100%;
    min-width: initial;
    max-width: initial;
    border-radius: 7px;
  }
  .search-form-path label {
    width: 50%;
    min-width: initial;
    max-width: initial;
  }
  .search-form-field__fields > label {
    max-width: calc(100% / 3);
  }
  .search-filter > button:nth-child(3) {
    order: 3;
  }
  .search-filter > *:last-child {
    order: 4;
    margin-left: auto;
  }
}
@media screen and (max-width: 992px) {
  .search-filter > *:nth-child(2) {
    order: 3;
  }
  .search-filter > *:last-child {
    order: 2;
  }
}

@media screen and (max-width: 768px) {
  .search-form-field {
    flex-direction: column;
  }

  .search-btn {
    width: 100%;
  }
  .search-filter > *:last-child {
    max-width: 212px;
  }
  .search-filter__center {
    width: 100%;
  }
  .search-filter__center button:nth-child(3) {
    width: 26%;
  }

  .search-filter__item_sort {
    order: 2;
    max-width: 212px;
    margin-left: 0;
    width: 100%;
  }
  .search-filter__item_sort > button {
    width: 100%;
  }
}
@media screen and (max-width: 576px) {
  .search-fields {
    padding: 16px;
  }
  .search-form-field__fields-wrapper.mobile--active
    .search-form-field__fields
    > label:last-child {
    max-width: 100%;
    border-left: var(--border-grey);
    border-radius: var(--bdrs-7);
  }
  .search-filter > button:first-child,
  .search-filter > *:last-child,
  .search-filter > button:nth-child(3) {
    max-width: 100%;
  }
  .search-filter__center {
    flex-wrap: wrap;
  }
  .search-filter__center > button {
    width: 100%;
  }
  .search-filter__center > button:first-child {
    width: 100%;
  }
  .search-filter__center > button:nth-child(2),
  .search-filter__center > button:nth-child(3) {
    width: calc((100% - 8px) / 2);
  }
  .search-filter__center .dropdown {
    top: 89px;
  }
  .search-form-path {
    height: auto;
  }
  .search-result-field > *:first-child::before {
    content: "Самый дешевый";
    left: auto;
    right: 12.9rem;
    background-color: var(--red);
  }
  .search-result-field > *:first-child::after {
    content: "Самый быстрый";
    left: auto;
    right: 1.2rem;
    background-color: #7dd2ea;
  }
  .search-form-field__pas .dropdown {
    position: fixed;
    bottom: 0;
    top: auto;
    left: 0;
    width: 100%;
    right: 0;
    max-width: 100%;
    border-radius: 7px 7px 0 0;
    padding-top: 2rem;
    border: var(--border-grey);
  }
  .dp-day-custom {
    width: 48px;
  }

  .vc-weekdays {
    margin-bottom: 4px;
  }
  .search-filter__item.date-picker__btn {
    font-size: 14px;
  }
  .search-filter-mobile li:first-child {
    height: 72px;
  }
  .search-filter-mobile li {
    height: 62px;
    padding-inline: 21px;
  }
  
.search-result-field > *:not(:last-child) {
  margin-bottom: 1.6rem;
}
}
@media screen and (max-width: 480px) {
  .search-form-field input::placeholder,
  .search-form-field input {
    font-size: 12px;
  }
  .search-form-field__fields {
    column-gap: 8px;
  }
  .search-form-field__fields > label:nth-child(2),
  .search-form-field__fields > label:nth-child(3) {
    max-width: calc((100% - 8px) / 2);
    border: var(--border-grey);
    border-radius: var(--bdrs-7);
  }
  .search-form-field__fields > label:nth-child(4) {
    max-width: 100%;
    border: var(--border-grey);
    border-radius: var(--bdrs-7);
  }
  .search-btn,
  .search-form-field label {
    min-height: 46px;
    max-height: 46px;
  }
  .search-form-path {
    gap: 8px;
    flex-wrap: wrap;
    border: none;
  }
  .search-form-path > label {
    width: 100%;
    border: var(--border-grey);
    border-radius: var(--bdrs-7);
  }
  .search-form-path label:last-child {
    padding-left: 0;
  }
  .search-form-field__fields > label:last-child {
    width: 100%;
    max-width: 100%;
  }
}
</style>
<style>
.search-filter__item_sort label {
  margin-bottom: 0;
}
.search-filter__item_sort ul {
  margin-bottom: 0;
}
.search-filter__item_sort li:not(:last-child) {
  margin-bottom: 8px;
}
</style>
