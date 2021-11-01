<template>
  <div class="cart flex justify-between">
    <div class="cart-items">
      <ProductCardCart
        v-for="product in products"
        :key="'product_cart_item_' + product.id"
        :product="product"
      />
    </div>
    <div class="cart-total">
      {{ total }}
    </div>
  </div>
</template>

<script>
import ProductCardCart from "@/components/Product/ProductCardCart";
export default {
  name: "CartProducts",
  components: {
    ProductCardCart,
  },
  props: {
    total: {
      type: [Number, String],
      default: 0,
    },
    products: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  &-items {
    width: 100%;
  }
}
</style>
