<template>
  <div :class="['form-control', { 'form-control-search': type === 'search' }]">
    <input
      @input="$emit('update:modelValue', $event.target.value)"
      :class="[
        'input-default',
        {
          'input-default--outline': outline,
        },
      ]"
      :style="innerStyles"
      :type="type"
      :placeholder="placeholder"
    />
    <BaseButton style="width: 55px; height:50px;" :outline="true" v-if="type === 'search'">
      <i class="fas fa-search icon-search"></i>
    </BaseButton>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    modelValue: String,
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    outline: {
      type: Boolean,
      default: false,
    },
    innerStyles: {
      type: [Object, Array],
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-search {
  transition: color 0.3s ease;
  &:hover {
    color: $colorTextDark;
  }
}
.form {
  &-control {
    position: relative;
    &-search {
      display: flex;
    }
  }
}

.input {
  &-default {
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }

    width: 100%;
    height: 50px;
    padding: calc(1em * 0.4) 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    min-width: 150px;
    color: $colorTextDark;
    background: $bgGray;
    border-radius: 0;
    border: none;
    box-shadow: none;
    outline: 0;
    vertical-align: middle;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &--outline {
      background: $white;
      border-color: $bgGray;
      color: $colorTextDark;
      border: 1px solid #808080;
    }
  }
}
</style>
