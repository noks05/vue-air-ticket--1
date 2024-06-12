<template>
  <div class="product-details-tab">
    <!-- <tabs class="nav-pills justify-content-center" :data="tabsData"></tabs> -->
    <div class="tab-content">
      <div class="tab-pane fade show active" id="tab1">
        <div class="product-desc-content">
          <h3 class="info_text_title">Как воспользоваться сертификатом</h3>
          <p class="mb-1"></p>
          <div class="product_description_info">
            <p>1. Зарегистрируйтесь на сайте или в приложении Ozon.</p>
            <p>
              2. Перейдите в личный кабинет, выберите раздел “Кодовые слова и
              сертификаты” и примените код активации.
            </p>
            <p>
              3. Через 10-15 минут номинал сертификата зачислится на ваш
              Ozon.Счет. Потратьте средства на покупки!
            </p>
          </div>
        </div>
        <p class="mb-4"></p>

        <div class="product-desc-content">
          <h3 class="info_text_title">Ограничения использования</h3>
          <p class="mb-1"></p>
          <div class="product_description_info">
            <p>1. Можно активировать не более 3 сертификатов в сутки.</p>
            <p>2. Нельзя использовать при оплате в кредит.</p>
            <p>
              3. На сумму сертификата можно заказывать всё, в том числе авиа- и
              Ж/Д билеты. Нельзя оплачивать только товары из разделов
              “Подарочные
              <br />
              сертификаты” и “Цифровые книги”.
            </p>
            <p>
              4. Частичная и полная оплата с пользовательского счета не будет
              предложена при выборе оплаты при получении. С 01.03.23
              воспользоваться <br />
              сертификатами Ozon на территории Казахстана и Беларусии нельзя!
            </p>
          </div>
        </div>
      </div>

      <div class="tab-pane fade" id="tab2">
        <div class="product-desc-content">
          <h3>Information</h3>
          <p class="mb-2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            Suspendisse urna viverra non, semper suscipit, posuere a, pede.
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci.
          </p>

          <h3>Fabric & care</h3>
          <ul>
            <li>Faux suede fabric</li>
            <li>Gold tone metal hoop handles.</li>
            <li>RI branding</li>
            <li>Snake print trim interior</li>
            <li>Adjustable cross body strap</li>
            <li>Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm</li>
          </ul>

          <h3>Size</h3>
          <p>one size</p>
        </div>
      </div>

      <div class="tab-pane fade" id="tab3">
        <div class="product-desc-content">
          <h3>Delivery & returns</h3>
          <p>
            We deliver to over 100 countries around the world. For full details
            of the delivery options we offer, please view our
            <a href="#">Delivery information</a>
            <br />We hope you’ll love every purchase, but if you ever need to
            return an item you can do so within a month of receipt. For full
            details of how to make a return, please view our
            <a href="#">Returns information</a>
          </p>
        </div>
      </div>

      <div class="tab-pane fade" id="tab4">
        <div class="reviews">
          <h3>Reviews (2)</h3>
          <div class="review">
            <div class="row no-gutters">
              <div class="col-auto">
                <h4>
                  <a href="#">Samanta J.</a>
                </h4>
                <div class="ratings-container">
                  <div class="ratings">
                    <div class="ratings-val" style="width: 80%"></div>
                    <span class="tooltip-text">4</span>
                  </div>
                </div>

                <span class="review-date">6 days ago</span>
              </div>

              <div class="col">
                <h4>Good, perfect size</h4>

                <div class="review-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus cum dolores assumenda asperiores facilis porro
                    reprehenderit animi culpa atque blanditiis commodi
                    perspiciatis doloremque, possimus, explicabo, autem fugit
                    beatae quae voluptas!
                  </p>
                </div>

                <div class="review-action">
                  <a href="#"> <i class="icon-thumbs-up"></i>Helpful (2) </a>
                  <a href="#">
                    <i class="icon-thumbs-down"></i>Unhelpful (0)
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="review border-0">
            <div class="row no-gutters">
              <div class="col-auto">
                <h4>
                  <a href="#">John Doe</a>
                </h4>
                <div class="ratings-container">
                  <div class="ratings">
                    <div class="ratings-val" style="width: 100%"></div>
                    <span class="tooltip-text">5</span>
                  </div>
                </div>

                <span class="review-date">5 days ago</span>
              </div>

              <div class="col">
                <h4>Very good</h4>

                <div class="review-content">
                  <p>
                    Sed, molestias, tempore? Ex dolor esse iure hic veniam
                    laborum blanditiis laudantium iste amet. Cum non voluptate
                    eos enim, ab cumque nam, modi, quas iure illum repellendus,
                    blanditiis perspiciatis beatae!
                  </p>
                </div>

                <div class="review-action">
                  <a href="#"> <i class="icon-thumbs-up"></i>Helpful (0) </a>
                  <a href="#">
                    <i class="icon-thumbs-down"></i>Unhelpful (0)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tabs from "@/components/elements/Tabs.vue";
export default {
  components: {
    Tabs,
  },
  props: {
    product: Object,
  },
  data: function () {
    return {
      tabsData: [
        {
          id: "tab1",
          title: "Description",
          active: true,
        },
        {
          id: "tab2",
          title: "Additional Information",
        },
        {
          id: "tab3",
          title: "Shipping & Returns",
        },
        {
          id: "tab4",
          title: "Reviews(2)",
        },
      ],
    };
  },
};
</script>

<style>
.product_description_info {
  font-family: Gilroy-Regular, sans-serif !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 22px !important;
  letter-spacing: 0em;
  text-align: left;
  color: #333333 !important;
}
</style>
