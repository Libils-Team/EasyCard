<template>
  <BaseWrapper v-if="Object.keys(product).length">
    <BaseCarousel v-bind="ops">
      <template #sliders>
        <BaseCarouselSlide>
          <img :src="product.image" />
        </BaseCarouselSlide>
        <BaseCarouselSlide
          v-for="(imageItem, i) in product.imageGallery"
          :key="'product_main_gallery' + i"
        >
          <img :src="imageItem" />
        </BaseCarouselSlide>
      </template>
    </BaseCarousel>
    <ProductCardMain v-bind="product" />
    <!-- <ProductCardMainSpecifications v-bind="product" /> -->
  </BaseWrapper>
</template>

<script>
import ProductCardMain from "@/components/Product/ProductCardMain";
// import ProductCardMainSpecifications from "@/components/Product/ProductCardMainSpecifications";
export default {
  name: "Product",
  components: {
    ProductCardMain,
    // ProductCardMainSpecifications,
  },
  data: () => ({
    product: {},
    ops: {
      directionMove: "Y",
      once: true,
    },
  }),
  async created() {
    const product = await this.$store.dispatch("shop/getProductsByIds", [
      this.$route.params.id,
    ]);
    if (product.length) this.product = product[0];
    else this.$router.push("/");
  },
};
</script>
