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
  async init({ commit }) {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (Object.keys(cart).length) {
      const items = await API_REQUEST("GetProductsByIds", { body: cart });
      commit("SET_CART", {
        items,
        total: items.reduce((acc, val) => acc + val.priceCurrent),
        itemsIds: cart,
      });
    }
    if (Object.keys(favorites).length) {
      const items = await API_REQUEST("GetProductsByIds", { body: favorites });
      commit("SET_FAVORITES", {
        items,
        itemsIds: favorites,
      });
    }
  },

  async addToCart({ state, commit }, id) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = await API_REQUEST("GetProductsByIds", { body: [id] });
    console.log(item)
    const tempCartItems = JSON.parse(JSON.stringify(state.cart.items)).push(
      item
    );

    commit("SET_CART", {
      items: tempCartItems,
      total: tempCartItems.reduce((acc, val) => acc + val.priceCurrent),
      itemsIds: cart.push(id),
    });
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
