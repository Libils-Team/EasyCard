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
            type: "call-modal",
            icon: "map-marker",
            label: "{city}",
            path: "?modal=navbar-ChangeCity",
          },
        ],
        [
          {
            type: "link",
            label: "Магазины",
            path: paths.shops,
          },
          {
            type: "dropdown",
            label: "Покупателям",
            dropdownMenu: [
              {
                type: "link",
                label: "Как оформить заказ",
                path: paths.howToOrder,
              },
              {
                type: "link",
                label: "Доставка",
                path: paths.delivery,
              },
            ],
          },
          {
            type: "link",
            label: "Юридическим лицам",
            path: paths.entity,
          },
        ],
        [
          {
            type: "string",
            stringFormat: ["bold"],
            icon: "phone",
            label: "8-800-77-07-999",
          },
          {
            type: "string",
            label: "(c 10:00 до 05:00)",
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
            icon: "graph",
            path: paths.compare,
          },
          {
            type: "link",
            label: "Избранное",
            icon: "heart",
            path: paths.favorites,
          },
          {
            type: "link",
            label: "Корзина",
            icon: "cart",
            path: paths.cart,
          },
          {
            type: "call-modal",
            label: "",
            icon: "notification",
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
