<script setup></script>

<template>
    <footer class="footer">
        <div class="footer_top">
            <div class="footer_left">
                <p><router-link to="/AboutView">關於Fatzai About Us</router-link></p>
                <p><router-link to="/NewsView">最新消息 News</router-link></p>
                <p><router-link to="/ItemList">產品列表 Products</router-link></p>
                <p>
                    <router-link to="/MemberCenter">會員專區 Member Area</router-link>
                </p>
            </div>

            <div class="footer_center">
                <div class="footer_logo">
                    <router-link to="/">
                        <img src="../assets/image/logo3.svg" alt="" />
                        <img class="color" src="../assets/image/logo2.svg" alt="" />
                    </router-link>
                </div>
                <div class="footer_icons">
                    <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-square-facebook"></i></a>
                    <a href="https://www.instagram.com/" target="_blank"> <i class="fa-brands fa-instagram"></i></a>
                    <a href="https://line.me/zh-hant/" target="_blank"><i class="fa-brands fa-line fa-sm"></i></a>
                </div>
            </div>

            <div class="footer_right">
                <p>營業時間 : 週一至週五 11:30-19:30</p>
                <p>最後取貨時間 : 週一至週五 19:00</p>
                <p>聯絡電話 : 02-0953-9383</p>
                <p>門市地址 : 108台北市萬華區西寧南路123號</p>
            </div>
        </div>
        <div class="footer_bottom">
            <span class="test">本網站為緯育TibaMe前端工程師班THD101學員專題作品，本平台僅供學習、展示之用</span>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    background-color: $third_color;

    .footer_top {
        max-width: $page-width;
        margin: 0 auto;
        display: flex;
        align-items: center;

        @include pad {
            padding: 10px;
        }

        .footer_left {
            // outline: 1px solid black;
            display: flex;
            flex-direction: column;
            flex-basis: 0;
            flex-grow: 1;

            @include pad {
                display: none;
            }

            p {
                // outline: 1px solid black;
                text-align: end;
                line-height: 30px;

                a {
                    &:hover {
                        color: $fourth_color;
                    }
                }
            }
        }

        .footer_center {
            // outline: 1px solid rgb(255, 13, 13);
            margin: 10px 30px;
            flex-basis: 0;
            flex-grow: 1;
            // flex-direction: column;

            @include pad {
                margin: 0;
            }

            .footer_logo {
                // outline: 1px solid rgb(255, 13, 13);
                position: relative;
                width: 50%;
                margin: 0 auto;

                @include pad {
                    display: none;
                }

                img {
                    width: 100%;
                }

                img.color {
                    transition: all 300ms;
                    position: absolute;
                    left: 0;
                    top: 0;
                    opacity: 0;

                    &:hover {
                        opacity: 1;
                    }
                }
            }

            .footer_icons {
                text-align: center;

                @include pad {
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                }

                a {
                    font-size: 1.5rem;
                    margin: 10px;
                    color: $icon_color;

                    &:hover {
                        color: $fourth_color;
                    }

                    @include pad {
                        font-size: 2rem;
                    }
                }
            }
        }

        .footer_right {
            // outline: 1px solid black;
            display: flex;
            flex-direction: column;
            flex-basis: 0;
            flex-grow: 1;

            @include pad {
                flex-grow: 3;
            }

            p {
                text-align: start;
                line-height: 30px;
                // cursor: default;

                @include pad {
                    line-height: 35px;
                }
            }
        }
    }

    .footer_bottom {
        border-top: 1px solid $fourth_color;
        text-align: center;
        padding: 10px;
        line-height: 1.5;
    }
}
</style>
