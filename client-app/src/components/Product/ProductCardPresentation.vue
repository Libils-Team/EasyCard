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
        <div
          class="card-presentation-price__old"
          :style="{ opacity: priceOld ? 1 : 0 }"
        >
          <p class="text-half-gray">
            {{ priceOld || 0 }} {{ $t("layout.moneyTrack") }}
          </p>
        </div>
        <div class="card-presentation-price__current flex">
          <span class="mr-2" v-if="priceFrom">
            {{ $t("product.priceFrom") }}
          </span>
          <p>
            {{ priceCurrent + $t("layout.moneyTrack") }}
          </p>
        </div>
      </div>
      <ProductButton
        :id="id"
        @updateItem="$emit('updateItem', $event)"
        @addNewItem="$emit('addNewItem', $event)"
      />
      <div class="card-presentation-small-info flex align-center">
        <div class="card-presentation-small-info__item" v-if="lates">
          <p>{{ $t("product.latesTitle") }}</p>
        </div>
        <div class="card-presentation-small-info__item" v-if="sale">
          <p>
            {{ $t("product.saleTitle") }}
          </p>
        </div>
        <div
          class="
            card-presentation-small-info__item
            card-presentation-small-info__item--accent-red
          "
          v-if="saleCount"
        >
          <p>{{ saleCount }}%</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import ProductProps from "@/modules/CustomProps/productProps";
import ProductButton from "@/components/Product/ProductButton";
export default {
  name: "ProductCardPresentation",
  components: { ProductButton },
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
  &-presentation {
    position: relative;
    padding: 10px 10px 10px 0;
    &-small-info {
      position: absolute;
      top: 10px;
      left: 0;
      &__item {
        margin: 0 5px 5px 0;
        padding: 0.35em;
        line-height: 1;
        border-radius: 0;
        background-color: $colorAccentText;
        p {
          font-size: $textSm;
          color: $white;
        }
        &--accent-red {
          background: #ff4a31;
        }
      }
    }

    &-price {
      &__current {
        span {
          align-self: flex-end;
        }
        p {
          line-height: 28px;
        }
      }
    }
    &:hover {
      &::v-deep(.card-actions) {
        opacity: 1;
      }
    }
    &::v-deep(.card-actions) {
      transition: opacity 0.3s ease;
      opacity: 0;
      a {
        width: 100%;
      }
    }
    &-image {
      width: 248px;
      height: 248px;
    }
    &-title {
      margin-bottom: 0.5rem;
      h2 {
        word-break: break-word;
        color: $colorTextDark;
        font-weight: 400;
        font-size: $textLg;
      }
    }

    &-price {
      margin-bottom: 0.5rem;
      &__old {
        p {
          word-break: break-word;
          font-weight: 400;
          font-size: $textLg;
          text-decoration: line-through;
        }
      }
      &__current {
        p {
          color: $colorTextDark;
          word-break: break-word;
          font-weight: 600;
          font-size: $textXl;
        }
      }
    }
  }
}
</style>
