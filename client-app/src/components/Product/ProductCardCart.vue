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
        <ProductButton :id="id" @updateItem="$emit('updateItem', $event)" />
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
import ProductButton from "@/components/Product/ProductButton";
export default {
  name: "ProductCardCart",
  components: {
    ProductButton,
  },
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
        font-size: $textLg + 0.2;
      }
    }
    &__image {
      width: 142px;
      height: 142px;
      img {
        object-position: 50% 0;
      }
    }
  }
}
</style>
