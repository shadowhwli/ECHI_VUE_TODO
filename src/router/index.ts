import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "Home",
    redirect: "/todo"
  },
  {
    path: "/todo",
    name: "Todo",
    meta: {
      title: "待办"
    },
    component: () => import(/* webpackChunkName: "Todo" */ "@/views/Todo")
  },
  {
    path: "/todo-detail/:id",
    name: "TodoDetail",
    component: () =>
      import(/* webpackChunkName: "TodoDetail" */ "@/views/TodoDetail")
  },
  {
    path: "/date",
    name: "Date",
    meta: {
      title: "日程"
    },
    component: () => import(/* webpackChunkName: "Date" */ "@/views/Date")
  },
  {
    path: "/review",
    name: "Review",
    meta: {
      title: "本周回顾"
    },
    component: () => import(/* webpackChunkName: "Review" */ "@/views/Review")
  },
  {
    path: "/finished",
    name: "Finished",
    meta: {
      title: "历史事项"
    },
    component: () =>
      import(/* webpackChunkName: "Finished" */ "@/views/Finished")
  },
  {
    path: "/recycle",
    name: "Recycle",
    meta: {
      title: "回收站"
    },
    component: () => import(/* webpackChunkName: "Recycle" */ "@/views/Recycle")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.afterEach(route => {
  // 从路由的元信息中获取 title 属性
  if (route.meta.title) {
    document.title = route.meta.title;
    // 如果是 iOS 设备，则使用如下 hack 的写法实现页面标题的更新
    if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      const hackIframe = document.createElement("iframe");
      hackIframe.style.display = "none";
      document.body.appendChild(hackIframe);
      setTimeout(() => {
        document.body.removeChild(hackIframe);
      }, 300);
    }
  }
});

export default router;