<template>
  <div class="dropdown cart-dropdown">
    <router-link
      :to="{ path: '/basket', query: { order: 'Оформление заказа' } }"
      class="dropdown-toggle"
    >
      <div class="icon">
        <!-- <i class="icon-shopping-cart"></i> -->
        <!-- <img src="../../../../assets/newImg/icons/cart.svg" alt="cart"> -->
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_280_899)">
            <path
              d="M4.81267 6.76127L4.81122 6.75636L4.0973 4.32528H1.11264C0.719022 4.32528 0.4 4.00626 0.4 3.61264C0.4 3.21902 0.719022 2.9 1.11264 2.9H4.62924H4.72924V2.90857C4.99675 2.94671 5.23025 3.13597 5.31128 3.41195L5.31129 3.41196L6.03775 5.88653H23.8887H23.9887V5.89512L4.81267 6.76127ZM4.81267 6.76127C4.81937 6.79151 4.82827 6.81985 4.83806 6.84613L7.24335 15.0392L7.3393 15.011L7.24335 15.0392C7.32439 15.3151 7.55789 15.5044 7.8254 15.5425V15.5511H7.9254H21.4698C21.8109 15.5511 22.0946 15.3118 22.1654 14.9931L24.5707 6.80007L4.81267 6.76127ZM24.5707 6.79985C24.6822 6.4231 24.4659 6.02781 24.0895 5.91715L24.5707 6.79985ZM6.45697 7.31181H22.939L20.9386 14.1258H8.45735L6.45697 7.31181ZM20.173 16.978C19.695 16.5 19.0343 16.2041 18.3049 16.2041C17.5754 16.2041 16.9148 16.5 16.4368 16.978C15.9588 17.456 15.6629 18.1166 15.6629 18.8461C15.6629 19.5755 15.9588 20.2361 16.4368 20.7141C16.9148 21.1922 17.5754 21.488 18.3049 21.488C19.0343 21.488 19.695 21.1922 20.173 20.7141C20.651 20.2361 20.9469 19.5755 20.9469 18.8461C20.9469 18.1166 20.651 17.456 20.173 16.978ZM18.3049 17.6294C18.6408 17.6294 18.9452 17.7655 19.1653 17.9856C19.3854 18.2058 19.5216 18.5102 19.5216 18.8461C19.5216 19.1819 19.3854 19.4864 19.1653 19.7065C18.9452 19.9266 18.6408 20.0628 18.3049 20.0628C17.969 20.0628 17.6646 19.9266 17.4445 19.7065C17.2243 19.4864 17.0882 19.182 17.0882 18.8461C17.0882 18.5095 17.2243 18.2058 17.4445 17.9856C17.6646 17.7655 17.969 17.6294 18.3049 17.6294ZM12.9584 16.978C12.4804 16.5 11.8198 16.2041 11.0903 16.2041C10.3609 16.2041 9.70027 16.5 9.22225 16.978C8.74424 17.456 8.44836 18.1166 8.44836 18.8461C8.44836 19.5755 8.74424 20.2361 9.22225 20.7141C9.70027 21.1922 10.3609 21.488 11.0903 21.488C11.8198 21.488 12.4804 21.1922 12.9584 20.7141C13.4364 20.2361 13.7323 19.5755 13.7323 18.8461C13.7323 18.1166 13.4364 17.456 12.9584 16.978ZM11.0903 17.6294C11.4262 17.6294 11.7306 17.7655 11.9507 17.9856C12.1709 18.2058 12.307 18.5102 12.307 18.8461C12.307 19.182 12.1709 19.4864 11.9507 19.7065C11.7306 19.9266 11.4262 20.0628 11.0903 20.0628C10.7544 20.0628 10.45 19.9266 10.2299 19.7065C10.0098 19.4864 9.87364 19.182 9.87364 18.8461C9.87364 18.5095 10.0098 18.2058 10.2299 17.9856C10.45 17.7655 10.7544 17.6294 11.0903 17.6294Z"
              fill="#333333"
              stroke="#333333"
              stroke-width="0.2"
            />
          </g>
          <defs>
            <clipPath id="clip0_280_899">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0.25)"
              />
            </clipPath>
          </defs>
        </svg>
        <span class="cart-count">0</span>
      </div>
      <p>Корзина</p>
    </router-link>
    <!--
    <div
      class="dropdown-menu dropdown-menu-right"
      v-if="cartList.length > 0"
      key="hasCart"
    >
      <div class="dropdown-cart-products">
        <div class="product" v-for="(product, index) in cartList" :key="index">
          <div class="product-cart-details">
            <h4 class="product-title">
              <router-link :to="'/product/default/' + product.slug">{{
                product.name
              }}</router-link>
            </h4>

            <span class="cart-product-info">
              <span class="cart-product-qty">{{ product.qty }}</span>
              x ${{
                product.sale_price
                  ? product.sale_price.toFixed(2)
                  : product.price.toFixed(2)
              }}
            </span>
          </div>

          <figure class="product-image-container">
            <router-link
              :to="'/product/default/' + product.slug"
              class="product-image"
            >
              <img
                v-lazy="`${baseUrl}${product.sm_pictures[0].url}`"
                alt="product"
                :width="product.sm_pictures[0].width"
                :height="product.sm_pictures[0].height"
              />
            </router-link>
          </figure>
          <a
            href="#"
            class="btn-remove"
            title="Remove Product"
            @click.prevent="removeFromCart({ product: product })"
          >
            <i class="icon-close"></i>
          </a>
        </div>
      </div>

      <div class="dropdown-cart-total">
        <span>Total</span>

        <span class="cart-total-price">${{ priceTotal.toFixed(2) }}</span>
      </div>

      <div class="dropdown-cart-action">
        <router-link to="/shop/cart" class="btn btn-primary"
          >View Cart</router-link
        >
        <router-link to="/shop/checkout" class="btn btn-outline-primary-2">
          <span>Checkout</span>
          <i class="icon-long-arrow-right"></i>
        </router-link>
      </div>
    </div>
    <div class="dropdown-menu dropdown-menu-right" v-else key="noCart">
      <p class="text-center">No products in the cart.</p>
    </div> -->
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { baseUrl } from "../../../../repositories/repository.js";

export default {
  data: function () {
    return {
      baseUrl: baseUrl,
    };
  },
  computed: {
    ...mapGetters("cart", ["cartList", "priceTotal", "qtyTotal"]),
  },
  methods: {
    // ...mapActions("cart", ["removeFromCart"]),
  },
};
</script>
<style scoped>
p {
  font-family: Gilroy-Regular;
  font-size: 12px;
}
.dropdown-toggle:hover svg path {
  fill: var(--primary_bg);
}

@media screen and (max-width: 468px) {
  .cart-dropdown {
    display: none !important;
  }
}
@media screen and (max-width: 320px) {
  .cart-dropdown {
    display: flex !important;
  }
}
</style>
