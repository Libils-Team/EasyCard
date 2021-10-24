<template>
  <footer class="footer">
    <div class="inner">
      <div class="container footer-area flex justify-between">
        <div class="footer-area__menu flex justify-between">
          <Menu
            :innerClassesNavigation="['flex']"
            :innerClassesMenu="['mr-4']"
            :innerClassesItem="['mb-4']"
            :menu="i18n.menu"
          />
        </div>
        <div class="footer-area__sidebar">
          <div class="footer-area__sidebar-social mb-4">
            <h4 class="mb-4 headline">{{ i18n.sidebar.socialHeadline }}</h4>
            <Menu
              :menu="i18n.sidebar.socialList"
              :innerClassesMenu="['flex', 'align-center']"
              :innerClassesItem="['mr-4']"
            />
          </div>
          <div class="footer-area__sidebar-phone">
            <h4 class="headline">{{ $t("global.phoneHelpDesk") }}</h4>
            <small>{{ $t("settings.helpDesk") }}</small>
          </div>
          <div class="footer-area__sidebar-phone">
            <h4 class="headline">{{ $t("global.phoneOnlineStore") }}</h4>
            <small>{{ $t("settings.onlineStore") }}</small>
          </div>
        </div>
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
    i18n() {
      return this.$i18n.messages[this.locale].footer;
    },
  },
};
</script>
