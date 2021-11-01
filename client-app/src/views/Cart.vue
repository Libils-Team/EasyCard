<template>
  <BaseWrapper>
    <CartProducts :products="products" :total="total" />
  </BaseWrapper>
</template>

<script>
import CartProducts from "@/components/Cart/CartProducts";
export default {
  name: "Cart",
  components: {
    CartProducts,
  },
  computed: {
    products() {
      return this.$store.getters["shop/getCartItems"];
    },
    total() {
      return this.$store.getters["shop/getCartItemsTotal"];
    },
  },
};
</script>

<style lang="scss" scoped></style>
