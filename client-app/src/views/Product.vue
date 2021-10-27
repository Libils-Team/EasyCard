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
    this.product =
      (await this.$store.dispatch(
        "shop/getProductById",
        this.$route.params.id
      )) || {};
    console.log(this.product);
    if (!Object.keys(this.product).length) this.$router.push("/");
  },
};
</script>

<style lang="scss" scoped></style>
