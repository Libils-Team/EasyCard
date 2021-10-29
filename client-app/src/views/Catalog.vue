<template>
  <div>Catalog</div>
</template>

<script>
import { API_REQUEST } from "@/modules/api";
export default {
  name: "Catalog",
  async mounted() {
    if (!this.$route.params?.id) {
      console.log(this.categories);
    } else {
      const category = this.$store.getters["shop/getCategoryById"](
        this.$route.params.id
      );

      this.list = await API_REQUEST("GetProductsByCategory", {
        categoryId: category.id,
      });
    }
  },
  computed: {
    categories() {
      return this.$store.getters["shop/getCategories"];
    },
  },
};
</script>

<style lang="scss" scoped></style>
