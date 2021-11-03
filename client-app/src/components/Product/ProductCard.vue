<template>
  <div class="card-product">
    {{ title }}
  </div>
</template>

<script>
import ProductProps from "@/modules/productProps";
export default {
  name: "ProductCard",
  props: {
    ...ProductProps,
  },
};
</script>

<style lang="scss" scoped></style>
