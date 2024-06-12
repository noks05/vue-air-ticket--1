<template>
    <div class="products mb-3 content-overlay">
        <p class="no-results" v-if="products.length === 0 && loaded">No products matching your selection.</p>
        <div class="row">
            <template v-if="!loaded">
                <div :class="cols" v-for="item in fakeArray" :key="item">
                    <div class="skel-pro"></div>
                </div>
            </template>
            <template v-else>
                <div :class="cols" v-for="(product, index) in products" :key="index">
                    <product-ten :product="product"></product-ten>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
import ProductTen from '../../../../components/elements/products/ProductTen.vue';
export default {
    components: {
        ProductTen
    },
    props: {
        // products: Array,
        loaded: Boolean
    },
    data: function () {
        return {
            fakeArray: [1, 2, 3, 4, 5, 6, 7, 8],
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
                    stock: 100,
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
                        }
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
                            url: "../../../../public/assets/images/ipad.png",
                            pivot: {
                                related_id: "122",
                                upload_file_id: "756",
                            },
                        },
                        {
                            width: "300",
                            height: "300",
                            url: "../../../../public/assets/images/ipad.png",
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
                    price: 3000.00,
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
                            url: "../../../../public/assets/images/ipad_2.png",
                            pivot: {
                                related_id: "123",
                                upload_file_id: "761",
                            },
                        },
                        {
                            width: "300",
                            height: "300",
                            url: "../../../../public/assets/images/ipad_2.png",
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
                            url: "../../../../public/assets/images/watch.png",
                            pivot: {
                                related_id: "124",
                                upload_file_id: "765",
                            },
                        },
                        {
                            width: "300",
                            height: "300",
                            url: "../../../../public/assets/images/watch.png",
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
                    price: 10130.00,
                    sale_price: 13160.00,
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
                            url: "../../../../public/assets/images/go_pro.png",
                            pivot: {
                                related_id: "125",
                                upload_file_id: "769",
                            },
                        },
                        {
                            width: "300",
                            height: "300",
                            url: "../../../../public/assets/images/go_pro.png",
                            pivot: {
                                related_id: "125",
                                upload_file_id: "771",
                            },
                        },
                        {
                            width: "300",
                            height: "300",
                            url: "../../../../public/assets/images/go_pro.png",
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
                    stock: 100,
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
                            url: "../../../../public/assets/images/xbox.png",
                            pivot: {
                                related_id: "126",
                                upload_file_id: "775",
                            },
                        },
                        {
                            width: "300",
                            height: "300",
                            url: "../../../../public/assets/images/xbox.png",
                            pivot: {
                                related_id: "126",
                                upload_file_id: "776",
                            },
                        },
                        {
                            width: "300",
                            height: "300",
                            url: "../../../../public/assets/images/xbox.png",
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
                    stock: 100,
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
                            url: "../../../../public/assets/images/sony.png",
                            pivot: {
                                related_id: "127",
                                upload_file_id: "781",
                            },
                        },
                        {
                            width: "300",
                            height: "300",
                            url: "../../../../public/assets/images/sony.png",
                            pivot: {
                                related_id: "127",
                                upload_file_id: "782",
                            },
                        },
                        {
                            width: "300",
                            height: "300",
                            url: "../../../../public/assets/images/sony.png",
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
                            url: "../../../../public/assets/images/canon.png",
                            pivot: {
                                related_id: "128",
                                upload_file_id: "786",
                            },
                        },
                        {
                            width: "300",
                            height: "300",
                            url: "../../../../public/assets/images/canon.png",
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
                    stock: 100,
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
                        }
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
                            url: "../../../../public/assets/images/google.png",
                            pivot: {
                                related_id: "129",
                                upload_file_id: "790",
                            },
                        },
                        {
                            width: "300",
                            height: "300",
                            url: "../../../../public/assets/images/google.png",
                            pivot: {
                                related_id: "129",
                                upload_file_id: "791",
                            },
                        },
                    ],
                    variants: [],
                },
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
                    stock: 100,
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
                        }
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
                            url: "../../../../public/assets/images/ipad.png",
                            pivot: {
                                related_id: "122",
                                upload_file_id: "756",
                            },
                        },
                        {
                            width: "300",
                            height: "300",
                            url: "../../../../public/assets/images/ipad.png",
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
                    price: 3000.00,
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
                            url: "../../../../public/assets/images/ipad_2.png",
                            pivot: {
                                related_id: "123",
                                upload_file_id: "761",
                            },
                        },
                        {
                            width: "300",
                            height: "300",
                            url: "../../../../public/assets/images/ipad_2.png",
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
                            url: "../../../../public/assets/images/watch.png",
                            pivot: {
                                related_id: "124",
                                upload_file_id: "765",
                            },
                        },
                        {
                            width: "300",
                            height: "300",
                            url: "../../../../public/assets/images/watch.png",
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
                    price: 10130.00,
                    sale_price: 13160.00,
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
                            url: "../../../../public/assets/images/go_pro.png",
                            pivot: {
                                related_id: "125",
                                upload_file_id: "769",
                            },
                        },
                        {
                            width: "300",
                            height: "300",
                            url: "../../../../public/assets/images/go_pro.png",
                            pivot: {
                                related_id: "125",
                                upload_file_id: "771",
                            },
                        },
                        {
                            width: "300",
                            height: "300",
                            url: "../../../../public/assets/images/go_pro.png",
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
                    stock: 100,
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
                            url: "../../../../public/assets/images/xbox.png",
                            pivot: {
                                related_id: "126",
                                upload_file_id: "775",
                            },
                        },
                        {
                            width: "300",
                            height: "300",
                            url: "../../../../public/assets/images/xbox.png",
                            pivot: {
                                related_id: "126",
                                upload_file_id: "776",
                            },
                        },
                        {
                            width: "300",
                            height: "300",
                            url: "../../../../public/assets/images/xbox.png",
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
                    stock: 100,
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
                            url: "../../../../public/assets/images/sony.png",
                            pivot: {
                                related_id: "127",
                                upload_file_id: "781",
                            },
                        },
                        {
                            width: "300",
                            height: "300",
                            url: "../../../../public/assets/images/sony.png",
                            pivot: {
                                related_id: "127",
                                upload_file_id: "782",
                            },
                        },
                        {
                            width: "300",
                            height: "300",
                            url: "../../../../public/assets/images/sony.png",
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
                            url: "../../../../public/assets/images/canon.png",
                            pivot: {
                                related_id: "128",
                                upload_file_id: "786",
                            },
                        },
                        {
                            width: "300",
                            height: "300",
                            url: "../../../../public/assets/images/canon.png",
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
                    stock: 100,
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
                        }
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
                            url: "../../../../public/assets/images/google.png",
                            pivot: {
                                related_id: "129",
                                upload_file_id: "790",
                            },
                        },
                        {
                            width: "300",
                            height: "300",
                            url: "../../../../public/assets/images/google.png",
                            pivot: {
                                related_id: "129",
                                upload_file_id: "791",
                            },
                        },
                    ],
                    variants: [],
                },
            ]
        };
    },
    computed: {
        cols: function () {
            if (this.$route.params.type == 'boxed')
                return 'col-6 col-md-4 col-lg-4 col-xl-3';
            else return 'col-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2';
        }
    }
};
</script>