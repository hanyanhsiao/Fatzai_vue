<script setup>
import HeaderView from '../components/HeaderView.vue'
import FooterView from '../components/FooterView.vue'
import { useCommonStore } from '@/stores/common'

const common = useCommonStore()
</script>

<template>
    <div>
        <HeaderView />
        <main class="cart">
            <!---------- 進度條 ---------->
            <div class="process">
                <div class="step">
                    <span class="badge badge1">
                        <!-- before -->
                        <span class="text">1</span>
                        <!-- after -->
                    </span>
                    <span>購物車</span>
                </div>
                <div class="step">
                    <span class="badge badge2">
                        <!-- before -->
                        <span class="text">2</span>
                        <!-- after -->
                    </span>
                    <span>填寫資料</span>
                </div>
                <div class="step">
                    <span class="badge badge3">
                        <!-- before -->
                        <span class="text">3</span>
                        <!-- after -->
                    </span>
                    <span>確認訂單</span>
                </div>
                <div class="step">
                    <span class="badge badge4">
                        <!-- before -->
                        <span class="text">4</span>
                        <!-- after -->
                    </span>
                    <span>確認付款</span>
                </div>
            </div>

            <!-- --------購物車----------->
            <div class="car">
                <p>購物車</p>

                <!-- ---標題-- -->
                <ul class="car_title">
                    <li>商品</li>
                    <li>名稱</li>
                    <li>規格</li>
                    <li>金額</li>
                    <li>數量</li>
                    <li>合計</li>
                    <li>刪除</li>
                </ul>
                <!-- 購買商品 -->
                <div class="car_item_block">
                    <ul class="car_item">
                        <li>
                            <router-link to="./itemView">
                                <img src="${get_img(item.item_id)}" alt="" />
                            </router-link>
                        </li>
                        <li class="item_name">${item.name}</li>
                        <li class="item_id">${item.item_id}</li>
                        <li class="dollars">${item.dollars}</li>
                        <li class="num">
                            <ul class="count">
                                <li><span id="num-decrease" class="num-count">－</span></li>
                                <li><input readonly disabled type="text" class="input-num" id="input-num"
                                        value="${item.num}" /></li>

                                <li><span id="num-jia" class="num-count">＋</span></li>
                            </ul>
                        </li>
                        <li class="total">${item.total}</li>
                        <li class="delete"><i class="fa-regular fa-circle-xmark"></i></li>
                    </ul>
                    <div class="mobile_delete">刪除</div>
                </div>
            </div>

            <!----------加購區------------>
            <div class="more">
                <p>限量加購</p>
                <ul class="more_items">
                    <li>
                        <img src="../assets/image/material/candles.jpg" />
                        <h3 class="item_name">數字蠟燭組</h3>
                        <h3 class="item_id">(任選兩支)</h3>
                        $
                        <p class="dollars">50</p>
                        <button class="moreItem_addCart">
                            <p>加入購物車</p>
                            <!-- <script src="https://cdn.lordicon.com/ritcuqlt.js"></script> -->
                            <lord-icon src="https://cdn.lordicon.com/slkvcfos.json" trigger="loop" delay="1000"
                                colors="primary:#dc9f58,secondary:#dc9f58" style="width: 30px; height: 30px" />
                        </button>
                    </li>
                    <li>
                        <img src="../assets/image/material/plate.jpg" />
                        <h3 class="item_name">雲朵盤叉組</h3>
                        <h3 class="item_id">(一組五人份)</h3>
                        $
                        <p class="dollars">99</p>
                        <button class="moreItem_addCart">
                            <p>加入購物車</p>
                            <lord-icon src="https://cdn.lordicon.com/slkvcfos.json" trigger="loop" delay="1000"
                                colors="primary:#dc9f58,secondary:#dc9f58" style="width: 30px; height: 30px" />
                        </button>
                    </li>
                    <li>
                        <router-link to="./itemView">
                            <img src="../assets/image/items/tart5.jpg" />
                        </router-link>
                        <h3 class="item_name">Pistache tart</h3>
                        <h3 class="item_id">開心果塔</h3>
                        $
                        <p class="dollars">160</p>
                        <button class="moreItem_addCart">
                            <p>加入購物車</p>
                            <lord-icon src="https://cdn.lordicon.com/slkvcfos.json" trigger="loop" delay="1000"
                                colors="primary:#dc9f58,secondary:#dc9f58" style="width: 30px; height: 30px" />
                        </button>
                    </li>
                    <li>
                        <router-link to="./itemView">
                            <img src="../assets/image/items/mousse5.jpg" />
                        </router-link>
                        <h3 class="item_name">Chocolate Cake</h3>
                        <h3 class="item_id">巧克力溜溜球蛋糕</h3>
                        $
                        <p class="dollars">120</p>
                        <button class="moreItem_addCart">
                            <p>加入購物車</p>
                            <lord-icon clas="car_icon" src="https://cdn.lordicon.com/slkvcfos.json" trigger="loop"
                                delay="1000" colors="primary:#dc9f58,secondary:#dc9f58" style="width: 30px; height: 30px" />
                        </button>
                    </li>
                    <li>
                        <router-link to="./itemView"><img src="../assets/image/items/mousse8.jpg" /> </router-link>
                        <h3 class="item_name">Pistache Raspberry Mousse</h3>
                        <h3 class="item_id">開心果覆盆子慕斯</h3>
                        $
                        <p class="dollars">190</p>
                        <button class="moreItem_addCart">
                            <p>加入購物車</p>
                            <!-- <script src="https://cdn.lordicon.com/ritcuqlt.js"></script> -->
                            <lord-icon class="car_icon" src="https://cdn.lordicon.com/slkvcfos.json" trigger="loop"
                                delay="1000" colors="primary:#dc9f58,secondary:#dc9f58" style="width: 30px; height: 30px" />
                        </button>
                    </li>
                </ul>
            </div>

            <!---運送及付款方式/訂單資訊總結--->
            <div class="order_inf">
                <!------左側運送資訊-------->
                <div class="delivery">
                    <p>運送及付款方式</p>
                    <label for=""></label>
                    <div class="pickup">
                        <label for="pickup">取貨方式</label>
                        <select name="pickup" id="">
                            <option>門市自取</option>
                            <option>宅配</option>
                        </select>
                    </div>

                    <div class="pay">
                        <label for="pay">付款方式</label>
                        <select name="pay" id="">
                            <option>信用卡</option>
                            <option>LINE PAY</option>
                            <option>門市現金付款</option>
                        </select>
                    </div>

                    <!------※注意事項※----->
                    <div class="attention">
                        <h3>※注意事項※</h3>
                        <div class="content">
                            <p>※ 冷凍宅配運費一律$170，折扣後滿$1000免運費。</p>
                            <p>※ 我們宅配與黑貓宅急便配合運送，無法指定到貨日期。</p>
                            <p>※ 店面自取時間：週一至週五11:30-19:00</p>
                            <p>※ 請確認購買商品與聯絡資訊正確無誤。</p>
                        </div>
                    </div>
                </div>

                <!------右側訂單資訊-------->
                <div class="check">
                    <p>訂單資訊</p>
                    <div class="money">
                        <div>
                            <p>合計:</p>
                            <p>$ <span id="summary">0</span></p>
                        </div>
                        <div>
                            <p>品項:</p>
                            <p>共 <span id="item_num">0</span> 樣</p>
                        </div>
                        <button>使用優惠券</button>
                        <div>
                            <p>折扣:</p>
                            <p>$ <span id="discount">50</span></p>
                        </div>
                        <div>
                            <p>運費:</p>
                            <p>$ <span id="delivery_fee">0</span></p>
                        </div>

                        <div class="sum">
                            <p>總金額:</p>
                            <p>$ <span id="sum">0</span></p>
                        </div>
                        <div class="buy">
                            <button type="button">確認結帳</button>
                        </div>
                    </div>
                </div>
            </div>

            <!--手機才有的遮罩-->
            <div id="common_mask" v-show="common.isMask" @click="common.toggleMask()"></div>
        </main>
        <FooterView />
    </div>
</template>

<style lang="scss" scoped>
.cart {
    margin: 0 auto;
    max-width: $page-width;
    padding: 0 20px;

    // -------------------- 進度條 --------------------
    .process {
        text-align: center;
        margin: 50px 0;

        .step {
            display: inline-block;
            vertical-align: top;
            max-width: 180px;
            width: 100%;
            margin-left: -3px;
            margin-right: -3px;

            @include pad {
                width: 90px;
            }

            span {
                display: block;
            }

            /* ---------數字部分------ */
            .badge {
                position: relative;
                height: 50px;
                line-height: 50px;

                /*---------中間那條線---------*/
                &:before {
                    content: ' ';
                    background-color: #ccc;
                    height: 2px;
                    width: 100%;
                    position: absolute;
                    left: 0;
                    top: 50%;
                }

                /* ----------圈圈---------- */
                &:after {
                    content: ' ';
                    background-color: #ccc;
                    border-radius: 50%;
                    height: 40px;
                    width: 40px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }

                .text {
                    position: absolute;
                    width: 100%;
                    z-index: 1;
                }
            }

            .badge1 {
                &:after {
                    background-color: $secondary_color;
                }

                &:before {
                    content: ' ';
                    background-color: $secondary_color;
                }
            }

            &:first-child {
                .badge {
                    &:before {
                        left: 50%;
                    }
                }
            }

            &:last-child {
                .badge {
                    &:before {
                        width: 50%;
                        right: 50%;
                    }
                }
            }
        }
    }

    /* --------------------共用標題---------------------- */
    .car,
    .more,
    .delivery,
    .check {
        display: flex;
        flex-direction: column;
        outline: 1px solid #ccc;
        max-width: $page-width;
        margin: 0 auto 30px;

        >p {
            background-color: $primary_color;
            padding: 10px;
            font-weight: 400;
        }
    }

    // --------------------購物車品項--------------------
    .car {

        /* ----------購物車內標題---------- */
        .car_title {
            padding: 15px;
            border-bottom: 1px solid #ccc;
            display: grid;
            grid-template-columns: 1fr 1.5fr 1.5fr 1fr 1fr 1fr 0.6fr;

            @include pad {
                padding: 10px 5px;
                grid-template-columns: 1fr 1.5fr 1.5fr 1.6fr 0.8fr;
            }

            li {
                text-align: center;
                font-weight: 300;

                @include pad {

                    /* 移除標題的「金額」、「刪除」欄位 */
                    &:nth-child(4),
                    &:last-child {
                        display: none;
                    }
                }
            }
        }

        // ----------購物車品項----------
        .car_item {
            // outline: 1px solid rgb(205, 0, 0);
            padding: 15px;
            display: grid;
            grid-template-columns: 1fr 1.5fr 1.5fr 1fr 1fr 1fr 0.6fr;
            border-bottom: 1px solid #ccc;
            opacity: 1;
            transition: all 1s;

            @include pad {
                padding: 20px 5px 5px 5px;
                border-bottom: 0;
                grid-template-columns: 1fr 1.5fr 1.5fr 1.6fr 0.8fr;
            }

            li {
                @include flexbox-center;
                // width: 100%;
                // white-space: pre-wrap;
                // text-align: center;

                img {
                    width: 100%;

                    &:hover {
                        border: 2px solid $secondary_color;
                    }
                }

                /* ----------數量加減--------- */
                .count {
                    @include flexbox-center;
                    border: 1px solid #ccc;
                    border-radius: 2px;

                    .num-count {
                        width: 25px;
                        height: 25px;
                        cursor: pointer;
                        text-align: center;
                        line-height: 25px;

                        &:hover {
                            background-color: $secondary_color;
                        }
                    }

                    .input-num {
                        width: 25px;
                        height: 25px;
                        cursor: pointer;
                        text-align: center;
                        line-height: 25px;

                        @include pad {
                            width: 30px;
                        }
                    }

                    #num-decrease {
                        border-radius: 2px 0 0 2px;
                        border-right: 1px solid #ccc;
                    }

                    #num-jia {
                        border-radius: 0 2px 2px 0;
                        border-left: 1px solid #ccc;
                    }
                }

                /* -----------刪除------------ */
                i.fa-circle-xmark {
                    cursor: pointer;
                }

                @include pad {

                    /* 移除內容的「金額」、「刪除」欄位 */
                    &:nth-child(4),
                    &:nth-child(7) {
                        display: none;
                    }
                }
            }
        }

        .car_item.fade_out {
            opacity: 0;
        }

        .mobile_delete {
            display: none;

            @include pad {
                display: flex;
                flex-direction: column;
                background: #ececec;
                line-height: 30px;
                text-align: center;
                border-bottom: 1px solid #ccc;
                cursor: pointer;
            }
        }
    }

    /* ---------------------加購---------------------- */
    .more_items {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        padding: 10px;

        @include pad {
            grid-template-columns: 1fr 1fr 1fr;
            padding: 5px;
        }

        li {
            margin: 10px;
            text-align: center;

            @include pad {
                margin: 5px;
                margin-bottom: 20px;
            }

            img {
                display: flex;
                width: 100%;

                &:hover {
                    border: 2px solid $secondary_color;
                }
            }

            .item_name {
                // outline: 2px solid rgb(47, 0, 255);
                padding: 5px;
                height: 50px;
                @include flexbox-center;
            }

            .item_id {
                color: $secondary_color;
                padding: 5px 0;

                @include pad {
                    padding: 5px;
                }
            }

            p {
                display: inline-block;
                text-align: center;
                padding: 5px;
            }

            button {
                border: 1px solid $secondary_color;
                background-color: white;
                color: $secondary_color;
                margin: 0 auto;
                @include flexbox-center;
                border-radius: 5px;

                &:hover {
                    background-color: $primary_color;
                }

                @include pad {
                    padding: 5px;
                    // flex-direction: column;
                }
            }
        }
    }
}

/* ---------------------訂單資訊---------------------- */
.order_inf {
    // outline: 2px solid rgb(47, 0, 255);
    max-width: $page-width;
    margin: auto;
    display: flex;
    justify-content: space-between;
    gap: 30px;

    @include pad {
        flex-direction: column;
        gap: 0;
    }

    /* ----------左側運送資訊----------- */
    .delivery {
        display: flex;

        @include pad {
            width: 100%;
        }

        .pickup,
        .pay {
            display: flex;
            flex-direction: column;
            padding: 15px;

            @include pad {
                padding: 10px;
            }

            select {
                margin: 15px 0;
                height: 40px;
                font-family: inherit;
                font-weight: inherit;
                font-size: inherit;
                border: 1px solid #ccc;

                &:focus-visible {
                    outline: 2px solid $secondary_color;
                    border-radius: 2px;
                }

                @include pad {
                    margin-top: 10px;
                }

                option {
                    font-weight: inherit;
                }
            }
        }

        .attention {
            display: flex;
            flex-direction: column;
            padding: 15px;

            @include pad {
                padding: 10px;
            }

            .content {
                background-color: $primary_color;
                border: 1px solid #ccc;
                padding: 15px;
                margin-top: 15px;

                @include pad {
                    padding: 10px;
                    display: flex;
                    flex-direction: column;
                    line-height: 1.5;
                }
            }
        }
    }

    /* ----------右側訂單資訊----------- */
    .check {
        display: flex;
        width: 50%;

        @include pad {
            width: 100%;
        }

        .money {
            padding: 15px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            @include pad {
                padding: 10px;
            }

            >div {
                display: flex;
                justify-content: space-between;

                p {
                    line-height: 3;
                }
            }

            button {
                background-color: $primary_color;
                border-radius: 5px;
                border: 1px solid #ccc;
                padding: 5px;
                width: 30%;
            }

            .sum {
                border-bottom: 2px solid #ccc;
            }

            .buy>button {
                background-color: $secondary_color;
                padding: 15px;
                line-height: 2rem;
                text-align: center;
                font-size: 1.2rem;
                font-weight: 400;
                box-shadow: 0 0 5px #ccc;
                letter-spacing: 12px;
                width: 100%;

                &:hover {
                    color: white;
                }

                @include pad {
                    margin-top: 10px;
                }
            }
        }
    }
}
</style>
