// 此檔為專案的程式進入點
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入全部scss
import './assets/all.scss'

const app = createApp(App)

// 使用vue路由
app.use(router)
// 使用Pinia
app.use(createPinia())


// 掛載vue
app.mount('#app')
