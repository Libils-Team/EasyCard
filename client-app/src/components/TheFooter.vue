<template>
  <footer class="footer">
    <div class="inner">
      <div class="container">
        <div class="footer-area__menu flex justify-between">
          <Menu
            :innerClassesNavigation="['flex']"
            :innerClassesMenu="['mr-4']"
            :menu="menu"
          />
        </div>
        <div class="footer-area__sidebar"></div>
      </div>
    </div>
  </footer>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
  components: { Menu },
  name: "TheFooter",
  computed: {
    locale() {
      return this.$store.getters["app/getLocale"];
    },
    menu() {
      return this.$i18n.messages[this.locale].footer.menu;
    },
  },
};
</script>
