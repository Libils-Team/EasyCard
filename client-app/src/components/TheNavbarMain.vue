<template>
  <header class="header header-main">
    <div class="inner">
      <div class="container">
        <Menu
          :menu="menu"
          :innerClassesNavigation="['flex', 'justify-between', 'align-center']"
          :innerClassesItem="['mr-3']"
          :innerClassesMenu="['flex', 'align-center']"
        />
      </div>
    </div>
  </header>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
  components: { Menu },
  name: "TheNavbarMain",
  props: {
    menu: {
      type: [Object, Array],
      required: true,
    },
  },
};
</script>
