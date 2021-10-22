<template>
  <div class="wrapper">
    <TheNavbarTop />
    <router-view />
  </div>
</template>

<script>
import TheNavbarTop from "@/components/TheNavbarTop";
export default {
  name: "App",
  components: {
    TheNavbarTop,
  },
  created(){
    console.log(this.$i18n)
    console.log(this.$t('layout'))
  }
};
</script>
