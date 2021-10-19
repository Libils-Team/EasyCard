<template>
  <div class="header">
    <div class="container">
      <div class="header-inner">
        <HeaderTop />
        <HeaderNavigation />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNavigation from "@/components/app/HeaderNavigation";
import HeaderTop from "@/components/app/HeaderNavigation";
export default {
  components: {
    HeaderTop,
    HeaderNavigation,
  },
};
</script>
