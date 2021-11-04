<template>
  <section>
    <div class="container" v-if="headlineShow">
      <h1 class="mt-5 headline">{{ headline || $route.meta.title }}</h1>
    </div>
  </section>
  <section v-if="breadcrumbs.length">
    <div class="container">
      <div class="breadcrumbs">
        <div class="breadcrumbs-item">
          <router-link to="/">
            <span>Главная</span>
          </router-link>
        </div>
        <div
          class="breadcrumbs-item"
          v-for="({ title, path }, i) in breadcrumbs"
          :key="'breadcrumb_item_' + i"
        >
          /
          <router-link :to="path">
            <span> {{ title }}</span>
          </router-link>
        </div>
      </div>
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
    breadcrumbs: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.inner::v-deep {
  margin-top: 40px;
  margin-bottom: 80px;
}
</style>
