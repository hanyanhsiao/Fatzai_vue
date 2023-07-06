<script setup>
import { defineProps, toRefs, watch, ref } from 'vue'
import PagePlugin from './PagePlugin.vue'

// -----------產品區塊子元件-------------------
const props = defineProps({
    category: String
})

// 從props解構為單獨的ref
const { category } = toRefs(props)
const title = ref('全部商品')
// 產品分類
const TotalItems = [
    {
        id: 'SeasonItems',
        name: '季節限定',
        items: [
            {
                id: 1,
                name: 'Tiramisu Tart',
                category: '圓塔',
                price: 199,
                image: 'src/assets/image/items/tart1.jpg'
            },
            {
                id: 2,
                name: 'Pistache Mousse',
                category: '慕斯',
                price: 180,
                image: 'src/assets/image/items/mousse8.jpg'
            },
            {
                id: 3,
                name: 'Pistache Mousse',
                category: '慕斯',
                price: 180,
                image: 'src/assets/image/items/mousse11.jpg'
            },
            {
                id: 4,
                name: 'Pistache Mousse',
                category: '慕斯',
                price: 180,
                image: 'src/assets/image/items/mousse10.jpg'
            }
        ]
    },
    {
        id: 'CupcakeItems',
        name: '杯子蛋糕系列',
        items: [
            {
                id: 1,
                name: 'CupcakeItems',
                category: '圓塔',
                price: 199,
                image: 'src/assets/image/items/tart2.jpg'
            },
            {
                id: 2,
                name: 'CupcakeItems',
                category: '慕斯',
                price: 180,
                image: 'src/assets/image/items/mousse11.jpg'
            }
        ]
    },
    {
        id: 'TartItems',
        name: '小塔系列',
        items: [
            {
                id: 1,
                name: 'TartItems',
                category: '圓塔',
                price: 199,
                image: 'src/assets/image/items/tart4.jpg'
            },
            {
                id: 2,
                name: 'TartItems',
                category: '慕斯',
                price: 180,
                image: 'src/assets/image/items/mousse7.jpg'
            }
        ]
    },
    {
        id: 'ChouxItems',
        name: '泡芙系列',
        items: [
            {
                id: 1,
                name: 'ChouxItems',
                category: '圓塔',
                price: 199,
                image: 'src/assets/image/items/tart4.jpg'
            },
            {
                id: 2,
                name: 'ChouxItems',
                category: '慕斯',
                price: 180,
                image: 'src/assets/image/items/mousse7.jpg'
            }
        ]
    }
]

// 定義要放入的陣列
let itemList = []

const onePage = ref(4)
const currentPage = ref(1)
const sliceItems = ref([])

// 監看點到哪個類別
// { immediate: true } 初始化立即執行回調函數
watch(
    category,
    () => {
        // console.log('QQQQQ')

        // 清空陣列
        itemList.length = 0

        let filterArray = TotalItems.filter(eachCate => {
            return eachCate.id === category.value
        })

        if (filterArray.length == 0) {
            TotalItems.forEach(eachCate => {
                itemList.push(...eachCate.items)
            })
            title.value = '全部商品'
        } else {
            itemList.push(...filterArray[0].items)
            title.value = filterArray[0].name
        }
        // changePage(1)
        console.log(itemList.length)
        sliceItems.value = slice()
        // changeActiveState()
    },
    { immediate: true }
)

// -----------分頁器-------------------

function changePage(currentNum) {
    currentPage.value = currentNum
    console.log(currentPage.value)
    // sliceItems.value = slice()
}

function slice() {
    // console.log('computed')

    const start = (currentPage.value - 1) * onePage.value // (2-1)*4
    const end = start + onePage.value //0+4 從4開始
    return itemList.slice(start, end)
}
</script>

<template>
    <!--商品欄/全部商品 -->
    <div class="inner_block tabcontent" id="all">
        <!-- 分類標題 -->
        <div class="title">
            <h1>－ {{ title }} －</h1>
        </div>

        <!-- 商品區塊第一頁 -->
        <div class="items_block pagecontent" id="1">
            <ul>
                <li v-for="item in sliceItems" :key="item.id">
                    <router-link to="./ItemView">
                        <div class="img_block">
                            <img :src="item.image" :alt="''" />
                            <div class="add">加入購物車</div>
                        </div>
                    </router-link>
                    <div class="text_block">
                        <h3 class="item_name">{{ item.name }}</h3>
                        <p class="item_id" style="display: none">{{ item.category }}</p>
                        <div class="cash">
                            <p class="dollars">${{ item.price }}</p>
                            <i class="fa-solid fa-cart-shopping"></i>
                            <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <!-- 商品區塊第二頁 -->
        <!-- <div class="items_block pagecontent" id="2">
          <ul>
            <li>
              <a href="./item.html">
                <div class="img_block">
                  <img src="./image/items/tart (24).jpg" alt="">
                  <div class="add">加入購物車</div>
                </div>
              </a>
              <div class="text_block">
                <h3 class="item_name">Strawberry Tart</h3>
                <p class="item_id" style="display: none;">草莓塔</p>
                <div class="cash">
                  <p class="dollars">$250</p>
                  <i class="fa-solid fa-cart-shopping"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
            </li>
            <li>
              <a href="./item.html">
                <div class="img_block">
                  <img src="./image/items/tart (22).jpg" alt="">
                  <div class="add">加入購物車</div>
                </div>
              </a>
              <div class="text_block">
                <h3 class="item_name">Strawberry Pistache Tart</h3>
                <p class="item_id" style="display: none;">草莓開心果塔</p>
                <div class="cash">
                  <p class="dollars">$200</p>
                  <i class="fa-solid fa-cart-shopping"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
            </li>
            <li>
              <a href="./item.html">
                <div class="img_block">
                  <img src="./image/items/cup cake (5).jpg" alt="">
                  <div class="add">加入購物車 </div>
                </div>
              </a>
              <div class="text_block">
                <h3 class="item_name">Strawberry Cup Cake</h3>
                <p class="item_id" style="display: none;">草莓杯子蛋糕</p>
                <div class="cash">
                  <p class="dollars">$250</p>
                  <i class="fa-solid fa-cart-shopping"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
            </li>
            <li>
              <a href="./item.html">
                <div class="img_block">
                  <img src="./image/items/macaron (6).jpg" alt="">
                  <div class="add">加入購物車</div>
                </div>
              </a>
              <div class="text_block">
                <h3 class="item_name">Heart Macaron</h3>
                <p class="item_id" style="display: none;">草莓愛心馬卡龍</p>
                <div class="cash">
                  <p class="dollars">$190</p>
                  <i class="fa-solid fa-cart-shopping"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
            </li>
            <li>
              <a href="./item.html">
                <div class="img_block">
                  <img src="./image/items/mousse (13).jpg" alt="">
                  <div class="add">加入購物車</div>
                </div>
              </a>
              <div class="text_block">
                <h3 class="item_name">Strawberry Charlotte</h3>
                <p class="item_id" style="display: none;">草莓夏洛特</p>
                <div class="cash">
                  <p class="dollars">$200</p>
                  <i class="fa-solid fa-cart-shopping"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
            </li>
            <li>
              <a href="./item.html">
                <div class="img_block">
                  <img src="./image/items/cup cake (1).jpg" alt="">
                  <div class="add">加入購物車</div>
                </div>
              </a>
              <div class="text_block">
                <h3 class="item_name">Mint Chocolate Cup Cake</h3>
                <p class="item_id" style="display: none;">薄荷巧克力杯子蛋糕</p>
                <div class="cash">
                  <p class="dollars">$200</p>
                  <i class="fa-solid fa-cart-shopping"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
            </li>
            <li>
              <a href="./item.html">
                <div class="img_block">
                  <img src="./image/items/cup cake (6).jpg" alt="">
                  <div class="add">加入購物車 </div>
                </div>
              </a>
              <div class="text_block">
                <h3 class="item_name">Oreo Cup Cake</h3>
                <p class="item_id" style="display: none;">Oreo杯子蛋糕</p>
                <div class="cash">
                  <p class="dollars">$250</p>
                  <i class="fa-solid fa-cart-shopping"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
            </li>
            <li>
              <a href="./item.html">
                <div class="img_block">
                  <img src="./image/items/cup cake (7).jpg" alt="">
                  <div class="add">加入購物車</div>
                </div>
              </a>
              <div class="text_block">
                <h3 class="item_name">Caramel Cup Cake</h3>
                <p class="item_id" style="display: none;">焦糖煎餅杯子蛋糕</p>
                <div class="cash">
                  <p class="dollars">$190</p>
                  <i class="fa-solid fa-cart-shopping"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
            </li>
            <li>
              <a href="./item.html">
                <div class="img_block">
                  <img src="./image/items/cup cake (8).jpg" alt="">
                  <div class="add">加入購物車</div>
                </div>
              </a>
              <div class="text_block">
                <h3 class="item_name">Red Velvet Cup Cake</h3>
                <p class="item_id" style="display: none;">紅絲絨杯子蛋糕</p>
                <div class="cash">
                  <p class="dollars">$190</p>
                  <i class="fa-solid fa-cart-shopping"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
            </li>
            <li>
              <a href="./item.html">
                <div class="img_block">
                  <img src="./image/items/cup cake (11).jpg" alt="">
                  <div class="add">加入購物車</div>
                </div>
              </a>
              <div class="text_block">
                <h3 class="item_name">Chocolate Cup Cake</h3>
                <p class="item_id" style="display: none;">特濃巧克力杯子蛋糕</p>
                <div class="cash">
                  <p class="dollars">$220</p>
                  <i class="fa-solid fa-cart-shopping"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
            </li>
            <li>
              <a href="./item.html">
                <div class="img_block">
                  <img src="./image/items/cup cake (10).jpg" alt="">
                  <div class="add">加入購物車</div>
                </div>
              </a>
              <div class="text_block">
                <h3 class="item_name">Carrot Cup Cake</h3>
                <p class="item_id" style="display: none;">胡蘿蔔杯子蛋糕</p>
                <div class="cash">
                  <p class="dollars">$200</p>
                  <i class="fa-solid fa-cart-shopping"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
            </li>
            <li>
              <a href="./item.html">
                <div class="img_block">
                  <img src="./image/items/cup cake (12).jpg" alt="">
                  <div class="add">加入購物車</div>
                </div>
              </a>
              <div class="text_block">
                <h3 class="item_name">Brownie Cup Cakes</h3>
                <p class="item_id" style="display: none;">布朗尼杯子蛋糕</p>
                <div class="cash">
                  <p class="dollars">$190</p>
                  <i class="fa-solid fa-cart-shopping"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
            </li>
          </ul>
        </div> -->

        <!-- 商品區塊第三頁 -->
        <!-- <div class="items_block pagecontent" id="3">
          <ul>
            <li>
              <a href="./item.html">
                <div class="img_block">
                  <img src="./image/items/choux (3).png" alt="">
                  <div class="add">加入購物車</div>
                </div>
              </a>
              <div class="text_block">
                <h3 class="item_name">Pistache Choux</h3>
                <p class="item_id" style="display: none;">開心果泡芙</p>
                <div class="cash">
                  <p class="dollars">$220</p>
                  <i class="fa-solid fa-cart-shopping"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
            </li>
            <li>
              <a href="./item.html">
                <div class="img_block">
                  <img src="./image/items/choux (9).jpg" alt="">
                  <div class="add">加入購物車</div>
                </div>
              </a>
              <div class="text_block">
                <h3 class="item_name">Creme Diplomat Choux</h3>
                <p class="item_id" style="display: none;">香草卡士達泡芙</p>
                <div class="cash">
                  <p class="dollars">$220</p>
                  <i class="fa-solid fa-cart-shopping"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
            </li>
          </ul>
        </div> -->

        <!-- 分頁器 -->
        <PagePlugin :total="itemList.length" :onePage="onePage" :currentPage="currentPage" @changePage="changePage" />
    </div>
</template>

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
