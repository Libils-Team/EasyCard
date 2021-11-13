<template>
  <div class="wrapper">
    <BaseLoader :loading="$store.state.app._overlay" />
    <TheHeaderContainer />
    <main>
      <div class="container">
        <TheHeaderCategories />
        <Breadcrumbs
          class="mt-5"
          :breadcrumbs="[
            { path: '/', title: 'test' },
            { path: '/', title: 'test2' },
          ]"
        />
      </div>
      <router-view />
    </main>
    <TheFooter />
    <TheModalContainer />
  </div>
</template>

<script>
import TheHeaderContainer from "@/components/TheHeaderContainer";
import Breadcrumbs from "@/components/Breadcrumbs";
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
    Breadcrumbs,
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
