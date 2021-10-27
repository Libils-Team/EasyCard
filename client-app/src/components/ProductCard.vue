<template>
  <div class="card-product"></div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    priceOld: {
      type: String,
      default: "",
    },
    priceFrom: {
      type: Boolean,
      default: false,
    },
    priceCurrent: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
