<template>
  <section>
    <div class="inner">
      <div class="container">
        <ProductCardPresentation />
      </div>
    </div>
  </section>
</template>

<script>
import ProductCardPresentation from "@/components/ProductCardPresentation";
export default {
  components: { ProductCardPresentation },
  name: "Home",
};
</script>

<style lang="scss" scoped></style>
