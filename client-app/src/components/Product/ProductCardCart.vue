<template>
  <div class="card-product flex justify-between">
    <div class="card-product__detail flex">
      <div class="card-product__image">
        <img :src="product.image" :alt="product.title" />
      </div>
      <div class="card-product__info flex-column flex">
        <router-link style="flex: 1" class="headline" :to="path">
          {{ product.title }}
        </router-link>
        <p class="mb-4">
          {{ product.priceCurrent }} {{ $t("layout.moneyTrack") }}
        </p>
        <div class="card-product__actions flex align-center">
          <BaseButton
            @click.prevent="
              $emit('updateItem', {
                action: false,
                id: product.id,
              })
            "
            style="width: 40px"
          >
            -
          </BaseButton>
          <BaseButton>
            <div class="flex justify-center flex-column">
              <p>
                {{ product.counterAddedToCart }}
                {{ $t("product.counterProductInCartCount") }}
              </p>
            </div>
          </BaseButton>
          <BaseButton
            @click.prevent="
              $emit('updateItem', {
                action: true,
                id: product.id,
              })
            "
            style="width: 40px"
          >
            +
          </BaseButton>
        </div>
      </div>
    </div>
    <div class="card-product__other flex flex-column">
      <div
        class="card-product__delete"
        @click="$emit('removeItem', product.id)"
      >
        <i class="fas fa-times text-half-gray"></i>
      </div>
      <div class="card-product__total">
        <p>
          {{ product.counterAddedToCart * product.priceCurrent }}
          {{ $t("layout.moneyTrack") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCardCart",
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    path() {
      return `/product/${this.product.id}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  &-product {
    &__actions::v-deep {
      button {
        height: 35 px;
      }
    }
    &__delete {
      flex: 1;
      i {
        font-size: $iconSm;
      }
    }
    &__info {
      .headline {
        font-size: $textLg;
      }
    }
    &__image {
      width: 132px;
      height: 132px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: 50% 0;
      }
    }
  }
}
</style>
