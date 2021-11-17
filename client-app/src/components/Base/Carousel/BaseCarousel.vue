<template>
  <div class="carousel">
    <div class="carousel-title">
      <slot name="title"></slot>
    </div>
    <div :class="[{ flex: vertical }, 'carousel-content']">
      <div class="carousel-list" :style="stylesList" ref="list">
        <div
          id="trackbind"
          class="carousel-track"
          ref="track"
          :style="stylesTrack"
        >
          <slot name="sliders"></slot>
        </div>
      </div>
      <div class="carousel-once__vertical" v-if="vertical && once">
        <div class="carousel-once__item"></div>
      </div>
      <div class="carousel-once__horizontal" v-if="!vertical && once">
        <div class="carousel-once__item"></div>
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
    </div>
    <div class="carousel-actions" v-if="countPage > 1 && btnNavigation">
      <BaseButton class="carousel-btn carousel-btn-prev" @click="prev">
        <i class="fas fa-chevron-left"></i>
      </BaseButton>
      <BaseButton class="carousel-btn carousel-btn-next" @click="next">
        <i class="fas fa-chevron-right"></i>
      </BaseButton>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCarousel",
  props: {
    to: {
      type: Number,
      default: 3,
    },
    height: {
      type: Number,
      default: 650,
    },
    directionMove: {
      type: String,
      default: "X",
    },
    dotsIs: {
      type: Boolean,
      default: true,
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
    once: {
      type: Boolean,
      default: false,
    },
    autoplaySpeed: {
      type: Number,
      default: 6000,
    },
    btnNavigation: {
      type: Boolean,
      default: true,
    },
    dotsColor: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    stylesTrack: {},
    stylesList: {},
    dots: [],
    sliders: [],
    slideWidth: 0,
    slideHeight: 0,
    autoplayIdInterval: {},
    clientWidth: 0,
    clientHeight: 0,
    trackWidth: 2805,
    activeIndex: 0,
    countPage: 0,
    moveContain: 0,
  }),
  mounted() {
    this.init();
  },
  beforeUnmount() {
    clearInterval(this.autoplayIdInterval);
  },
  computed: {
    vertical() {
      return this.directionMove === "Y";
    },
  },
  methods: {
    init() {
      this.sliders = [...this.$refs.track.children];
      this.clientWidth = this.$refs.list.clientWidth;
      this.clientHeight = this.$refs.list.clientHeight;
      this.countPage = Math.ceil(this.sliders.length / this.to);

      if (this.sliders.length) {
        this.determineDirectionAndCarouselInit();
        if (this.dotsIs) this.generateDots();
        if (this.autoplay) this.autoplayOn();
        const stylesTrack = { width: this.trackWidth + "px" };
        this.generateStylesCarousel({
          stylesTrack,
        });
      }
    },
    determineDirectionAndCarouselInit() {
      if (this.vertical) {
        this.verticalCarouselInit();
      } else {
        this.horizontalCarouselInit();
      }
    },
    verticalCarouselInit() {
      this.trackWidth = 300;
      this.slideWidth = Math.ceil(this.height / this.to);
      this.slideHeight = Math.ceil(this.height / this.to);
      this.moveContain = this.height;
      const stylesList = {
        height: this.height + "px",
      };

      this.generateStylesCarousel({
        stylesList,
      });
      this.generateSlideHeight();
    },
    horizontalCarouselInit() {
      this.slideWidth = Math.ceil(this.clientWidth / this.to);
      this.trackWidth = Math.ceil(this.slideWidth * this.sliders.length);
      this.moveContain = this.clientWidth;
      const stylesTrack = { display: "flex" };

      this.generateStylesCarousel({
        stylesTrack,
      });
      this.generateSlideWidth();
    },
    generateStylesCarousel({ stylesTrack = {}, stylesList = {} }) {
      this.stylesTrack = { ...this.stylesTrack, ...stylesTrack };
      this.stylesList = { ...this.stylesList, ...stylesList };
    },
    generateSlideWidth() {
      for (let i = 0; i < this.sliders.length; i++)
        this.sliders[i].style.width = this.slideWidth + "px";
    },
    generateSlideHeight() {
      for (let i = 0; i < this.sliders.length; i++)
        this.sliders[i].style.height = this.slideHeight + "px";
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
      this.autoplayHoldOn();
      this.$refs.track.style.transform = `translate${this.directionMove}(-${
        this.moveContain * this.activeIndex
      }px)`;
    },
    autoplayHoldOn() {
      clearInterval(this.autoplayIdInterval);
      this.autoplayOn();
    },
    autoplayOn() {
      if (this.countPage > 1 && this.autoplay) {
        this.autoplayIdInterval = setInterval(() => {
          if (this.activeIndex + 1 < this.countPage) this.activeIndex++;
          else this.activeIndex = 0;
          this.moveTrack();
        }, this.autoplaySpeed);
      }
    },
    next() {
      if (this.activeIndex + 1 < this.countPage) this.activeIndex++;
      else this.activeIndex = 0;
      this.moveTrack();
    },
    prev() {
      if (this.activeIndex - 1 >= 0) this.activeIndex--;
      else this.activeIndex = this.countPage - 1;
      this.moveTrack();
    },
    toPage(index) {
      this.activeIndex = index;
      this.moveTrack();
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  padding-top: 40px;
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
    position: relative;
    top: 0;
    left: 0;
    transform: translate(0, 0);
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
    position: absolute;
    top: 0;
    right: 0;
    i {
      color: $white;
      font-size: $iconXs;
    }
  }

  &-title {
    position: absolute;
    top: 0;
  }
}

.carousel-btn-prev {
  margin-right: 10px;
}
</style>
