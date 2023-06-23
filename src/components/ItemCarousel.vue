<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination]

const breakpoints = {
    0: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    560: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
    768: { slidesPerView: 4, spaceBetween: 20 },
}
// 下方點點
const pagination = {
    el: '.dots',
    type: 'bullets',
    bulletActiveClass: 'dotsActive',
}
// 左右箭頭
const navigation = {
    nextEl: '.arrow_next',
    prevEl: '.arrow_pre',
}
</script>

<template>
    <div class="carousel_container">
        <div class="arrow_pre"></div>
        <swiper
            :modules="modules"
            :breakpoints="breakpoints"
            :pagination="pagination"
            :navigation="navigation"
            loop
            class="items"
        >
            <swiper-slide>
                <div class="it">
                    <router-link to="/ItemView">
                        <div class="img_block">
                            <img src="../assets/image/items/mousse7.jpg" alt="" />
                        </div>
                        <div class="text_block">
                            <h3>Cassis Mousse</h3>
                            <p>$180</p>
                        </div>
                    </router-link>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="it">
                    <router-link to="/ItemView">
                        <div class="img_block">
                            <img src="../assets/image/items/mousse8.jpg" alt="" />
                        </div>
                        <div class="text_block">
                            <h3>Cassis Mousse</h3>
                            <p>$180</p>
                        </div>
                    </router-link>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="it">
                    <router-link to="/ItemView">
                        <div class="img_block">
                            <img src="../assets/image/items/mousse8.jpg" alt="" />
                        </div>
                        <div class="text_block">
                            <h3>Pistache Mousse</h3>
                            <p>$250</p>
                        </div>
                    </router-link>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="it">
                    <router-link to="/ItemView">
                        <div class="img_block">
                            <img src="../assets/image/items/mousse7.jpg" alt="" />
                        </div>
                        <div class="text_block">
                            <h3>Cassis Mousse</h3>
                            <p>$180</p>
                        </div>
                    </router-link>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="it">
                    <router-link to="/ItemView">
                        <div class="img_block">
                            <img src="../assets/image/items/mousse5.jpg" alt="" />
                        </div>
                        <div class="text_block">
                            <h3>Chocolate Yo-Yo Cake</h3>
                            <p>$199</p>
                        </div>
                    </router-link>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="it">
                    <router-link to="/ItemView">
                        <div class="img_block">
                            <img src="../assets/image/items/mousse9.jpg" alt="" />
                        </div>
                        <div class="text_block">
                            <h3>Vanilla Cake Role</h3>
                            <p>$160</p>
                        </div>
                    </router-link>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="it">
                    <router-link to="/ItemView">
                        <div class="img_block">
                            <img src="../assets/image/items/mousse7.jpg" alt="" />
                        </div>
                        <div class="text_block">
                            <h3>Cassis Mousse</h3>
                            <p>$180</p>
                        </div>
                    </router-link>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="it">
                    <router-link to="/ItemView">
                        <div class="img_block">
                            <img src="../assets/image/items/mousse7.jpg" alt="" />
                        </div>
                        <div class="text_block">
                            <h3>Cassis Mousse</h3>
                            <p>$180</p>
                        </div>
                    </router-link>
                </div>
            </swiper-slide>
        </swiper>
        <div class="arrow_next"></div>
    </div>
    <div class="dots"></div>
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
        /* outline: 2px solid rgb(255, 0, 0); */
        line-height: 2;
        text-align: center;

        h3 {
          color: $secondary_color;
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
    content: "〈";
    font-size: 2rem;
    line-height: 0;
    font-weight: 500;
    cursor: pointer;
    color: $secondary_color;
  }

  .arrow_next:before {
    content: "〉";
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
