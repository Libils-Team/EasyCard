<template>
  <section>
    <TheNavbarTop :menu="menuTop" />
    <TheNavbarMain :menu="menuMain" />
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
    menuMain() {
      return this.$i18n.messages[this.locale].header.navbarMain.menu;
    },
    menuTop() {
      return this.$i18n.messages[this.locale].header.navbarTop.menu;
    },
  },
};
</script>
