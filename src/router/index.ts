import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import NProgress from "nprogress"; // 顶部进度条
import "nprogress/nprogress.css"; // 进度条样式
NProgress.configure({ showSpinner: false }); // 禁用加载动画

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: () => import(/* webpackChunkName: "about" */ "@/views/index/Index.vue"),
    redirect: "home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("../views/home/Home.vue")
      },
      {
        path: "/channel",
        name: "Channel",
        component: () => import("../views/channel/Channel.vue")
      },
      {
        path: "/cart",
        name: "Cart",
        component: () => import("../views/cart/Cart.vue")
      },
      {
        path: "/mine",
        name: "Mine",
        component: () => import("../views/mine/Mine.vue")
      }
    ]
  },
  {
    path: "/goodsDetail",
    name: "GoodsDetail",
    component: () => import("../views/goodsDetail/GoodsDetail.vue")
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  return next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
