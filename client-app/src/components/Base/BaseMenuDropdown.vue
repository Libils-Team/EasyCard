<template>
  <div class="dropdown" @mouseover="isShow = true" @mouseleave="isShow = false">
    <div class="flex align-center dropdown-title">
      <slot name="title"></slot>
      <i class="ml-3 fas fa-chevron-down"></i>
    </div>
    <ul class="dropdown-menu" v-if="isShow">
      <li class="dropdown-menu__item">
        <slot name="dropdown"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BaseMenuDropdown",
  props: {
    title: String,
  },
  data: () => ({
    isShow: false,
  }),
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  user-select: none;
  z-index:20;
  &-title {
    cursor: pointer;
    i {
      color: $colorTextDark;
      font-size: 12px;
      margin-bottom: -3px;
    }
  }
  &-menu {
    position: absolute;
    top: 20px;
    width: 200px;
    background-color: $white;
    border: 1px solid $bgGrayShade;
    box-shadow: 0px 4px 12px rgb(0 0 0 / 10%);
    padding: 15px;
  }
}
</style>
