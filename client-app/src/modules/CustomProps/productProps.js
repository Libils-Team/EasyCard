export default {
  id: [Number, String],
  specifications: String,
  title: String,
  code: {
    type: [String, Number, Boolean],
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  imageGalery: {
    type: Array,
    default: null,
  },
  lates: {
    type: Boolean,
    default: false,
  },
  priceCurrent: {
    type: [String, Number],
    default: 0,
  },
  priceFrom: {
    type: Boolean,
    default: false,
  },
  priceOld: {
    type: [String, Number],
    default: "",
  },
  productCategory: {
    type: Object,
    default: () => ({}),
  },
  sale: {
    type: Boolean,
    default: false,
  },
  saleCount: {
    type: [String, Number, Boolean],
    default: false,
  },
  shortTitle: {
    type: String,
    default: "",
  },
  counterAddedToCart: {
    type: [String, Number],
    default: "",
  },
};
