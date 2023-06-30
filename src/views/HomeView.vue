<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import HeaderView from '../components/HeaderView.vue'
import FooterView from '../components/FooterView.vue'
import ItemCarousel from '../components/ItemCarousel.vue'
import FadeBanner from '../components/FadeBanner.vue'
import { useCommonStore } from '@/stores/common'
import { onMounted } from 'vue'


const common = useCommonStore()

onMounted(() => {
    // --常見問題手風琴--
    var acc = document.getElementsByClassName('accordion')
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function () {
            this.classList.toggle('active')
            // 獲取當前元素同層的下一個元素，<div class="faq_answer">
            var panel = this.nextElementSibling
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px'
            }
        })
    }
})

</script>

<template>
    <HeaderView />
    <div class="wrapper">
        <main>
            <FadeBanner />
            <!-- 主要區域 -->
            <section class="main">
                <!-- 關於肥宅 -->
                <div class="aboutMe">
                    <div class="content">
                        <div class="square">
                            <p data-aos="fade-up" data-aos-duration="1000">
                                歡迎來到<strong>Fatzai Pâtisserie !</strong><br />
                                我們是一家專業製作法式甜點的店鋪，所有甜點均由經驗豐富的法式甜點師傅親手製作。我們以最優質的食材和獨特的製作技巧，打造出味道獨特、外形精美的甜點。在這裡，您可以品嚐到各種經典的法式甜點，如馬卡龍、泡芙、小塔等，還有各種創意糕點等您來發掘。無論是單獨享用或與親友共享，我們獨特的甜點絕對會給您留下難忘的味覺體驗。
                            </p>
                            <div class="about_img">
                                <img src="../assets/image/items/macaron1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 最新消息 -->
                <div class="news">
                    <h1 class="title" data-aos="fade-up" data-aos-duration="1000">最新消息</h1>
                    <ul data-aos="fade-up" data-aos-duration="1000">
                        <!-- 最新消息1 -->
                        <li>
                            <div class="news_img">
                                <router-link to="/NewsView">
                                    <img src="../assets/image/items/cupcake2.jpg" alt="" />
                                </router-link>
                            </div>
                            <h3>－ 杯子蛋糕新上架－</h3>
                            <h3 class="date">3/10開始販售</h3>
                            <p>萬眾期盼的杯子蛋糕來啦， 口味應有盡有你想的到想不到的都有， 雖然杯子蛋糕屬於美式甜點，但我們用法式作法， 不使用過多的奶油霜， 快來購買吧！</p>
                        </li>

                        <!-- 最新消息2 -->
                        <li>
                            <div class="news_img_block">
                                <router-link to="/NewsView">
                                    <img src="../assets/image/material/Strawberry2.png" alt="" />
                                </router-link>
                            </div>
                            <h3>－ 草莓季開跑啦 －</h3>
                            <h3 class="date">1/1 ~ 1/31</h3>
                            <p>草莓季節到了！如果你是甜點愛好者，那麼你絕對不能錯過，這次我們推出了許多意想不到的組合，快點擊查看更多草莓季產品介紹！</p>
                        </li>

                        <!-- 最新消息3 -->
                        <li>
                            <div class="news_img">
                                <router-link to="/NewsView">
                                    <img src="../assets/image/material/Matcha2-2.jpg" alt="" />
                                </router-link>
                            </div>
                            <h3>－抹茶季開跑啦 －</h3>
                            <h3>(已結束)</h3>
                            <p>萬眾期盼的抹茶季來啦， 綠油油的一字排開！ 甜點師使用巧手將不一樣的茶韻層次， 融入各式甜點， 每一口都充滿濃濃的抹茶享受， 春天就是抹茶迷的季節，當然要大口吃抹茶！</p>
                        </li>
                    </ul>
                </div>

                <!-- 熱門商品 -->
                <div class="hot_items">
                    <h1 class="title">熱門商品</h1>
                    <ItemCarousel />
                </div>

                <!-- 中間背景圖 -->
                <div class="center_bg">
                    <div class="center_text">
                        <p class="p1">F A T Z A I</p>
                        <p class="p2">Pâtisserie</p>
                        <span></span>
                        <p>典雅 / 精緻 / 美味</p>
                    </div>
                </div>

                <!-- 常見問題 -->
                <div class="faq">
                    <h1 class="title">常見問題</h1>
                    <ul data-aos="fade-up" data-aos-duration="1000">
                        <lord-icon class="star1" src="https://cdn.lordicon.com/whttoese.json" trigger="loop" delay="1500"
                            colors="primary:#ffead2,secondary:#f4dc9c" scale="35" style="width: 80px; height: 80px" />
                        <li>
                            <button class="accordion">
                                <h3>Q1: 蛋糕需要幾天前預訂 ?</h3>
                                <i class="fa-solid fa-chevron-right"></i>
                            </button>
                            <div class="faq_answer">
                                <p>因法式甜點做工繁複，備料需要較長時間，請至少一周前預訂。</p>
                            </div>
                        </li>
                        <li>
                            <button class="accordion">
                                <h3>Q2: 蛋糕保存方式與期限 ?</h3>
                                <i class="fa-solid fa-chevron-right"></i>
                            </button>
                            <div class="faq_answer">
                                <p>為確保新鮮及品質，請盡速食用，室溫請勿放置超過20分鐘，冷藏保存以3天為限。</p>
                            </div>
                        </li>
                        <li>
                            <button class="accordion">
                                <h3>Q3: 運費如何計算 ?</h3>
                                <i class="fa-solid fa-chevron-right"></i>
                            </button>
                            <div class="faq_answer">
                                <p>冷凍宅配運費一律$170，消費滿$1000免運費。</p>
                            </div>
                        </li>
                        <li>
                            <button class="accordion">
                                <h3>Q4: 你們的甜點是否含有堅果或其他常見的過敏原？</h3>
                                <i class="fa-solid fa-chevron-right"></i>
                            </button>
                            <div class="faq_answer">
                                <p>我們的甜點製作過程中可能會接觸到堅果或其他常見的過敏原。如果您對某些成分過敏，請在訂購前與我們的客服人員聯繫。</p>
                            </div>
                        </li>
                        <li>
                            <button class="accordion">
                                <h3>Q5: 你們的甜點有哪些口味可以選擇？</h3>
                                <i class="fa-solid fa-chevron-right"></i>
                            </button>
                            <div class="faq_answer">
                                <p>我們提供多種口味的甜點，包括巧克力、香草、草莓、開心果等等。您可以在我們的網站上查看我們所有的口味選擇。</p>
                            </div>
                        </li>
                        <lord-icon class="star2" src="https://cdn.lordicon.com/whttoese.json" trigger="loop" delay="1500"
                            colors="primary:#ffead2,secondary:#f4dc9c" scale="35" style="width: 80px; height: 80px" />
                    </ul>
                </div>

                <!--門市資訊 -->
                <div class="information">
                    <h1 class="title">門市資訊</h1>
                    <div class="map">
                        <iframe data-aos="fade-up" data-aos-duration="1000"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6823.0712499632755!2d121.50920377967074!3d25.054560016644665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a91146436021%3A0x6dafa0aee6af38bf!2z5aSn56i75Z-V56K86aCt6LKo5quD5biC6ZuG!5e0!3m2!1szh-TW!2stw!4v1678105561531!5m2!1szh-TW!2stw"
                            width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div class="detail" data-aos="fade-up" data-aos-duration="1000">
                            <h1>FATZAI Pâtisserie</h1>
                            <p>營業時間 : 週一至週五 11:30-19:30</p>
                            <p>最後取貨時間 : 週一至週五 19:00</p>
                            <p>聯絡電話 : 02-7321-4930</p>
                            <p>門市地址 : 108台北市萬華區西寧南路123號</p>
                        </div>
                    </div>
                </div>
            </section>
            <!--手機才有的遮罩-->
            <div id="common_mask" v-show="common.isMask" @click="common.toggleMask()"></div>
        </main>
    </div>
    <FooterView />
</template>

<style lang="scss" scoped>
//  -------------關於肥宅---------------
.aboutMe {
    background-image: url(../assets/image/material/about_bg.png);
    background-repeat: no-repeat;
    background-size: cover;

    @include pad {
        background-image: url(../assets/image/items/macaron1.jpg);
        background-position: center;
        // background-repeat: no-repeat;
        // background-size: cover;
    }

    .content {
        margin: 0 auto;
        max-width: $page-width;
        display: flex;
        justify-content: end;
        position: relative;

        @include pad {
            justify-content: center;
        }

        .square {
            margin: 100px 200px 100px 0;
            max-width: 400px;
            background-color: $third_color;
            border: 2px solid $fourth_color;
            box-shadow: 0 0 0 20px $third_color;
            padding: 25px;
            padding-left: 50px;
            position: relative;

            @include pad {
                margin: 50px 50px 150px;
                background-color: #ffffffde;
                box-shadow: 0 0 0 0 transparent;
                padding: 20px;
                border: 0;
            }

            strong {
                font-weight: 600;
                color: $secondary_color;
            }

            p {
                line-height: 1.8;
                text-align: justify;
                letter-spacing: 1px;

                @include pad {
                    line-height: 2;
                }
            }

            .about_img {
                max-width: 280px;
                position: absolute;
                top: 30px;
                left: -250px;

                @include pad {
                    display: none;
                }

                img {
                    width: 100%;
                }
            }
        }
    }
}

// -------------最新消息----------------
.news {
    //  border: 4px solid rgb(247, 0, 255);
    background-color: $primary_color;
    padding: 50px 0;

    @include pad {
        max-width: auto;
        padding: 20px;
    }

    ul {
        max-width: $page-width;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        padding: 0 50px;
        max-width: auto;

        @include pad {
            max-width: auto;
            padding: 0;
            justify-content: space-between;
            flex-direction: column;
        }

        li {
            padding: 0 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-basis: 0;
            flex-grow: 1;

            @include pad {
                padding: 10px 0;
                flex-direction: row;
            }

            &:nth-last-child(2) {
                border-left: 1px solid $bg_color;
                border-right: 1px solid $bg_color;

                @include pad {
                    border-left: 0;
                    border-right: 0;
                    border-top: 1px solid $bg_color;
                    border-bottom: 1px solid $bg_color;
                }
            }

            a {
                display: block;
                width: 150px;
                height: 150px;
                border-radius: 50%;

                @include pad {
                    width: 100px;
                    height: 100px;
                }

                img {
                    display: block;
                    height: 100%;
                    margin-right: 100px;
                    border-radius: 50%;
                    margin-bottom: 20px;
                    padding: 8px;
                    background-color: $primary_color;

                    @include pad {
                        margin-bottom: 10px;
                        padding: 5px;
                    }

                    &:hover {
                        border: 2px solid $secondary_color;
                    }
                }
            }

            h3 {
                text-align: center;
                padding: 10px 0;
                font-weight: 400;
                color: $secondary_color;

                @include pad {
                    writing-mode: vertical-lr;
                    padding: 10px;
                }
            }

            p {
                padding: 10px;
                text-indent: 2em;
                letter-spacing: 1px;
            }
        }
    }
}

// --------------熱門商品---------------
.hot_items {
    // outline: 2px solid rgb(255, 0, 0);
    display: block;
    max-width: $page-width;
    overflow: hidden;
    margin: 0 auto;
    padding: 50px 0;
    background-color: $bg_color;
}

// --------------中間背景圖-------------
.center_bg {
    /* outline: 2px solid #000000; */
    max-width: auto;
    background-image: url(../assets//image/material/index_bgi.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;

    height: 450px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @include pad {
        background-image: url();
        height: 300px;

        &::after {
            content: '';
            position: fixed;
            top: 80px;
            height: 100vh;
            left: 0;
            right: 0;
            z-index: -1;
            background: url(../assets/image/material/mobile_bg.jpg) center center;
            background-size: cover;
        }
    }

    .center_text {
        background-color: #ffffff90;
        width: 40%;
        padding: 50px;

        @include pad {
            width: 70vw;
            padding: 30px;
            text-align: center;
        }

        /* border-radius: 5px; */
        p {
            text-align: center;
            // font-size: 1.5rem;
            white-space: pre;
            font-weight: 300;
        }

        .p1 {
            font-size: 1.5rem;
        }

        span {
            display: block;
            width: 0%;
            border: 0 solid $secondary_color;
            margin: auto;
            transition: 1s;

            @include pad {
                width: 100%;
                border: 1px solid $secondary_color;
                margin: 20px auto;
            }
        }
    }

    &:hover {
        .center_text span {
            width: 100%;
            margin: 20px auto;
            border: 1px solid $secondary_color;
        }
    }
}

// --------------常見問題---------------
.faq {
    margin: 0 auto;
    padding: 50px 0;
    max-width: $page-width;
    background-color: $bg_color;

    ul {
        /* outline: 1px solid #000000; */
        position: relative;

        .star1 {
            position: absolute;
            top: 0;
            left: 0;

            @include pad {
                display: none;
            }
        }

        .star2 {
            position: absolute;
            right: 0;
            bottom: 0;

            @include pad {
                display: none;
            }
        }

        li {
            margin-bottom: 30px;

            button {
                margin: 0 auto;
                padding: 5px 10px;
                width: 60%;
                display: flex;
                justify-content: space-between;
                background-color: $primary_color;
                transition: 0.4s;
                border: 2px solid $bg_color;
                border-right: 0;
                box-shadow: 0 0 0 5px $primary_color;
                text-align: start;

                @include pad {
                    width: 80%;
                }

                i {
                    transition: 0.3s;
                    padding-top: 5px;
                    color: $secondary_color;
                }
            }

            .active i {
                transform: rotate(90deg);
            }

            .faq_answer {
                margin: 0 auto;
                padding: 0 10px;
                line-height: 1.5;
                text-align: justify;
                max-height: 0;
                width: 60%;
                overflow: hidden;
                transition: max-height 0.2s ease-out;
                box-shadow: 0 0 0 5px $primary_color;

                @include pad {
                    width: 80%;
                }

                p {
                    margin: 12px 0;
                    letter-spacing: 1px;
                }
            }
        }
    }
}

/*--------------地圖&營業時間----------------*/
.information {
    /* outline: 2px solid black; */
    margin: 0 auto;
    padding: 50px 0;
    background-color: $bg_color;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='Artboard-5' fill='%23ffead2' fill-opacity='0.5' fill-rule='nonzero'%3E%3Cpath d='M6 18h12V6H6v12zM4 4h16v16H4V4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

    .map {
        max-width: $page-width;
        margin: 0 auto;
        display: flex;
        justify-content: center;

        @include pad {
            flex-direction: column;
            padding: 0 20px;
        }

        iframe {
            height: 200px;
            width: 500px;

            @include pad {
                width: auto;
                margin-bottom: 50px;
            }
        }

        .detail {
            margin-left: 50px;
            text-align: start;

            @include pad {
                margin-left: 0;
                text-align: center;
                margin: 0 auto;
            }

            h1 {
                font-size: 2rem;
                font-weight: 500;
                color: $secondary_color;
                margin-bottom: 20px;
            }

            p {
                line-height: 2;

                @include pad {
                    text-align: center;
                }
            }
        }
    }
}
</style>
