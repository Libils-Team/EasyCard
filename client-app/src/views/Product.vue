<template>
  <BaseWrapper>
    <keep-alive>
      <ProductCard v-bind="product" />
    </keep-alive>
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
  }),
  async created() {
    const product = await this.$store.dispatch("shop/getProductsByIds", [
      this.$route.params.id,
    ]);
    if (product.length) this.product = product[0];
    else this.$router.push("/");
  },
};
</script>

<style lang="scss" scoped></style>
