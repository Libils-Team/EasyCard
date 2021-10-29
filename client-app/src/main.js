import { createApp } from "vue";
import App from "./App.vue";
import i18n from "@/core/i18n";
import router from "@/router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import Base from "@/components/Base";

// Scss
import "@/assets/scss/_config.scss";

const app = createApp(App);

Base.forEach((component) => {
  app.component(component.name, component);
});

app.use(i18n).use(VueAxios, axios).use(store).use(router).mount("#app");
