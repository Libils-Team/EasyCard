<template>
  <nav :class="innerClasses">
    <ul class="header-menu" v-for="item in menu" :key="JSON.stringify(item)">
      <li class="mr-3" v-for="li in item" :key="JSON.stringify(li)">
        <NavbarMenuItem :item="li" />
      </li>
    </ul>
  </nav>
</template>

<script>
import NavbarMenuItem from "@/components/NavbarMenuItem";
export default {
  components: { NavbarMenuItem },
  name: "NavbarMenu",
  props: {
    menu: {
      type: [Object, Array],
      required: true,
    },
    innerClasses: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
