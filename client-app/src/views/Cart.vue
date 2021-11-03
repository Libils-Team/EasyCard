<template>
  <BaseWrapper>
    <div class="cart flex justify-between">
      <div class="cart-items">
        <ProductCardCart
          v-for="product in products"
          :key="'product_cart_item_' + product.id"
          :product="product"
          @removeItem="removeItemFromCart"
          @updateItem="updateItemInCart"
        />
      </div>
      <div class="cart-total">
        {{ total }}
      </div>
    </div>
  </BaseWrapper>
</template>

<script>
import ProductCardCart from "@/components/Product/ProductCardCart";
export default {
  name: "Cart",
  components: {
    ProductCardCart,
  },
  methods: {
    removeItemFromCart(id) {
      let ok = confirm(this.$t("product.removeItemFromList"));
      if (ok) {
        this.$store.dispatch("shop/removeItemFromCart", id);
      }
    },
    updateItemInCart({ action, id }) {
      this.$store.dispatch("shop/updateCartItemCounter", {
        action,
        id,
      });
    },
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

<style lang="scss" scoped>
.cart {
  &-items {
    width: 100%;
  }
}
</style>
