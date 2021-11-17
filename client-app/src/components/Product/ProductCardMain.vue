<template>
  <div class="card-product-main">
    <div class="card-product-main-box">
      <div class="card-product-main-testimonials"></div>
      <div class="card-product-main-code">
        <p>{{ $t("product.codeTitle") }} {{ code }}</p>
      </div>
    </div>
    <div class="card-product-main-box">
      <div class="card-product-main-header">
        <h2>{{ title }}</h2>
      </div>
    </div>
    <div class="card-product-main-box">
      <div class="card-product-main-price">
        <p>{{ priceCurrent }} {{ $t("layout.moneyTrack") }}</p>
        <p>{{ priceOld }} {{ $t("layout.moneyTrack") }}</p>
      </div>
    </div>
    <div class="card-product-main-box">
      <ProductButton :id="id" />
    </div>
  </div>
</template>

<script>
import ProductProps from "@/modules/CustomProps/productProps";
import ProductButton from "@/components/Product/ProductButton";
export default {
  components: { ProductButton },
  name: "ProductCardMain",
  props: {
    ...ProductProps,
  },
};
</script>
