<script setup>
import { CartStore } from '@/stores/common'
import { onMounted } from 'vue'
const getCart = CartStore()

onMounted(() => {
    console.log('locol中的商品' + getCart.getCartItem())
})
</script>

<template>
    <!-- 加入購物車小圖 -->
    <div class="addcar_item">
        <ul>
            <li>
                <router-link to="/ItemList.vue">
                    <img src="" alt="" />
                </router-link>
                <div class="addcar_item_text">
                    <h1></h1>
                    <div class="addcar_item_dollars">
                        $
                        <p></p>
                        <p>&nbsp; x &nbsp;</p>
                        <p></p>
                    </div>
                    <p class="item_id"></p>
                    <p>已加入購物車</p>
                </div>
            </li>
        </ul>
        <router-link to="/CartView.vue" class="cart_pay">購物車結帳</router-link>
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
        max-height: 260px;
        overflow-y: scroll;
        padding: 10px;
        border: 1px solid $secondary_color;

        &:-webkit-scrollbar {
            border-width: 2px;
            background-clip: padding-box;
        }

        &::-webkit-scrollbar-thumb {
            background: $primary_color;
            border: 1px solid $secondary_color;
        }

        &::-webkit-scrollbar-track {
            background: #fff;
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
                    padding: 5px;
                }

                .addcar_item_dollars {
                    display: flex;
                }
            }
        }
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
