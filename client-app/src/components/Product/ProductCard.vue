<template>
  <div class="card-product">
    <div class="card-product-top">
      <BaseCarousel vertical :to="1">
        <BaseCarouselSlide>
          <img :src="image" :alt="title" />
        </BaseCarouselSlide>
        <BaseCarouselSlide
          v-for="(imageItem, i) in imageGallery"
          :key="'image_gallery_' + i"
        >
          <img :src="imageItem" />
        </BaseCarouselSlide>
      </BaseCarousel>
      <div class="card-product-main">
        <div class="card-product-top__box">
          <div class="card-product-main__testimonials"></div>
          <div class="card-product-main__code">
            <p>арт. {{ code }}</p>
          </div>
        </div>
        <div class="card-product-top__box">
          <div class="card-product-main__header">
            <h2>{{ title }}</h2>
          </div>
        </div>
        <div class="card-product-top__box">
          <div class="card-product-main__price">
            <p>{{ priceCurrent }} {{ $t("layout.moneyTrack") }}</p>
            <p>{{ priceOld }} {{ $t("layout.moneyTrack") }}</p>
          </div>
        </div>
        <div class="card-product-top__box">
          <ProductButton :id="id" />
        </div>
      </div>
    </div>
    <div class="card-product-bottom"></div>
  </div>
</template>

<script>
import ProductProps from "@/modules/CustomProps/productProps";
import ProductButton from "@/components/Product/ProductButton";
export default {
  components: { ProductButton },
  name: "ProductCard",
  props: {
    ...ProductProps,
  },
};
</script>

<style lang="scss" scoped></style>
