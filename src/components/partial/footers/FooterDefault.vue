<template>
  <footer class="footer">
    <div class="footer-middle">
      <div :class="isFullwidth ? 'container-fluid' : 'container'">
        <div class="row">
          <div class="col-sm-6 col-lg-3">
            <div class="widget widget-about">
              <img
                src="../../../assets/newImg/logotypes/logo.svg"
                class="footer-logo bg-transparent"
                alt="Footer Logo"
              />
              <p style="font-family: Gilroy-Medium !important">
                Подключите программу “Бонусы” к Вашей карте, оплачивайте ей
                <br />
                покупки и получайте баллы
              </p>

              <div class="widget-call">
                <!-- <i class="icon-phone"></i> -->
                <img
                  src="../../../assets/newImg/icons/icon-tell.svg"
                  alt="icon"
                />
<!--                Обратитья в банк-->
                <a
                  href="tel:#"
                  style="font-family: Gilroy-Medium !important; font-size: 20px"
                  >+7 800 250-70-07</a
                >
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-3 custom1">
            <div class="widget">
              <h4 class="widget-title">О программе</h4>

              <ul class="widget-list">
                <li>
                  <a
                    target="_blank"
                    href="https://novikom.ru/individuals/bonus-program/"
                    >О программе</a
                  >
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://novikom.ru/individuals/bonus-program/"
                    >Как программа работает</a
                  >
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://novikom.ru/upload/docs/bonusi-pravila.pdf"
                    >Правила программы</a
                  >
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://novikom.ru/individuals/bonus-program/faq/ "
                    >Вопросы и ответы</a
                  >
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://wikimybill.ru/page32603929.html "
                    >Безопасность</a
                  >
                </li>
                <li>
                  <a target="_blank" href="https://novikom.ru/"
                    >Официальный сайт АО АКБ “НОВИКОМБАНК”</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 custom2">
            <div class="widget">
              <h4 class="widget-title">Скачать приложение</h4>

              <ul class="widget-list">
                <li>
                  <a
                    href="javascript:;"
                    @click="downloadFile"
                    style="cursor: pointer"
                    >RuMarket</a
                  >
                </li>
                <li>
                  <a
                    href="javascript:;"
                    @click="downloadFile"
                    style="cursor: pointer"
                    >RuStore</a
                  >
                </li>
                <li>
                  <router-link to="#">NashMarket</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 custom3">
            <div class="widget">
              <h4 class="widget-title">Мой аккаунт</h4>
              <ul class="widget-list">
                <li>
                  <router-link to="/sign_up">Вход</router-link>
                </li>
                <li>
                  <router-link to="#">Корзина</router-link>
                </li>
                <li>
                  <router-link to="#">Заказы</router-link>
                </li>
                <li>
                  <router-link
                    to="/operation/
Заказ 999313705-14"
                    >Операции</router-link
                  >
                </li>
                <li>
                  <router-link to="#">Избранное</router-link>
                </li>
                <li>
                  <router-link to="/sign_up">Регистрация</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div
        :class="isFullwidth ? 'container-fluid' : 'container'"
        class="pb-2 pt-2"
      >
        <p class="footer-copyright">АО АКБ “Новикомбанк”</p>

        <figure class="footer-payments">
          <img
            src="../../../assets/newImg/logotypes/mir.jpg"
            alt="Payment methods"
            class="bg-transparent mir"
          />
        </figure>
      </div>
    </div>
    <div class="mb-10" v-if="bottomSticky"></div>
  </footer>
</template>
<script>
export default {
  data: function () {
    return {
      bottomSticky: false,
    };
  },
  computed: {
    isFullwidth: function () {
      return this.$route.path.includes("fullwidth");
    },
  },
  watch: {
    $route: function () {
      this.handleBottomSticky();
    },
  },
  mounted: function () {
    this.handleBottomSticky();
    window.addEventListener("resize", this.handleBottomSticky, {
      passive: true,
    });
  },
  destroyed: function () {
    window.removeEventListener("resize", this.handleBottomSticky);
  },
  methods: {
    handleBottomSticky: function () {
      this.bottomSticky =
        this.$route.path.includes("/product/default") &&
        window.innerWidth > 991;
    },
    downloadFile() {
      const fileContent = "HELLO WORLD";
      const blob = new Blob([fileContent], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "sdk.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    },
  },
};
</script>
<style scoped>
.custom1 {
  flex: 0 0 30%;
  white-space: nowrap;
}

.custom2 {
  flex: 0 0 20%;
  margin-left: 90px;
}

.custom3 {
  flex: 0 0 10%;
  margin-left: 35px;
}

@media screen and (max-width: 768px) {
  .custom2,
  .custom3 {
    flex: 0 0 50%;
    margin-left: 0px;
  }
}

@media screen and (max-width: 768px) {
  .custom2,
  .custom3 {
    flex: 0 0 100%;
  }
  .mir {
    width: 30px;
  }
}
</style>
