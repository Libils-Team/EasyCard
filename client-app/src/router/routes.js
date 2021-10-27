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
    path: "/product/:id",
    name: "Product",
    meta: {
      title: "продукт",
    },
    component: () => import("../views/Product.vue"),
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
    path: "/delivery",
    meta: {
      title: "Доставка",
    },
    component: () => import("../views/Delivery.vue"),
  },
  {
    path: "/account",
    meta: {
      title: "Личный кабинет",
      requiresAuth: true,
    },
    component: () => import("../views/Account.vue"),
  },
  {
    path: "/about-us",
    meta: {
      title: "О компании",
    },
    component: () => import("../views/AboutUs.vue"),
  },
  {
    path: "/blog",
    meta: {
      title: "Наш блог",
    },
    component: () => import("../views/Blog.vue"),
  },
  {
    path: "/favorites",
    meta: {
      title: "Избранное",
    },
    component: () => import("../views/Favorites.vue"),
  },
  {
    path: "/payment",
    meta: {
      title: "Оплата",
    },
    component: () => import("../views/Payment.vue"),
  },
  {
    path: "/contacts",
    meta: {
      title: "Контакты",
    },
    component: () => import("../views/Contacts.vue"),
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
