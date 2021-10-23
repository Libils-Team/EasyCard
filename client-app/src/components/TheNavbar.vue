<template>
  <section class="headers">
    <TheNavbarTop />
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
};
</script>
