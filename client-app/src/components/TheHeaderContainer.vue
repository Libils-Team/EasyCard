<template>
  <section>
    <TheHeaderTop :menu="menuTop" />
    <TheHeaderMain />
  </section>
</template>

<script>
import TheHeaderTop from "@/components/TheHeaderTop";
import TheHeaderMain from "@/components/TheHeaderMain";
export default {
  name: "TheHeaderContainer",
  components: {
    TheHeaderTop,
    TheHeaderMain,
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
