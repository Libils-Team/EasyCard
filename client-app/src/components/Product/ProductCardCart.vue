<template>
  <div class="card-product flex justify-between">
    <div class="card-product__detail flex">
      <div class="card-product__image">
        <img :src="image" :alt="title" />
      </div>
      <div class="card-product__info flex-column flex">
        <router-link style="flex: 1" class="headline" :to="path">
          {{ title }}
        </router-link>
        <p class="mb-4 subline">
          {{ priceCurrent }} {{ $t("layout.moneyTrack") }}
        </p>
        <div class="card-product__actions flex align-center">
          <BaseButton
            @click.prevent="
              $emit('updateItem', {
                action: false,
                id,
              })
            "
            style="width: 40px"
          >
            -
          </BaseButton>
          <BaseButton style="width: 70px">
            <div class="flex justify-center flex-column">
              <p>
                {{ counterAddedToCart }}
                {{ $t("product.counterProductInCartCount") }}
              </p>
            </div>
          </BaseButton>
          <BaseButton
            @click.prevent="
              $emit('updateItem', {
                action: true,
                id,
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
      <div class="card-product__delete" @click="$emit('removeItem', id)">
        <i class="fas fa-times text-half-gray"></i>
      </div>
      <div class="card-product__total">
        <p>
          {{ counterAddedToCart * priceCurrent }}
          {{ $t("layout.moneyTrack") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ProductProps from "@/modules/CustomProps/productProps";
export default {
  name: "ProductCardCart",
  props: {
    ...ProductProps,
  },
  computed: {
    path() {
      return `/product/${this.id}`;
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
      text-align: right;
      flex: 1;
      cursor: pointer;
      i {
        font-size: $iconSm;
      }
    }
    &__total {
      p {
        font-size: $textXl;
        color: $colorTextDark;
      }
    }
    &__info {
      .subline {
        color: $colorTextDark;
      }
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
