<template>
  <div class="carousel">
    <div class="carousel-list" ref="list">
      <div
        class="carousel-track"
        ref="track"
        :style="{ width: trackWidth + 'px' }"
      >
        <slot></slot>
      </div>
    </div>

    <div class="carousel-dots" v-if="dotsIs">
      <div
        :class="[
          'carousel-dots__item',
          { 'carousel-dots__item--active': activeIndex === i },
        ]"
        v-for="(dot, i) in dots"
        @click="toPage(i)"
        :key="dot.id"
      ></div>
    </div>
    <div class="carousel-actions" v-if="countPage > 1">
      <BaseButton class="carousel-btn carousel-btn-prev" @click="prev">
        Previous door
      </BaseButton>
      <BaseButton class="carousel-btn carousel-btn-next" @click="next">
        Next door
      </BaseButton>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCarousel",
  props: {
    to: {
      type: [Number, String],
      default: 3,
    },
    dotsIs: {
      type: Boolean,
      default: true,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    autoplaySpeed: {
      type: [String, Number],
      default: 6000,
    },
    dotsColor: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    dots: [],
    slideWidth: 0,
    autoplayIdInterval: {},
    clientWidth: 0,
    trackWidth: 2805,
    activeIndex: 0,
    countPage: 0,
    moveWidth: 0,
  }),
  mounted() {
    const sliders = this.$refs.track.children;
    this.calculate(sliders);
    if (this.dotsIs) this.generateDots();
    if (this.autoplay) this.autoplayOn();
  },
  beforeUnmount() {
    clearInterval(this.autoplayIdInterval);
  },
  methods: {
    toPage(index) {
      this.activeIndex = index;
      this.moveTrack();
    },
    autoplayOn() {
      if (this.countPage > 1) {
        this.autoplayIdInterval = setInterval(() => {
          if (this.activeIndex + 1 < this.countPage) this.activeIndex++;
          else this.activeIndex = 0;
          this.moveTrack();
        }, this.autoplaySpeed);
      }
    },
    calculate(sliders) {
      this.clientWidth = this.$refs.list.clientWidth;
      this.moveWidth = this.clientWidth;
      this.slideWidth = Math.ceil(this.clientWidth / this.to);
      this.trackWidth = Math.ceil(this.slideWidth * sliders.length);
      this.countPage = Math.ceil(sliders.length / this.to);
      this.generateSlideWidth(sliders);
    },
    generateSlideWidth(sliders) {
      for (let i = 0; i < sliders.length; i++)
        sliders[i].style.width = this.slideWidth + "px";
    },
    generateDots() {
      if (this.clientWidth < this.trackWidth) {
        for (let i = 0; i < this.countPage; i++) {
          this.dots.push({
            id: Date.now() + i,
          });
        }
      }
    },
    moveTrack() {
      this.$refs.track.style.transform = `translateX(-${
        this.moveWidth * this.activeIndex
      }px)`;
    },
    intervalHoldOn() {
      clearInterval(this.autoplayIdInterval);
      this.autoplayOn();
    },
    next() {
      if (this.activeIndex + 1 < this.countPage) this.activeIndex++;
      else this.activeIndex = 0;
      this.moveTrack();
      this.intervalHoldOn();
    },
    prev() {
      if (this.activeIndex - 1 >= 0) this.activeIndex--;
      else this.activeIndex = this.countPage - 1;
      this.moveTrack();
      this.intervalHoldOn();
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  display: block;
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;

  &-track {
    opacity: 1;
    width: 2805px;
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    transform: translateX(0);
    transition: transform 0.3s ease;
  }

  &-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  &-dots {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &__item {
      width: 10px;
      height: 10px;
      margin: 0 5px;
      padding: 0;
      background: $bgGrayShade;
      border-radius: 50%;
      cursor: pointer;
      transition: background 0.3s ease;
      &:hover {
        background: $white;
      }

      &--active {
        background: $white;
      }
    }
  }

  &-actions {
    display: flex;
    margin-top: 10px;
  }
}

.carousel-btn-prev {
  margin-right: 10px;
}
</style>
