import { createApp } from "vue";
import App from "./App.vue";
import i18n from "@/boot/i18n";
import router from "@/router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

// Scss
import "@/assets/scss/_config.scss";

createApp(App)
  .use(VueAxios, axios)
  .use(i18n)
  .use(store)
  .use(router)
  .mount("#app");
