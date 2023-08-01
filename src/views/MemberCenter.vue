<script setup>
import HeaderView from '../components/HeaderView.vue'
import FooterView from '../components/FooterView.vue'
import { ref } from 'vue'
import { useCommonStore } from '@/stores/common'

const common = useCommonStore()

//左側選單預設我的帳戶
let activeTab = ref('MyAcoount')
const changeTab = (tab) => {
    activeTab.value = tab
}
//手機板選單收合
const isClicked = ref(false)
const toggleAside = () => {
    isClicked.value = !isClicked.value
}

const signOut = () => {
    if (confirm("確定要登出嗎?") == true) {
        localStorage.clear();
        window.location.replace('./')
    }
}
</script>

<template>
    <div>
        <HeaderView />
        <main class="member_center">
            <!-- 會員專區標題 -->
            <div class="Member_Area">
                <!-- 背景文字 -->
                <h1>Member Area</h1>
                <!-- 標題文字 -->
                <div class="Member_Area_title">
                    <p>會 員 專 區</p>
                </div>
            </div>
            <div class="Member_Area_wrapper">
                <aside class="Member_Area_aside">
                    <div class="openMenu" @click="toggleAside">
                        <span>選單</span>
                        <lord-icon class="openMenu_arrow" src="https://cdn.lordicon.com/rvuqcvqy.json" trigger="loop"
                            delay="500" colors="primary:#809ba8,secondary:#809ba8" style="width: 30px; height: 30px" />
                    </div>
                    <ul class="Member_Area_menu" :class="{ active: isClicked }">
                        <li @click="changeTab('MyAcoount')" :class="{ active: activeTab === 'MyAcoount' }">我的帳戶</li>
                        <li @click="changeTab('Personal')" :class="{ active: activeTab === 'Personal' }">修改個人資訊</li>
                        <li @click="changeTab('Order')" :class="{ active: activeTab === 'Order' }">訂單查詢</li>
                        <li @click="changeTab('MyCoupon')" :class="{ active: activeTab === 'MyCoupon' }">我的優惠券</li>
                        <li @click="changeTab('FavoriteList')" :class="{ active: activeTab === 'FavoriteList' }">
                            <div class="aside_favorite">
                                收藏清單
                                <lord-icon src="https://cdn.lordicon.com/pnhskdva.json" trigger="loop" delay="1000"
                                    colors="primary:#dc9f58" style="width: 28px; height: 28px" />
                            </div>
                        </li>
                    </ul>
                </aside>

                <section v-if="activeTab === 'MyAcoount'" id="myAccount">
                    <!-- 右側上半部會員資訊 -->
                    <div class="Member_information">
                        <div class="personal_inf">
                            <div style="display: inline-block">
                                歡迎回來，
                                <p class="customer_name">Jasmine</p>
                            </div>
                            <button class="signOut" @click="signOut">登出</button>
                        </div>
                        <ul class="shopping_inf">
                            <li class="total_spent item">
                                <span class="text">總累計消費金額</span>
                                <span class="value"><span class="money_tag" data-amount="">NT$210</span></span>
                            </li>
                            <li class="total_bonus_points item">
                                <span class="text">可用紅利點數</span>
                                <span class="value">540</span>
                                <span class="text">點</span>
                            </li>
                            <li class="total_coupons item">
                                <span class="text">專屬優惠券</span>
                                <router-link to="" class="value">0</router-link>
                                <span class="text">張</span>
                            </li>
                        </ul>
                    </div>
                    <!-- 右側下半部近期訂單 -->
                    <h1 class="recent_orders_title">近期訂單</h1>
                    <div class="recent_orders">
                        <div class="order">
                            <ul class="order_title">
                                <li>訂單編號</li>
                                <li>訂單日期</li>
                                <li>總金額</li>
                                <li>運送方式</li>
                                <li>付款狀態</li>
                                <li>訂單狀態</li>
                            </ul>
                            <ul class="order_content">
                                <li class="order_number">
                                    <router-link to="" class="value">#OR2661060</router-link>
                                </li>
                                <li>2023-01-26</li>
                                <li>NT$660</li>
                                <li>宅配</li>
                                <li>已收到款項</li>
                                <li>已出貨</li>
                            </ul>
                        </div>

                        <div class="order">
                            <ul class="order_title">
                                <li>訂單編號</li>
                                <li>訂單日期</li>
                                <li>總金額</li>
                                <li>運送方式</li>
                                <li>付款狀態</li>
                                <li>訂單狀態</li>
                            </ul>
                            <ul class="order_content">
                                <li class="order_number">
                                    <router-link to="" class="value">#OR2661060</router-link>
                                </li>
                                <li>2022-11-26</li>
                                <li>NT$1090</li>
                                <li>門市自取</li>
                                <li>已收到款項</li>
                                <li>已成立</li>
                            </ul>
                        </div>

                        <div class="order">
                            <ul class="order_title">
                                <li>訂單編號</li>
                                <li>訂單日期</li>
                                <li>總金額</li>
                                <li>運送方式</li>
                                <li>付款狀態</li>
                                <li>訂單狀態</li>
                            </ul>
                            <ul class="order_content">
                                <li class="order_number">
                                    <router-link to="" class="value">#OR2661060</router-link>
                                </li>
                                <li>2022-11-26</li>
                                <li>NT$660</li>
                                <li>宅配</li>
                                <li>已收到款項</li>
                                <li>已出貨</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section v-if="activeTab === 'Personal'" id="personal">修改個人資訊</section>
                <section v-if="activeTab === 'Order'" id="order">訂單查詢</section>
                <section v-if="activeTab === 'MyCoupon'" id="coupon">我的優惠券</section>
                <section v-if="activeTab === 'FavoriteList'" id="favoritelist">收藏清單
                    <!-- <div class="favorite_block">
                        <ul class="favorite_list">
                            <li class="img">
                                <a href="./item.html">
                                    <img src="" alt="" />
                                </a>
                            </li>
                            <li class="favorite_inf">
                                <div class="item_name">商品名稱</div>
                                <div class="item_id">規格</div>
                                <div class="dollars">價錢</div>
                            </li>
                            <li class="favorite_button">
                                <button class="add_cart">
                                    <p>加入購物車</p>
                                    <lord-icon class="car_icon" src="https://cdn.lordicon.com/slkvcfos.json" trigger="loop"
                                        delay="1000" colors="primary:#dc9f58,secondary:#dc9f58"
                                        style="width:30px;height:30px" />
                                </button>
                                <div class="delete"><i class="fa-solid fa-trash-can"></i></div>
                            </li>
                        </ul>
                    </div> -->
                </section>
            </div>
            <!--手機才有的遮罩-->
            <div v-show="common.isMask" id="common_mask" @click="common.toggleMask()"></div>
        </main>
        <FooterView />
    </div>
</template>

<style lang="scss" scoped>
.member_center {

    // 會員專區標題
    .Member_Area {
        height: 250px;
        background-color: $primary_color;
        display: flex;
        position: relative;
        margin-bottom: 100px;
        display: flex;
        align-items: end;
        justify-content: center;

        @include pad {
            margin-bottom: 50px;
        }

        // 背景文字
        h1 {
            font-size: 10rem;
            font-weight: 900;
            font-family: 'Orelega', serif;
            color: white;
            padding-top: 30px;
            text-align: center;

            @include pad {
                font-size: 7rem;
                text-align: center;
                overflow: hidden;
            }
        }

        //  標題
        .Member_Area_title {
            position: absolute;
            top: 215px;
            padding: 10px 20px;
            font-size: 1.5rem;
            border: 1px solid $secondary_color;
            animation: clippath 1s ease forwards;

            @keyframes clippath {
                0% {
                    clip-path: inset(10% 10% 10% 10%);
                }

                25% {
                    clip-path: inset(10% 10% 10% 0);
                }

                50% {
                    clip-path: inset(10% 10% 0 0);
                }

                70% {
                    clip-path: inset(10% 0 0 0);
                }

                100% {
                    clip-path: inset(0 0 0 0);
                }
            }
        }
    }

    .Member_Area_wrapper {
        max-width: $page-width;
        margin: auto;
        display: grid;
        grid-template-columns: 0.5fr 1fr;

        @include pad {
            display: flex;
            flex-direction: column;
            padding: 15px;
        }

        //  左側側邊欄
        .Member_Area_aside {
            margin-right: 100px;

            @include pad {
                margin-right: 0;
            }

            // 手機版選單
            .openMenu {
                display: none;

                @include pad {
                    background-color: $third_color;
                    line-height: 30px;
                    padding: 5px 10px;
                    cursor: pointer;
                    transition: 0.4s;
                    border: 1px solid $fourth_color;
                    border-bottom: 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: $fourth_color;
                    font-weight: 500;
                }
            }

            .Member_Area_menu {
                @include pad {
                    height: 0;
                    transition: all 0.5s ease-in-out;
                    overflow: hidden;
                    border: 1px solid $fourth_color;
                    border-top: 0;
                    margin-bottom: 20px;
                }

                li {
                    padding: 10px;
                    line-height: 30px;
                    border-bottom: 1px solid #ccc;
                    transform: scale(1);

                    &:hover {
                        color: $secondary_color;
                        cursor: pointer;
                        transform: scale(1.1);
                        font-weight: 400;

                        @include pad {
                            /* 手機點擊不要放大 */
                            transform: scale(1);
                        }
                    }

                    .aside_favorite {
                        display: flex;
                        align-items: center;

                        lord-icon {
                            margin-left: 5px;
                        }
                    }
                }

                li.active {
                    color: $secondary_color;
                    font-weight: 400;
                }
            }

            .Member_Area_menu.active {
                @include pad {
                    height: 255px;
                }
            }
        }

        /* 右側內容欄 */
        /* 右側上半部會員資訊 */
        .Member_information {
            display: grid;
            grid-template-columns: 0.5fr 1fr;
            border: 1px solid #ccc;
            border-radius: 5px;

            .personal_inf {
                padding: 10px;
                border-right: 1px solid #ccc;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .customer_name {
                    margin-bottom: 10px;
                    font-size: 1.3rem;
                    display: inline-block;
                    font-weight: 400;

                    @include mobile {
                        padding: 5px 5px 5px 0;
                    }
                }

                .signOut {
                    // border: 1px solid #ccc;
                    background-color: $primary_color;
                    box-shadow: 2px 2px 2px $secondary_color;
                    padding: 5px 10px;
                    border-radius: 5px;
                    width: 80px;

                    &:active {
                        box-shadow: inset 0 0 10px 2px #f8d1a4;
                    }
                }
            }

            .shopping_inf {
                display: flex;
                flex-direction: column;
                align-items: start;

                li {
                    padding: 10px;

                    .value {
                        color: $secondary_color;
                        font-weight: 400;
                    }
                }
            }
        }

        /* 右側下半部近期訂單 */
        // 訂單標題
        .recent_orders_title {
            padding: 20px;
            font-weight: 400;
            text-align: center;

            @include mobile {
                text-align: center;
            }
        }

        // 訂單內容
        .order {
            margin-bottom: 30px;
            border: 1px solid #ccc;
            border-radius: 5px;

            .order_title {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
                text-align: center;
                background-color: #e0e0e0;
                line-height: 40px;

                @include mobile {
                    grid-template: 1fr 1fr / 1fr 1fr 1fr;
                    line-height: 30px;
                }
            }

            .order_content {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
                text-align: center;
                line-height: 6;

                @include mobile {
                    display: grid;
                    grid-template: 1fr 1fr / 1fr 1fr 1fr;
                    text-align: center;
                    line-height: 50px;
                    // border: 1px solid #e4e4e4;
                }

                li {
                    border-right: 1px solid #ccc;
                    font-size: 0.9rem;

                    &:last-child {
                        border-right: 0;
                    }

                    @include mobile {
                        border-bottom: 1px solid #e4e4e4;
                        border-right: 0;
                    }
                }

                .order_number {
                    a {
                        color: red;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}
</style>
