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
            path: "?modal=navbar-ChooseCity",
          },
        ],
        [
          {
            type: "link",
            label: "Магазины",
            path: "@:layout.paths.shops",
          },
          {
            type: "dropdown",
            label: "Покупателям",
            dropdownMenu: [
              {
                type: "link",
                label: "Как оформить заказ",
                path: "@:layout.paths.howToOrder",
              },
              {
                type: "link",
                label: "Доставка",
                path: "@:layout.paths.delivery",
              },
            ],
          },
          {
            type: "link",
            label: "Юридическим лицам",
            path: "@:layout.paths.entity",
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
            path: "@:layout.paths.home",
          },
          {
            type: "search",
            placehoder: "Поиск по сайту",
          },
          {
            type: "link",
            label: "Сравнить",
            icon: "graph",
            path: "@:layout.paths.compare",
          },
          {
            type: "link",
            label: "Избранное",
            icon: "heart",
            path: "@:layout.paths.favorites",
          },
          {
            type: "link",
            label: "Корзина",
            icon: "cart",
            path: "@:layout.paths.cart",
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
            path: "@:layout.paths.auth",
          },
        ],
      ],
    },
  },
};
