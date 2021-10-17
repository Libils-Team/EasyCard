import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

// Scss
import "@/assets/scss/_config.scss";

createApp(App).use(VueAxios, axios).use(store).use(router).mount("#app");
// Test 
