<template>
  <div class="wrapper">
    <BaseLoader :loading="$store.state.app._overlay" />
    <TheHeaderContainer />
    <main>
      <div class="container">
        <TheHeaderCategories />
      </div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </main>
    <TheFooter />
    <TheModalContainer />
  </div>
</template>

<script>
import TheHeaderContainer from "@/components/TheHeaderContainer";
import TheHeaderCategories from "@/components/TheHeaderCategories";
import TheFooter from "@/components/TheFooter";
import TheModalContainer from "@/components/TheModalContainer";
export default {
  name: "App",
  components: {
    TheHeaderContainer,
    TheModalContainer,
    TheFooter,
    TheHeaderCategories,
  },
  async created() {
    await this.$store.dispatch("app/init");
  },
  watch: {
    $route: {
      immediate: true,
      handler(newRoute) {
        this.$store.commit("app/handleChangesRoute", newRoute);
      },
    },
  },
};
</script>
