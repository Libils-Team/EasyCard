<template>
  <div class="wrapper">
    <TheNavbar />

    <main>
      <div class="container">
        <TheCategory />
      </div>
      <router-view />
    </main>
    <TheFooter />
    <ModalContainer />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import TheFooter from "@/components/TheFooter";
import TheCategory from "@/components/TheCategory";
import ModalContainer from "@/components/ModalContainer";
export default {
  name: "App",
  components: {
    TheNavbar,
    ModalContainer,
    TheFooter,
    TheCategory,
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
