<script setup>
import HeaderView from '../components/HeaderView.vue'
import FooterView from '../components/FooterView.vue'
import ItemCarousel from '../components/ItemCarousel.vue'
import addCart from '../components/addCart.vue'

import { ref, inject, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCommonStore, CartStore } from '@/stores/common'
import Timer from '../model/Timmer'

const router = useRouter()
const common = useCommonStore()

// ------------定義--------------
const category = ref('全部商品')
const currentItem = ref()
const num = ref(1)
// 大圖
const mainItem = ref()
// 總金額
const total = ref()
// 尺寸選擇
const checkedButton = ref()

// ---------顯示點擊的產品--------

// 1 傳入點擊的商品id及類別id
const itemId = computed(() => {
    return router.currentRoute.value.query.id
})
const itemCategory = computed(() => {
    return router.currentRoute.value.query.product
})

// 2 撈出pinia中的全部商品做比對
const dbStore = inject('dbStore')
const totalItems = dbStore.totalItems;
console.log(totalItems);
watch(itemId, () => {

    // 3 比對類別
    let filterArray = totalItems.filter(eachCate => {
        return eachCate.id === itemCategory.value
    })
    // 4 比對後的存放空間
    let itemList = []

    if (filterArray.length == 0) {
        // 5-1 全部商品
        filterArray = totalItems
        filterArray.forEach(eachCate => {
            itemList.push(...eachCate.items)
        })

    } else {
        // 5-2 各類別
        category.value = filterArray[0].name
        itemList.push(...filterArray[0].items)
    }

    // 6 比對產品
    let filterItem = itemList.filter(eachItem => {
        return eachItem.id == itemId.value
    })

    // 7 抓出該產品
    currentItem.value = filterItem[0]

    // 8 大圖 
    mainItem.value = currentItem.value.cover

    // 9 總金額 
    total.value = currentItem.value.price

    // 10 尺寸選擇
    checkedButton.value = currentItem.value.size[0]
}, { immediate: true })


// -----------數量加減--------------
function changeNum(type, price) {
    if (type === 'decrease' && num.value > 1) {
        num.value--
    } else if (type === 'increase' && num.value < 10) {
        num.value++
    }
    total.value = num.value * price
}

// ----------加入購物車小圖----------
const cartStore = CartStore()
const itemsInLocal = ref(null)
const timer = ref(null)

// 點擊後要做的事
function showCart(item) {

    // 1 從右側滑入
    const addCarItem = document.querySelector('.addcar_item')
    addCarItem.classList.add('fadeInRight')

    // 2 計算要加入的金額跟數量、選擇尺寸後複製一份商品資訊
    item.num = num.value
    var cartItemCopy = { ...item, size: checkedButton.value }
    // console.log(cartItemCopy);

    // 3 存入local
    cartStore.addCartItem(cartItemCopy)

    // 4 抓出local顯示
    itemsInLocal.value = cartStore.getCartItem()

    // 呼叫計時器
    timer.value = new Timer(() => {
        const element = document.querySelector('.addcar_item')
        element.classList.remove('fadeInRight')
    }, 2000)
}

// ----------立即購買---------------
function buyNow(item) {
    showCart(item);
    router.push('./CartView')
}

// --------下方商品說明--------------
const currentTab = ref('delivery')
const tabs = ref([
    {
        id: 'delivery',
        title: '運送說明',
        questions: [
            {
                id: 'q1',
                question: 'Q1為什麼有些蛋糕無法宅配？',
                answer: '我們的宅配透過黑貓宅急便寄出，蛋糕屬於脆弱商品，運送過程中容易毀損，故無法寄送。'
            },
            {
                id: 'q2',
                question: 'Q2可以指定到貨日期嗎？',
                answer: '我們宅配與黑貓宅急便配合運送，無法指定到貨日期。'
            },
            {
                id: 'q3',
                question: 'Q3為什麼宅配無法指定到貨日期與時間？',
                answer: '黑貓宅急便送貨量過多時，無法指定到貨日，有可能延遲二到三日到貨。'
            },
            {
                id: 'q4',
                question: '',
                answer: '<br/>※疫情影響，可能會延遲2-3天到貨，也無法指定配送時間，亦不會當日寄出，當日就收到貨。<br/>※建議您先行聯繫收件人，告知商品配送日期與時間；若無法順利送達，恕無法辦理退貨與退款，如重新寄送將酌收配送。<br/>※若因天災或意外等人為不可抗力之因素，而無法按時配送，將通知您延後送貨或為您取消訂單。'
            }
        ]
    },
    {
        id: 'faq',
        title: '常見問題',
        questions: [
            {
                id: 'q1',
                question: 'Q1: 運輸方式及運費是多少？',
                answer: '運費會根據您的地址和訂單重量而定，我們提供宅配及店面取貨兩種方式，具體運費請見結帳頁面。'
            },
            {
                id: 'q2',
                question: 'Q2: 支付方式有哪些？',
                answer: '我們接受信用卡、店面現金支付、Line Pay等多種支付方式。'
            },
            {
                id: 'q3',
                question: 'Q3: 退換貨政策是什麼？',
                answer: '如有任何產品品質問題，請在收到產品後的24小時內與我們聯繫。'
            },
            {
                id: 'q4',
                question: 'Q4: 產品保質期和保存方式是什麼？',
                answer: '保質期會因產品不同而有所不同，詳細資訊請查看產品頁面或包裝上的標籤。<br/>產品保存方式建議在陰涼乾燥處保存，不要直接放在陽光下。'
            },
            {
                id: 'q5',
                question: 'Q5: 是否有特別優惠或促銷活動？',
                answer: '我們會不定期推出優惠和促銷活動，可以關注我們的官方網站和社交媒體獲取最新消息。'
            },
            {
                id: 'q6',
                question: 'Q6: 訂單是否可取消或更改？',
                answer: '如需取消或更改訂單，請在收到訂單確認郵件後聯繫我們，我們將盡力協助處理。'
            }
        ]
    },
    {
        id: 'customer',
        title: '顧客評價',
        questions: [
            {
                id: 'q1',
                question: '"他們的巧克力蛋糕真是太好吃了！"',
                answer: '"我喜歡他們的提拉米蘇塔，但是價格有點貴。"'
            },
            {
                id: 'q2',
                question: '"新出的杯子蛋糕是絕對不能錯過的！"',
                answer: '"他們的泡芙選擇豐富，口感也很好。"'
            },
            {
                id: 'q3',
                question: '"他們的巧克力蛋糕真是太好吃了！"',
                answer: '"我喜歡他們的提拉米蘇塔，但是價格有點貴。"'
            },
            {
                id: 'q4',
                question: '"草莓千層真是令人驚艷。"',
                answer: '"他們的蛋糕捲是我迄今為止吃過最好吃的。"'
            },
            {
                id: 'q5',
                question: '"檸檬塔口感非常清新，是夏天必嚐的甜點之一。"',
                answer: '"我在這裡吃到了世界上最好吃的馬卡龍！"'
            },
            {
                id: 'q6',
                question: '"Fatzai的蛋糕口感很細膩，非常好吃，是我吃過的最好的蛋糕沒有之一。"',
                answer: '"巧克力塔口感非常濃郁，巧克力味道十分濃厚，是巧克力控必嚐的甜點之一。"'
            },
        ]
    }])
function changeTab(tabname) {
    currentTab.value = tabname
}

</script>

<template>
    <div class="item">
        <HeaderView />
        <main>
            <div class="wrapper">

                <!-- 加入購物車小圖 -->
                <addCart :items-in-local="itemsInLocal" :timer="timer" />

                <!-- 麵包屑-->
                <ol class="breadcrumb">
                    <li><router-link to="./ItemList">產品列表</router-link></li>
                    <li><router-link :to="{ path: './ItemList', query: { product: itemCategory } }">{{ category
                    }}</router-link></li>
                    <li><router-link to="#">{{ currentItem.chineseName }}</router-link></li>
                </ol>

                <!-- 上方商品介紹 -->
                <div class="item_block">
                    <div class="left_block">
                        <img :src="mainItem" alt="" class="main_item" />
                        <div class="little_img">
                            <img :src="currentItem.cover" alt="" @click="mainItem = currentItem.cover" />
                            <img v-for="(image, index) in currentItem.image" :key="index" :src="image" alt=""
                                @click="mainItem = image" />
                        </div>
                    </div>
                    <div class="right_block">
                        <h1>{{ currentItem.chineseName }} &nbsp;</h1>
                        <h1 class="item_name">{{ currentItem.name }}</h1>
                        <div class="item_introduce">
                            <h3>產品介紹</h3>
                            <ul>
                                <li>可可塔皮</li>
                                <li>咖啡杏仁奶油餡</li>
                                <li>核桃</li>
                                <li>馬斯卡邦起司餡</li>
                                <li>苦甜巧克力餡</li>
                                <li>本產品含有酒類及堅果</li>
                            </ul>
                        </div>
                        <div class="item_delivery_fee">
                            <h3>運費與優惠</h3>
                            <ul>
                                <li>宅配冷藏運費一律$170</li>
                                <li>消費滿$1000免運</li>
                            </ul>
                        </div>
                        <h1 class="dollars_symbol">$</h1>
                        <h1 class="dollars">{{ currentItem.price }}</h1>
                        <div class="item_size">
                            <button v-for="(button, index) in currentItem.size" :key="index" class="tart"
                                :class="{ checked: button === checkedButton }" @click="checkedButton = button">
                                {{ button }}</button>
                            <!-- <p>圓塔：直徑8cm / 方塔：邊長6cm</p>  -->
                        </div>
                        <div class="item_quantity">
                            <ul class="count">
                                <li>
                                    <span class="num-count" @click="changeNum('decrease', currentItem.price)">－ </span>
                                </li>
                                <li><input readonly disabled type="text" class="input-num" v-model="num" /></li>
                                <li>
                                    <span class="num-count" @click="changeNum('increase', currentItem.price)">＋ </span>
                                </li>
                            </ul>
                            <h2>總金額: $ {{ total }}</h2>
                        </div>
                        <div class="item_buy">

                            <!-- <button class="btn1 add_shopping_car" @click="showCart(currentItem)"><router-link
                                    to="./CartView">立即購買</router-link></button> -->
                            <button class="btn1 add_shopping_car" @click="buyNow(currentItem)">
                                立即購買</button>
                            <button class="btn2 add_shopping_car" @click="showCart(currentItem)">加入購物車</button>
                        </div>
                    </div>
                </div>

                <!-- 分隔線 -->
                <hr class="hr" />

                <!-- 下方商品說明 -->
                <div class="item_description">
                    <div class="tab">
                        <button v-for="tab in tabs" :key="tab.id" :class="{ active: currentTab === tab.id }"
                            @click="changeTab(tab.id)">{{ tab.title }}
                        </button>
                    </div>
                    <div v-for="tab in tabs" v-show="currentTab === tab.id" :key="tab.id" class="tabcontent">
                        <template v-for="question in tab.questions" :key="question.id">
                            <p>{{ question.question }}</p>
                            <p v-html="question.answer"></p>
                        </template>
                    </div>
                </div>

                <!-- 更多商品 -->
                <div class="more_items_wrapper">
                    <div class="more_items">
                        <h1 class="title">更多商品</h1>
                        <ItemCarousel />
                    </div>
                </div>
            </div>
            <!--手機才有的遮罩-->
            <div v-show="common.isMask" id="common_mask" @click="common.toggleMask()"></div>
        </main>
        <FooterView />
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    // border: 2px solid saddlebrown;
    position: relative;
    margin: auto;
    padding: 0 30px;

    // 麵包屑
    .breadcrumb {
        max-width: $page-width;
        margin: auto;
        padding: 30px;
        padding-left: 0px;
        display: flex;

        @include pad {
            padding: 20px;
            max-width: auto;
            display: flex;
        }

        li {
            padding: 10px 10px 10px 0;
            font-size: 0.9rem;

            +li::before {
                content: '/';
                padding-right: 10px;
            }

            &:last-child a {
                color: $secondary_color;
                font-weight: 400;
            }

            a {
                &:hover {
                    color: $secondary_color;
                }
            }
        }
    }

    /* -------------------item_block--------------- */
    .item_block {
        display: flex;
        justify-content: space-between;
        padding-top: 0;
        max-width: $page-width;
        margin: auto;
        padding-bottom: 30px;

        @include pad {
            flex-direction: column;
        }

        /* ---------------------left_block----------------- */
        .left_block {
            img {
                display: block;
                max-width: 450px;

                @include pad {
                    max-width: 100%;
                }
            }

            .little_img {
                display: flex;
                // border: 2px solid saddlebrown;

                @include pad {
                    padding: 20px;
                    padding-left: 0;
                }

                img {
                    width: 110px;
                    margin: 20px 20px 0 0;
                    cursor: pointer;

                    &:hover {
                        border: 2px solid $secondary_color;
                    }

                    @include pad {
                        width: 130px;
                        margin: 0 20px 0 0;
                    }
                }
            }

            .border {
                border: 1px solid $secondary_color;
            }
        }

        /* ------------------right_block--------------------*/
        .right_block {
            display: block;
            width: 52%;
            margin-left: 20px;

            @include pad {
                width: 100%;
                margin-left: 0;
                margin-top: 20px;
            }

            h1 {
                font-size: 1.5rem;
                margin-bottom: 20px;
                display: inline-block;
                font-weight: 300;
            }

            .item_introduce,
            .item_delivery_fee {
                outline: 1px solid $fourth_color;
                margin-bottom: 20px;
                padding: 20px;
                background-color: #fff4e8;

                h3 {
                    font-size: 1.2rem;
                    margin-bottom: 20px;
                    color: $fourth_color;
                    font-weight: 400;
                }

                ul {
                    margin-left: 20px;
                    column-count: 2;

                    li {
                        margin-bottom: 10px;
                        list-style: circle;

                        &:last-of-type {
                            list-style: disc;
                            color: $fourth_color;
                            font-weight: 400;
                        }
                    }
                }
            }

            /* -----------價錢------------ */
            // .dollars_symbol {
            // }

            // .dollars {
            // }

            /* -----------尺寸選擇------------ */
            .item_size {
                display: flex;
                align-items: center;
                margin-bottom: 30px;

                button {
                    border: 1px solid $secondary_color;
                    border-radius: 5px;
                    padding: 5px 20px;
                    // width: 80px;
                    margin-right: 20px;
                    background-color: #ffffff;

                    @include pad {
                        margin-right: 15px;
                    }
                }

                button.checked {
                    background-color: $primary_color;
                }
            }

            /* -----------數量------------ */
            .item_quantity {
                // border: 2px solid sandybrown;
                gap: 30px;
                display: inline-flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 30px;

                .count {
                    border: 1px solid $secondary_color;
                    width: 150px;
                    display: flex;
                    border-radius: 2px;

                    li {
                        display: inline-block;

                        /* + - */
                        .num-count {
                            display: inline-block;
                            width: 25px;
                            height: 25px;
                            line-height: 25px;
                            text-align: center;
                            cursor: pointer;
                            background-color: $secondary_color;
                        }

                        /* 中間數字 */
                        .input-num {
                            height: 25px;
                            text-align: center;
                            border-radius: 0;
                            border: 0;
                            width: 100%;
                            background-color: white;
                            border-right: 1px solid $secondary_color;
                        }
                    }
                }
            }

            /* -----------購買/加入購物車------------ */
            .item_buy {
                display: flex;

                @include pad {
                    display: flex;
                    justify-content: space-between;
                }

                .add_shopping_car {
                    border: 1px solid $secondary_color;
                    width: 40%;
                    margin-right: 30px;
                    display: block;
                    line-height: 2;
                    font-size: 1.2rem;
                    border-radius: 5px;
                }

                .btn1 {
                    background-color: $secondary_color;

                    &:hover a {
                        color: white;
                    }

                    @include pad {
                        border: 1px solid $secondary_color;
                        width: 48%;
                    }
                }

                .btn2 {
                    background-color: #ffffff;

                    &:hover {
                        background-color: $primary_color;
                    }

                    @include pad {
                        border: 1px solid $secondary_color;
                        width: 48%;
                        margin-right: 0;
                    }
                }
            }
        }
    }

    /* ---------------item_description------------- */
    /* --------------選單---------------*/
    .item_description {
        border: 1px solid $secondary_color;
        max-width: $page-width;
        margin: 30px auto;

        .tab {
            overflow: hidden;
            display: flex;
            justify-content: space-around;

            button {
                background-color: $primary_color;
                width: 100%;
                padding: 14px 16px;

                &:hover {
                    color: $secondary_color;
                }
            }

            button.active {
                background-color: $secondary_color;
                color: #ffffff;
            }
        }

        .tabcontent {
            // display: none;
            padding: 20px;
            line-height: 2;

            /* --------------描述文字---------------*/
            >p {
                &:nth-child(odd) {
                    color: $secondary_color;
                    font-weight: 400;
                }

                //     &:nth-child(7) {
                //         color: inherit;
                //         font-weight: 200;
                //     }
            }
        }
    }

    /*--------------更多商品----------------*/
    .more_items_wrapper {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='Artboard-5' fill='%23ffead2' fill-opacity='0.5' fill-rule='nonzero'%3E%3Cpath d='M6 18h12V6H6v12zM4 4h16v16H4V4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

        .more_items {
            display: block;
            // overflow: hidden;
            padding: 30px 0;
            max-width: $page-width;
            margin: auto;
        }
    }
}
</style>
