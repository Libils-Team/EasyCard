<template>
  <section>
    <div class="inner">
      <div class="container">
        <BaseCarousel to="5" :dotsIs="false">
        <template #title>
          <h2 class="headline">{{ $t('home.popularProductsTitle') }}</h2>
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
export default {
  components: { ProductCardPresentation },
  name: "Home",
  data: () => ({
    list: [
      {
        id: 1,
        image:
          "https://static-sl.insales.ru/r/OYcRTuu20pw/fit/440/0/ce/1/plain/images/products/1/2856/434785064/large_tovar__36_.jpg",
        title: "test",
        priceOld: "300",
        priceFrom: true,
        priceCurrent: "4000",
      },
      {
        id: 2,
        image:
          "https://static-sl.insales.ru/r/OYcRTuu20pw/fit/440/0/ce/1/plain/images/products/1/2856/434785064/large_tovar__36_.jpg",
        title: "test",
        priceOld: "300",
        priceFrom: true,
        priceCurrent: "4000",
      },
      {
        id: 3,
        image:
          "https://static-sl.insales.ru/r/OYcRTuu20pw/fit/440/0/ce/1/plain/images/products/1/2856/434785064/large_tovar__36_.jpg",
        title: "test",
        priceOld: "300",
        priceFrom: true,
        priceCurrent: "4000",
      },
      {
        id: 4,
        image:
          "https://static-sl.insales.ru/r/OYcRTuu20pw/fit/440/0/ce/1/plain/images/products/1/2856/434785064/large_tovar__36_.jpg",
        title: "test",
        priceOld: "300",
        priceFrom: true,
        priceCurrent: "4000",
      },
      {
        id: 5,
        image:
          "https://static-sl.insales.ru/r/OYcRTuu20pw/fit/440/0/ce/1/plain/images/products/1/2856/434785064/large_tovar__36_.jpg",
        title: "test",
        priceOld: "300",
        priceFrom: true,
        priceCurrent: "4000",
      },
      {
        id: 6,
        image:
          "https://static-sl.insales.ru/r/OYcRTuu20pw/fit/440/0/ce/1/plain/images/products/1/2856/434785064/large_tovar__36_.jpg",
        title: "test",
        priceOld: "300",
        priceFrom: true,
        priceCurrent: "4000",
      },
      {
        id: 7,
        image:
          "https://static-sl.insales.ru/r/OYcRTuu20pw/fit/440/0/ce/1/plain/images/products/1/2856/434785064/large_tovar__36_.jpg",
        title: "test",
        priceOld: "300",
        priceFrom: true,
        priceCurrent: "4000",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
  .headline{
    font-size: $textXl;
  }
</style>
