const state = () => ({
  cart: {
    countItems: 0,
    items: [],
    total: 0,
  },
  favorites: {
    items: [],
    countItems: 0,
  },
});

const mutations = {
  SET_FAVORITES(state, items) {
    state.favorites.items = items;
    state.favorites.countItems = items.length;
    localStorage.setItem("favorites", state.favorites);
  },
  SET_CART(state, items) {
    state.cart.items = items;
    state.cart.countItems = items.length;
    state.cart.total = 0;
    localStorage.setItem("cart", state.cart);
  },
};

const actions = {
  init({ commit }) {
    const favorites = localStorage.getItem("favorites") || {};
    const cart = localStorage.getItem("cart") || {};

    if (Object.keys(cart).length) commit("SET_CART", cart);
    if (Object.keys(favorites).length) commit("SET_FAVORITES", favorites);
  },
};

const getters = {
  getCartItems: ({ cart }) => cart.items || [],
  getFavoritesItems: ({ favorites }) => favorites.items || [],
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
