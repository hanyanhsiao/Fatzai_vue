<script setup>
import HeaderView from '../components/HeaderView.vue'
import FooterView from '../components/FooterView.vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useCommonStore } from '@/stores/common'

const common = useCommonStore()

const calendarOptions = {
    plugins: [dayGridPlugin],
    // initialView: 'dayGridMonth',
    showNonCurrentDates: false,
    fixedWeekCount: false,
    events: [
        {
            title: '因大訂單，公休兩日',
            start: '2023-06-15',
            end: '2023-06-17',
            backgroundColor: '#606fc0',
            borderColor: '#606fc0'
        },
        {
            title: '華山市集',
            start: '2023-06-24',
            end: '2023-06-26',
            backgroundColor: '#DC9F58',
            borderColor: '#DC9F58'
        },
        {
            title: '員工旅遊，公休三日',
            start: '2023-07-09',
            end: '2023-07-12',
            backgroundColor: 'rgb(255, 146, 155)',
            borderColor: 'rgb(255, 146, 155)'
        }
    ]
}
</script>

<template>
    <div class="news_page">
        <HeaderView />
        <main>
            <!-- 最新消息標題 -->
            <div class="news">
                <!-- 背景文字 -->
                <h1>NEWS</h1>
                <!-- 標題文字 -->
                <div class="news_title">
                    <p>最 新 消 息</p>
                </div>
            </div>

            <!-- 最新消息區塊 -->
            <div class="new_block" data-aos="fade-up" data-aos-duration="1000">
                <!-- 最新消息區塊_1 -->
                <div class="each_news">
                    <div class="number">1</div>
                    <img src="../assets/image/material/cupcake(2).jpg" alt="" />
                    <div class="news_text">
                        <h3>3/10起 杯子蛋糕新上架</h3>
                        <p>萬眾期盼的杯子蛋糕來啦， 口味應有盡有你想的到想不到的都有， 雖然杯子蛋糕屬於美式甜點，但我們用法式作法，
                            不使用過多的奶油霜，吃起來清爽不膩，經典的巧克力蛋糕配上薄荷鮮奶油，沁涼又香甜的口感，還有其他許多口味搭配，您一定要試試！</p>
                    </div>
                    <div class="btn_block">
                        <button>
                            <router-link :to="{ path: '/ItemList', query: { product: 'CupcakeItems' } }">立即購買</router-link>
                        </button>
                    </div>
                </div>

                <!-- 最新消息區塊_2 -->
                <div class="each_news">
                    <div class="number">2</div>
                    <img src="../assets/image/material/Strawberry.png" alt="" />
                    <div class="news_text">
                        <h3>1/1 ~ 1/31 草莓季開跑啦</h3>
                        <p>草莓季節到了！如果你是甜點愛好者，那麼你絕對不能錯過，草莓因其美味和鮮艷的顏色而倍受喜愛，無論你喜歡哪種甜點，草莓總是可以給你帶來美好的口感和愉悅的體驗，這次除了歷年經典草莓塔外，還多了草莓杯子蛋糕、愛心形狀的草莓馬卡龍，以及送禮看起來最有面子的6吋草莓夏洛特，不要猶豫，現在就去品嚐一個草莓甜點吧！
                        </p>
                    </div>
                    <div class="btn_block">
                        <button>
                            <!-- <a href="./shop_list_all.html?product=season_tab">立即購買</a> -->
                            <router-link :to="{ path: '/ItemList', query: { product: 'SeasonItems' } }">立即購買</router-link>
                        </button>
                    </div>
                </div>

                <!-- 最新消息區塊_3 -->
                <div class="each_news">
                    <div class="number">3</div>
                    <img src="../assets/image/material/News_Matcha.png" alt="" />
                    <div class="news_text">
                        <h3>(已結束) 抹茶季開跑啦</h3>
                        <p>萬眾期盼的抹茶季來啦， 綠油油的一字排開！ 甜點師使用巧手將不一樣的茶韻層次， 層層堆疊融入各式甜點， 每一口都充滿濃濃的抹茶享受， 春天就是抹茶迷的季節，當然要大口吃抹茶！</p>
                    </div>
                    <div class="btn_block_close">
                        <button disabled>立即購買</button>
                    </div>
                </div>
            </div>

            <!-- 分隔線 -->
            <hr class="hr" />

            <!-- 日曆 -->
            <div class="calendar_block">
                <h1>本 月 行 事 曆</h1>
                <FullCalendar :options="calendarOptions" id="calendar" />
            </div>

            <!--手機才有的遮罩-->
            <div id="common_mask" v-show="common.isMask" @click="common.toggleMask()"></div>
        </main>
        <FooterView />
    </div>
</template>

<style lang="scss">
.news_page {

    // 最新消息標題
    .news {
        // outline: 2px solid rgb(0, 0, 0);
        height: 250px;
        background-color: $primary_color;
        display: flex;
        position: relative;
        justify-content: center;

        h1 {
            font-size: 10rem;
            font-weight: 900;
            justify-content: center;
            align-self: end;
            font-family: 'Orelega', serif;
            color: white;
            overflow: hidden;

            @include mobile {
                font-size: 8rem;
            }
        }

        .news_title {
            position: absolute;
            top: 210px;
            padding: 10px;
            font-size: 1.5rem;
            border: 1px solid $secondary_color;
            animation: clippath 1.5s ease forwards;

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

    // 新聞列表
    .new_block {
        /* outline: 2px solid saddlebrown; */
        padding-top: 100px;

        .each_news {
            border: 1px solid $secondary_color;
            margin: 0 auto;
            max-width: 650px;
            position: relative;
            display: flex;
            justify-content: space-between;
            margin-bottom: 50px;

            @include pad {
                margin: 0 20px;
                flex-direction: column;
                justify-content: center;
                margin-bottom: 50px;
            }

            .number {
                width: 40px;
                height: 40px;
                background-color: $primary_color;
                text-align: center;
                line-height: 40px;
                position: absolute;
                left: 20px;
                top: -20px;
            }

            img {
                width: 200px;
                position: absolute;
                right: 20px;
                top: -20px;

                @include pad {
                    right: 70px;
                }
            }

            .news_text {
                width: 63%;
                height: 100%;
                padding: 40px 20px 20px;
                text-align: justify;

                @include pad {
                    width: 100%;
                    padding: 130px 20px 20px;
                }

                h3 {
                    border-bottom: 2px solid $secondary_color;
                    padding-bottom: 10px;
                    color: $secondary_color;
                    font-weight: 400;
                }

                p {
                    padding-top: 10px;
                    // line-height: 1.5;
                }
            }

            .btn_block {
                display: flex;
                align-items: end;
                margin: 0 60px 20px 0;

                @include pad {
                    justify-content: center;
                    margin: 0 0 20px 0;
                }

                button {
                    height: 50px;
                    background-color: $primary_color;
                    text-align: center;
                    box-shadow: 2px 2px 2px $secondary_color;
                    border-radius: 5px;
                    padding: 0 15px;

                    &:hover {
                        color: $secondary_color;
                        transform: scale(1.1);
                    }

                    // a {
                    //   line-height: 50px;
                    //   text-align: center;
                    //   display: block;
                    //   width: 100%;
                    //   padding: 0 15px;
                    // }
                }
            }

            .btn_block_close {
                display: flex;
                align-items: end;
                margin: 0 60px 20px 0;

                @include pad {
                    justify-content: center;
                    margin: 0 0 20px 0;
                }

                button {
                    border-radius: 5px;
                    height: 50px;
                    background-color: #cecece;
                    box-shadow: 2px 2px 2px #a5a5a5;
                    color: white;
                    padding: 0 15px;
                    padding: 0 15px;

                    &:hover {
                        cursor: default;
                    }
                }
            }
        }
    }

    // 日曆
    .calendar_block {
        // outline: 1px solid rgb(255, 0, 191);
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='Artboard-5' fill='%23ffead2' fill-opacity='0.5' fill-rule='nonzero'%3E%3Cpath d='M6 18h12V6H6v12zM4 4h16v16H4V4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        padding: 50px;

        h1 {
            margin: 0 auto;
            background-color: $primary_color;
            width: 300px;
            line-height: 50px;
            text-align: center;
            margin-bottom: 50px;
            border: 1px solid $secondary_color;
        }

        #calendar {
            /* outline: 1px solid rgb(255, 0, 191); */
            background: #ffffff;
            max-width: 800px;
            margin: 0 auto;
        }

        /* 日曆顏色 */
        .fc .fc-button-primary,
        .fc .fc-button-primary:disabled {
            background-color: $primary_color;
            border-color: $secondary_color;
            color: $secondary_color;
        }

        .fc .fc-button-primary:hover,
        .fc .fc-button-primary:not(:disabled):active {
            background-color: $secondary_color;
            border-color: $secondary_color;
            color: white;
        }

        .fc .fc-button-primary:focus,
        .fc .fc-button:focus {
            border-color: $secondary_color;
        }

        // :root {
        //   --fc-border-color: $secondary_color;
        //   --fc-today-bg-color: $primary_color;
        // }

        .fc-daygrid-event {
            border-radius: 0;
            padding: 5px;
        }
    }
}
</style>
