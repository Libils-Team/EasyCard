<template>
  <div class="card-product">
    {{ id }}
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    priceCurrent: {
      type: [Number, String],
      required: true,
    },
    priceOld: {
      type: [Number, String],
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    id: {
      type: [String, Number],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    imagePath: {
      type: String,
      required: true,
    },
    productCategory: {
      type: Object,
      default: () => ({}),
    },
    productCode: {
      type: [String, Number],
      required: true,
    },
    productData: {
      type: [String, Object],
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
