<template>
  <header class="header header-top">
    <div class="inner">
      <div class="container">
        <Menu
          :menu="menu"
          :innerClassesNavigation="['flex', 'justify-between', 'align-center']"
          :innerClassesItem="['mr-4']"
          :innerClassesMenu="['flex', 'align-center']"
        />
      </div>
    </div>
  </header>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  components: { Menu },
  name: "TheHeaderTop",
  props: {
    menu: {
      type: [Object, Array],
      required: true,
    },
  },
};
</script>
