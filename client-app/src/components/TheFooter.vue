<template>
  <footer class="footer">
    <div class="inner">
      <div class="container footer-area flex justify-between">
        <div class="footer-area__menu flex justify-between">
          <Menu
            :innerClassesNavigation="['flex']"
            :innerClassesMenu="['mr-4']"
            :innerClassesItem="['mb-4']"
            :menu="i18n.menu"
          />
        </div>
        <div class="footer-area__sidebar">
          <div class="footer-area__sidebar-social mb-10">
            <h4 class="mb-5 headline">{{ i18n.sidebar.socialHeadline }}</h4>
            <Menu
              :menu="i18n.sidebar.socialList"
              :innerClassesMenu="['flex', 'align-center']"
              :innerClassesItem="['mr-5']"
            />
          </div>
          <div class="footer-area__sidebar-phone mb-4">
            <h2 class="headline text-accent-dark">
              {{ $t("global.phoneHelpDesk") }}
            </h2>
            <small class="text-half-gray">{{ $t("settings.helpDesk") }}</small>
          </div>
          <div class="footer-area__sidebar-phone">
            <h2 class="headline text-accent-dark">
              {{ $t("global.phoneOnlineStore") }}
            </h2>
            <small class="text-half-gray">
              {{ $t("settings.onlineStore") }}
            </small>
          </div>
        </div>
      </div>
      <div class="container mt-10 flex justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="183"
          height="33"
          viewBox="0 0 183 33"
          fill="none"
        >
          <g opacity="0.7">
            <path
              d="M67.9219 10.1213H71.8451V8.63166C71.8451 6.36742 72.4487 4.57987 73.6558 3.38816C74.863 2.19645 76.6133 1.54102 78.9069 1.54102H82.7698V5.95033H79.6916C77.8205 5.95033 76.9151 6.96328 76.9151 8.98918V10.1213H81.8644V14.5306H76.9151V31.6316H71.8451V14.5306H67.9219V10.1213Z"
              fill="#223046"
            />
            <path
              d="M144.274 9.76378H148.197V1.54102H153.267V9.76378H158.216V14.1731H153.267V24.1834C153.267 26.2093 154.173 27.2223 156.044 27.2223H159.122V31.6316H155.259C152.965 31.6316 151.275 31.0357 150.008 29.7844C148.801 28.5927 148.197 26.8052 148.197 24.5409V14.1135H144.274V9.76378Z"
              fill="#223046"
            />
            <path
              d="M93.6342 32.0486C90.3749 32.0486 87.7795 31.1548 85.9688 29.3076C84.0977 27.4605 83.1924 24.8983 83.1924 21.6211V20.2507C83.1924 18.6419 83.4338 17.1522 83.9167 15.8414C84.3995 14.5305 85.0635 13.458 86.0292 12.5642C86.9949 11.6704 88.021 10.9554 89.2885 10.4787C90.556 10.002 92.0046 9.76367 93.6342 9.76367C96.8935 9.76367 99.4889 10.6575 101.3 12.5046C103.171 14.3517 104.076 16.9139 104.076 20.1911V21.5616C104.076 23.1704 103.835 24.66 103.352 25.9709C102.869 27.2817 102.205 28.3543 101.239 29.2481C100.274 30.1418 99.2474 30.8569 97.9196 31.3335C96.6521 31.8102 95.2639 32.0486 93.6342 32.0486ZM93.6342 27.4009C95.2639 27.4009 96.5314 26.9242 97.4367 25.9709C98.3421 25.0175 98.7646 23.5875 98.7646 21.5616V20.1911C98.7646 18.2248 98.2817 16.7947 97.3764 15.8414C96.471 14.888 95.2035 14.4113 93.6342 14.4113C92.0046 14.4113 90.7371 14.888 89.8317 15.8414C88.9263 16.7947 88.5038 18.2248 88.5038 20.2507V21.6211C88.5038 23.5875 88.9867 25.0175 89.8921 25.9709C90.7974 26.9242 92.0649 27.4009 93.6342 27.4009Z"
              fill="#223046"
            />
            <path
              d="M115.001 32.0485C112.466 32.0485 110.413 31.2739 108.965 29.7246C107.456 28.1754 106.732 25.792 106.732 22.634V10.1211H111.802V22.5744C111.802 24.1236 112.164 25.3153 112.949 26.1495C113.733 26.9241 114.699 27.3412 115.906 27.3412C117.415 27.3412 118.562 26.9241 119.467 26.0899C120.372 25.2557 120.795 24.1832 120.855 22.7532V10.1211H125.925V31.6314H121.942L121.58 29.248C120.795 30.1417 119.829 30.7972 118.743 31.2739C117.596 31.8101 116.329 32.0485 115.001 32.0485Z"
              fill="#223046"
            />
            <path
              d="M128.581 10.1212H132.565L132.927 12.5046C133.711 11.6108 134.617 10.8958 135.764 10.4191C136.91 9.94244 138.118 9.7041 139.506 9.7041H141.679V14.3518H139.506C137.514 14.3518 136.005 14.7689 135.1 15.6626C134.134 16.4968 133.711 17.6885 133.711 19.1186V31.5719H128.641V10.1212H128.581Z"
              fill="#223046"
            />
            <path
              d="M161.717 1.54102H166.787V11.9684C168.236 10.4788 170.228 9.7042 172.823 9.7042C175.479 9.7042 177.591 10.4788 179.1 12.028C180.609 13.5772 181.333 15.9607 181.333 19.1187V31.572H176.263V19.1783C176.263 17.629 175.901 16.4373 175.117 15.6031C174.332 14.8285 173.306 14.4114 171.978 14.4114C170.409 14.4114 169.141 14.8285 168.236 15.6627C167.331 16.4969 166.848 17.5695 166.787 18.9995V31.6912H161.717V1.54102Z"
              fill="#223046"
            />
            <path
              d="M0 25.7408L17.0208 0H26.2555V25.7408V31.8185H19.254H0V25.7408Z"
              fill="#223046"
            />
            <path
              d="M58.6754 6.13727L41.6546 31.8781H32.4199V6.13727V0.0595703H39.4214H58.6754V6.13727Z"
              fill="#223046"
            />
          </g>
        </svg>
      </div>
    </div>
  </footer>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
  components: { Menu },
  name: "TheFooter",
  computed: {
    locale() {
      return this.$store.getters["app/getLocale"];
    },
    i18n() {
      return this.$i18n.messages[this.locale].footer;
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: #fafafa;
  flex: 0 0 auto;
  padding: 2vw 0;
  &-area {
    &__sidebar::v-deep(i) {
      font-size: $iconLg;
      color: $colorTextDark;
      cursor: pointer;
      transition: color 0.3s ease;
      &:hover {
        color: $colorTextDarkMajorShade;
      }
    }
    &__menu :deep(.menu) {
      flex: 1 0 160px;
      .menu-item {
        &__link {
          color: $colorTextDark;
          font-size: $textSm;
          background-color: transparent;
        }
        &__text {
          color: $colorTextDark;
          margin-bottom: 0.5rem;
          font-size: $textSm;
          font-weight: 500;
        }
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
