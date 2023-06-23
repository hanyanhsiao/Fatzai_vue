// 專案的程式進入點
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// import SlideUpDown from 'vue-slide-up-down'

// 引入全部scss
import "./assets/all.scss";

const app = createApp(App);

app.use(createPinia());
// 使用vue路由
app.use(router);
// app.component('slide-up-down', SlideUpDown)

// 掛載vue
app.mount("#app");
