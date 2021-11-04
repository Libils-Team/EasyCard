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
import CatalogCategories from "@/components/Catalog/CatalogCategories";
import CatalogProducts from "@/components/Catalog/CatalogProducts";
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
      if (!Array.isArray(this.subCategories.dropdownMenu)) {
        this.products = await this.$store.dispatch(
          "shop/getProductsByCategory",
          { categoryId: this.$route.params.id }
        );
      }
    },
  },
  async created() {
    await this.getProducts();
  },
  computed: {
    subCategories() {
      return this.$store.getters["shop/getCategoryById"](this.$route.params.id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
