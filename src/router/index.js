import { createRouter, createWebHashHistory } from 'vue-router'
//哈希路由及历史模式

// 初始化进入项目就引用
import layout from '../views/LayOut/LayOut.vue'


const routes = [
  //登录页面
  {
    path: "/login",
    name: "login",
    component: () => import("../views/pages/login.vue")
  },
  {
    path: "/",
    name: "layout",
    component: layout,
    // redirect: './index',
    // 子路由/嵌套路由
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("../views/pages/rolesList.vue")
      },
      {
        path: "/user",
        name: "user",
        component: () => import("../views/pages/userList.vue")
      },
      {
        path: "/goods",
        name: "goods",
        component: () => import("../views/pages/goodsList.vue")
      },
      {
        path: "/roles",
        name: "roles",
        component: () => import("../views/pages/rolesList.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
