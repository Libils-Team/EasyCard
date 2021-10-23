const state = () => ({
  locale: "ru",
});

const mutations = {
  SET_LOCALE(state, val) {
    state.locale = val;
  },
};

const actions = {
  changeLocale({ commit }, val) {
    commit("SET_LOCALE", val);
  },
  init({ dispatch }) {
    const lang = localStorage.getItem("locale") || window.navigator.language;
    dispatch("changeLocale", lang);
  },
};

const getters = {
  getLocale: ({ locale }) => locale,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
