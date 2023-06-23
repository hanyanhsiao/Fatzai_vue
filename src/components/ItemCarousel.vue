<script setup>
// import { defineComponent } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const settings = {
    itemsToShow: 4,
    snapAlign: "start",
    wrapAround: true
};

const breakpoints = {
    700: {
        itemsToShow: 2,
        snapAlign: "start",
    },
    1024: {
        itemsToShow: 4,
        snapAlign: "start",
    },
};

// const componentOptions = defineComponent({
//   name: "Breakpoints",
//   components: {
//     Carousel,
//     Slide,
//     Navigation,
//   },
//   setup() {
//     return {
//       settings,
//       breakpoints,
//     };
//   },
// });

// export { componentOptions };
</script>

<template>
    <Carousel v-bind="settings" :breakpoints="breakpoints" class="items carousel" ref="myCarousel">
        <!-- <Slide v-for="slide in 10" :key="slide">
                <div class="carousel__item">{{ slide }}</div>
              </Slide> -->
        <Slide class="it carousel__item" :key="1">
            <router-link to="/ItemView">
                <div class="img_block">
                    <img src="../assets/image/items/mousse7.jpg" alt="" />
                </div>
                <div class="text_block">
                    <h3>Cassis Mousse</h3>
                    <p>$180</p>
                </div>
            </router-link>
        </Slide>
        <Slide class="it carousel__item" :key="2">
            <router-link to="/ItemView">
                <div class="img_block">
                    <img src="../assets/image/items/mousse8.jpg" alt="" />
                </div>
                <div class="text_block">
                    <h3>Pistache Mousse</h3>
                    <p>$250</p>
                </div>
            </router-link>
        </Slide>
        <Slide class="it carousel__item" :key="3">
            <router-link to="/ItemView">
                <div class="img_block">
                    <img src="../assets/image/items/mousse7.jpg" alt="" />
                </div>
                <div class="text_block">
                    <h3>Tiramisu Tart</h3>
                    <p>$199</p>
                </div>
            </router-link>
        </Slide>
        <Slide class="it carousel__item" :key="4">
            <router-link to="/ItemView">
                <div class="img_block">
                    <img src="../assets/image/items/mousse5.jpg" alt="" />
                </div>
                <div class="text_block">
                    <h3>Chocolate Yo-Yo Cake</h3>
                    <p>$199</p>
                </div>
            </router-link>
        </Slide>
        <Slide class="it carousel__item" :key="5">
            <router-link to="/ItemView">
                <div class="img_block">
                    <img src="../assets/image/items/mousse9.jpg" alt="" />
                </div>
                <div class="text_block">
                    <h3>Vanilla Cake Role</h3>
                    <p>$160</p>
                </div>
            </router-link>
        </Slide>
        <Slide class="it carousel__item" :key="6">
            <router-link to="/ItemView">
                <div class="img_block">
                    <img src="../assets/image/items/mousse9.jpg" alt="" />
                </div>
                <div class="text_block">
                    <h3>Vanilla Cake Role</h3>
                    <p>$160</p>
                </div>
            </router-link>
        </Slide>
        <Slide class="it carousel__item" :key="7">
            <router-link to="/ItemView">
                <div class="img_block">
                    <img src="../assets/image/items/mousse9.jpg" alt="" />
                </div>
                <div class="text_block">
                    <h3>Vanilla Cake Role</h3>
                    <p>$160</p>
                </div>
            </router-link>
        </Slide>
        <Slide class="it carousel__item" :key="8">
            <router-link to="/ItemView">
                <div class="img_block">
                    <img src="../assets/image/items/mousse9.jpg" alt="" />
                </div>
                <div class="text_block">
                    <h3>Vanilla Cake Role</h3>
                    <p>$160</p>
                </div>
            </router-link>
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
</template>

<style lang="scss">
.items {
    outline: 2px solid rgb(255, 0, 0);
    // display: flex;
    margin: 0 100px 20px;


    .it {
        /* border-radius: 5px; */
        border: 1px solid #ccc;
        // margin: 10px;

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

.Slide {
    // margin-right: 0 10px;
    /* 轮播项之间的间距，根据需要进行调整 */
}

.carousel__item {}

.carousel__slide {
    // padding: 10px;
}

.carousel__prev {
    color: $secondary_color;
    width: 60px;
    left: -60px;


}

.carousel__next {
    color: $secondary_color;
    width: 60px;
    right: -60px;
}

.carousel__icon {
    width: 50px;
    height: 50px;
}
</style>