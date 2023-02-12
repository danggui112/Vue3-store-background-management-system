import { createRouter, createWebHashHistory } from 'vue-router'
//哈希路由及历史模式

// 初始化进入项目就引用
import layout from '../views/LayOut/LayOut.vue'
import store from '../store/index.js'

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
router.beforeEach((to, from, next) => {
  // to 从哪个页面 from 到哪个 只有执行next()才会跳转

  // 判断用户是否登录
  console.log("store", store.state.uInfo);
  const uInfo = store.state.uInfo.userInfo
  if (!uInfo.username) {
    //未登录 跳转到  
    if (to.path === "/login") {
      next()
      return
    }
    next("/login")
  } else {
    next()
  }

})

export default router
