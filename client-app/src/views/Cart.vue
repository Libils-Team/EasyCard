<template>
  <BaseWrapper headlineShow>
    <div class="cart flex justify-between">
      <div class="cart-items">
        <transition-group
          v-if="products.length"
          name="list-transition"
          tag="div"
        >
          <ProductCardCart
            class="list-transition-item"
            v-for="product in products"
            :key="'product_cart_item_' + product.id"
            v-bind="product"
            @removeItem="removeItemFromCart"
            @updateItem="updateItemInCart"
          />
        </transition-group>
        <transition name="no-products">
          <div v-if="!products.length">
            <p style="font-size: 1.2rem; font-weight: 500">
              {{ $t("product.noProductsInCartTitle") }}
            </p>
          </div>
        </transition>
      </div>
      <div class="cart-total">
        <transition name="no-products">
          <div class="cart-total-wrapper" v-if="products.length">
            <h2 class="flex align-center justify-between">
              <span>Total:</span>
              <span>{{ total }} {{ $t("layout.moneyTrack") }}</span>
            </h2>
            <router-link to="/checkout">
              <BaseButton> {{ $t("product.checkoutBtnTitle") }} </BaseButton>
            </router-link>
          </div>
        </transition>
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
.no-products-enter-active {
  transition: all 0.3s ease-out;
}

.no-products-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.no-products-enter-from,
.no-products-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.list-transition-item {
  transition: all 0.4s ease;
}

.list-transition-enter-from,
.list-transition-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
.list-transition-leave-active {
  position: absolute;
  width: 100%;
}
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
    position: relative;
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
