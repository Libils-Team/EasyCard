<template>
  <div class="card-presentation">
    <router-link :to="path">
      <div class="card-presentation-image">
        <img :src="image" :alt="title" />
      </div>
      <div class="card-presentation-title">
        <h2 class="headline">{{ title }}</h2>
      </div>
      <div class="card-presentation-price">
        <div class="card-presentation-price__old">
          <h4 class="headline text-half-gray">
            {{ priceOld }} {{ $t("layout.moneyTrack") }}
          </h4>
        </div>
        <div class="card-presentation-price__current">
          <h4 class="headline text-half-gray">
            {{ priceTo }} {{ priceCurrent }} {{ $t("layout.moneyTrack") }}
          </h4>
        </div>
      </div>
      <BaseButton>Выбрать</BaseButton>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ProductCardPresentation",
};
</script>
