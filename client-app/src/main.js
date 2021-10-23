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
  .use(i18n)
  .use(VueAxios, axios)
  .use(store)
  .use(router)
  .mount("#app");
