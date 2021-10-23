<template>
  <header class="header header-top">
    <div class="inner">
      <div class="container">
        <NavbarMenu
          :menu="menu"
          :innerClasses="['flex', 'justify-between', 'align-center']"
        />
      </div>
    </div>
  </header>
</template>

<script>
import NavbarMenu from "@/components/NavbarMenu.vue";
export default {
  components: { NavbarMenu },
  name: "TheNavbarTop",
  props: {
    menu: {
      type: [Object, Array],
      required: true,
    },
  },
};
</script>
