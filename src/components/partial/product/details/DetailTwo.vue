<template>
  <div class="product-details" v-if="product">
    <h1 class="product-title f-500">{{ product.name }}</h1>
    <div class="product-details-action">
      <div class="details-action-col">
        <div class="quanty_name f-500 mr-4">Номинал:</div>
      </div>
      <div class="details-action-col product_price_btn ml-1">
        <div class="product_price_btn_text">
          {{ formatNumber(product.price) }}
        </div>
        <div class="down_img">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.72865 8.72779L1.74615 4.54804C1.67967 4.4783 1.64258 4.38564 1.64258 4.28929C1.64258 4.19294 1.67967 4.10028 1.74615 4.03054L1.75065 4.02604C1.78288 3.99211 1.82167 3.9651 1.86467 3.94664C1.90767 3.92818 1.95398 3.91866 2.00077 3.91866C2.04757 3.91866 2.09388 3.92818 2.13688 3.94664C2.17987 3.9651 2.21867 3.99211 2.2509 4.02604L6.0009 7.96204L9.7494 4.02604C9.78163 3.99211 9.82042 3.9651 9.86342 3.94664C9.90642 3.92818 9.95273 3.91866 9.99952 3.91866C10.0463 3.91866 10.0926 3.92818 10.1356 3.94664C10.1786 3.9651 10.2174 3.99211 10.2496 4.02604L10.2541 4.03054C10.3206 4.10028 10.3577 4.19294 10.3577 4.28929C10.3577 4.38564 10.3206 4.4783 10.2541 4.54804L6.27165 8.72779C6.23663 8.76455 6.1945 8.79381 6.14783 8.81381C6.10117 8.83381 6.05092 8.84412 6.00015 8.84412C5.94938 8.84412 5.89913 8.83381 5.85246 8.81381C5.80579 8.79381 5.76367 8.76455 5.72865 8.72779Z"
              fill="#333333"
            />
          </svg>
        </div>
      </div>
      <div class="details-action-col ml-4">
        <div class="product_label_price">
          {{ formatNumber(product.price.toFixed(2)) }} бонусов
        </div>
      </div>
    </div>
    <div class="product-details-action">
      <div class="details-action-col">
        <div class="quanty_name f-500 mr-5">Кол-во:</div>
        <quantity-input
          :product="product"
          @change-qty="changeQty"
          class="mr-3 mr-sm-4"
        ></quantity-input>
      </div>
    </div>
    <div class="details-action-wrapper">
      <div class="btn-product_add ml-sm-2" @click.prevent="addCart">
        <img
          src="@/assets/newImg/product/cart.svg"
          style="height: 16px"
          alt=""
        />
        <span style="font-family: Gilroy-Medium !important; height: 16px"
          >Добавить в корзину</span
        >
      </div>
      <div
        class="btn-product_add_wish ml-sm-2"
        @click.prevent="addToWishlist"
        style="height: 41px"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 256 256"
        >
          <path
            fill="var(--primary_bg)"
            d="M223 57a58.07 58.07 0 0 0-81.92-.1L128 69.05l-13.09-12.19A58 58 0 0 0 33 139l89.35 90.66a8 8 0 0 0 11.4 0L223 139a58 58 0 0 0 0-82m-11.35 70.76L128 212.6l-83.7-84.92a42 42 0 0 1 59.4-59.4l.2.2l18.65 17.35a8 8 0 0 0 10.9 0l18.65-17.35l.2-.2a42 42 0 1 1 59.36 59.44Z"
          />
        </svg>
        <span style="font-family: Gilroy-Medium !important; height: 16px"
          >Добавить в избранное</span
        >
      </div>
    </div>

    <div class="product-content">
      <p class="content_text">{{ product.short_desc }}</p>
    </div>
    <div class="product-details-footer">
      <div class="social-icons social-icons-sm">
        <span class="share-text mr-4">Поделиться:</span>
        <a href="javascript:;" class="social-icon" title="Facebook">
          <img src="@/assets/newImg/product/copy.svg" alt="" />
        </a>
        <a href="javascript:;" class="social-icon" title="Twitter">
          <img src="@/assets/newImg/product/vk.svg" alt="" />
        </a>
        <a href="javascript:;" class="social-icon" title="Instagram">
          <img src="@/assets/newImg/product/ok.svg" alt="" />
        </a>
        <a href="javascript:;" class="social-icon" title="Pinterest">
          <img src="@/assets/newImg/product/tg.svg" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import QuantityInput from "@/components/elements/QuantityInput.vue";
import { baseUrl } from "@/repositories/repository.js";
import store from "@/store";
export default {
  components: {
    QuantityInput,
  },

  data() {
    return {
      baseUrl: baseUrl,
      variationGroup: [],
      selectableGroup: [],
      sizeArray: [],
      colorArray: [],
      selectedVariant: {
        color: null,
        colorName: null,
        price: null,
        size: null,
      },
      maxPrice: 0,
      minPrice: 99999,
      qty: 1,
      product: {
        id: 126,
        name: "Подарочный сертификат М.Видео",
        slug: "Подарочный сертификат М.Видео",
        short_desc:
          "Подарочные сертификаты ОZОN вызовут бурю эмоций у деловых, занятых людей и тех, кто проживает в отдаленных уголках страны. Ведь совершать покупки в этом маркетплейсе можно не выходя из дома, что наиболее удобно тем, кто не может выкроить время на шопинг или тем, у кого рядом нет специализированного магазина. Подарочные сертификаты OZON помогут сэкономить время на выборе уникального и полезного подарка.",
        price: 5000,
        sale_price: null,
        review: 2,
        ratings: 0,
        until: null,
        stock: 100,
        top: true,
        featured: true,
        new: true,
        author: null,
        sold: null,
        category: [
          {
            name: "Accessories",
            slug: "accessories",
            pivot: {
              product_id: "126",
              "product-category_id": "18",
            },
          },
          {
            name: "Video Games",
            slug: "video-games",
            pivot: {
              product_id: "126",
              "product-category_id": "30",
            },
          },
          {
            name: "Entertainment",
            slug: "entertainment",
            pivot: {
              product_id: "126",
              "product-category_id": "23",
            },
          },
        ],
        brands: [
          {
            name: "New Balance",
            slug: "new-balance",
            pivot: {
              product_id: "126",
              brand_id: "22",
            },
          },
        ],
        pictures: [
          {
            width: "600",
            height: "600",
            url: "/",
            pivot: {
              related_id: "126",
              upload_file_id: "773",
            },
          },
          {
            width: "600",
            height: "600",
            url: "/assets/images/show.svg",
            pivot: {
              related_id: "126",
              upload_file_id: "772",
            },
          },
          {
            width: "600",
            height: "600",
            url: "/uploads/product_5_3_fdb59d93f8.jpg",
            pivot: {
              related_id: "126",
              upload_file_id: "774",
            },
          },
        ],
        sm_pictures: [
          {
            width: "300",
            height: "300",
            url: "/uploads/product_5_1_300x300_3dbc9b1611.jpg",
            pivot: {
              related_id: "126",
              upload_file_id: "775",
            },
          },
          {
            width: "300",
            height: "300",
            url: "/uploads/product_5_2_300x300_100e169228.jpg",
            pivot: {
              related_id: "126",
              upload_file_id: "776",
            },
          },
          {
            width: "300",
            height: "300",
            url: "/uploads/product_5_3_300x300_39035ca6ee.jpg",
            pivot: {
              related_id: "126",
              upload_file_id: "777",
            },
          },
        ],
        variants: [],
      },
    };
  },
  computed: {
    ...mapGetters("compare", ["isInCompare"]),
    showClear() {
      return this.selectedVariant.color || this.selectedVariant.size
        ? true
        : false;
    },
    showVariationPrice() {
      return this.selectedVariant.color && this.selectedVariant.size
        ? true
        : false;
    },
  },
  created() {
    let min = this.minPrice;
    let max = this.maxPrice;
    this.variationGroup = this.product.variants.reduce((acc, cur) => {
      cur.size.map((item) => {
        acc.push({
          color: cur.color,
          colorName: cur.color_name,
          size: item.name,
          price: cur.price,
        });
      });
      if (min > cur.price) min = cur.price;
      if (max < cur.price) max = cur.price;
      return acc;
    }, []);

    if (this.product.variants.length == 0) {
      min = this.product.sale_price
        ? this.product.sale_price
        : this.product.price;
      max = this.product.price;
    }

    this.minPrice = min;
    this.maxPrice = max;

    this.refreshSelectableGroup();
  },
  methods: {
    formatNumber(number) {
      return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    isInWishlist(product) {
      store.commit("isInWishlist", product);
    },
    canAddToCart(product, qty) {
      this.$store.getters("canAddToCart", { product, qty });
    },
    addToCompare(product) {
      this.$store.commit("addToCompare", product);
    },
    addToWishlist(product) {
      this.$store.commit("addToWishlist", product);
    },
    addToCart(product) {
      this.$store.commit("addToCart", product);
    },
    refreshSelectableGroup: function () {
      let tempArray = [...this.variationGroup];
      if (this.selectedVariant.color) {
        tempArray = this.variationGroup.reduce((acc, cur) => {
          if (this.selectedVariant.color !== cur.color) {
            return acc;
          }
          return [...acc, cur];
        }, []);
      }

      this.sizeArray = tempArray.reduce((acc, cur) => {
        if (acc.findIndex((item) => item.size == cur.size) !== -1) return acc;
        return [...acc, cur];
      }, []);

      tempArray = [...this.variationGroup];
      if (this.selectedVariant.size) {
        tempArray = this.variationGroup.reduce((acc, cur) => {
          if (this.selectedVariant.size !== cur.size) {
            return acc;
          }
          return [...acc, cur];
        }, []);
      }

      this.colorArray = this.product.variants.reduce((acc, cur) => {
        if (tempArray.findIndex((item) => item.color == cur.color) == -1) {
          return [
            ...acc,
            {
              color: cur.color,
              colorName: cur.color_name,
              price: cur.price,
              disabled: true,
            },
          ];
        }
        return [
          ...acc,
          {
            color: cur.color,
            colorName: cur.color_name,
            price: cur.price,
            disabled: false,
          },
        ];
      }, []);
    },
    selectColor: function (item) {
      if (item.color == this.selectedVariant.color) {
        this.selectedVariant = {
          ...this.selectedVariant,
          color: null,
          colorName: null,
          price: item.price,
        };
      } else {
        this.selectedVariant = {
          ...this.selectedVariant,
          color: item.color,
          colorName: item.colorName,
          price: item.price,
        };
      }
      this.refreshSelectableGroup();
    },
    selectSize: function () {
      if (this.selectedVariant.size == "null") {
        this.selectedVariant = { ...this.selectedVariant, size: null };
      }
      this.refreshSelectableGroup();
    },
    changeQty: function (current) {
      this.qty = current;
    },
    clearSelection: function () {
      this.selectedVariant = {
        ...this.selectedVariant,
        color: null,
        colorName: null,
        size: null,
      };
      this.refreshSelectableGroup();
    },
    addCart: function () {
      let newProduct = { ...this.product };
      if (this.product.variants.length > 0) {
        newProduct = {
          ...this.product,
          name:
            this.product.name +
            " - " +
            this.selectedVariant.colorName +
            ", " +
            this.selectedVariant.size,
          price: this.selectedVariant.price,
        };
      }
      this.addToCart({ product: newProduct, qty: this.qty });
    },
  },
};
</script>
