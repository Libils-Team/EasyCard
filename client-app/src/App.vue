<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    // eslint-disable-next-line no-undef
    console.log(procces.env.test);
  },
};
</script>
