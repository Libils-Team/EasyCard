<template>
  <div class="card-presentation">
    <router-link :to="path">
      <div class="card-presentation-image">
        <img :src="image" :alt="title" />
      </div>
      <div class="card-presentation-title">
        <h2 class="headline">{{ title }}</h2>
      </div>
      <div class="card-presentation-price">
        <div class="card-presentation-price__old" v-if="!!priceOld.length">
          <p class="text-half-gray">
            {{ priceOld }} {{ $t("layout.moneyTrack") }}
          </p>
        </div>
        <div class="card-presentation-price__current flex align-center">
          <span class="text-half-gray mr-2">
            {{ priceFrom ? $t("product.priceFrom") : "" }}
          </span>
          <p>
            {{ priceCurrent + $t("layout.moneyTrack") }}
          </p>
        </div>
      </div>
      <div class="card-presentation-actions">
        <BaseButton @click.prevent="addToCart" v-if="!inCart">
          В корзину
        </BaseButton>
        <div v-else class="flex align-center">
          <BaseButton style="width: 25%">-</BaseButton>
          <router-link :to="$t('paths.cart')">
            <BaseButton style="width: 50%">В корзину</BaseButton>
          </router-link>
          <BaseButton style="width: 25%">+</BaseButton>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ProductCardPresentation",
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    priceOld: {
      type: String,
      default: "",
    },
    priceFrom: {
      type: Boolean,
      default: false,
    },
    priceCurrent: {
      type: String,
      required: true,
    },
  },

  methods: {
    addToCart() {
      this.$store.dispatch("shop/addToCart", this.id);
    },
  },

  computed: {
    inCart() {
      return this.$store.getters["shop/getProductCartById"](this.id);
    },
    path() {
      return `/product/${this.id}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  &-presentation {
    margin: 10px 10px 10px 0;
    &-image {
      img {
        width: 100%;
      }
    }
    &-title {
      margin-bottom: 0.5rem;
      h2 {
        word-break: break-word;
        color: $colorTextDark;
        font-weight: 300;
        font-size: $textLg;
      }
    }

    &-price {
      margin-bottom: 0.5rem;
      &__old {
        p {
          word-break: nowrap;

          font-weight: 400;
          font-size: $textMd;
          text-decoration: line-through;
        }
      }
      &__current {
        p {
          color: $colorTextDark;
          word-break: nowrap;
          font-weight: 600;
          font-size: $textXl;
        }
      }
    }
  }
}
</style>
