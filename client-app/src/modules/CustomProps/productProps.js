export default {
  specifications: String,
  id: {
    type: [String, Number],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
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
  imageGallery: {
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
