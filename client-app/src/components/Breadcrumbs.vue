<template>
  <div class="breadcrumbs flex" v-if="breadcrumbs.length">
    <div class="breadcrumbs-item">
      <router-link class="breadcrumbs-item__link text-half-gray mr-3" to="/">
        <span>Главная</span>
      </router-link>
    </div>
    <div
      class="breadcrumbs-item mr-3"
      v-for="({ title, path }, i) in breadcrumbs"
      :key="'breadcrumb_item_' + i"
    >
      <span class="text-half-gray">/</span>
      <router-link
        class="breadcrumbs-item__link text-half-gray ml-3"
        :to="path"
      >
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
