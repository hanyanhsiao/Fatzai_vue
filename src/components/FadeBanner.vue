<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectFade, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
const modules = [EffectFade, Autoplay]
const fade = 'fade'
// const fadeEffect = {
//     crossFade: true
// }
const autoplay = {
    delay: 1000
}
</script>
<template>
    <section class="banner">
        <swiper class="banner_img" :modules="modules" :effect="fade" :autoplay="autoplay" :speed="1500">
            <swiper-slide>
                <img src="../assets/image/banner/banner2.jpg" alt="banner2" />
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/image/banner/banner5.jpg" alt="banner5" />
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/image/banner/banner3.jpg" alt="banner3" />
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/image/banner/banner4.jpg" alt="banner4" />
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/image/banner/banner1.jpg" alt="banner1" />
            </swiper-slide>
        </swiper>
        <div class="banner_left">
            <img src="../assets/image/banner/banner0.png" alt="banner0" />
        </div>
        <div class="banner_title" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
            <h1>FATZAI</h1>
            <h1>Pâtisserie</h1>
            <h1>法 式 甜 點 專 賣</h1>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.banner {
    margin: 0 auto;
    position: relative;
    display: flex;
    // height: 28vh;

    // outline: 2px solid rgb(255, 36, 36);

    .banner_img {
        max-width: 100%;
        display: flex;

        img {
            width: 100%;
        }
    }

    .banner_left {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;

        img {
            width: 100%;
        }
    }

    .banner_title {
        position: absolute;
        top: 35%;
        left: 18%;
        max-width: $page-width;
        z-index: 3;
        // outline: 1px solid rgb(213, 26, 26);

        @include pad {
            position: absolute;
            top: 35%;
            left: 15%;
        }

        @include mobile {
            position: absolute;
            top: 20%;
            left: 10%;
        }

        h1 {
            font-family: 'Noto Serif TC', serif;
            text-align: center;
            font-size: 1.6rem;
            font-weight: 500;
            line-height: 1.6;
            letter-spacing: 0.2rem;

            &:last-child {
                border-top: 2px solid white;
                line-height: 2;
            }

            @include pad {
                font-size: 1rem;
                line-height: 1.5;
                letter-spacing: 0.1rem;

                &:last-child {
                    border-top: 1px solid white;
                    line-height: 2;
                    margin-top: 2px;
                }
            }

            @include mobile {
                font-size: 0.9rem;
                line-height: 1.2;
            }
        }
    }
}
</style>
