<template>
  <header class="header header-main">
    <div class="inner">
      <div class="container flex justyfy-between align-center">
        <div class="header-main-panel flex align-center">
          <div class="header-main-panel__logo">
            <router-link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="58"
                viewBox="0 0 239 68"
                fill="none"
              >
                <path
                  d="M89.1475 26.2843H94.2967V24.3292C94.2967 21.3573 95.0889 19.0112 96.6733 17.4471C98.2576 15.883 100.555 15.0227 103.565 15.0227H108.635V20.8099H104.595C102.139 20.8099 100.951 22.1394 100.951 24.7984V26.2843H107.447V32.0715H100.951V54.5166H94.2967V32.0715H89.1475V26.2843Z"
                  fill="#1B2738"
                />
                <path
                  d="M189.36 25.8151H194.509V15.0227H201.163V25.8151H207.659V31.6023H201.163V44.7408C201.163 47.3998 202.352 48.7293 204.807 48.7293H208.847V54.5166H203.777C200.767 54.5166 198.549 53.7345 196.885 52.0922C195.301 50.5281 194.509 48.1819 194.509 45.2101V31.5241H189.36V25.8151Z"
                  fill="#1B2738"
                />
                <path
                  d="M122.895 55.064C118.617 55.064 115.211 53.8909 112.834 51.4665C110.378 49.0422 109.19 45.6793 109.19 41.378V39.5793C109.19 37.4677 109.507 35.5126 110.141 33.7921C110.774 32.0715 111.646 30.6638 112.913 29.4907C114.181 28.3177 115.527 27.3792 117.191 26.7535C118.855 26.1279 120.756 25.8151 122.895 25.8151C127.173 25.8151 130.579 26.9882 132.956 29.4125C135.411 31.8369 136.6 35.1998 136.6 39.5011V41.2998C136.6 43.4114 136.283 45.3665 135.649 47.087C135.015 48.8075 134.144 50.2152 132.876 51.3883C131.609 52.5614 130.262 53.4999 128.519 54.1255C126.856 54.7512 125.034 55.064 122.895 55.064ZM122.895 48.964C125.034 48.964 126.697 48.3383 127.886 47.087C129.074 45.8357 129.628 43.9588 129.628 41.2998V39.5011C129.628 36.9203 128.995 35.0433 127.806 33.7921C126.618 32.5408 124.955 31.9151 122.895 31.9151C120.756 31.9151 119.092 32.5408 117.904 33.7921C116.716 35.0433 116.161 36.9203 116.161 39.5793V41.378C116.161 43.9588 116.795 45.8357 117.983 47.087C119.172 48.3383 120.835 48.964 122.895 48.964Z"
                  fill="#1B2738"
                />
                <path
                  d="M150.938 55.064C147.611 55.064 144.918 54.0473 143.017 52.014C141.036 49.9806 140.085 46.8524 140.085 42.7075V26.2843H146.74V42.6293C146.74 44.6626 147.215 46.2268 148.245 47.3216C149.275 48.3383 150.542 48.8857 152.127 48.8857C154.107 48.8857 155.612 48.3383 156.801 47.2434C157.989 46.1486 158.543 44.7408 158.623 42.8639V26.2843H165.277V54.5166H160.049L159.573 51.3883C158.543 52.5614 157.276 53.4217 155.85 54.0473C154.345 54.7512 152.681 55.064 150.938 55.064Z"
                  fill="#1B2738"
                />
                <path
                  d="M168.763 26.2843H173.991L174.466 29.4125C175.496 28.2395 176.685 27.301 178.19 26.6753C179.695 26.0497 181.279 25.7369 183.101 25.7369H185.953V31.8369H183.101C180.487 31.8369 178.507 32.3844 177.318 33.5574C176.051 34.6523 175.496 36.2164 175.496 38.0934V54.4384H168.842V26.2843H168.763Z"
                  fill="#1B2738"
                />
                <path
                  d="M212.254 15.0227H218.908V28.7087C220.81 26.7535 223.424 25.7369 226.83 25.7369C230.316 25.7369 233.088 26.7535 235.069 28.7869C237.049 30.8202 238 33.9485 238 38.0934V54.4384H231.346V38.1716C231.346 36.1382 230.87 34.5741 229.84 33.4792C228.811 32.4626 227.464 31.9151 225.721 31.9151C223.661 31.9151 221.998 32.4626 220.81 33.5574C219.621 34.6523 218.988 36.06 218.908 37.937V54.5948H212.254V15.0227Z"
                  fill="#1B2738"
                />
                <path
                  d="M0 46.7848L22.3398 13H34.4603V46.7848V54.7618H25.2709H0V46.7848Z"
                  fill="#1B2738"
                />
                <path
                  d="M77.0113 21.0552L54.6715 54.84H42.551V21.0552V13.0782H51.7404H77.0113V21.0552Z"
                  fill="#1B2738"
                />
              </svg>
            </router-link>
          </div>
          <div class="header-main-panel__search">
            <BaseInput
              v-model="search"
              type="search"
              :placeholder="$t('header.navbarMain.siteSearch')"
            />
          </div>
        </div>

        <div class="header-main-controls flex align-center">
          <div class="header-main-controls__item">
            <router-link :to="$t('layout.paths.account')">
              <i class="far fa-user"></i>
            </router-link>
          </div>
          <div class="header-main-controls__item">
            <router-link :to="$t('layout.paths.favorites')">
              <i class="far fa-heart"></i>
            </router-link>
            <div
              class="header-main-controls__counter"
              v-if="countFavoritesItems"
            >
              <small>{{ countFavoritesItems }}</small>
            </div>
          </div>
          <div class="header-main-controls__item flex align-center">
            <router-link :to="$t('layout.paths.cart')">
              <i class="fas fa-shopping-basket"></i>
            </router-link>
            <div class="header-main-controls__counter" v-if="countCartItems">
              <small>{{ countCartItems }}</small>
            </div>
            <span>
              {{ $store.state.shop.cart.total }}
              {{ $t("layout.moneyTrack") }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeaderMain",
  data: () => ({
    search: "",
  }),
  computed: {
    countCartItems() {
      return this.$store.state.shop.cart.items.length;
    },
    countFavoritesItems() {
      return this.$store.state.shop.favorites.items.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.header-main {
  &-panel {
    width: 70%;
    &__search {
      margin: 0 5%;
      width: 100%;
    }
  }
  &-controls {
    width: 30%;
    justify-content: flex-end;
    &__item {
      position: relative;
      margin-right: 5%;
      &:last-child {
        margin-right: 0;
      }
      i {
        font-size: $iconLg;
        color: $colorAccentText;
      }
      span {
        margin-left: 15px;
        color: $colorAccentText;
        font-weight: bold;
      }
    }
    &__counter {
      position: absolute;
      top: -10px;
      left: 18px;
      background-color: $colorAccentText;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18px;
      height: 18px;
      line-height: 18px;
      small {
        font-size: $textXs;
        color: $white;
      }
    }
  }
}
</style>
