<template>
  <BaseWrapper v-if="list.length">
    <BaseCarousel v-bind="ops">
      <template #title>
        <h2 class="headline">{{ $t("home.popularProductsTitle") }}</h2>
      </template>
      <template #sliders>
        <BaseCarouselSlide
          v-for="item in list"
          :key="'product_presentation_' + item.id"
        >
          <ProductCardPresentation
            v-bind="item"
            @updateItem="updateItem"
            @addNewItem="addNewItem"
          />
        </BaseCarouselSlide>
      </template>
    </BaseCarousel>
  </BaseWrapper>
</template>

<script>
import ProductCardPresentation from "@/components/Product/ProductCardPresentation";
export default {
  components: { ProductCardPresentation },
  name: "Home",
  data: () => ({
    list: [],
    ops: {
      directionMove: "X",
      to: 5,
      dotsIs: false,
    },
  }),
  async created() {
    this.list = await this.$store.dispatch("shop/getProductsByCategory", {
      categoryId: 10,
    });
  },
  methods: {
    addNewItem(id) {
      console.log(`Add new item ${id} in cart`);
      // В ProductButton уже добавил
    },
    updateItem({ action, id }) {
      console.log(`Cart item ${id} is update: ${action}`);
      // В ProductButton уже обновил
    },
  },
};
</script>

<style lang="scss" scoped>
.headline {
  font-size: $textXl;
}
</style>
