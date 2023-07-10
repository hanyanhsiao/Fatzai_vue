<script setup>
import { toRefs, watch } from 'vue'
import Timer from '../model/Timmer';

const props = defineProps({
    itemsInLocal: Array,
    timer: Timer
})

const { itemsInLocal, timer } = toRefs(props)
watch(itemsInLocal, () => {
})
</script>

<template>
    <!-- 加入購物車小圖 -->
    <div class="addcar_item" @mouseenter="timer.pause" @mouseleave="timer.resume">
        <ul>
            <li v-for="item in itemsInLocal" :key="item.id">
                <router-link to="/ItemView">
                    <img :src="item.cover" alt="item.id" />
                </router-link>
                <div class="addcar_item_text">
                    <h1>{{ item.name }}</h1>
                    <div class="addcar_item_dollars">
                        $
                        <p>{{ item.price }}</p>
                        <p>&nbsp; X &nbsp;</p>
                        <p>{{ item.num }}</p>
                    </div>
                    <p class="item_id">{{ item.chineseName }}</p>
                    <!-- <p>已加入購物車</p> -->
                </div>
            </li>
        </ul>
        <router-link to="/CartView" class="cart_pay">購物車結帳</router-link>
    </div>
</template>

<style lang="scss" scoped>
//  -----加入購物車小圖----
.addcar_item {
    position: fixed;
    top: 60px;
    right: 0;
    transform: translateX(350px);
    transition: all 0.5s;
    background-color: white;
    z-index: 10;

    ul {
        max-height: 326px;
        overflow-y: scroll;
        padding: 10px;
        border: 1px solid $secondary_color;

        &::-webkit-scrollbar {
            border-width: 2px;
            background-clip: padding-box;
        }

        &::-webkit-scrollbar-thumb {
            background: $primary_color;
            border: 1px solid $secondary_color;
        }



        li {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-right: 30px;
            border-bottom: 1px solid $secondary_color;
            padding: 10px 5px;

            img {
                width: 80px;
                flex-grow: 1;
            }

            .addcar_item_text {
                flex-grow: 2;
                margin-left: 20px;
                line-height: 22px;
                font-size: 0.8rem;

                h1 {
                    color: black;
                    border-radius: 0;
                    background-color: $primary_color;
                    text-align: center;
                    padding: 5px 10px;
                }

                .addcar_item_dollars {
                    display: flex;
                    align-items: center;
                }
            }
        }
    }

    &::-webkit-scrollbar-track {
        background: #fff;
    }

    .cart_pay {
        display: block;
        line-height: 40px;
        text-align: center;
        background-color: $secondary_color;

        &:hover {
            color: white;
        }
    }
}

.fadeInRight {
    transform: translateX(0px);
    // transition: all 0.5s;
}
</style>
