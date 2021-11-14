<template>
  <BaseWrapper>
    <BaseCarousel to="5" :dotsIs="false" v-if="list.length">
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
  }),
  async created() {
    this.list = await this.$store.dispatch("shop/getProductsByCategory", {
      categoryId: 10,
    });
  },
  methods: {
    async addNewItem(id) {
      await this.$store.dispatch("shop/addNewItemCart", id);
    },
    updateItem({ action, id }) {
      this.$store.dispatch("shop/updateItemCart", {
        action,
        id,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.headline {
  font-size: $textXl;
}
</style>
