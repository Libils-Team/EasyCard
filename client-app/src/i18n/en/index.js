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
            path: "@:layout.paths.shops",
          },
          {
            type: "dropdown",
            label: "Buyers",
            dropdownMenu: [
              {
                type: "link",
                label: "How to place an order",
                path: "@:layout.paths.howToOrder",
              },
              {
                type: "link",
                label: "Delivery",
                path: "@:layout.paths.delivery",
              },
            ],
          },
          {
            type: "link",
            label: "Legal entities",
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
            path: "@:layout.paths.home",
          },
          {
            type: "search",
            placehoder: "Site search",
          },
          {
            type: "link",
            label: "Compare",
            icon: "graph",
            path: "@:layout.paths.compare",
          },
          {
            type: "link",
            label: "Favorites",
            icon: "heart",
            path: "@:layout.paths.favorites",
          },
          {
            type: "link",
            label: "Cart",
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
            label: "log in",
            path: "@:layout.paths.auth",
          },
        ],
      ],
    },
  },
};
