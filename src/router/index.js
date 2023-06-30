import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NewsView from '../views/NewsView.vue'
import ItemList from '../views/ItemList.vue'
import ItemView from '../views/ItemView.vue'
import MemberCenter from '../views/MemberCenter.vue'
import CartView from '../views/CartView.vue'

import { useCommonStore } from '@/stores/common'

// 路由配置
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'HomeView',
            component: HomeView
        },
        {
            path: '/AboutView',
            name: 'AboutView',
            component: AboutView
        },
        {
            path: '/NewsView',
            name: 'NewsView',
            component: NewsView
        },
        {
            path: '/ItemList',
            name: 'ItemList',
            component: ItemList
        },
        {
            path: '/ItemView',
            name: 'ItemView',
            component: ItemView
        },
        {
            path: '/MemberCenter',
            name: 'MemberCenter',
            component: MemberCenter
        },
        {
            path: '/CartView',
            name: 'CartView',
            component: CartView
        }
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (About.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import('../views/AboutView.vue')
        // }
    ]
})
// 路由切换前的操作
router.beforeEach(() => {
    const common = useCommonStore() 
    common.isMask = false;
  });

export default router
