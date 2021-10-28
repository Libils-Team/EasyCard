<template>
  <section>
    <div class="inner">
      <div class="container">
        <BaseCarousel to="5" :dotsIs="false">
          <template #title>
            <h2 class="headline">{{ $t("home.popularProductsTitle") }}</h2>
          </template>
          <template #sliders>
            <BaseCarouselSlide v-for="item in list" :key="JSON.stringify(item)">
              <ProductCardPresentation v-bind="item" />
            </BaseCarouselSlide>
          </template>
        </BaseCarousel>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCardPresentation from "@/components/ProductCardPresentation";
import { API_REQUEST } from "@/modules/api";
export default {
  components: { ProductCardPresentation },
  name: "Home",
  data: () => ({
    list: [],
  }),
  async created() {
    this.list = await API_REQUEST("GetProductsByCategory", { categoryId: 10 });
  },
};
</script>

<style lang="scss" scoped>
.headline {
  font-size: $textXl;
}
</style>
