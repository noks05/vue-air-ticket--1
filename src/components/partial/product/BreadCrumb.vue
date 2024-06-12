<template>
  <nav aria-label="breadcrumb" class="breadcrumb-nav border-0 mb-0">
    <div :class="'d-flex align-items-center ' +
      (fullWidth ? 'container-fluid' : 'container')
      ">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Главная</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/product/default/dark-yellow-lace-cut-out-swing-dress">Товары</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/product/default/dark-yellow-lace-cut-out-swing-dress">Электроника</router-link>
        </li>
        <li class="breadcrumb-item active">Подарочный сертификат М.Видео</li>
      </ol>

      <!-- <nav class="product-pager ml-auto" aria-label="Product">
        <router-link
          :to="prevProduct.slug"
          class="product-pager-link product-pager-prev"
          :class="{ 'prev-only': !nextProduct }"
          v-if="prevProduct"
        >
          <i class="icon-angle-left"></i>
          <span>Prev</span>
          <div class="product-detail">
            <figure>
              <img
                :src="`${baseUrl}${prevProduct.sm_pictures[0].url}`"
                alt="product"
                :width="prevProduct.sm_pictures[0].width"
                :height="prevProduct.sm_pictures[0].height"
              />
            </figure>
            <h3 class="product-name">{{ prevProduct.name }}</h3>
          </div>
        </router-link>

        <router-link
          :to="nextProduct.slug"
          class="product-pager-link product-pager-next"
          v-if="nextProduct"
        >
          <span>Next</span>
          <i class="icon-angle-right"></i>
          <div class="product-detail">
            <figure>
              <img
                :src="`${baseUrl}${nextProduct.sm_pictures[0].url}`"
                alt="product"
                :width="nextProduct.sm_pictures[0].width"
                :height="nextProduct.sm_pictures[0].height"
              />
            </figure>
            <h3 class="product-name">{{ nextProduct.name }}</h3>
          </div>
        </router-link>
      </nav> -->
    </div>
  </nav>
</template>
<script>
import { baseUrl } from "@/repositories/repository";
export default {
  props: {
    prevProduct: null,
    nextProduct: null,
    current: String,
    fullWidth: {
      type: Boolean,
      default: function () {
        return false;
      },
    },
  },
  data: function () {
    return {
      baseUrl: baseUrl,
    };
  },
};
</script>
