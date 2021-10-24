<template>
  <router-link
    class="menu-item__link flex align-center"
    v-if="item.type === 'link' || item.type === 'call-modal'"
    :to="item.path"
  >
    <i v-if="item.icon" :class="[item.icon, { 'mr-2': item.label }]"></i>
    {{ item.label }}
  </router-link>
  <p v-if="item.type === 'string'" class="menu-item__text flex align-center">
    <i v-if="item.icon" :class="[item.icon, { 'mr-2': item.label }]"></i>
    {{ item.label }}
  </p>
  <div v-if="item.type === 'lang'" class="menu-item__lang flex align-center">
    <p
      class="mr-2"
      v-for="lang in item.languages"
      :key="JSON.stringify(lang)"
      @click="$store.dispatch('app/changeLocale', lang.val)"
    >
      {{ lang.label }}
    </p>
  </div>
  <ul class="menu-item__dropdown dropdown-menu" v-if="item.type === 'dropdown'">
    <li
      class="dropdown-menu__item"
      v-for="dropdownItem in item.dropdownMenu"
      :key="JSON.stringify(dropdownItem)"
    >
      <NavbarMenuItem :item="dropdownItem" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavbarMenuItem",
  props: {
    item: {
      type: [Object, Array],
      required: true,
    },
  },
};
</script>
