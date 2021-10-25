<template>
  <Menu :menu="menu" :innerClassesMenu="['flex', 'align-center']" />
</template>

<script>
import Menu from "@/components/Menu";
export default {
  name: "TheCategory",
  components: {
    Menu,
  },
  computed: {
    categories() {
      return [];
    },
  },
};
</script>
