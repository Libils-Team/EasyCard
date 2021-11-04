<template>
  <div class="card-product">
    {{ title }}
  </div>
</template>

<script>
import ProductProps from "@/modules/CustomProps/productProps";
export default {
  name: "ProductCard",
  props: {
    ...ProductProps,
  },
};
</script>

<style lang="scss" scoped></style>
