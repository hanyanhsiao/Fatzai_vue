<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide, } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'
import { ref, inject } from 'vue';
// import { useProductsStore } from '@/stores/common'

// ↓↓↓↓↓↓↓↓↓↓↓↓↓套件設定↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination]

const breakpoints = {
    0: {
        slidesPerView: 2,
        spaceBetween: 20
    },
    560: {
        slidesPerView: 3,
        spaceBetween: 20
    },
    768: {
        slidesPerView: 4,
        spaceBetween: 20
    }
}
// 下方點點
const pagination = {
    el: '.dots',
    type: 'bullets',
    bulletActiveClass: 'dotsActive'
}
// 左右箭頭
const navigation = {
    nextEl: '.arrow_next',
    prevEl: '.arrow_pre'
}

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑套件設定↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// 載入全部商品
const dbStore = inject('dbStore')
const totalItems = dbStore.totalItems;
let itemList = []

totalItems.forEach(eachCate => {
    itemList.push(...eachCate.items);
});

const hotItem = itemList.slice(0, 8);

const category = ref('AllItems');

</script>

<template>
    <div>
        <div class="carousel_container">
            <div class="arrow_pre"></div>
            <swiper :modules="modules" :breakpoints="breakpoints" :pagination="pagination" :navigation="navigation" loop
                class="items">
                <swiper-slide v-for="item in hotItem" :key="item.id">
                    <div class="it">
                        <router-link :to="{ path: '/ItemView', query: { product: category, id: item.id } }">
                            <div class="img_block">
                                <img :src=item.cover alt="item.id" />
                            </div>
                            <div class="text_block">
                                <h3>{{ item.name }}</h3>
                                <p>$ {{ item.price }}</p>
                            </div>
                        </router-link>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="arrow_next"></div>
        </div>
        <div class="dots"></div>
    </div>
</template>

<style lang="scss">
.carousel_container {
    // outline: 2px solid rgb(255, 0, 0);

    display: flex;
    align-items: center;
    justify-content: center;

    .items {
        // outline: 2px solid rgb(255, 0, 0);
        margin: 20px;
        position: relative;

        .it {
            /* border-radius: 5px; */
            border: 1px solid #ccc;
            overflow: hidden;

            .img_block {
                /* outline: 2px solid black; */
                position: relative;
                overflow: hidden;

                img {
                    width: 100%;
                    display: block;
                    transform: scale(1);
                    transition: all 0.5s ease;

                    &:hover {
                        transform: scale(1.2);
                    }
                }
            }

            .text_block {
                // outline: 2px solid rgb(255, 0, 0);
                line-height: 1.5;

                h3 {
                    color: $secondary_color;
                    height: 60px;
                    text-align: center;
                    @include flexbox-center;
                }

                p {
                    background-color: $primary_color;
                    text-align: center;
                }
            }
        }
    }

    /* 輪播箭頭 */
    .arrow_pre:before {
        content: '〈';
        font-size: 2rem;
        line-height: 0;
        font-weight: 500;
        cursor: pointer;
        color: $secondary_color;
    }

    .arrow_next:before {
        content: '〉';
        font-size: 2rem;
        line-height: 0;
        font-weight: 500;
        cursor: pointer;
        color: $secondary_color;
    }
}

.dots {
    text-align: center;
}

.dotsActive {
    background-color: $secondary_color;
    opacity: 1;
}
</style>
