<template>
  <button :class="['button-default', { 'button-default--outline': outline }]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    outline: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  &-default {
    cursor: pointer;
    height: 50px;
    max-width: 100%;
    color: $white;
    border-radius: 0;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    background: $colorAccentText;
    border: 1px solid transparent;
    box-shadow: none;
    padding: 0 1.2em;
    outline: none;
    transition: color 0.15s ease-in-out, background 0.15s ease-in-out,
      background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    &--outline {
      background: $bgGray;
      &:hover {
        background: $bgGray !important;
        border-color: transparent !important ;
      }
    }
    &:hover {
      background: $bgDark;
      color: $white;
      border-color: $bgDark;
      box-shadow: none;
      text-decoration: none;
    }
  }
}
</style>
