<template>
  <router-link
    v-if="item.type === 'link' || item.type === 'call-modal'"
    :to="item.path"
    class="flex align-center"
  >
    <i v-if="item.icon" :class="[item.icon, { 'mr-2': item.label }]"></i>
    {{ item.label }}
  </router-link>
  <p v-if="item.type === 'string'" class="flex align-center">
    <i v-if="item.icon" :class="[item.icon, { 'mr-2': item.label }]"></i>
    {{ item.label }}
  </p>
  <ul class="dropdown-menu" v-if="item.type === 'dropdown'">
    <li
      class="dropdown-item"
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
