import { createApp } from "vue";
import App from "./App.vue";
import i18n from "@/core/i18n";
import router from "@/router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

// Scss
import "@/assets/scss/_config.scss";

createApp(App)
  .use(VueAxios, axios)
  .use(store)
  .use(router)
  .use(i18n)
  .mount("#app");
