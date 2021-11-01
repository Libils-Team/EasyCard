<template>
  <div class="card-product">
    {{ product.id }}
  </div>
</template>

<script>
export default {
  name: "ProductCardCart",
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
