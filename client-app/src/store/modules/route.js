const state = () => ({
  modal: null,
  _route: {},
});

const mutations = {
  handleChangesRoute(state, route) {
    const routeKeys = Object.keys(route.query);
    const stateKeys = Object.keys(state).filter((key) => key[0] !== "_");
    stateKeys
      .filter((key) => !routeKeys.includes(key))
      .forEach((key) => {
        state[key] = null;
      });

    routeKeys.forEach((key) => {
      if (stateKeys.includes(key)) state[key] = route.query[key];
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
