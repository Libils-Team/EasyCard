import paths from "@/i18n/modules/paths";
import languages from "@/i18n/modules/languages";

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
            label: "Catalog",
            path: paths.catalog,
          },
          {
            type: "link",
            label: "About company",
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
      menu: [],
    },
  },
};
