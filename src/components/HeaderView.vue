<script setup>
import $ from "jquery";
import { onMounted } from "vue";

onMounted(() => {
  $("#mobile-menu").click(function () {
    $(".nav_list").toggleClass("active");
    $("#common_mask").toggle();
  });
  //點擊黑色遮罩也能收合
  $('#common_mask').click(function () {
    $('#mobile-menu').click()
  });
  // 點擊當頁加上顏色
  var currentUrl = window.location.href.split("/");
  var links = document.querySelectorAll(".nav_list a");
  links.forEach(function (link) {
    var href = link.getAttribute("href").split("/");
    if (href[1] === currentUrl[4]) {
      // link.style.color = "#CCC";
      link.style.fontWeight = "500";
    }
  });
});
</script>

<template>
  <header class="header">
    <!-- 導覽列 -->
    <nav class="nav">
      <!-- 左側LOGO -->
      <router-link to="/" class="logo"><img src="../assets/image/logo2.svg" alt="logo" /></router-link>
      <!-- 右側選單 -->
      <div class="nav_right">
        <!-- 手機才出現的icon -->
        <!-- 會員專區 -->
        <router-link to="/MemberCenter" class="mobile_icon">
          <lord-icon src="https://cdn.lordicon.com/dxjqoygy.json" trigger="click"
            colors="primary:#809ba8,secondary:#809ba8" style="width: 40px; height: 40px" />
        </router-link>

        <!-- 購物車 -->
        <router-link to="/CartView" class="mobile_icon">
          <lord-icon class="mobile_icon_cart" src="https://cdn.lordicon.com/slkvcfos.json" trigger="click"
            colors="primary:#809ba8,secondary:#809ba8" style="width: 40px; height: 40px" />
          <span class="cart_num num_active"></span>
        </router-link>

        <!-- 手機才出現的漢堡 -->
        <div id="mobile-menu">
          <span class="top"></span>
          <span class="middle"></span>
          <span class="bottom"></span>
        </div>
        <!-- 選單 -->
        <!-- <slide-up-down :active="active" :duration="1000"> -->
        <ul class="nav_list">
          <li><router-link to="/AboutView">關於Fatzai</router-link></li>
          <li><router-link to="/NewsView">最新消息</router-link></li>
          <li><router-link to="/ItemList">產品列表</router-link></li>
          <li><router-link to="/MemberCenter">會員專區</router-link></li>
          <li>
            <router-link to="/CartView">購物車
              <lord-icon class="car_icon" src="https://cdn.lordicon.com/slkvcfos.json" trigger="loop" delay="1000"
                colors="primary:#545454,secondary:#545454" style="width: 30px; height: 30px" />
              <span class="cart_num num_active"></span>
            </router-link>
          </li>
        </ul>

        <!-- </slide-up-down> -->
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: 60px;
  background-color: $third_color;
  position: sticky;
  top: 0px;
  z-index: 10;
  border-bottom: 2px solid $fourth_color;

  .nav {
    margin: 0 auto;
    max-width: $page-width;
    height: 60px;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;

    /* border: 1px solid red; */
    @include mobile {
      padding: 0 20px;
    }

    .logo>img {
      height: 60px;
    }

    .nav_right {
      @include pad {
        display: flex;
        justify-content: end;
        align-items: center;
      }

      .nav_list {
        display: flex;

        @include pad {
          /* 選我!!!!!!!!!!!!!!!!!!!!!!!!! */
          background-color: $third_color;
          position: absolute;
          left: 0;
          top: 60px;
          overflow: hidden;
          flex-direction: column;
          width: 100%;
          height: 0;
          transition: all 0.5s ease-in-out;
        }

        li {
          display: flex;
          text-align: center;

          a {
            // border: 3px solid red;
            text-align: center;
            line-height: 60px;
            padding: 0 15px;
            position: relative;
            @include flexbox-center;

            &:hover {
              color: $fourth_color;
              // border-bottom: 3px solid $secondary_color;
            }

            @include pad {
              border-bottom: 1px solid #fff;
              width: 100%;

              &:hover {
                border-bottom: 2px solid $fourth_color;
              }
            }
          }
        }

        .car_icon {
          @include pad {
            display: none;
          }
        }

        /* 購物車 */
        .cart_num {
          /* border: 1px solid var(--secondary-color); */
          border-radius: 50px;
          background-color: var(--secondary-color);
          position: absolute;
          right: 0px;
          bottom: 5px;
          text-align: center;
          line-height: 25px;
          width: 25px;
          font-size: 0.8rem;

          &:hover {
            color: white;
          }

          @include pad {
            display: none;
          }
        }

        .cart_num.num_active {
          opacity: 1;

          @include pad {
            opacity: 1;
            color: white;
          }
        }
      }

      .nav_list.active {
        @include pad {
          height: 306px;
          display: flex;
        }
      }

      .mobile_icon {
        display: none;

        @include pad {
          display: flex;
          margin-left: 5px;
          z-index: 1;
          position: relative;
          display: block;
        }
      }

      /* ----漢堡選單----- */
      #mobile-menu {
        @include pad {
          /* border: 1px solid red; */
          text-align: center;
          width: 40px;
          height: 40px;
          margin-top: 20px;
          margin-left: 5px;
          padding-top: 10px;
          position: relative;
          cursor: pointer;

          span {
            background-color: $fourth_color;
            display: block;
            height: 2px;
            width: 30px;
            position: absolute;
            top: 0;
            right: 0;
            transition: all 0.35s ease;
          }

          span:nth-of-type(2) {
            top: 10px;
          }

          span:nth-of-type(3) {
            top: 20px;
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
    }
  }
}
</style>
