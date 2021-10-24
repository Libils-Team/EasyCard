import { createStore } from "vuex";
import app from "@/store/modules/app";
import shop from "@/store/modules/shop";

export default createStore({
  modules: {
    app,
    shop,
  },
  namespaced: true,
});
