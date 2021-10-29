import { createRouter, createWebHistory } from "vue-router";
import routes from "@/router/routes";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0, behavior: "smooth" }), 300);
      })
    );
  },
});

const isAuthenticated = () => true;

router.beforeResolve((to, from, next) => {
  if (to.name) NProgress.start();
  next();
});

router.beforeEach((to, from, next) => {
  const { title } = to.meta;
  document.title = title || "EasyCard";
  if (to.matched.some((route) => route.meta?.requiresAuth)) {
    isAuthenticated() ? next() : next("/auth");
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
