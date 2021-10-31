<template>
  <div class="carousel-slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseCarouselSlide",
};
</script>

<style scoped>
.carousel-slide {
  height: 100%;
  min-height: 1px;
  display: block;
}
</style>
