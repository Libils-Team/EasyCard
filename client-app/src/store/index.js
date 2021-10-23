import { createStore } from "vuex";
import app from "@/store/modules/app";
import route from "@/store/modules/route";
import instruments from "@/store/modules/instruments";

export default createStore({
  modules: {
    app,
    route,
    instruments,
  },
  namespaced: true,
});
