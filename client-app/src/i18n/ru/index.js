import paths from "@/i18n/modules/paths";

export default {
  layout: {
    paths,
  },
  header: {
    navbarTop: {
      menu: [
        [
          {
            type: "link",
            label: "Каталог",
            path: paths.catalog,
          },
          {
            type: "link",
            label: "О компании",
            path: paths.aboutUs,
          },
          {
            type: "link",
            label: "Контакты",
            path: paths.contact,
          },
          {
            type: "link",
            label: "Доставка",
            path: paths.delivery,
          },
          {
            type: "link",
            label: "Оплата",
            path: paths.payment,
          },
          {
            type: "link",
            label: "Личный кабинет",
            path: paths.account,
          },
          {
            type: "link",
            label: "Блог",
            path: paths.blog,
          },
        ],
        [
          {
            type: "string",
            label: "Доставка с 8:00 до 23:00",
          },
          {
            type: "link",
            label: "+7(800) 800-80-80",
            path: "tel:78008008080",
          },
        ],
      ],
    },
    navbarMain: {
      menu: [
        [
          {
            type: "link-logo",
            image: "logo-main",
            path: paths.home,
          },
          {
            type: "search",
            placehoder: "Поиск по сайту",
          },
          {
            type: "link",
            label: "Сравнить",
            icon: "fas fa-equals",
            path: paths.compare,
          },
          {
            type: "link",
            label: "Избранное",
            icon: "fas fa-heart",
            path: paths.favorites,
          },
          {
            type: "link",
            label: "Корзина",
            icon: "fas fa-shopping-cart",
            path: paths.cart,
          },
          {
            type: "call-modal",
            label: "",
            icon: "fas fa-bell",
            path: "?modal=navbar-Notification",
          },
          {
            type: "link",
            label: "Войти",
            path: paths.auth,
          },
        ],
      ],
    },
  },
};
