<template>
  <div :class="['form-control', { 'form-control-search': type === 'search' }]">
    <input
      :class="[
        'input-default',
        {
          'input-default--outline': outline,
        },
      ]"
      :style="innerStyles"
      :type="type"
      :placeholder="placeholder"
      @blur="blur"
      @focus="focus"
    />
    <BaseButton outline v-if="type === 'search'">
      <i class="fas fa-search"></i>
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton";
export default {
  name: "BaseInput",
  components: {
    BaseButton,
  },
  props: {
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
  methods: {
    blur() {},
    focus() {},
  },
};
</script>

<style lang="scss" scoped>
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
    color: #333333;
    background: #f7f7f7;
    border-radius: 0;
    border: none;
    box-shadow: none;
    outline: 0;
    vertical-align: middle;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &--outline {
      background: #fff;
      border-color: #f7f7f7;
      color: #333333;
      border: 1px solid #808080;
    }
  }
}
</style>
