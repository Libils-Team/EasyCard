<template>
  <ModalChangeCity v-if="modal && modal.match(/navbar-ChangeCity/)" />
</template>

<script>
import ModalChangeCity from "@/components/Modals/ModalChangeCity";
export default {
  name: "TheModalContainer",
  components: {
    ModalChangeCity,
  },
  computed: {
    modal() {
      return this.$store.state.app.modal;
    },
  },
};
</script>
