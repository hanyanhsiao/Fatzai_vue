<script setup>
import HeaderView from '../components/HeaderView.vue'
import FooterView from '../components/FooterView.vue'
import { useCommonStore } from '@/stores/common'

const common = useCommonStore()
</script>

<template>
    <div class="about">
        <HeaderView />
        <main>
            <section>
                <div class="left"></div>
                <div class="center" data-aos="fade-up" data-aos-duration="1000">
                    <img src="../assets/image/material/Ellipse12.png" alt="" />
                </div>
                <div class="right">
                    <p data-aos="fade-up" data-aos-duration="1000">
                        走過飯店、甜點店、米其林餐廳繞了一圈，決定以肥宅(Fatzai)之名打造自己的甜點工作室，嚴選高級食材，獨特風味搭配，帶給您最道地的法式甜點 。</p>
                </div>
            </section>

            <h1 class="title" data-aos="fade-up" data-aos-duration="800">嚴選食材</h1>
            <ul class="ingredients">
                <li data-aos="fade-right" data-aos-duration="1000">
                    <img src="../assets/image/material/flour.jpg" alt="" />
                    <div class="text">
                        <h1>Nisshin Violet Low Protein Flour</h1>
                        <p>紫羅蘭麵粉，日本百年麵粉廠日清製粉最具代表性的低筋麵粉，</p>
                        <p>口感輕、無添加物、具蓬鬆感及化口性佳，保濕度高，口感輕柔細緻。</p>
                        <!-- 手機版文字 -->
                        <h2 class="mobile_p">日本百年麵粉廠日清製粉最具代表性的低筋麵粉，口感輕、無添加物、具蓬鬆感及化口性佳，保濕度高，口感輕柔細緻。</h2>
                        <!-- 手機版文字 -->
                    </div>
                </li>
                <li data-aos="fade-left" data-aos-duration="800">
                    <div class="text">
                        <h1>Valrhona Chocolate - GUANAJA 70%</h1>
                        <p>我們採用瓜納拉70%巧克力，具有非常出眾的苦甜味，</p>
                        <p>與溫和的花果香緊密結合，是一種有絕妙風味的純苦巧克力</p>
                        <p>品嚐後其獨特、濃郁又強烈之風味會在口中久久留香。</p>
                        <!-- 手機版文字 -->
                        <h2 class="mobile_p">我們採用瓜納拉70%巧克力，具有非常出眾的苦甜味並與溫和的花果香緊密結合，是一種有絕妙風味的純苦巧克力，品嚐後其獨特、濃郁又強烈之風味會在口中久久留香
                        </h2>
                        <!-- 手機版文字 -->
                    </div>
                    <img src="../assets/image/material/chocolate2.png" alt="" />
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                    <img src="../assets/image/material/pistache(2).png" alt="" />
                    <div class="text">
                        <h1>Corsiglia Pistachio Paste</h1>
                        <p>嚴選義大利西西里島開心果，以100%開心果製成的開心果醬，</p>
                        <p>味道濃郁、滑順，不添加任何色素，吃起來香濃可口開心一整天。</p>
                        <!-- 手機版文字 -->
                        <h2 class="mobile_p">嚴選義大利西西里島開心果，以100%開心果製成的開心果醬， 味道濃郁、滑順，不添加任何色素，吃起來香濃可口開心一整天。</h2>
                        <!-- 手機版文字 -->
                    </div>
                </li>
                <li data-aos="fade-left" data-aos-duration="1000">
                    <div class="text">
                        <h1>CAS嚴選鮮雞蛋</h1>
                        <p>CAS蛋品為國產洗選分級新鮮雞蛋，經適當加工處理製得之優良產品，</p>
                        <p>是在高度自動化蛋雞場內，以良好餵飼及蛋品收穫處理系統，</p>
                        <p>與嚴格的飼料品質管制、衛生管理所生產的帶殼鮮蛋。</p>
                        <!-- 手機版文字 -->
                        <h2 class="mobile_p">
                            CAS蛋品為國產洗選分級新鮮雞蛋，經適當加工處理製得之優良產品，是在高度自動化蛋雞場內，以良好餵飼及蛋品收穫處理系統，嚴格的飼料品質管制、衛生管理所生產的帶殼鮮蛋。</h2>
                        <!-- 手機版文字 -->
                    </div>
                    <img src="../assets/image/material/eggs.png" alt="" />
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                    <img src="../assets/image/material/News_Matcha.png" alt="" />
                    <div class="text">
                        <h1>Marukyu Koyamaen Watatake Matcha Powder</h1>
                        <p>我們使用若竹，是小山園系列中最適合做烘焙的一款抹茶粉，</p>
                        <p>口感層次上甘甜與澀味完美平衡，抹茶風味濃郁香醇，</p>
                        <p>堪比茶道用抹茶，有清新高雅，均衡舒服的感覺。</p>
                        <!-- 手機版文字 -->
                        <h2 class="mobile_p">我們使用若竹，是小山園系列中最適合做烘焙的一款抹茶粉，口感層次上甘甜與澀味完美平衡，抹茶風味濃郁香醇，堪比茶道用抹茶，有清新高雅，均衡舒服的感覺。</h2>
                        <!-- 手機版文字 -->
                    </div>
                </li>
            </ul>
            <!--手機才有的遮罩-->
            <div id="common_mask" v-show="common.isMask" @click="common.toggleMask()"></div>
        </main>
        <FooterView />
    </div>
</template>

<style lang="scss" scoped>
//  --------------上方圖片-----------------
section {
    // border: 2px solid saddlebrown;
    max-width: $page-width;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    position: relative;
    margin-bottom: 50px;

    @include pad {
        overflow: hidden;
        position: relative;
        margin-bottom: 0;
    }

    .left {
        width: 550px;
        height: 500px;
        background-image: url(../assets/image/material/Choux.png);
        background-position: left top;
        background-repeat: no-repeat;
        background-size: contain;
        clip-path: circle(71.1% at 28% 17%);

        @include mobile {
            clip-path: none;
            // height: 450px;
        }
    }

    .center {
        position: absolute;
        left: 38%;
        top: 40%;
        width: 300px;

        @include pad {
            display: none;
        }

        img {
            width: 100%;
        }
    }

    .right {
        border: 2px solid rgb(255, 255, 255);
        box-shadow: 0 0 0 10px #ffead2b8;
        position: absolute;
        right: 8%;
        top: 8%;
        width: 350px;
        height: 350px;
        background: #ffead2b8;
        border-radius: 50%;
        @include flexbox-center;

        @include mobile {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 300px;
            height: 300px;
        }

        p {
            width: 240px;
            line-height: 2;
            padding: 5px;

            @include mobile {
                width: 200px;
                line-height: 1.8;
            }
        }
    }
}

.ingredients {
    max-width: $page-width;
    margin: 0 auto;

    @include pad {
        padding: 20px;
        overflow: hidden;
    }

    li {
        // outline: 2px solid rgb(0, 0, 0);
        height: 200px;
        display: flex;
        justify-content: space-around;
        margin-bottom: 50px;

        @include pad {
            border-radius: 5px;
            /* border: 2px solid #CCC; */
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0;
            overflow: hidden;
            padding: 10px 0;
            border-bottom: 1px solid $primary_color;
        }

        img {
            border-radius: 50% 30% 50% 40%;

            @include pad {
                border-radius: 2px;
                width: 60%;
            }
        }

        .text {
            line-height: 2;

            @include pad {
                text-align: center;
                padding: 10px;
            }

            h1 {
                background: $primary_color;
                font-size: 1.3rem;
                padding: 0 20px;
                font-weight: 300;

                @include pad {
                    font-weight: 500;
                    background: $primary_color;
                    font-size: 1.3rem;
                    padding: 10px 20px;
                    line-height: 1.5;
                    text-align: center;
                }
            }

            p {
                @include pad {
                    display: none;
                }
            }

            .mobile_p {
                display: none;

                @include pad {
                    display: block;
                    text-align: justify;
                }
            }
        }

        &:nth-child(odd) {
            @include pad {
                flex-direction: column-reverse;
            }

            h1 {
                background: linear-gradient(to right, $primary_color, #ffffff);
                border-radius: 15% 90% 70% 20% / 50% 90% 70% 70%;

                @include pad {
                    background: 0;
                    border-radius: 0;
                    color: $secondary_color;
                    text-align: center;
                }
            }
        }

        &:nth-child(even) {
            h1 {
                background: linear-gradient(to left, $primary_color, #ffffff);
                border-radius: 90% 40% 15% 70%/ 90% 50% 80% 80%;
                text-align: end;

                @include pad {
                    background: 0;
                    border-radius: 0;
                    color: $secondary_color;
                    text-align: center;
                }
            }
        }
    }
}

//  --------------下方嚴選食材-----------------
</style>
