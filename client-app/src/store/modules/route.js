const state = () => ({
  route: {},
  query: {},
});

const mutations = {
  SET_ROUTE(state, route) {
    state.route = route;
    state.query = route.query;
  },
};

const actions = {
  changeRoute({ state, commit, dispatch }, route) {
    commit("SET_ROUTE", route);

    if (Object.keys(state.query).length) {
      Object.keys(state.query).forEach((param) => {
        if (param === "modal")
          dispatch("instruments/activeModal", state.query[param], {
            root: true,
          });
      });
    } else {
      dispatch("instruments/offAll", {}, {
        root: true,
      });
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
