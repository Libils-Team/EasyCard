import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: () => import("../views/Catalog.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
