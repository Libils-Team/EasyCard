<template>
  <section>
    <div class="inner">
      <div class="container">
        <div class="products-presentation">
          <ProductCardPresentation v-for="item in list" :key="JSON.stringify(item)" v-bind="item" />
        </div>
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
    list:[
      {
        image:"https://static-sl.insales.ru/r/OYcRTuu20pw/fit/440/0/ce/1/plain/images/products/1/2856/434785064/large_tovar__36_.jpg",
        title: "test",
        priceOld: "300",
        priceTo: true,
        priceCurrent:"4000",
      },
      {
        image:"https://static-sl.insales.ru/r/OYcRTuu20pw/fit/440/0/ce/1/plain/images/products/1/2856/434785064/large_tovar__36_.jpg",
        title: "test",
        priceOld: "300",
        priceTo: true,
        priceCurrent:"4000",
      },
      {
        image:"https://static-sl.insales.ru/r/OYcRTuu20pw/fit/440/0/ce/1/plain/images/products/1/2856/434785064/large_tovar__36_.jpg",
        title: "test",
        priceOld: "300",
        priceTo: true,
        priceCurrent:"4000",
      },
      {
        image:"https://static-sl.insales.ru/r/OYcRTuu20pw/fit/440/0/ce/1/plain/images/products/1/2856/434785064/large_tovar__36_.jpg",
        title: "test",
        priceOld: "300",
        priceTo: true,
        priceCurrent:"4000",
      },
      {
        image:"https://static-sl.insales.ru/r/OYcRTuu20pw/fit/440/0/ce/1/plain/images/products/1/2856/434785064/large_tovar__36_.jpg",
        title: "test",
        priceOld: "300",
        priceTo: true,
        priceCurrent:"4000",
      },
      {
        image:"https://static-sl.insales.ru/r/OYcRTuu20pw/fit/440/0/ce/1/plain/images/products/1/2856/434785064/large_tovar__36_.jpg",
        title: "test",
        priceOld: "300",
        priceTo: true,
        priceCurrent:"4000",
      },
      {
        image:"https://static-sl.insales.ru/r/OYcRTuu20pw/fit/440/0/ce/1/plain/images/products/1/2856/434785064/large_tovar__36_.jpg",
        title: "test",
        priceOld: "300",
        priceTo: true,
        priceCurrent:"4000",
      },
    ]
  })
};
</script>

<style lang="scss" scoped></style>
