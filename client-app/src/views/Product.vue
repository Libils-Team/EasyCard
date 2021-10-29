<template>
  <BaseWrapper>
    <BaseLoader :loading="loading && !$store.state.app._overlay" />
    <ProductCard v-bind="product" />
  </BaseWrapper>
</template>

<script>
import ProductCard from "@/components/ProductCard";
export default {
  name: "Product",
  components: {
    ProductCard,
  },
  data: () => ({
    product: {},
    loading: false,
  }),
  async created() {
    this.loading = true;
    const product = await this.$store.dispatch("shop/getProductsByIds", [
      this.$route.params.id,
    ]);
    if (product.length) this.product = product[0];
    else this.$router.push("/");
    this.loading = false;
  },
};
</script>

<style lang="scss" scoped></style>
