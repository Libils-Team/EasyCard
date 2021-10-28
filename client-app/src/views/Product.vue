<template>
  <section>
    <div class="inner">
      <div class="container">
        <ProductCard v-bind="product" />
      </div>
    </div>
  </section>
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

    if (!product.length) this.$router.push("/");
    else this.product = product[0];
  },
};
</script>

<style lang="scss" scoped></style>
