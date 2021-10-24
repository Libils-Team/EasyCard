import paths from "@/i18n/modules/paths";
import languages from "@/i18n/modules/languages";
import global from "@/i18n/modules/global";

export default {
  global,
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
            path: paths.contacts,
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
          {
            type: "lang",
            languages,
          },
        ],
      ],
    },
    navbarMain: {
      menu: [],
    },
  },
  footer: {
    menu: [
      [
        {
          type: "string",
          label: "Menu1",
        },
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
          path: paths.contacts,
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
          label: "Menu2",
        },
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
          path: paths.contacts,
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
          label: "Menu3",
        },
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
          path: paths.contacts,
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
    ],
    sidebar: {
      socialHeadline: "Мы есть в социальных сетях",
      socialList: [
        [
          {
            type: "icon",
            icon: "fab fa-instagram", //Instagram
          },
          {
            type: "icon",
            icon: "fab fa-facebook-square", //Facebook
          },
          {
            type: "icon",
            icon: "fab fa-youtube", //Youtube
          },
        ],
      ],
    },
  },
  settings: {
    onlineStore: "Интернет магазин",
    helpDesk: "Справочная служба",
  },
};
