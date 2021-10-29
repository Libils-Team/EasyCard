<template>
  <div class="loading-wrapper" v-if="loading">
    <div class="loading-wrapper-overlay"></div>
    <div class="loading-wrapper-loader"></div>
  </div>
</template>

<script>
export default {
  name: "BaseLoader",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang='scss' scoped>
.loading {
  &-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    &-overlay {
      position: relative;
      background: $bgGrayShade;
      opacity: 0.6;
      width: 100%;
      height: 100%;
      z-index: 100;
    }

    &-loader {
      position: absolute;
      left: 48%;
      top: 48%;
      transform: translate(-50%, -50%);
      height: 80px;
      width: 80px;
      border-radius: 50%;
      border: 2px solid transparent;
      border-left: 2px solid $colorAccentText;
      border-right: 2px solid $colorAccentText;
      border-bottom: 2px solid $colorAccentText;
      z-index: 105;
      -webkit-animation: spin 1s linear infinite;
      animation: spin 1s linear infinite;
    }
  }
}
</style>
