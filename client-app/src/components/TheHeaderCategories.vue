<template>
  <Menu
    :menu="categories"
    :innerClassesMenu="['flex', 'align-center']"
    :innerClassesItem="['mr-4']"
  />
</template>

<script>
import Menu from "@/components/Menu";
export default {
  name: "TheHeaderCategories",
  components: {
    Menu,
  },
  computed: {
    categories() {
      return [this.$store.getters["shop/getCategories"]];
    },
  },
};
</script>
