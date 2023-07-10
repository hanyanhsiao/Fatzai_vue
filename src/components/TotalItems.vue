<script setup>
import { defineProps, toRefs, watch, ref } from 'vue'
import PagePlugin from './PagePlugin.vue'
import { useProductsStore } from '@/stores/common'

// -----------產品區塊子元件-------------------

const props = defineProps({
    category: String
})

// 從props解構為單獨的ref
const { category } = toRefs(props)
const title = ref('全部商品')


// 載入所有產品
const productsStore = useProductsStore()
const totalItems = productsStore.totalItems
// const totalItems = [
//     {
//         id: 'SeasonItems',
//         name: '季節限定',
//         items: [
//             {
//                 id: 1,
//                 name: 'Tiramisu Tart',
//                 category: '圓塔',
//                 price: 199,
//                 image: 'src/assets/image/items/tart1.jpg'
//             },
//             {
//                 id: 2,
//                 name: 'Pistache Mousse',
//                 category: '開心果慕斯',
//                 price: 180,
//                 image: 'src/assets/image/items/mousse2.jpg'
//             },
//             {
//                 id: 3,
//                 name: 'Pistache Mousse',
//                 category: '哈哈慕斯',
//                 price: 180,
//                 image: 'src/assets/image/items/mousse11.jpg'
//             },
//             {
//                 id: 4,
//                 name: 'Pistache Mousse',
//                 category: '慕斯',
//                 price: 180,
//                 image: 'src/assets/image/items/mousse10.jpg'
//             },
//             {
//                 id: 5,
//                 name: 'Pistache Pistache',
//                 category: '慕斯',
//                 price: 180,
//                 image: 'src/assets/image/items/mousse12.jpg'
//             },
//             {
//                 id: 6,
//                 name: 'Pistache Pistache',
//                 category: '慕斯',
//                 price: 180,
//                 image: 'src/assets/image/items/mousse8.jpg'
//             },
//             {
//                 id: 6,
//                 name: 'Pistache Pistache',
//                 category: '慕斯',
//                 price: 180,
//                 image: 'src/assets/image/items/mousse5.jpg'
//             }
//         ]
//     },
//     {
//         id: 'CupcakeItems',
//         name: '杯子蛋糕系列',
//         items: [
//             {
//                 id: 7,
//                 name: 'CupcakeItems',
//                 category: '圓塔',
//                 price: 199,
//                 image: 'src/assets/image/items/tart2.jpg'
//             },
//             {
//                 id: 8,
//                 name: 'CupcakeItems',
//                 category: '慕斯',
//                 price: 180,
//                 image: 'src/assets/image/items/mousse11.jpg'
//             }
//         ]
//     },
//     {
//         id: 'TartItems',
//         name: '小塔系列',
//         items: [
//             {
//                 id: 9,
//                 name: 'TartItems',
//                 category: '圓塔',
//                 price: 199,
//                 image: 'src/assets/image/items/tart4.jpg'
//             },
//             {
//                 id: 10,
//                 name: 'TartItems',
//                 category: '慕斯',
//                 price: 180,
//                 image: 'src/assets/image/items/mousse7.jpg'
//             }
//         ]
//     },
//     {
//         id: 'ChouxItems',
//         name: '泡芙系列',
//         items: [
//             {
//                 id: 11,
//                 name: 'ChouxItems',
//                 category: '圓塔',
//                 price: 199,
//                 image: 'src/assets/image/items/tart4.jpg'
//             },
//             {
//                 id: 12,
//                 name: 'ChouxItems',
//                 category: '慕斯',
//                 price: 180,
//                 image: 'src/assets/image/items/mousse7.jpg'
//             }
//         ]
//     }
// ]

// 定義要放入的陣列

let itemList = []

// 定義每一頁的個數、當前頁碼
const onePage = ref(6)
const currentPage = ref(1)
const sliceItems = ref([])

// 監看點到哪個類別
// { immediate: true } 初始化立即執行回調函數
watch(
    category,
    () => {
        // 清空陣列
        itemList.length = 0

        let filterArray = totalItems.filter(eachCate => {
            return eachCate.id === category.value
        })

        if (filterArray.length == 0) {
            totalItems.forEach(eachCate => {
                itemList.push(...eachCate.items)
            })
            title.value = '全部商品'
        } else {
            itemList.push(...filterArray[0].items)
            title.value = filterArray[0].name
        }
        changePage(1)
        // console.log('產品總數' + itemList.length)
    },
    { immediate: true }
)

// 分割每頁要幾個產品
function slice() {
    const start = (currentPage.value - 1) * onePage.value // (2-1)*4
    const end = start + onePage.value //0+4 從4開始
    return itemList.slice(start, end)
}

// -----------分頁器-------------------

function changePage(currentNum) {
    currentPage.value = currentNum
    // console.log('當前頁碼' + currentPage.value)
    sliceItems.value = slice()
}

// -----------加入收藏-----------------
function toggleHeart(item) {
    item.isFilled = !item.isFilled
}

// -----------加入購物車-----------------
const emit = defineEmits(['addCart'])
function addCart(item) {
    item.num = 1
    emit('addCart', item)
    // console.log("加入的產品"+item)
}
</script>

<!-- ==================template===================== -->
<template>
    <!--商品欄/全部商品 -->
    <div class="inner_block tabcontent" id="all">
        <!-- 分類標題 -->
        <div class="title">
            <h1>－ {{ title }} －</h1>
        </div>

        <!-- 商品區塊 -->
        <div class="items_block pagecontent" id="1">
            <ul>
                <!-- <li v-for="(item, index) in sliceItems" :key="index"> -->
                <li v-for="item in sliceItems" :key="item.id">
                    <router-link :to="{ path: '/ItemView', query: { product: category, id: item.id } }">
                        <div class="img_block">
                            <img :src="item.cover" :alt="item.id" />
                            <div class="add" @click.prevent="addCart(item)">加入購物車</div>
                        </div>
                    </router-link>
                    <div class="text_block">
                        <h3 class="item_name">{{ item.name }}</h3>
                        <p class="item_id" style="display: none">{{ item.category }}</p>
                        <div class="cash">
                            <p class="dollars">${{ item.price }}</p>
                            <i class="fa-solid fa-cart-shopping" @click="addCart(item)"></i>
                            <i class="fa-heart" :class="{ 'fa-regular': !item.isFilled, 'fa-solid': item.isFilled }"
                                @click="toggleHeart(item)"></i>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <!-- 分頁器 -->
        <PagePlugin :total="itemList.length" :onePage="onePage" :currentNum="currentPage" @changePage="changePage" />
    </div>
</template>

<!-- ==================scss===================== -->
<style lang="scss" scoped>
.inner_block {
    // outline: 2px solid rgb(0, 0, 0);
    width: 80%;
    padding: 20px;

    @include pad {
        width: 100%;
    }

    //  -------分類標題---------
    .title {
        display: flex;
        background-image: url(../assets/image/material/title_bg.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 180px;
        margin-bottom: 20px;
        position: relative;

        @include pad {
            display: none;
        }

        h1 {
            align-items: center;
            position: absolute;
            font-size: 1.3rem;
            font-weight: 500;
            left: 30%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }

    // ------ 商品區塊 --------
    .items_block {
        ul {
            // border: 1px solid rgb(0, 0, 0);
            display: grid;
            gap: 20px;
            grid-template-columns: 1fr 1fr 1fr;

            @include pad {
                grid-template-columns: 1fr 1fr;
            }

            li {
                border: 1px solid #ccc;
                transition: all 0.5s ease 0s;

                /* ---圖片區塊--- */
                .img_block {
                    position: relative;
                    overflow: hidden;

                    img {
                        width: 100%;
                        transform: scale(1);
                        transition: all 0.5s ease;

                        &:hover {
                            transform: scale(1.1);
                        }
                    }

                    .add {
                        position: absolute;
                        bottom: 0;
                        background-color: rgba(255, 255, 255, 0.495);
                        width: 100%;
                        text-align: center;
                        padding: 10px;
                        opacity: 0;
                        transition: 0.2s ease;
                    }
                }

                /* ---文字區塊--- */
                .text_block {
                    text-align: center;

                    h3 {
                        padding: 12px 0;
                    }

                    .cash {
                        background-color: $third_color;
                        display: flex;
                        padding: 10px;
                        font-weight: bold;
                        color: $secondary_color;

                        p {
                            flex-grow: 3;
                            text-align: center;
                        }

                        i {
                            width: 20px;
                            margin-right: 10px;
                            @include flexbox-center;

                            &:last-child {
                                margin-right: 0;
                            }
                        }

                        .fa-cart-shopping {
                            display: none;

                            @include pad {
                                display: block;
                                @include flexbox-center;
                            }
                        }
                    }
                }

                &:hover {
                    .add {
                        opacity: 1;

                        @include pad {
                            display: none;
                        }
                    }
                }
            }
        }
    }

    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 20px auto 0;

        span {
            display: inline-block;
            margin: 0 20px;
            cursor: pointer;
            font-size: 1.5rem;
            margin-top: -3px;
        }

        li {
            display: inline-block;
            float: left;
            padding: 8px 12px;
            cursor: pointer;
        }

        .active {
            background-color: $secondary_color;
            color: white;
            border-radius: 50%;
        }
    }
}
</style>
