<template>
  <div class="catalog">
    <div class="catalog-content">
      <router-link
        :to="'/catalog/' + category.id"
        class="catalog-content__item"
        v-for="category in categories.dropdownMenu"
        :key="'catalog_item_' + category.id"
      >
        <img
          src="https://c.dns-shop.ru/thumb/st4/fit/220/150/0a09f6b0a3ba8b952f184999aae62ec2/2252f632365bda05431a61498a99b847b303e5ea3ade88a799fb9a6a7795e558.png"
          alt=""
        />
        <p class="mt-5">{{ category.label }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogCategories",
  props: {
    categories: {
      type: [Object, Array],
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog {
  &-content {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 1em;
    grid-auto-flow: dense;
    &__item {
      border-radius: 10px;
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 16%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 280px;
      &:hover {
        box-shadow: 0 8px 8px 0 rgb(0 0 0 / 5%), 0 29px 26px 0 rgb(0 0 0 / 8%);
      }
      p {
        color: $colorTextDark;
        font-size: $textMd;
        font-weight: bold;
      }
      img {
        width: 120px;
        height: 150px;
      }
    }
  }
}
</style>
