<template>
  <div class="catalog">
    <aside class="catalog-filters">asd</aside>
    <div class="catalog-content">
      <ProductCardPresentation
        v-for="item in products"
        :key="JSON.stringify(item)"
        v-bind="item"
      />
    </div>
  </div>
</template>

<script>
import ProductCardPresentation from "@/components/Product/ProductCardPresentation";
export default {
  name: "CatalogProducts",
  components: {
    ProductCardPresentation,
  },
  props: {
    products: {
      type: [Object, Array],
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog {
  display: flex;
  &-filters {
    width: 220px;
  }
  &-content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 1em;
    grid-auto-flow: dense;
    width: 100%;
    &::v-deep(.card-presentation) {
      margin: 0;
    }
  }
}
</style>