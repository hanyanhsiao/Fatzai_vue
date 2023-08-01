// 此檔為專案的程式進入點
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useDb } from '@/stores/db'

import App from './App.vue'
import router from './router'

// 引入全部scss
import './assets/all.scss'

const app = createApp(App)

// 使用vue路由
app.use(router)

// 使用Pinia
app.use(createPinia())

// 初始化 dbStore
const dbStore = useDb()

// 在 fetchFirebaseData() 中使用 await 以確保 Firebase 資料成功取得
async function initApp() {
    await dbStore.fetchFirebaseData()

    // 將 dbStore 提供給整個應用程式
    app.provide('dbStore', dbStore)

    // 掛載vue
    app.mount('#app')
}
initApp()
