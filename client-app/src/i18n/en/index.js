import paths from "@/i18n/modules/paths";
import languages from "@/i18n/modules/languages";
import global from "@/i18n/modules/global";

export default {
  global,
  layout: {
    paths,
    moneyTrack: "$",
  },
  header: {
    navbarTop: {
      menu: [
        [
          {
            type: "link",
            label: "Catalog",
            path: paths.catalog,
          },
          {
            type: "link",
            label: "About Us",
            path: paths.aboutUs,
          },
          {
            type: "link",
            label: "Contacts",
            path: paths.contacts,
          },
          {
            type: "link",
            label: "Delivery",
            path: paths.delivery,
          },
          {
            type: "link",
            label: "Payment",
            path: paths.payment,
          },
          {
            type: "link",
            label: "Account",
            path: paths.account,
          },
          {
            type: "link",
            label: "Blog",
            path: paths.blog,
          },
        ],
        [
          {
            type: "string",
            label: "From 8 a.m. to 11 p.m.",
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
      siteSearch: "Site search",
    },
  },
  home: {
    popularProductsTitle: "Popular products",
  },

  product: {
    priceFrom: "From",
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
          label: "Catalog",
          path: paths.catalog,
        },
        {
          type: "link",
          label: "About Us",
          path: paths.aboutUs,
        },
        {
          type: "link",
          label: "Contacts",
          path: paths.contacts,
        },
        {
          type: "link",
          label: "Dilivery",
          path: paths.delivery,
        },
        {
          type: "link",
          label: "Payment",
          path: paths.payment,
        },
        {
          type: "link",
          label: "Account",
          path: paths.account,
        },
        {
          type: "link",
          label: "Blog",
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
          label: "Catalog",
          path: paths.catalog,
        },
        {
          type: "link",
          label: "About Us",
          path: paths.aboutUs,
        },
        {
          type: "link",
          label: "Contacts",
          path: paths.contacts,
        },
        {
          type: "link",
          label: "Dilivery",
          path: paths.delivery,
        },
        {
          type: "link",
          label: "Payment",
          path: paths.payment,
        },
        {
          type: "link",
          label: "Account",
          path: paths.account,
        },
        {
          type: "link",
          label: "Blog",
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
          label: "Catalog",
          path: paths.catalog,
        },
        {
          type: "link",
          label: "About Us",
          path: paths.aboutUs,
        },
        {
          type: "link",
          label: "Contacts",
          path: paths.contacts,
        },
        {
          type: "link",
          label: "Dilivery",
          path: paths.delivery,
        },
        {
          type: "link",
          label: "Payment",
          path: paths.payment,
        },
        {
          type: "link",
          label: "Account",
          path: paths.account,
        },
        {
          type: "link",
          label: "Blog",
          path: paths.blog,
        },
      ],
    ],
    sidebar: {
      socialHeadline: "We are in social networks",
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
    onlineStore: "Online store",
    helpDesk: "Help desk",
  },
};
