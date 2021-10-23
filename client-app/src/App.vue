<template>
  <div class="wrapper">
    <TheNavbar />
    <router-view />
    <ModalContainer />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import ModalContainer from "@/components/ModalContainer";
export default {
  name: "App",
  components: {
    TheNavbar,
    ModalContainer,
  },
  created() {
    this.$store.dispatch("app/init");
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
