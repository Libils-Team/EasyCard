<template>
  <header class="header header-top">
    <div class="inner">
      <div class="container">
        <Menu
          :menu="menu"
          :innerClassesNavigation="['flex', 'justify-between', 'align-center']"
          :innerClassesItem="['mr-4']"
          :innerClassesMenu="['flex', 'align-center']"
        />
      </div>
    </div>
  </header>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  components: { Menu },
  name: "TheHeaderTop",
  props: {
    menu: {
      type: [Object, Array],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.header-top::v-deep {
  .menu {
    &-item {
      &__lang {
        p {
          cursor: pointer;
          transition: color 0.3s ease-in-out;
          &:hover {
            color: $colorTextDark;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
      &__link {
        color: $colorTextDark;
        font-size: $textMd;
        background-color: transparent;
      }
      &__text {
        font-size: $textMd;
        color: $colorTextDarkHalfShade;
      }
    }
  }
}
</style>
