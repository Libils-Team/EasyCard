<template>
  <template v-if="item.type === 'link' || item.type === 'call-modal'">
    <a
      v-if="item.type === 'link' && item.path.match(/tel:/)"
      class="menu-item__link flex align-center"
      :href="item.path"
    >
      <i
        v-if="item.icon"
        :class="['menu-item__icon', item.icon, { 'mr-2': item.label }]"
      ></i>
      {{ item.label }}
    </a>
    <router-link
      v-else
      class="menu-item__link flex align-center"
      :to="item.path"
    >
      <i
        v-if="item.icon"
        :class="['menu-item__icon', item.icon, { 'mr-2': item.label }]"
      ></i>
      {{ item.label }}
    </router-link>
  </template>
  <i v-if="item.type === 'icon'" :class="[item.icon]"></i>
  <p v-if="item.type === 'string'" class="menu-item__text flex align-center">
    <i v-if="item.icon" :class="[item.icon, { 'mr-2': item.label }]"></i>
    {{ item.label }}
  </p>
  <div v-if="item.type === 'lang'" class="menu-item__lang flex align-center">
    <p
      :class="['mr-3', { 'text-half-gray': lang.val !== $i18n.locale }]"
      v-for="lang in item.languages"
      :key="JSON.stringify(lang)"
      @click="
        $store.dispatch('app/changeLocale', lang.val), ($i18n.locale = lang.val)
      "
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
      <MenuItem :item="dropdownItem" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    item: {
      type: [Object, Array],
      required: true,
    },
  },
};
</script>
