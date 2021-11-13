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
      title: "Продукт",
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
    name: "Cart",
    meta: {
      title: "Корзина",
    },
    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/delivery",
    name: "Delivery",
    meta: {
      title: "Доставка",
    },
    component: () => import("../views/Delivery.vue"),
  },
  {
    path: "/account",
    name: "Account",
    meta: {
      title: "Личный кабинет",
      requiresAuth: true,
    },
    component: () => import("../views/Account.vue"),
  },
  {
    path: "/about-us",
    name: "AboutUs",
    meta: {
      title: "О компании",
    },
    component: () => import("../views/AboutUs.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    meta: {
      title: "Наш блог",
    },
    component: () => import("../views/Blog.vue"),
  },
  {
    path: "/favorites",
    name: "Favorites",
    meta: {
      title: "Избранное",
    },
    component: () => import("../views/Favorites.vue"),
  },
  {
    path: "/payment",
    name: "Payment",
    meta: {
      title: "Оплата",
    },
    component: () => import("../views/Payment.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    meta: {
      title: "Контакты",
    },
    component: () => import("../views/Contacts.vue"),
  },
  {
    path: "/catalog/:id",
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
