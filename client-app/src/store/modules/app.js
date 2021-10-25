import { API_REQUEST } from "@/modules/api";

const state = () => ({
  modal: null,
  _categories: [],
  _locale: "ru",
  _route: {},
});

const mutations = {
  SET_LOCALE(state, val) {
    state._locale = val;
  },
  SET_CATEGORIES(state, categories) {
    state._categories = categories;
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
  async init({ dispatch, commit }) {
    const lang = localStorage.getItem("locale") || window.navigator.language;
    dispatch("changeLocale", lang);

    commit("SET_CATEGORIES", await API_REQUEST("GetCategories"));
  },
};

const replacerCategories = (arr) => {
  return arr.map((el) => {
    el.label = el.categoryName;
    if (el.subCategories !== null) {
      el.type = "dropdown";
      el.dropdownMenu = replacerCategories(el.subCategories);
    } else {
      el.type = "link";
      el.path = "/";
    }
    return el;
  });
};

const getters = {
  getLocale: ({ _locale }) => _locale,
  getCategories: ({ _categories }) => {
    return _categories.length ? [replacerCategories(_categories)] : [];
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
