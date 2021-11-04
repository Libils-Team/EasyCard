<template>
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
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: {
    breadcrumbs: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
