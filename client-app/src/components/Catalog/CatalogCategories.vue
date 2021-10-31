<template>
  <div>
    {{ categories }}
  </div>
</template>

<script>
export default {
  name: "CatalogCategories",
  props: {
    categories: {
      type: [Object, Array],
      default: () => [],
    },
  },
};
</script>
