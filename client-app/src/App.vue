<template>
  <div class="wrapper">
    <TheNavbar />
    <div class="container">
      <router-view />
    </div>
    <TheFooter />
    <ModalContainer />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import TheFooter from "@/components/TheFooter";
import ModalContainer from "@/components/ModalContainer";
export default {
  name: "App",
  components: {
    TheNavbar,
    ModalContainer,
    TheFooter,
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
