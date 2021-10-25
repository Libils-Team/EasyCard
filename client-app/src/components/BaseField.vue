<template>
  <label>{{ label }}</label>
  <slot></slot>
</template>

<script>
export default {
  name: "BaseField",
  props: {
    label: {
      type: String,
      default: "",
    },
  },
};
</script>
