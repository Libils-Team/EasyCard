<template>
  <div class="card-actions">
    <BaseButton
      @click.prevent="handleAddNewItem"
      v-if="
        !Object.keys(productInCart).length &&
        $route.path !== $t('layout.paths.cart')
      "
    >
      {{ $t("product.addNewItemCart") }}
    </BaseButton>
    <div v-else class="flex align-center">
      <BaseButton
        @click.prevent="handleUpdateItem('remove')"
        style="width: 40px"
      >
        -
      </BaseButton>
      <router-link :to="$t('layout.paths.cart')" style="width: 100%">
        <BaseButton>
          <div class="flex justify-center flex-column">
            <p>
              {{ productInCart.counterAddedToCart }}
              {{ $t("product.counterProductInCartCount") }}
            </p>
            <small v-if="$route.path !== $t('layout.paths.cart')">
              {{ $t("product.followToCart") }}
              {{ $t("product.counterProductInCartTitle") }}
            </small>
          </div>
        </BaseButton>
      </router-link>
      <BaseButton @click.prevent="handleUpdateItem('add')" style="width: 40px">
        +
      </BaseButton>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductButton",
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    productInCart() {
      return this.$store.getters["shop/getProductCartById"](this.id);
    },
  },
  methods: {
    async handleAddNewItem() {
      await this.$store.dispatch("shop/addNewItemCart", this.id);
      this.$emit("addNewItem", this.id);
    },
    handleUpdateItem(action) {
      this.$store.dispatch("shop/updateItemCart", {
        action,
        id: this.id,
      });
      this.$emit("updateItem", {
        action,
        id: this.id,
      });
    },
  },
};
</script>
