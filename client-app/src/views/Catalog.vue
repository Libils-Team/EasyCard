<template>
  <BaseWrapper>
    <CatalogCategories :categories="subCategories" />
    <CatalogProducts :products="products" />
  </BaseWrapper>
</template>

<script>
// import { API_REQUEST } from "@/modules/api";
import CatalogCategories from "@/components/CatalogCategories";
import CatalogProducts from "@/components/CatalogProducts";
export default {
  name: "Catalog",
  components: {
    CatalogProducts,
    CatalogCategories,
  },
  data: () => ({
    products: [],
    subCategories: [],
  }),
  created() {
    this.subCategories = this.$store.dispatch("shop/getCategoryById");
  },
};
</script>

<style lang="scss" scoped></style>
