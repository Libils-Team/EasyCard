import { API_REQUEST } from "@/modules/api";

const state = () => ({
  cart: {
    items: [],
    total: 0,
  },
  favorites: {
    items: [],
  },
});

const mutations = {
  SET_FAVORITES(state, { items, itemsIds }) {
    state.favorites.items = items;
    localStorage.setItem("favorites", JSON.stringify(itemsIds));
  },
  SET_CART(state, { items, total, itemsIds }) {
    state.cart.items = items;
    state.cart.total = total;
    localStorage.setItem("cart", JSON.stringify(itemsIds));
  },
};

const actions = {
  async init({ commit, dispatch }) {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (Object.keys(cart).length) {
      const items = await dispatch(
        "getProductsByIds",
        cart.map((item) => item.id)
      );
      commit("SET_CART", {
        items,
        total: items.reduce((acc, val) => acc + val.priceCurrent, 0),
        itemsIds: cart,
      });
    }
    if (Object.keys(favorites).length) {
      const items = await dispatch(
        "getProductsByIds",
        favorites.map((item) => item.id)
      );
      commit("SET_FAVORITES", {
        items,
        itemsIds: favorites,
      });
    }
  },

  async addToCart({ state, commit, dispatch }, id) {
    const item = await dispatch("getProductById", id);
    const cart = JSON.parse(JSON.stringify(state.cart.items)).push(item);
    commit("SET_CART", {
      items: cart,
      itemsIds: cart,
      total: cart.reduce((acc, val) => acc + val.priceCurrent, 0),
    });
  },

  async getProductById(ctx, id) {
    console.log(id);
    return await API_REQUEST("GetProductById", { id });
  },

  async getProductsByIds(ctx, ids) {
    return await API_REQUEST("GetProductsByIds", { ids: ids.toString() });
  },
};

const getters = {
  getCartItems: ({ cart }) => cart.items || [],
  getFavoritesItems: ({ favorites }) => favorites.items || [],
  getProductCartById:
    ({ cart }) =>
    (id) => {
      return !!cart.items.find((item) => item.id === id);
    },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
