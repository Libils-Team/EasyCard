<template>
  <section>
    <TheNavbarTop :menu="menuTop" />
    <TheNavbarMain />
  </section>
</template>

<script>
import TheNavbarTop from "@/components/TheNavbarTop";
import TheNavbarMain from "@/components/TheNavbarMain";
export default {
  name: "TheNavbar",
  components: {
    TheNavbarTop,
    TheNavbarMain,
  },
  computed: {
    locale() {
      return this.$store.getters["app/getLocale"];
    },
    menuTop() {
      return this.$i18n.messages[this.locale].header.navbarTop.menu;
    },
  },
};
</script>
