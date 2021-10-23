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
            path: "?modal=navabar-ChooseCity",
          },
        ],
        [
          {
            type: "link",
            label: "Shops",
            path: paths.shops,
          },
          {
            type: "dropdown",
            label: "Buyers",
            dropdownMenu: [
              {
                type: "link",
                label: "How to place an order",
                path: paths.howToOrder,
              },
              {
                type: "link",
                label: "Delivery",
                path: paths.delivery,
              },
            ],
          },
          {
            type: "link",
            label: "Legal entities",
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
            icon: "phone",
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
            placehoder: "Site search",
          },
          {
            type: "link",
            label: "Compare",
            icon: "graph",
            path: paths.compare,
          },
          {
            type: "link",
            label: "Favorites",
            icon: "heart",
            path: paths.favorites,
          },
          {
            type: "link",
            label: "Cart",
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
            label: "log in",
            path: paths.auth,
          },
        ],
      ],
    },
  },
};
