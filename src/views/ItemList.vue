<script setup>
import HeaderView from '../components/HeaderView.vue'
import FooterView from '../components/FooterView.vue'
import $ from 'jquery'
import { ref } from 'vue'
import { onMounted } from 'vue'
import { useCommonStore } from '@/stores/common'
// import AllItems from '../components/AllItems.vue'

const common = useCommonStore()

const isClicked = ref(false);
const toggleAside = () => {
  isClicked.value = !isClicked.value;
}

let activeTab = ref('AllItems');

onMounted(() => {

  //分頁器
  $('.pagination li:first').addClass('active')

  $('.pagination li').click(function () {
    $(this).siblings('li').removeClass('active')
    $(this).addClass('active')
  })

  //向左點
  $('.previous_page').click(function () {
    if ($('.pagination>.active').prev().is('li')) {
      let target_active_page = $('.pagination>.active')
      target_active_page.removeClass('active')
      target_active_page.prev().addClass('active')
      changePage(target_active_page.prev().html())
    }
  })

  //向右點
  $('.next_page').click(function () {
    if ($('.pagination>.active').next().is('li')) {
      let target_active_page = $('.pagination>.active')
      target_active_page.removeClass('active')
      target_active_page.next().addClass('active')
      changePage(target_active_page.next().html())
    }
  })

  //切換頁數內容
  function changePage(page) {
    var i, pagecontent
    pagecontent = document.getElementsByClassName('pagecontent')
    // console.log(pagecontent);
    for (i = 0; i < pagecontent.length; i++) {
      pagecontent[i].style.display = 'none'
    }
    document.getElementById(page).style.display = 'block'
    // evt.currentTarget.className += " active";
  }
})
</script>

<template>
  <div class="item_list">
    <HeaderView />
    <main class="main_block">
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

      <!-- 手機板側邊欄按鈕 -->
      <div id="aside-menu" @click="toggleAside" :class="{ active: isClicked }">
        <span class="top"></span>
        <span class="middle"></span>
        <span class="bottom"></span>
      </div>

      <!-- 側邊欄側邊欄側邊欄側邊欄側邊欄 -->
      <aside class="aside" :class="{ open: isClicked }">
        <ul>
          <li @click="activeTab = 'AllItems'" :class="{ 'active': activeTab === 'AllItems' }">全部商品</li>

          <li class="tablinks" onclick="changeSet(event, 'season')" id="season_tab">季節限定商品</li>
          <li class="tablinks" onclick="changeSet(event, 'cupcake')" id="cupcake_tab">杯子蛋糕系列</li>
          <li class="tablinks" onclick="changeSet(event, 'tart')" id="tart_tab">小塔系列</li>
          <li class="tablinks" onclick="changeSet(event, 'choux')" id="choux_tab">泡芙系列</li>


          <!-- <li class="tablinks" onclick="changeSet(event, 'all')" id="defaultOpen">全部商品</li>
          <li class="tablinks" onclick="changeSet(event, 'season')" id="season_tab">季節限定商品</li>
          <li class="tablinks" onclick="changeSet(event, 'cupcake')" id="cupcake_tab">杯子蛋糕系列</li>
          <li class="tablinks" onclick="changeSet(event, 'tart')" id="tart_tab">小塔系列</li>
          <li class="tablinks" onclick="changeSet(event, 'choux')" id="choux_tab">泡芙系列</li> -->

        </ul>
      </aside>



      <!--商品欄/草莓季限定 -->
      <div class="inner_block tabcontent" id="season">
        <!-- 分類標題 -->
        <div class="title">
          <h1>－ 草莓季限定 －</h1>
        </div>

        <!-- 商品區塊第一頁 -->
        <div class="items_block pagecontent" id="1">
          <ul>
            <li>
              <router-link to="./ItemView">
                <div class="img_block">
                  <img src="../assets/image/items/tart1.jpg" alt="" />
                  <div class="add">加入購物車</div>
                </div>
              </router-link>
              <div class="text_block">
                <h3 class="item_name">Tiramisu Tart</h3>
                <p class="item_id" style="display: none">圓塔</p>
                <div class="cash">
                  <p class="dollars">$199</p>
                  <i class="fa-solid fa-cart-shopping"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
            </li>
            <li>
              <router-link to="./ItemView.vue">
                <div class="img_block">
                  <img src="../assets/image/items/tart1.jpg" alt="" />
                  <div class="add">加入購物車</div>
                </div>
              </router-link>
              <div class="text_block">
                <h3 class="item_name">Tiramisu Tart</h3>
                <p class="item_id" style="display: none">圓塔</p>
                <div class="cash">
                  <p class="dollars">$199</p>
                  <i class="fa-solid fa-cart-shopping"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- 切換頁數區塊 -->
        <ul class="pagination">
          <span class="previous_page">«</span>
          <li class="pagetabs" onclick="changePage('1')" id="defaultOpenPage">1</li>
          <li class="pagetabs" onclick="changePage('2')">2</li>
          <li class="pagetabs" onclick="changePage('3')">3</li>
          <!-- <li class="pagetabs" onclick="changePage(event, '4')">4</li>
                    <li class="pagetabs" onclick="changePage(event, '5')">5</li> -->
          <span class="next_page">»</span>
        </ul>
      </div>


      <!--手機才有的遮罩(側邊欄的)-->
      <div id="mask" v-show="isClicked" @click="toggleAside()"></div>
      <!--手機才有的遮罩(herder的)-->
      <div id="common_mask" v-show="common.isMask" @click="common.toggleMask()"></div>
    </main>
    <FooterView />
  </div>
</template>

<style lang="scss" scoped>
.main_block {
  max-width: $page-width;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;

  @include pad {
    /* border: 1px solid rgb(255, 0, 0); */
    max-width: auto;
    flex-direction: column;
    position: relative;
    font-weight: 300;
  }

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

      .fadeInRight {
        transform: translateX(0px);
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

  //  -------側邊欄---------
  .aside {
    /* border: 1px solid rgb(255, 0, 0); */
    background-color: $primary_color;
    width: 20%;

    @include pad {
      width: 50%;
      height: 100%;
      position: absolute;
      top: 0;
      transform: translateX(-500px);
      transition: all 0.5s;
      z-index: 7;
    }

    ul {
      position: sticky;
      left: 0;
      top: 60px;

      li {
        cursor: pointer;
        display: block;
        padding: 20px;

        &:hover {
          color: $secondary_color;
        }

        @include pad {
          text-align: center;
          border-bottom: 1px solid #fff;
          // padding: 15px;
        }
      }

      li.active {
        background-color: $secondary_color;
        color: white;
      }
    }
  }

  .aside.open {
    transform: translateX(0px);
  }

  /* ----側邊漢堡選單----- */
  #aside-menu {
    border: 1px solid $primary_color;
    background-color: $secondary_color;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin: 10px;
    position: relative;
    position: fixed;
    right: 0;
    z-index: 6;
    display: none;

    @include pad {
      display: block;
    }

    &:hover {
      cursor: pointer;
    }

    span {
      line-height: 60px;
      background-color: $primary_color;
      display: block;
      height: 1px;
      width: 30px;
      position: absolute;
      top: 18px;
      right: 13px;
      transition: all 0.35s ease;

      &:nth-of-type(2) {
        top: 28px;
      }

      &:nth-of-type(3) {
        top: 38px;
      }
    }
  }

  .active .top {
    transform: translateY(10px) translateX(0) rotate(45deg);
  }

  .active .middle {
    opacity: 0;
  }

  .active .bottom {
    transform: translateY(-10px) translateX(0) rotate(-45deg);
  }

  .inner_block {
    // outline: 2px solid rgb(0, 0, 0);
    width: 80%;
    padding: 20px;

    @include pad {
      width: 100%;
    }

    //  -------分類標題---------
    .title {
      display: flex;
      background-image: url(../assets/image/material/title_bg.png);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      height: 180px;
      margin-bottom: 20px;
      position: relative;

      @include pad {
        display: none;
      }

      h1 {
        align-items: center;
        position: absolute;
        font-size: 1.3rem;
        font-weight: 500;
        left: 30%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }

    // ------ 商品區塊 --------
    .items_block {
      ul {
        // border: 1px solid rgb(0, 0, 0);
        display: grid;
        gap: 20px;
        grid-template-columns: 1fr 1fr 1fr;

        @include pad {
          grid-template-columns: 1fr 1fr;
        }

        li {
          border: 1px solid #ccc;
          transition: all 0.5s ease 0s;

          /* ---圖片區塊--- */
          .img_block {
            position: relative;
            overflow: hidden;

            img {
              width: 100%;
              transform: scale(1);
              transition: all 0.5s ease;

              &:hover {
                transform: scale(1.1);
              }
            }

            .add {
              position: absolute;
              bottom: 0;
              background-color: rgba(255, 255, 255, 0.495);
              width: 100%;
              text-align: center;
              padding: 10px;
              opacity: 0;
              transition: 0.2s ease;
            }
          }

          /* ---文字區塊--- */
          .text_block {
            text-align: center;

            h3 {
              padding: 12px 0;
            }

            .cash {
              background-color: $third_color;
              display: flex;
              padding: 10px;
              font-weight: bold;
              color: $secondary_color;

              p {
                flex-grow: 3;
                text-align: center;
              }

              i {
                width: 20px;
                margin-right: 10px;
                @include flexbox-center;

                &:last-child {
                  margin-right: 0;
                }
              }

              .fa-cart-shopping {
                display: none;

                @include pad {
                  display: block;
                  @include flexbox-center;
                }
              }
            }
          }

          &:hover {
            .add {
              opacity: 1;

              @include pad {
                display: none;
              }
            }
          }
        }
      }
    }

    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 20px auto 0;

      span {
        display: inline-block;
        margin: 0 20px;
        cursor: pointer;
        font-size: 1.5rem;
        margin-top: -3px;
      }

      li {
        display: inline-block;
        float: left;
        padding: 8px 12px;
        cursor: pointer;
      }

      .active {
        background-color: $secondary_color;
        color: white;
        border-radius: 50%;
      }
    }
  }
}
</style>
