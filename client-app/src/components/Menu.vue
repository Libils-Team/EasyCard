<template>
  <nav :class="innerClassesNavigation">
    <ul
      :class="['menu', innerClassesMenu]"
      v-for="item in menu"
      :key="JSON.stringify(item)"
    >
      <li
        :class="['menu-item', innerClassesItem]"
        v-for="li in item"
        :key="JSON.stringify(li)"
      >
        <MenuItem :item="li" />
      </li>
    </ul>
  </nav>
</template>

<script>
import MenuItem from "@/components/MenuItem";
export default {
  components: { MenuItem },
  name: "Menu",
  props: {
    menu: {
      type: [Object, Array],
      default: () => [],
    },
    innerClassesNavigation: {
      type: Array,
      default: () => [],
    },
    innerClassesMenu: {
      type: Array,
      default: () => [],
    },
    innerClassesItem: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
