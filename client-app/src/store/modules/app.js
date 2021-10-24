const state = () => ({
  modal: null,
  _locale: "ru",
  _route: {},
});

const mutations = {
  SET_LOCALE(state, val) {
    state._locale = val;
  },
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

const actions = {
  changeLocale({ commit }, val) {
    localStorage.setItem("locale", val);
    commit("SET_LOCALE", val);
  },
  init({ dispatch }) {
    const lang = localStorage.getItem("locale") || window.navigator.language;
    dispatch("changeLocale", lang);
  },
};

const getters = {
  getLocale: ({ _locale }) => _locale,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
