<template>
  <BaseWrapper>
    <CatalogCategories
      :categories="subCategories"
      v-if="
        Object.keys(subCategories).length &&
        Array.isArray(subCategories.dropdownMenu)
      "
    />
    <CatalogProducts
      :products="products"
      v-if="
        Object.keys(subCategories).length &&
        !Array.isArray(subCategories.dropdownMenu)
      "
    />
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
  }),
  watch: {
    subCategories() {
      this.getProducts();
    },
  },
  methods: {
    async getProducts() {
      if (
        Object.keys(this.subCategories).length &&
        !Array.isArray(this.subCategories.dropdownMenu)
      ) {
        this.products = await this.$store.dispatch(
          "shop/getProductsByCategory",
          { id: this.$route.params.id }
        );
      }
    },
  },
  computed: {
    subCategories() {
      return this.$store.getters["shop/getCategoryById"](this.$route.params.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
