<template>
  <nav class="main-nav">
    <ul class="menu sf-arrows">
      <!-- :  -->
      <li class="megamenu-container" :class="{ active: current == '/' }">
        <router-link to="/" class="sf-with-ul">Главная</router-link>
        <!-- <div class="megamenu demo">
          <div class="menu-col">
            <div class="menu-title">Choose your demo</div>
            <div class="demo-list">
              <div class="demo-item">
                <a href="https://d-themes.com/vue/molla/demo-1">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/1.jpg'"></span>
                  <span class="demo-title">01 - furniture store</span>
                </a>
              </div>

              <div class="demo-item">
                <a href="https://d-themes.com/vue/molla/demo-2">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/2.jpg'"></span>
                  <span class="demo-title">02 - furniture store</span>
                </a>
              </div>

              <div class="demo-item">
                <a href="https://d-themes.com/vue/molla/demo-3">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/3.jpg'"></span>
                  <span class="demo-title">03 - electronic store</span>
                </a>
              </div>
              <div class="demo-item">
                <a href="https://d-themes.com/vue/molla/demo-4">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/4.jpg'"></span>
                  <span class="demo-title">04 - electronic store</span>
                </a>
              </div>

              <div class="demo-item">
                <a href="https://d-themes.com/vue/molla/demo-5">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/5.jpg'"></span>
                  <span class="demo-title">05 - fashion store</span>
                </a>
              </div>

              <div class="demo-item">
                <a href="https://d-themes.com/vue/molla/demo-6">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/6.jpg'"></span>
                  <span class="demo-title">06 - fashion store</span>
                </a>
              </div>

              <div class="demo-item">
                <a href="https://d-themes.com/vue/molla/demo-7">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/7.jpg'"></span>
                  <span class="demo-title">07 - fashion store</span>
                </a>
              </div>

              <div class="demo-item">
                <a href="https://d-themes.com/vue/molla/demo-8">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/8.jpg'"></span>
                  <span class="demo-title">08 - fashion store</span>
                </a>
              </div>

              <div class="demo-item">
                <a href="https://d-themes.com/vue/molla/demo-9">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/9.jpg'"></span>
                  <span class="demo-title">09 - fashion store</span>
                </a>
              </div>

              <div class="demo-item">
                <a href="https://d-themes.com/vue/molla/demo-10">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/10.jpg'"></span>
                  <span class="demo-title">10 - shoes store</span>
                </a>
              </div>

              <div class="demo-item hidden">
                <a href="https://d-themes.com/vue/molla/demo-11">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/11.jpg'"></span>
                  <span class="demo-title">11 - furniture simple store</span>
                </a>
              </div>

              <div class="demo-item hidden">
                <a href="https://d-themes.com/vue/molla/demo-12">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/12.jpg'"></span>
                  <span class="demo-title">12 - fashion simple store</span>
                </a>
              </div>

              <div class="demo-item hidden">
                <a href="https://d-themes.com/vue/molla/demo-13">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/13.jpg'"></span>
                  <span class="demo-title">13 - market</span>
                </a>
              </div>

              <div class="demo-item hidden">
                <a href="https://d-themes.com/vue/molla/demo-14">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/14.jpg'"></span>
                  <span class="demo-title">14 - market fullwidth</span>
                </a>
              </div>

              <div class="demo-item hidden">
                <a href="https://d-themes.com/vue/molla/demo-15">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/15.jpg'"></span>
                  <span class="demo-title">15 - lookbook 1</span>
                </a>
              </div>

              <div class="demo-item hidden">
                <a href="https://d-themes.com/vue/molla/demo-16">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/16.jpg'"></span>
                  <span class="demo-title">16 - lookbook 2</span>
                </a>
              </div>

              <div class="demo-item hidden">
                <a href="https://d-themes.com/vue/molla/demo-17">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/17.jpg'"></span>
                  <span class="demo-title">17 - fashion store</span>
                </a>
              </div>

              <div class="demo-item hidden">
                <a href="https://d-themes.com/vue/molla/demo-18">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/18.jpg'"></span>
                  <span class="demo-title">18 - fashion store (with sidebar)</span>
                </a>
              </div>

              <div class="demo-item hidden">
                <a href="https://d-themes.com/vue/molla/demo-19">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/19.jpg'"></span>
                  <span class="demo-title">19 - games store</span>
                </a>
              </div>

              <div class="demo-item hidden">
                <a href="https://d-themes.com/vue/molla/demo-20">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/20.jpg'"></span>
                  <span class="demo-title">20 - book store</span>
                </a>
              </div>

              <div class="demo-item hidden">
                <a href="https://d-themes.com/vue/molla/demo-21">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/21.jpg'"></span>
                  <span class="demo-title">21 - sport store</span>
                </a>
              </div>

              <div class="demo-item hidden">
                <a href="https://d-themes.com/vue/molla/demo-22">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/22.jpg'"></span>
                  <span class="demo-title">22 - tools store</span>
                </a>
              </div>

              <div class="demo-item hidden">
                <a href="https://d-themes.com/vue/molla/demo-23">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/23.jpg'"></span>
                  <span class="demo-title">23 - fashion left navigation store</span>
                </a>
              </div>

              <div class="demo-item hidden">
                <a href="https://d-themes.com/vue/molla/demo-24">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/24.jpg'"></span>
                  <span class="demo-title">24 - extreme sport store</span>
                </a>
              </div>

              <div class="demo-item hidden">
                <a href="https://d-themes.com/vue/molla/demo-25">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/25.jpg'"></span>
                  <span class="demo-title">25 - jewelry store</span>
                </a>
              </div>

              <div class="demo-item hidden">
                <a href="https://d-themes.com/vue/molla/demo-26">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/26.jpg'"></span>
                  <span class="demo-title">26 - market store</span>
                </a>
              </div>

              <div class="demo-item hidden">
                <a href="https://d-themes.com/vue/molla/demo-27">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/27.jpg'"></span>
                  <span class="demo-title">27 - fashion store</span>
                </a>
              </div>

              <div class="demo-item hidden">
                <a href="https://d-themes.com/vue/molla/demo-28">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/28.jpg'"></span>
                  <span class="demo-title">28 - food market store</span>
                </a>
              </div>

              <div class="demo-item hidden">
                <a href="https://d-themes.com/vue/molla/demo-29">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/29.jpg'"></span>
                  <span class="demo-title">29 - t-shirts store</span>
                </a>
              </div>

              <div class="demo-item hidden">
                <a href="https://d-themes.com/vue/molla/demo-30">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/30.jpg'"></span>
                  <span class="demo-title">30 - headphones store</span>
                </a>
              </div>

              <div class="demo-item hidden">
                <a href="https://d-themes.com/vue/molla/demo-31">
                  <span class="demo-bg" :src:background-image="'./images/menu/demos/31.jpg'"></span>
                  <span class="demo-title">31 - yoga store</span>
                </a>
              </div>
            </div>

            <div class="megamenu-action text-center">
              <a href="#" class="btn btn-outline-primary-2 view-all-demos" @click.prevent="viewAllDemos">
                <span>View All Demos</span>
                <i class="icon-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div> -->
      </li>
      <!-- :class="{ active: current == 'shop' }" -->
      <li>
        <router-link
          to="/shop/sidebar/without"
          class="sf-with-ul"
          style="display: flex; gap: 10px"
          >Спецпредложения
          <img src="../../../../assets/newImg/icons/arrow_down.svg" alt="" />
        </router-link>
        <div class="megamenu megamenu-md">
          <div
            class="no-gutters"
            style="margin: 0 !important; display: unset !important"
          >
            <div class="col-md-8">
              <div class="menu-col">
                <div class="">
                  <div class="col-md-6">
                    <!-- <div class="menu-title">Shop with sidebar</div> -->
                    <ul>
                      <li>
                        <router-link to="/shop/without/3cols"
                          >Одежда, обувь, аксессуары</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/shop/without/3cols"
                          >Электроника и бытовая техника</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/shop/without/3cols"
                          >Мебель и товары для дома</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/shop/without/3cols"
                          >Косметика, гигиена, аптеки</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/shop/without/3cols">
                          <!-- <span>
                            Shop Market
                            <span class="tip tip-new">New</span>
                          </span> -->
                          Игрушки и товары для детей
                        </router-link>
                      </li>
                    </ul>

                    <!-- <div class="menu-title">Shop no sidebar</div> -->

                    <ul>
                      <li>
                        <router-link to="/shop/without/3cols">
                          <!-- <span>
                            Shop Boxed No Sidebar
                            <span class="tip tip-hot">Hot</span>
                          </span> -->
                          Книги
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/shop/without/3cols"
                          >Товары для животных</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/shop/without/3cols"
                          >Спортивные товары
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/shop/without/3cols"
                          >Хобби и канцтовары</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/shop/without/3cols"
                          >Маркетплэйсы</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/shop/without/3cols"
                          >DIY и товары для сада</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/shop/without/3cols">
                          Ювелирные изделия</router-link
                        >
                      </li>
                    </ul>
                  </div>

                  <!-- <div class="col-md-6">
                    <div class="menu-title">Product Category</div>

                    <ul>
                      <li>
                        <router-link to="/shop/category/boxed">Product Category Boxed</router-link>
                      </li>
                      <li>
                        <router-link to="/shop/category/fullwidth">
                          <span>
                            Product Category Fullwidth
                            <span class="tip tip-new">New</span>
                          </span>
                        </router-link>
                      </li>
                    </ul>
                    <div class="menu-title">Shop Pages</div>

                    <ul>
                      <li>
                        <router-link to="/shop/cart">Cart</router-link>
                      </li>
                      <li>
                        <router-link to="/shop/checkout">Checkout</router-link>
                      </li>
                      <li>
                        <router-link to="/shop/wishlist">Wishlist</router-link>
                      </li>
                      <li>
                        <router-link to="/shop/dashboard">My Account</router-link>
                      </li>
                      <li>
                        <a href="#">Lookbook</a>
                      </li>
                    </ul>
                  </div> -->
                </div>
              </div>
            </div>

            <!-- <div class="col-md-4">
              <div class="banner banner-overlay">
                <router-link to="/shop/sidebar/list" class="banner banner-menu">
                  <img :src="'./images/menu/banner-1.jpg'" alt="Banner" width="218" height="314" />

                  <div class="banner-content banner-content-top">
                    <div class="banner-title text-white">
                      Last
                      <br />Chance
                      <br />
                      <span>
                        <strong>Sale</strong>
                      </span>
                    </div>
                  </div>
                </router-link>
              </div>
            </div> -->
          </div>
        </div>
      </li>
      <!-- :class="{ active: current == 'product' }" -->
      <li>
        <router-link
          to="/product/default/dark-yellow-lace-cut-out-swing-dress"
          class="sf-with-ul"
          >Акции</router-link
        >
        <!-- <div class="megamenu megamenu-sm">
          <div class="row no-gutters">
            <div class="col-md-6">
              <div class="menu-col">
                <div class="menu-title">Product Details</div>

                <ul>
                  <li>
                    <router-link to="/product/default/dark-yellow-lace-cut-out-swing-dress">Default</router-link>
                  </li>
                  <li>
                    <router-link to="/product/centered/beige-ring-handle-circle-cross-body-bag">Centered</router-link>
                  </li>
                  <li>
                    <router-link to="/product/extended/yellow-tie-strap-block-heel-sandals">
                      <span>
                        Extended Info
                        <span class="tip tip-new">New</span>
                      </span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/product/gallery/beige-metal-hoop-tote-bag">Gallery</router-link>
                  </li>
                  <li>
                    <router-link to="/product/sticky/brown-faux-fur-longline-coat">Sticky Info</router-link>
                  </li>
                  <li>
                    <router-link to="/product/sidebar/beige-v-neck-button-cardigan">Boxed With Sidebar</router-link>
                  </li>
                  <li>
                    <router-link to="/product/fullwidth/black-faux-leather-chain-trim-sandals">Full Width</router-link>
                  </li>
                  <li>
                    <router-link to="/product/masonry/black-denim-dungaree-dress">Masonry Sticky Info</router-link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-6">
              <div class="banner banner-overlay">
                <router-link to="/shop/sidebar/list">
                  <img :src="'./images/menu/banner-2.jpg'" alt="Banner" width="218" height="310" />

                  <div class="banner-content banner-content-bottom">
                    <div class="banner-title text-white">
                      New Trends
                      <br />
                      <span>
                        <strong>spring 2021</strong>
                      </span>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div> -->
      </li>
      <!-- <li :class="{ active: current == 'pages' }">
        <a href="javascript:;" class="sf-with-ul">Pages</a>

        <ul>
          <li>
            <router-link to="/pages/about" class="sf-with-ul">About</router-link>

            <ul>
              <li>
                <router-link to="/pages/about">About 01</router-link>
              </li>
              <li>
                <router-link to="/pages/about-2">About 02</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/pages/contact" class="sf-with-ul">Contact</router-link>

            <ul>
              <li>
                <router-link to="/pages/contact">Contact 01</router-link>
              </li>
              <li>
                <router-link to="/pages/contact-2">Contact 02</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/pages/login">Login</router-link>
          </li>
          <li>
            <router-link to="/pages/faq">FAQs</router-link>
          </li>
          <li>
            <router-link to="/pages/404">Error 404</router-link>
          </li>
          <li>
            <router-link to="/pages/coming-soon">Coming Soon</router-link>
          </li>
        </ul>
      </li>
      <li :class="{ active: current == 'blog' }">
        <router-link to="/blog/classic" class="sf-with-ul">Blog</router-link>
        <ul>
          <li>
            <router-link to="/blog/classic">Classic</router-link>
          </li>
          <li>
            <router-link to="/blog/listing">Listing</router-link>
          </li>
          <li>
            <router-link to="/blog/grid/grid-2" class="sf-with-ul">Grid</router-link>
            <ul>
              <li>
                <router-link to="/blog/grid/grid-2">Grid 2 columns</router-link>
              </li>
              <li>
                <router-link to="/blog/grid/grid-3">Grid 3 columns</router-link>
              </li>
              <li>
                <router-link to="/blog/grid/grid-4">Grid 4 columns</router-link>
              </li>
              <li>
                <router-link to="/blog/grid-sidebar">Grid sidebar</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/blog/masonry/masonry-2" class="sf-with-ul">Masonry</router-link>
            <ul>
              <li>
                <router-link to="/blog/masonry/masonry-2">Masonry 2 columns</router-link>
              </li>
              <li>
                <router-link to="/blog/masonry/masonry-3">Masonry 3 columns</router-link>
              </li>
              <li>
                <router-link to="/blog/masonry/masonry-4">Masonry 4 columns</router-link>
              </li>
              <li>
                <router-link to="/blog/masonry-sidebar">Masonry sidebar</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/blog/mask/grid" class="sf-with-ul">Mask</router-link>
            <ul>
              <li>
                <router-link to="/blog/mask/grid">Blog mask grid</router-link>
              </li>
              <li>
                <router-link to="/blog/mask/masonry">Blog mask masonry</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/blog/single/default/cras-ornare-tristique-elit." class="sf-with-ul">Single
              Post</router-link>
            <ul>
              <li>
                <router-link to="/blog/single/default/cras-ornare-tristique-elit.">Default with sidebar</router-link>
              </li>
              <li>
                <router-link to="/blog/single/fullwidth/fusce-pellentesque-suscipit.">Fullwidth no sidebar</router-link>
              </li>
              <li>
                <router-link to="/blog/single/sidebar/utaliquam-sollicitzdvudin-leo">Fullwidth with sidebar</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li :class="{ active: current == 'elements' }">
        <router-link to="/elements" class="sf-with-ul">Elements</router-link>

        <ul>
          <li>
            <router-link to="/elements/products">Products</router-link>
          </li>
          <li>
            <router-link to="/elements/typography">Typography</router-link>
          </li>
          <li>
            <router-link to="/elements/titles">Titles</router-link>
          </li>
          <li>
            <router-link to="/elements/banners">Banners</router-link>
          </li>
          <li>
            <router-link to="/elements/categories">Product Category</router-link>
          </li>
          <li>
            <router-link to="/elements/video-banners">Video Banners</router-link>
          </li>
          <li>
            <router-link to="/elements/buttons">Buttons</router-link>
          </li>
          <li>
            <router-link to="/elements/accordions">Accordions</router-link>
          </li>
          <li>
            <router-link to="/elements/tabs">Tabs</router-link>
          </li>
          <li>
            <router-link to="/elements/testimonials">Testimonials</router-link>
          </li>
          <li>
            <router-link to="/elements/blog-posts">Blog Posts</router-link>
          </li>
          <li>
            <router-link to="/elements/portfolio">Portfolio</router-link>
          </li>
          <li>
            <router-link to="/elements/cta">Call to Action</router-link>
          </li>
          <li>
            <router-link to="/elements/icon-boxes">Icon Boxes</router-link>
          </li>
        </ul>
      </li> -->
    </ul>
  </nav>
</template>
<script>
export default {
  computed: {
    current: function () {
      if (this.$route.path.includes("elements")) return "elements";
      if (this.$route.path.includes("shop")) return "shop";
      if (this.$route.path.includes("blog")) return "blog";
      if (this.$route.path.includes("product")) return "product";
      if (this.$route.path.includes("pages")) return "pages";
      return "/";
    },
  },
  methods: {
    viewAllDemos: function (e) {
      var list = document.querySelectorAll(".demo-list .hidden");
      for (let i = 0; i < list.length; i++) {
        list[i].classList.add("show");
      }

      e.currentTarget.parentElement.classList.add("d-none");
    },
  },
};
</script>
