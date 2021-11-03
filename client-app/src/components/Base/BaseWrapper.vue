<template>
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
};
</script>

<style lang="scss" scoped>
section::v-deep {
  margin: 80px 0;
}
</style>
