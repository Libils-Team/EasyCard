<template>
  <section>
    <div class="container" v-if="headlineShow">
      <h1 class="mt-5 headline">{{ headline || $route.meta.title }}</h1>
    </div>
  </section>
  <section>
    <div class="inner">
      <div class="container">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BaseWrapper",
  props: {
    headline: {
      type: String,
      default: "",
    },
    headlineShow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.headline {
  font-size: $textXl + 0.2;
}
.inner {
  margin-top: 40px;
  margin-bottom: 80px;
}
</style>
