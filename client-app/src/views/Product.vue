<template>
  <div>Product {{ id }}</div>
</template>

<script>
export default {
  name: "Product",
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
};
</script>

<style lang="scss" scoped></style>
