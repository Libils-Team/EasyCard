<template>
  <header class="header-top">
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
  computed: {
    locale() {
      return this.$store.getters["app/getLocale"];
    },
    menu() {
      return this.$i18n.messages[this.locale].header.navbarTop.menu;
    },
  },
};
</script>
