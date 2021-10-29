<template>
  <div>
    {{ products }}
  </div>
</template>

<script>
export default {
  name: "CatalogProducts",
  props: {
    products: {
      type: [Object, Array],
      default: () => [],
    },
  },
};
</script>
