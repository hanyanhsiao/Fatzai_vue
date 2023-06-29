<script setup>
import HeaderView from "../components/HeaderView.vue";
import FooterView from "../components/FooterView.vue";
import ItemCarousel from "../components/ItemCarousel.vue";

</script>

<template>
  <div class="item">
    <HeaderView />
    <main>
      <div class="wrapper">
        <!-- <div class="addcar_item">
          <ul>
            <li>
              <a href="./item.html">
                <img src="" alt="">
              </a>
              <div class="addcar_item_text">
                <h1></h1>
                <div class="addcar_item_dollars">
                  $<p></p>
                  <p> &nbsp; x &nbsp;</p>
                  <p></p>
                </div>
                <p class="item_id"></p>
                <p>已加入購物車</p>
              </div>
            </li>
          </ul>
          <a href="./car.html" class="cart_pay">購物車結帳</a>
        </div> -->
        <ol class="breadcrumb">
          <li><router-link to="./ItemList">產品列表</router-link></li>
          <li><router-link to="./ItemList">小塔系列</router-link></li>
          <li><router-link to="#">提拉米蘇塔</router-link></li>
        </ol>
        <div class="item_block">
          <div class="left_block">
            <img src="../assets/image/items/tart1.jpg" alt="" id="main_item" />
            <div class="little_img">
              <img src="../assets/image/items/tart7.jpg" alt="" class="item_img" />
              <img src="../assets/image/items/tart6.jpg" alt="" class="item_img" />
            </div>
          </div>
          <div class="right_block">
            <h1>提拉米蘇塔 &nbsp;</h1>
            <h1 class="item_name">Tiramisu Tart</h1>
            <div class="item_introduce">
              <h3>產品介紹</h3>
              <ul>
                <li>可可塔皮</li>
                <li>咖啡杏仁奶油餡</li>
                <li>核桃</li>
                <li>馬斯卡邦起司餡</li>
                <li>苦甜巧克力餡</li>
                <li>本產品含有酒類及堅果</li>
              </ul>
            </div>
            <div class="item_delivery_fee">
              <h3>運費與優惠</h3>
              <ul>
                <li>宅配冷藏運費一律$170</li>
                <li>消費滿$1000免運</li>

              </ul>
            </div>
            <h1 class="dollars_symbol">$</h1>
            <h1 class="dollars">199</h1>
            <div class="item_size">
              <button class="tart t_circle checked">圓塔</button>
              <button class="tart t_square">方塔</button>
              <p>圓塔：直徑8cm / 方塔：邊長6cm</p>

            </div>
            <div class="item_quantity">
              <ul class="count">
                <li><span id="num-decrease" class="num-count">－</span></li>
                <li><input readonly disabled type="text" class="input-num" id="input-num" value="1" />
                </li>
                <li><span id="num-jia" class="num-count">＋</span></li>
              </ul>
            </div>

            <div class="item_buy">
              <button class="btn1 add_shopping_car"><router-link to="./CartView">立即購買</router-link></button>
              <button class="btn2 add_shopping_car">加入購物車</button>
            </div>
          </div>
        </div>

        <!-- 分隔線 -->
        <hr class="hr" />

        <div class="item_description">
          <div class="tab">
            <button class="tablinks" onclick="changeTab(event,'delivery')" id="defaultOpen">運送說明</button>
            <button class="tablinks" onclick="changeTab(event,'faq')">常見問題</button>
            <button class="tablinks" onclick="changeTab(event,'customer')">顧客評價</button>
          </div>

          <div id="delivery" class="tabcontent">
            <p>Q1為什麼有些蛋糕無法宅配？</p>
            <p>我們的宅配透過黑貓宅急便寄出，蛋糕屬於脆弱商品，運送過程中容易毀損，故無法寄送。</p>
            <p>Q2可以指定到貨日期嗎？</p>
            <p>我們宅配與黑貓宅急便配合運送，無法指定到貨日期。</p>
            <p>Q3為什麼宅配無法指定到貨日期與時間？</p>
            <p>黑貓宅急便送貨量過多時，無法指定到貨日，有可能延遲二到三日到貨。</p>
            <p>※疫情影響，可能會延遲2-3天到貨，也無法指定配送時間，亦不會當日寄出，當日就收到貨。<br />
              ※建議您先行聯繫收件人，告知商品配送日期與時間；若無法順利送達，恕無法辦理退貨與退款，如重新寄送將酌收配送費用。<br />
              ※若因天災或意外等人為不可抗力之因素，而無法按時配送，將通知您延後送貨或為您取消訂單。</p>
          </div>

          <div id="faq" class="tabcontent">
            <p>Q1: 運輸方式及運費是多少？</p>
            <p>運費會根據您的地址和訂單重量而定，我們提供宅配及店面取貨兩種方式，具體運費請見結帳頁面。</p>

            <p>Q2: 支付方式有哪些？</p>
            <p>我們接受信用卡、店面現金支付、Line Pay等多種支付方式。</p>

            <p>Q3: 退換貨政策是什麼？</p>
            <p>如有任何產品品質問題，請在收到產品後的24小時內與我們聯繫。</p>

            <p>Q4: 產品保質期和保存方式是什麼？</p>
            <p>保質期會因產品不同而有所不同，詳細資訊請查看產品頁面或包裝上的標籤。<br />
              產品保存方式建議在陰涼乾燥處保存，不要直接放在陽光下。</p>


            <p>Q5: 是否有特別優惠或促銷活動？</p>
            <p>我們會不定期推出優惠和促銷活動，可以關注我們的官方網站和社交媒體獲取最新消息。</p>

            <p>Q6: 訂單是否可取消或更改？</p>
            <p>如需取消或更改訂單，請在收到訂單確認郵件後聯繫我們，我們將盡力協助處理。</p>


          </div>

          <div id="customer" class="tabcontent">
            <p>"他們的巧克力蛋糕真是太好吃了！"</p>
            <p>"我喜歡他們的提拉米蘇塔，但是價格有點貴。"</p>
            <p>"新出的杯子蛋糕是絕對不能錯過的！"</p>
            <p>"他們的泡芙選擇豐富，口感也很好。" </p>
            <p>"草莓千層真是令人驚艷。"</p>
            <p>"他們的蛋糕捲是我迄今為止吃過最好吃的。</p>
            <p>"檸檬塔口感非常清新，是夏天必嚐的甜點之一。" </p>
            <p>"我在這裡吃到了世界上最好吃的馬卡龍！"</p>
            <p>"Fatzai的蛋糕口感很細膩，非常好吃，是我吃過的最好的蛋糕沒有之一。</p>
            <p>"巧克力塔口感非常濃郁，巧克力味道十分濃厚，是巧克力控必嚐的甜點之一。"</p>
          </div>


        </div>

        <!-- 更多商品 -->
        <div class="more_items_wrapper">
          <div class="more_items">
            <h1 class="title">更多商品</h1>
            <ItemCarousel />
          </div>
        </div>

      </div>
      <!--手機才有的遮罩-->
      <div id="common_mask"></div>
    </main>
    <FooterView />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  // border: 2px solid saddlebrown;
  position: relative;
  margin: auto;
  padding: 0 30px;

  // 麵包屑
  .breadcrumb {
    max-width: $page-width;
    margin: auto;
    padding: 30px;
    display: flex;

    @include pad {
      padding: 20px;
      max-width: auto;
      display: flex;
    }

    li {
      padding: 10px 10px 10px 0;
      font-size: .9rem;

      +li::before {
        content: "/";
        padding-right: 10px;
      }

      &:last-child a {
        color: $secondary_color;
        font-weight: 400;
      }

      a {
        &:hover {
          color: $secondary_color;
        }
      }
    }
  }

  /* -------------------item_block--------------- */
  .item_block {
    display: flex;
    justify-content: space-between;
    padding-top: 0;
    max-width: $page-width;
    margin: auto;
    padding-bottom: 30px;


    @include pad {
      flex-direction: column;
    }

    /* ---------------------left_block----------------- */
    .left_block {

      img {
        display: block;
        max-width: 450px;

        @include pad {
          max-width: 100%;
        }
      }

      .little_img {
        display: flex;
        // border: 2px solid saddlebrown;

        @include pad {
          padding: 20px;
          padding-left: 0;
        }

        img {
          width: 110px;
          margin: 20px 20px 0 0;
          cursor: pointer;

          &:hover {
            border: 2px solid $secondary_color;
          }

          @include pad {
            width: 130px;
            margin: 0 20px 0 0;

          }
        }
      }

      .border {
        border: 1px solid $secondary_color;
      }
    }

    /* ------------------right_block--------------------*/
    .right_block {
      display: block;
      width: 52%;
      margin-left: 20px;

      @include pad {
        width: 100%;
        margin-left: 0;
        margin-top: 20px;
      }

      h1 {
        font-size: 1.5rem;
        margin-bottom: 20px;
        display: inline-block;
        font-weight: 300;
      }

      .item_introduce,
      .item_delivery_fee {
        outline: 1px solid $fourth_color;
        margin-bottom: 20px;
        padding: 20px;
        background-color: #FFF4E8;

        h3 {
          font-size: 1.2rem;
          margin-bottom: 20px;
          color: $fourth_color;
          font-weight: 400;
        }

        ul {
          margin-left: 20px;
          column-count: 2;

          li {
            margin-bottom: 10px;
            list-style: circle;

            &:last-of-type {
              list-style: disc;
              color: $fourth_color;
              font-weight: 400;
            }
          }
        }
      }

      /* -----------價錢------------ */
      // .dollars_symbol {
      // }

      // .dollars {
      // }

      /* -----------尺寸選擇------------ */
      .item_size {
        display: flex;
        align-items: center;
        margin-bottom: 30px;

        button {
          border: 1px solid $secondary_color;
          border-radius: 5px;
          padding: 5px;
          width: 80px;
          margin-right: 20px;
          background-color: #ffffff;

          @include pad {
            margin-right: 15px;
          }
        }

        button.checked {
          background-color: $primary_color;
        }
      }

      /* -----------數量------------ */
      .item_quantity {
        margin-bottom: 30px;

        .count {
          border: 1px solid $secondary_color;
          width: 150px;
          display: flex;
          border-radius: 2px;

          li {
            display: inline-block;

            /* + - */
            .num-count {
              display: inline-block;
              width: 25px;
              height: 25px;
              line-height: 25px;
              text-align: center;
              cursor: pointer;
            }

            /* 中間數字 */
            .input-num {
              height: 25px;
              text-align: center;
              border-radius: 0;
              border: 0;
              width: 100%;
              background-color: white;
              border-right: 1px solid $secondary_color;
            }

            #num-decrease {
              background-color: $secondary_color;
            }

            #num-jia {
              background-color: $secondary_color;
            }
          }
        }
      }

      /* -----------購買/加入購物車------------ */
      .item_buy {
        display: flex;

        @include pad {
          display: flex;
          justify-content: space-between;
        }

        .add_shopping_car {
          border: 1px solid $secondary_color;
          width: 40%;
          margin-right: 30px;
          display: block;
          line-height: 2;
          font-size: 1.2rem;
          border-radius: 5px;
        }

        .btn1 {
          background-color: $secondary_color;

          &:hover a {
            color: white;
          }

          @include pad {
            border: 1px solid $secondary_color;
            width: 48%;
          }
        }

        .btn2 {
          background-color: #ffffff;

          &:hover {
            background-color: $primary_color;
          }

          @include pad {
            border: 1px solid $secondary_color;
            width: 48%;
            margin-right: 0;
          }
        }
      }
    }
  }

  /* ---------------item_description------------- */
  /* --------------選單---------------*/
  .item_description {
    border: 1px solid $secondary_color;
    max-width: $page-width;
    margin: 30px auto;

    .tab {
      overflow: hidden;
      display: flex;
      justify-content: space-around;

      button {
        background-color: $primary_color;
        width: 100%;
        padding: 14px 16px;

        &:hover {
          color: $secondary_color;
        }
      }

      button.active {
        background-color: $secondary_color;
        color: #ffffff;
      }
    }

    .tabcontent {
      // display: none;
      padding: 20px;
      line-height: 2;

      /* --------------描述文字---------------*/
      >p {
        &:nth-child(odd) {
          color: $secondary_color;
          font-weight: 400;
        }

        &:nth-child(7) {
          color: inherit;
          font-weight: 200;
        }

      }
    }
  }

  /*--------------更多商品----------------*/
  .more_items_wrapper {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='Artboard-5' fill='%23ffead2' fill-opacity='0.5' fill-rule='nonzero'%3E%3Cpath d='M6 18h12V6H6v12zM4 4h16v16H4V4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

    .more_items {
      display: block;
      // overflow: hidden;
      padding: 30px 0;
      max-width: $page-width;
      margin: auto;
    }
  }
}
</style>
