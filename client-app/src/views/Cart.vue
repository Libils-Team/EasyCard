<template>
  <BaseWrapper>
    <div class="cart flex justify-between">
      <div class="cart-items">
        <ProductCardCart
          v-for="product in products"
          :key="'product_cart_item_' + product.id"
          v-bind="product"
          @removeItem="removeItemFromCart"
          @updateItem="updateItemInCart"
        />
      </div>
      <div class="cart-total">
        <div class="cart-total-wrapper">
          <h2 class="flex align-center justify-between">
            <span>Total:</span>
            <span>{{ total }} {{ $t("layout.moneyTrack") }}</span>
          </h2>
          <router-link to="/checkout">
            <BaseButton> Оформить заказ </BaseButton>
          </router-link>
        </div>
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
.card-product::v-deep {
  margin-bottom: 50px;
  &:last-child {
    margin-bottom: 0;
  }
}
.cart {
  &-items {
    width: 70%;
    margin-right: 30px;
  }

  &-total {
    width: 30%;
    h2 {
      margin-bottom: 30px;
      color: $colorTextDark;
    }
    &-wrapper {
      align-self: flex-start;
      top: 20px;
      position: sticky;
      padding: 1.5rem;
      border-radius: 0;
      background: $bgGray;
    }
  }
}
</style>
