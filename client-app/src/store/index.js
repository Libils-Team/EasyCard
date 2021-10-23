import { createStore } from "vuex";
import app from "@/store/modules/app";
import route from "@/store/modules/route";

export default createStore({
  modules: {
    app,
    route,
  },
  namespaced: true,
});
