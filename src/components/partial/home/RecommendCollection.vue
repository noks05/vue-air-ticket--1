<template>
  <div class="container for-you">
    <div class="heading heading-flex mb-3">
      <div class="heading-left">
        <h2 class="title">Рекомендации для Вас</h2>
      </div>

      <div class="heading-right">
        <router-link to="/shop/without/3cols" class="title-link">
          Смотреть все предложения
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 7.9999C1 7.86729 1.05268 7.74011 1.14645 7.64635C1.24021 7.55258 1.36739 7.4999 1.5 7.4999H13.293L10.146 4.3539C10.0521 4.26001 9.99937 4.13267 9.99937 3.9999C9.99937 3.86712 10.0521 3.73979 10.146 3.6459C10.2399 3.55201 10.3672 3.49927 10.5 3.49927C10.6328 3.49927 10.7601 3.55201 10.854 3.6459L14.854 7.6459C14.9006 7.69234 14.9375 7.74752 14.9627 7.80827C14.9879 7.86901 15.0009 7.93413 15.0009 7.9999C15.0009 8.06567 14.9879 8.13079 14.9627 8.19153C14.9375 8.25228 14.9006 8.30745 14.854 8.3539L10.854 12.3539C10.7601 12.4478 10.6328 12.5005 10.5 12.5005C10.3672 12.5005 10.2399 12.4478 10.146 12.3539C10.0521 12.26 9.99937 12.1327 9.99937 11.9999C9.99937 11.8671 10.0521 11.7398 10.146 11.6459L13.293 8.4999H1.5C1.36739 8.4999 1.24021 8.44722 1.14645 8.35345C1.05268 8.25968 1 8.13251 1 7.9999Z"
              fill="#777777"
            />
          </svg>
        </router-link>
      </div>
    </div>

    <div class="products">
      <div class="row justify-content-center">
        <div
          class="col-6 col-md-4 col-lg-3"
          v-for="(product, index) in products.slice(0, 8)"
          :key="index"
        >
          <product-twelve :product="product"></product-twelve>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductTwelve from "../../elements/products/ProductTwelve.vue";

export default {
  components: {
    ProductTwelve,
  },
  // props: {
  //   products: Array,
  // },
  data() {
    return {
      products: [
        {
          id: 122,
          name: "Apple – 11” iPad Pro with Wi-Fi 256 GB",
          slug: 'apple-11"-ipad-pro-with-wi-fi-256-gb',
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ",
          price: 80899.99,
          sale_price: null,
          review: 2,
          ratings: 5,
          until: "2022-01-01",
          stock: null,
          top: null,
          featured: null,
          new: null,
          top: null,
          author: null,
          sold: null,
          category: [
            {
              name: "Компьютеры",
              slug: "computers",
              pivot: {
                product_id: "122",
                "product-category_id": "20",
              },
            },
            {
              name: "Планшеты",
              slug: "tablets",
              pivot: {
                product_id: "122",
                "product-category_id": "21",
              },
            },
            {
              name: "Смартфоны",
              slug: "cell-phone",
              pivot: {
                product_id: "122",
                "product-category_id": "27",
              },
            },
          ],
          brands: [
            {
              name: "F&F",
              slug: "fandf",
              pivot: {
                product_id: "122",
                brand_id: "20",
              },
            },
            {
              name: "UGG",
              slug: "ugg",
              pivot: {
                product_id: "122",
                brand_id: "1",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/ipad.png",
              pivot: {
                related_id: "122",
                upload_file_id: "754",
              },
            },
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/ipad.png",
              pivot: {
                related_id: "122",
                upload_file_id: "755",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "./assets/images/ipad.png",
              pivot: {
                related_id: "122",
                upload_file_id: "756",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/ipad.png",
              pivot: {
                related_id: "122",
                upload_file_id: "757",
              },
            },
          ],
          variants: [],
        },
        {
          id: 123,
          name: "Apple – Smart Folio for 11-inch iPad Pro",
          slug: "apple-smart-folio-for-11-inch-ipad-pro",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 3000.0,
          sale_price: null,
          review: 2,
          ratings: 4,
          until: null,
          stock: 100,
          top: null,
          featured: null,
          new: null,
          author: null,
          sold: null,
          category: [
            {
              name: "Компьютеры",
              slug: "computers",
              pivot: {
                product_id: "123",
                "product-category_id": "20",
              },
            },
            {
              name: "Планшеты",
              slug: "tablets",
              pivot: {
                product_id: "123",
                "product-category_id": "21",
              },
            },
          ],
          brands: [
            {
              name: "UGG",
              slug: "ugg",
              pivot: {
                product_id: "123",
                brand_id: "1",
              },
            },
            {
              name: "F&F",
              slug: "fandf",
              pivot: {
                product_id: "123",
                brand_id: "20",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/ipad_2.png",
              pivot: {
                related_id: "123",
                upload_file_id: "758",
              },
            },
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/ipad_2.png",
              pivot: {
                related_id: "123",
                upload_file_id: "759",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "./assets/images/ipad_2.png",
              pivot: {
                related_id: "123",
                upload_file_id: "761",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/ipad_2.png",
              pivot: {
                related_id: "123",
                upload_file_id: "760",
              },
            },
          ],
          variants: [
            {
              id: 25,
              color: "#3399cc",
              color_name: "Blue",
              price: 10160.99,
              pivot: {
                product_id: "123",
                component_id: "25",
              },
              size: [
                {
                  id: 61,
                  name: "Large",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "25",
                    component_id: "61",
                  },
                },
                {
                  id: 62,
                  name: "Extra Large",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "25",
                    component_id: "62",
                  },
                },
              ],
            },
            {
              id: 24,
              color: "#ebebeb",
              color_name: "Grey",
              price: 10150.99,
              pivot: {
                product_id: "123",
                component_id: "24",
              },
              size: [
                {
                  id: 60,
                  name: "Small",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "24",
                    component_id: "60",
                  },
                },
                {
                  id: 63,
                  name: "Medium",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "24",
                    component_id: "63",
                  },
                },
                {
                  id: 64,
                  name: "Large",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "24",
                    component_id: "64",
                  },
                },
              ],
            },
          ],
        },
        {
          id: 124,
          name: "Apple – Watch Series 3 with White Sport Band",
          slug: "apple-watch-series-3-with-white-sport-band",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 20214.99,
          sale_price: null,
          review: 2,
          ratings: 4,
          until: null,
          stock: 100,
          top: true,
          featured: true,
          new: null,
          author: null,
          sold: null,
          category: [
            {
              name: "Аксессуары",
              slug: "accessories",
              pivot: {
                product_id: "124",
                "product-category_id": "18",
              },
            },
            {
              name: "Умные часы",
              slug: "smartwatches",
              pivot: {
                product_id: "124",
                "product-category_id": "25",
              },
            },
          ],
          brands: [
            {
              name: "Geox",
              slug: "geox",
              pivot: {
                product_id: "124",
                brand_id: "21",
              },
            },
            {
              name: "UGG",
              slug: "ugg",
              pivot: {
                product_id: "124",
                brand_id: "1",
              },
            },
            {
              name: "River Island",
              slug: "river-island",
              pivot: {
                product_id: "124",
                brand_id: "18",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/watch.png",
              pivot: {
                related_id: "124",
                upload_file_id: "762",
              },
            },
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/watch.png",
              pivot: {
                related_id: "124",
                upload_file_id: "763",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "./assets/images/watch.png",
              pivot: {
                related_id: "124",
                upload_file_id: "765",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/watch.png",
              pivot: {
                related_id: "124",
                upload_file_id: "764",
              },
            },
          ],
          variants: [
            {
              id: 26,
              color: "var(--primary_bg)",
              color_name: "Red",
              price: 20214.99,
              pivot: {
                product_id: "124",
                component_id: "26",
              },
              size: [
                {
                  id: 65,
                  name: "Small",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "26",
                    component_id: "65",
                  },
                },
                {
                  id: 70,
                  name: "Medium",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "26",
                    component_id: "70",
                  },
                },
                {
                  id: 68,
                  name: "Large",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "26",
                    component_id: "68",
                  },
                },
              ],
            },
            {
              id: 27,
              color: "var(--primary_bg)",
              color_name: "blue",
              price: 22217.99,
              pivot: {
                product_id: "124",
                component_id: "27",
              },
              size: [
                {
                  id: 69,
                  name: "Medium",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "27",
                    component_id: "69",
                  },
                },
                {
                  id: 66,
                  name: "Large",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "27",
                    component_id: "66",
                  },
                },
                {
                  id: 67,
                  name: "Extra Large",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "27",
                    component_id: "67",
                  },
                },
              ],
            },
          ],
        },
        {
          id: 125,
          name: "GoPro – HERO7 Black HD Waterproof Action",
          slug: "gopro-hero7-black-hd-waterproof-action",
          short_desc:
            "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus.",
          price: 10130.0,
          sale_price: 13160.0,
          review: 2,
          ratings: 4,
          until: null,
          stock: 100,
          top: null,
          featured: true,
          new: true,
          author: null,
          sold: null,
          category: [
            {
              name: "Аксессуары",
              slug: "accessories",
              pivot: {
                product_id: "125",
                "product-category_id": "18",
              },
            },
            {
              name: "Цифровые камеры",
              slug: "camcorders",
              pivot: {
                product_id: "125",
                "product-category_id": "29",
              },
            },
            {
              name: "Камеры",
              slug: "cameras",
              pivot: {
                product_id: "125",
                "product-category_id": "28",
              },
            },
          ],
          brands: [
            {
              name: "Geox",
              slug: "geox",
              pivot: {
                product_id: "125",
                brand_id: "21",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/go_pro.png",
              pivot: {
                related_id: "125",
                upload_file_id: "766",
              },
            },
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/go_pro.png",
              pivot: {
                related_id: "125",
                upload_file_id: "767",
              },
            },
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/go_pro.png",
              pivot: {
                related_id: "125",
                upload_file_id: "768",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "./assets/images/go_pro.png",
              pivot: {
                related_id: "125",
                upload_file_id: "769",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/go_pro.png",
              pivot: {
                related_id: "125",
                upload_file_id: "771",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/go_pro.png",
              pivot: {
                related_id: "125",
                upload_file_id: "770",
              },
            },
          ],
          variants: [
            // {
            //   id: 26,
            //   color: "#005BAA",
            //   color_name: "Red",
            //   price: 10130.00,
            //   pivot: {
            //     product_id: "124",
            //     component_id: "26",
            //   },
            //   size: [
            //     {
            //       id: 65,
            //       name: "Small",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "26",
            //         component_id: "65",
            //       },
            //     },
            //     {
            //       id: 70,
            //       name: "Medium",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "26",
            //         component_id: "70",
            //       },
            //     },
            //     {
            //       id: 68,
            //       name: "Large",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "26",
            //         component_id: "68",
            //       },
            //     },
            //   ],
            // },
            // {
            //   id: 27,
            //   color: "#005BAA",
            //   color_name: "blue",
            //   price:13160.00,
            //   pivot: {
            //     product_id: "124",
            //     component_id: "27",
            //   },
            //   size: [
            //     {
            //       id: 69,
            //       name: "Medium",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "27",
            //         component_id: "69",
            //       },
            //     },
            //     {
            //       id: 66,
            //       name: "Large",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "27",
            //         component_id: "66",
            //       },
            //     },
            //     {
            //       id: 67,
            //       name: "Extra Large",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "27",
            //         component_id: "67",
            //       },
            //     },
            //   ],
            // },
          ],
        },
        {
          id: 126,
          name: "Microsoft – Refurbish Xbox One S 500GB",
          slug: "microsoft-refurbish-xbox-one-s-500gb",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 12179.99,
          sale_price: null,
          review: 2,
          ratings: 0,
          until: null,
          stock: null,
          top: true,
          featured: true,
          new: true,
          author: null,
          sold: null,
          category: [
            {
              name: "Аксессуары",
              slug: "accessories",
              pivot: {
                product_id: "126",
                "product-category_id": "18",
              },
            },
            {
              name: "Видеоигры",
              slug: "video-games",
              pivot: {
                product_id: "126",
                "product-category_id": "30",
              },
            },
            {
              name: " Pазвлечение",
              slug: "развлечение",
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
              url: "../../../../public/assets/images/xbox.png",
              pivot: {
                related_id: "126",
                upload_file_id: "773",
              },
            },
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/xbox.png",
              pivot: {
                related_id: "126",
                upload_file_id: "772",
              },
            },
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/xbox.png",
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
              url: "./assets/images/xbox.png",
              pivot: {
                related_id: "126",
                upload_file_id: "775",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/xbox.png",
              pivot: {
                related_id: "126",
                upload_file_id: "776",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/xbox.png",
              pivot: {
                related_id: "126",
                upload_file_id: "777",
              },
            },
          ],
          variants: [],
        },
        {
          id: 127,
          name: "Sony – Alpha a5100 Mirrorless Camera",
          slug: "sony-alpha-a5100-mirrorless-camera",
          short_desc:
            "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus.",
          price: 12499.99,
          sale_price: null,
          review: 2,
          ratings: 4,
          until: null,
          stock: null,
          top: true,
          featured: null,
          new: null,
          author: null,
          sold: null,
          category: [
            {
              name: "Цифровые камеры",
              slug: "camcorders",
              pivot: {
                product_id: "127",
                "product-category_id": "29",
              },
            },
            {
              name: "Камеры",
              slug: "cameras",
              pivot: {
                product_id: "127",
                "product-category_id": "28",
              },
            },
          ],
          brands: [
            {
              name: "River Island",
              slug: "river-island",
              pivot: {
                product_id: "127",
                brand_id: "18",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/sony.png",
              pivot: {
                related_id: "127",
                upload_file_id: "778",
              },
            },
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/sony.png",
              pivot: {
                related_id: "127",
                upload_file_id: "780",
              },
            },
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/sony.png",
              pivot: {
                related_id: "127",
                upload_file_id: "779",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "./assets/images/sony.png",
              pivot: {
                related_id: "127",
                upload_file_id: "781",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/sony.png",
              pivot: {
                related_id: "127",
                upload_file_id: "782",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/sony.png",
              pivot: {
                related_id: "127",
                upload_file_id: "783",
              },
            },
          ],
          variants: [],
        },
        {
          id: 128,
          name: "Canon – EOS 5D Mark IV DSLR Camera",
          slug: "canon-eos-5d-mark-iv-dslr-camera",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 10359.99,
          sale_price: 12399.99,
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
              name: "Камеры",
              slug: "cameras",
              pivot: {
                product_id: "128",
                "product-category_id": "28",
              },
            },
            {
              name: "Цифровые камеры",
              slug: "camcorders",
              pivot: {
                product_id: "128",
                "product-category_id": "29",
              },
            },
          ],
          brands: [
            {
              name: "Nike",
              slug: "nike",
              pivot: {
                product_id: "128",
                brand_id: "19",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/canon.png",
              pivot: {
                related_id: "128",
                upload_file_id: "785",
              },
            },
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/canon.png",
              pivot: {
                related_id: "128",
                upload_file_id: "784",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "./assets/images/canon.png",
              pivot: {
                related_id: "128",
                upload_file_id: "786",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/canon.png",
              pivot: {
                related_id: "128",
                upload_file_id: "787",
              },
            },
          ],
          variants: [
            // {
            //   id: 26,
            //   color: "#005BAA",
            //   color_name: "Red",
            //   price: 10130.00,
            //   pivot: {
            //     product_id: "124",
            //     component_id: "26",
            //   },
            //   size: [
            //     {
            //       id: 65,
            //       name: "Small",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "26",
            //         component_id: "65",
            //       },
            //     },
            //     {
            //       id: 70,
            //       name: "Medium",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "26",
            //         component_id: "70",
            //       },
            //     },
            //     {
            //       id: 68,
            //       name: "Large",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "26",
            //         component_id: "68",
            //       },
            //     },
            //   ],
            // },
            // {
            //   id: 27,
            //   color: "#005BAA",
            //   color_name: "blue",
            //   price: 13160.00,
            //   pivot: {
            //     product_id: "124",
            //     component_id: "27",
            //   },
            //   size: [
            //     {
            //       id: 69,
            //       name: "Medium",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "27",
            //         component_id: "69",
            //       },
            //     },
            //     {
            //       id: 66,
            //       name: "Large",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "27",
            //         component_id: "66",
            //       },
            //     },
            //     {
            //       id: 67,
            //       name: "Extra Large",
            //       slug: null,
            //       pivot: {
            //         components_variants_variant_id: "27",
            //         component_id: "67",
            //       },
            //     },
            //   ],
            // },
          ],
        },
        {
          id: 129,
          name: "Google – Pixel 6.2-Inch 3 XL 128GB",
          slug: "google-pixel-6.2-inch-3-xl-128gb",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 4000,
          sale_price: null,
          review: 2,
          ratings: 5,
          until: null,
          stock: null,
          top: true,
          featured: null,
          new: null,
          author: null,
          sold: null,
          category: [
            {
              name: "Планшеты",
              slug: "tablets",
              pivot: {
                product_id: "129",
                "product-category_id": "21",
              },
            },
            {
              name: "Развлечения",
              slug: "entertainment",
              pivot: {
                product_id: "129",
                "product-category_id": "23",
              },
            },
            {
              name: "Смартфоны",
              slug: "cell-phone",
              pivot: {
                product_id: "129",
                "product-category_id": "27",
              },
            },
          ],
          brands: [
            {
              name: "New Balance",
              slug: "new-balance",
              pivot: {
                product_id: "129",
                brand_id: "22",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/google.png",
              pivot: {
                related_id: "129",
                upload_file_id: "788",
              },
            },
            {
              width: "600",
              height: "600",
              url: "../../../../public/assets/images/google.png",
              pivot: {
                related_id: "129",
                upload_file_id: "789",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "./assets/images/google.png",
              pivot: {
                related_id: "129",
                upload_file_id: "790",
              },
            },
            {
              width: "300",
              height: "300",
              url: "./assets/images/google.png",
              pivot: {
                related_id: "129",
                upload_file_id: "791",
              },
            },
          ],
          variants: [],
        },
        // ======== //
        {
          id: 130,
          name: "Home Smart Speaker with Google Assistant",
          slug: "home-smart-speaker-with-google-assistant",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 150.99,
          sale_price: 129.99,
          review: 2,
          ratings: 3,
          until: "2022-01-01",
          stock: 100,
          top: null,
          featured: null,
          new: true,
          author: null,
          sold: null,
          category: [
            {
              name: "Accessories",
              slug: "accessories",
              pivot: {
                product_id: "130",
                "product-category_id": "18",
              },
            },
            {
              name: "Audio",
              slug: "audio",
              pivot: {
                product_id: "130",
                "product-category_id": "26",
              },
            },
          ],
          brands: [
            {
              name: "New Balance",
              slug: "new-balance",
              pivot: {
                product_id: "130",
                brand_id: "22",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "/uploads/product_11_1_406aa04e7f.jpg",
              pivot: {
                related_id: "130",
                upload_file_id: "792",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_11_2_1ce4dc30f2.jpg",
              pivot: {
                related_id: "130",
                upload_file_id: "794",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_11_3_2d28636d36.jpg",
              pivot: {
                related_id: "130",
                upload_file_id: "793",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "/uploads/product_11_1_300x300_c7664ff065.jpg",
              pivot: {
                related_id: "130",
                upload_file_id: "795",
              },
            },
            {
              width: "300",
              height: "300",
              url: "/uploads/product_11_2_300x300_563c9a4c7f.jpg",
              pivot: {
                related_id: "130",
                upload_file_id: "796",
              },
            },
            {
              width: "300",
              height: "300",
              url: "/uploads/product_11_3_300x300_1cbe3af5cb.jpg",
              pivot: {
                related_id: "130",
                upload_file_id: "797",
              },
            },
          ],
          variants: [],
        },
        {
          id: 131,
          name: "Sony – Class LED 2160p Smart 4K Ultra HD",
          slug: "sony-class-led-2160p-smart-4k-ultra-hd",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 999.99,
          sale_price: 899.99,
          review: 2,
          ratings: 5,
          until: null,
          stock: 100,
          top: null,
          featured: null,
          new: true,
          author: null,
          sold: null,
          category: [
            {
              name: "Entertainment",
              slug: "entertainment",
              pivot: {
                product_id: "131",
                "product-category_id": "23",
              },
            },
            {
              name: "TV",
              slug: "tv",
              pivot: {
                product_id: "131",
                "product-category_id": "24",
              },
            },
          ],
          brands: [
            {
              name: "New Balance",
              slug: "new-balance",
              pivot: {
                product_id: "131",
                brand_id: "22",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "/uploads/product_7_1_ba7a5197ad.jpg",
              pivot: {
                related_id: "131",
                upload_file_id: "798",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_7_2_e951bc82a6.jpg",
              pivot: {
                related_id: "131",
                upload_file_id: "799",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "/uploads/product_7_1_300x300_7d52e44699.jpg",
              pivot: {
                related_id: "131",
                upload_file_id: "800",
              },
            },
            {
              width: "300",
              height: "300",
              url: "/uploads/product_7_2_300x300_141620b1d4.jpg",
              pivot: {
                related_id: "131",
                upload_file_id: "801",
              },
            },
          ],
          variants: [],
        },
        {
          id: 132,
          name: "MacBook Pro 13″ laptop Display, i5",
          slug: "macbook-pro-13-laptop-display-i5",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 199.99,
          sale_price: null,
          review: 2,
          ratings: 2,
          until: null,
          stock: 100,
          top: null,
          featured: null,
          new: true,
          author: null,
          sold: null,
          category: [
            {
              name: "Tablets",
              slug: "tablets",
              pivot: {
                product_id: "132",
                "product-category_id": "21",
              },
            },
            {
              name: "Computers",
              slug: "computers",
              pivot: {
                product_id: "132",
                "product-category_id": "20",
              },
            },
            {
              name: "Laptops",
              slug: "laptops",
              pivot: {
                product_id: "132",
                "product-category_id": "22",
              },
            },
          ],
          brands: [
            {
              name: "UGG",
              slug: "ugg",
              pivot: {
                product_id: "132",
                brand_id: "1",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "/uploads/product_9_1_7a1ef0e54f.jpg",
              pivot: {
                related_id: "132",
                upload_file_id: "802",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_9_2_28fee92c79.jpg",
              pivot: {
                related_id: "132",
                upload_file_id: "803",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_9_3_0a795fde5f.jpg",
              pivot: {
                related_id: "132",
                upload_file_id: "804",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "/uploads/product_9_1_300x300_3bcf580b2b.jpg",
              pivot: {
                related_id: "132",
                upload_file_id: "805",
              },
            },
            {
              width: "300",
              height: "300",
              url: "/uploads/product_9_2_300x300_dc60e9079f.jpg",
              pivot: {
                related_id: "132",
                upload_file_id: "806",
              },
            },
            {
              width: "300",
              height: "300",
              url: "/uploads/product_9_3_300x300_a6904bf7ba.jpg",
              pivot: {
                related_id: "132",
                upload_file_id: "807",
              },
            },
          ],
          variants: [],
        },
        {
          id: 133,
          name: "Apple Watch Series 4 Gold Aluminum Case",
          slug: "apple-watch-series-4-gold-aluminum-case",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 499.99,
          sale_price: 300.99,
          review: 2,
          ratings: 5,
          until: null,
          stock: 100,
          top: true,
          featured: null,
          new: null,
          author: null,
          sold: null,
          category: [
            {
              name: "Entertainment",
              slug: "entertainment",
              pivot: {
                product_id: "133",
                "product-category_id": "23",
              },
            },
            {
              name: "Accessories",
              slug: "accessories",
              pivot: {
                product_id: "133",
                "product-category_id": "18",
              },
            },
            {
              name: "Smartwatches",
              slug: "smartwatches",
              pivot: {
                product_id: "133",
                "product-category_id": "25",
              },
            },
          ],
          brands: [
            {
              name: "Geox",
              slug: "geox",
              pivot: {
                product_id: "133",
                brand_id: "21",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "/uploads/product_13_1_58f26fb6b0.jpg",
              pivot: {
                related_id: "133",
                upload_file_id: "808",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_13_2_fff26f80dc.jpg",
              pivot: {
                related_id: "133",
                upload_file_id: "809",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "/uploads/product_13_1_300x300_0fbdf2ba54.jpg",
              pivot: {
                related_id: "133",
                upload_file_id: "810",
              },
            },
            {
              width: "300",
              height: "300",
              url: "/uploads/product_13_2_300x300_8ee25c33ec.jpg",
              pivot: {
                related_id: "133",
                upload_file_id: "811",
              },
            },
          ],
          variants: [],
        },
        {
          id: 134,
          name: "Samsung – 55″ Class LED 2160p Smart",
          slug: "samsung-55-class-led-2160p-smart",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 899.99,
          sale_price: null,
          review: 2,
          ratings: 5,
          until: null,
          stock: 100,
          top: null,
          featured: null,
          new: null,
          author: null,
          sold: null,
          category: [
            {
              name: "Entertainment",
              slug: "entertainment",
              pivot: {
                product_id: "134",
                "product-category_id": "23",
              },
            },
          ],
          brands: [
            {
              name: "Geox",
              slug: "geox",
              pivot: {
                product_id: "134",
                brand_id: "21",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "/uploads/product_8_1_c204a16f27.jpg",
              pivot: {
                related_id: "134",
                upload_file_id: "812",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_8_2_ee25b64922.jpg",
              pivot: {
                related_id: "134",
                upload_file_id: "813",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "/uploads/product_8_1_300x300_8f56b6b2cf.jpg",
              pivot: {
                related_id: "134",
                upload_file_id: "814",
              },
            },
            {
              width: "300",
              height: "300",
              url: "/uploads/product_8_2_300x300_0f3131e54f.jpg",
              pivot: {
                related_id: "134",
                upload_file_id: "815",
              },
            },
          ],
          variants: [
            {
              id: 28,
              color: "#333333",
              color_name: "Grey",
              price: 899.99,
              pivot: {
                product_id: "134",
                component_id: "28",
              },
              size: [
                {
                  id: 71,
                  name: "Small",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "28",
                    component_id: "71",
                  },
                },
                {
                  id: 72,
                  name: "Medium",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "28",
                    component_id: "72",
                  },
                },
              ],
            },
            {
              id: 29,
              color: "#3399cc",
              color_name: "Blue",
              price: 1099.99,
              pivot: {
                product_id: "134",
                component_id: "29",
              },
              size: [
                {
                  id: 74,
                  name: "Small",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "29",
                    component_id: "74",
                  },
                },
                {
                  id: 73,
                  name: "Medium",
                  slug: null,
                  pivot: {
                    components_variants_variant_id: "29",
                    component_id: "73",
                  },
                },
              ],
            },
          ],
        },
        {
          id: 135,
          name: "Lenovo – Laptop 330-15IKBR Pro 15.6″",
          slug: "lenovo-laptop-330-15ikbr-pro-15.6",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 339.99,
          sale_price: null,
          review: 2,
          ratings: 0,
          until: null,
          stock: 0,
          top: null,
          featured: null,
          new: null,
          author: null,
          sold: null,
          category: [
            {
              name: "Tablets",
              slug: "tablets",
              pivot: {
                product_id: "135",
                "product-category_id": "21",
              },
            },
            {
              name: "Computers",
              slug: "computers",
              pivot: {
                product_id: "135",
                "product-category_id": "20",
              },
            },
            {
              name: "Laptops",
              slug: "laptops",
              pivot: {
                product_id: "135",
                "product-category_id": "22",
              },
            },
          ],
          brands: [
            {
              name: "Geox",
              slug: "geox",
              pivot: {
                product_id: "135",
                brand_id: "21",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "/uploads/product_10_1_3739ad6682.jpg",
              pivot: {
                related_id: "135",
                upload_file_id: "817",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_10_2_7e3efcb79c.jpg",
              pivot: {
                related_id: "135",
                upload_file_id: "816",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_10_3_23293abb39.jpg",
              pivot: {
                related_id: "135",
                upload_file_id: "819",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_10_4_bc3ef10ce7.jpg",
              pivot: {
                related_id: "135",
                upload_file_id: "818",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "/uploads/product_10_1_300x300_fde9949208.jpg",
              pivot: {
                related_id: "135",
                upload_file_id: "820",
              },
            },
            {
              width: "300",
              height: "300",
              url: "/uploads/product_10_2_300x300_a0afeaad6e.jpg",
              pivot: {
                related_id: "135",
                upload_file_id: "821",
              },
            },
            {
              width: "300",
              height: "300",
              url: "/uploads/product_10_3_300x300_6ee66bdd87.jpg",
              pivot: {
                related_id: "135",
                upload_file_id: "822",
              },
            },
            {
              width: "300",
              height: "300",
              url: "/uploads/product_10_4_300x300_b47fe44862.jpg",
              pivot: {
                related_id: "135",
                upload_file_id: "823",
              },
            },
          ],
          variants: [],
        },
        {
          id: 136,
          name: "Bose – SoundSport wireless headphones",
          slug: "bose-soundsport-wireless-headphones",
          short_desc:
            "Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, ",
          price: 199,
          sale_price: null,
          review: 2,
          ratings: 3,
          until: null,
          stock: 100,
          top: null,
          featured: null,
          new: null,
          author: null,
          sold: null,
          category: [
            {
              name: "Accessories",
              slug: "accessories",
              pivot: {
                product_id: "136",
                "product-category_id": "18",
              },
            },
            {
              name: "Headphones",
              slug: "headphones",
              pivot: {
                product_id: "136",
                "product-category_id": "19",
              },
            },
          ],
          brands: [
            {
              name: "New Balance",
              slug: "new-balance",
              pivot: {
                product_id: "136",
                brand_id: "22",
              },
            },
          ],
          pictures: [
            {
              width: "600",
              height: "600",
              url: "/uploads/product_12_1_b78d4034f6.jpg",
              pivot: {
                related_id: "136",
                upload_file_id: "825",
              },
            },
            {
              width: "600",
              height: "600",
              url: "/uploads/product_12_2_e1f0e014f0.jpg",
              pivot: {
                related_id: "136",
                upload_file_id: "824",
              },
            },
          ],
          sm_pictures: [
            {
              width: "300",
              height: "300",
              url: "/uploads/product_12_1_300x300_c593ef09c9.jpg",
              pivot: {
                related_id: "136",
                upload_file_id: "826",
              },
            },
            {
              width: "300",
              height: "300",
              url: "/uploads/product_12_2_300x300_29499be6c4.jpg",
              pivot: {
                related_id: "136",
                upload_file_id: "827",
              },
            },
          ],
          variants: [],
        },
      ],
    };
  },
};
</script>

<style scoped>
.title-link {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #777777;
}

.title-link:hover {
  color:var(--primary_bg) !important;
}

.title-link:hover svg path {
  fill:var(--primary_bg) !important;
}


@media screen and (max-width:768px) {
  .heading-right{
    display: flex;
    justify-content: center;
  }
}

</style>
