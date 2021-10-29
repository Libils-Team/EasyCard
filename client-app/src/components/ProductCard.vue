<template>
  <div class="card-product">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    priceCurrent: {
      type: [Number, String],
      default: 0,
    },
    priceOld: {
      type: [Number, String],
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    id: [String, Number],
    title: {
      type: String,
      default: "",
    },
    imagePath: {
      type: String,
      default: "",
    },
    productCategory: {
      type: Object,
      default: () => ({}),
    },
    productCode: {
      type: [String, Number],
      default: 0,
    },
    productData: {
      type: [String, Object],
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
