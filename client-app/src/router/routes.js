const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "Главная",
    },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/search",
    name: "Search",
    meta: {
      title: "Поиск",
    },
    component: () => import("../views/Search.vue"),
  },
  {
    path: "/cart",
    meta: {
      title: "Корзина",
    },
    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/catalog",
    name: "Catalog",
    meta: {
      title: "Каталог",
    },
    component: () => import("../views/Catalog.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    meta: {
      title: "Ошибка 404",
    },
    component: () => import("../views/404.vue"),
  },
];

export default routes;
