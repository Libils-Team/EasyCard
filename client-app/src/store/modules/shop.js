import { API_REQUEST } from "@/modules/api";

const deepClone = (val) => JSON.parse(JSON.stringify(val));

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
  SET_CART(state, items) {
    state.cart.items = items;
    state.cart.total = items.reduce((acc, val) => {
      return acc + val.priceCurrent * val.counterAddToCart;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(items));
  },
};

const actions = {
  async init({ commit, dispatch }) {
    const favoritesCached = JSON.parse(localStorage.getItem("favorites")) || [];
    const cartCached = JSON.parse(localStorage.getItem("cart")) || [];

    if (Object.keys(cartCached).length) {
      const cartShop = await dispatch(
        "getProductsByIds",
        cartCached.map((item) => item.id)
      );

      const updated = await dispatch("updateCachedItems", {
        itemsNew: cartShop,
        itemsCached: cartCached,
      });

      commit("SET_CART", updated);
    }
    if (Object.keys(favoritesCached).length) {
      const favoritesShop = await dispatch(
        "getProductsByIds",
        favoritesCached.map((item) => item.id)
      );

      const updated = await dispatch("updateCachedItems", {
        itemsNew: favoritesShop,
        itemsCached: favoritesCached,
      });

      commit("SET_FAVORITES", updated);
    }
  },

  async addToCart({ state, commit, dispatch }, id) {
    const item = await dispatch("getProductsByIds", [id]);
    const cart = deepClone(state.cart.items);
    item[0].counterAddToCart = 1;
    cart.push(item[0]);
    commit("SET_CART", cart);
  },

  async updateCartItemCounter({ state, dispatch, commit }, { id, action }) {
    const item = deepClone(state.cart.items.find((el) => el.id === id));
    if (action && item.counterAddToCart < 10) {
      item.counterAddToCart++;
    } else if (!action && item.counterAddToCart > 1) {
      item.counterAddToCart--;
    }

    const updated = await dispatch("updateCachedItem", {
      itemNew: item,
      itemsCached: deepClone(state.cart.items),
    });

    commit("SET_CART", updated);
  },

  async getProductsByIds(ctx, ids) {
    return await API_REQUEST("GetProductById", { id: ids.toString() });
  },

  updateCachedItems(ctx, { itemsNew, itemsCached }) {
    return itemsNew.map((itemNew) => {
      return {
        ...itemsCached.find((itemCached) => itemCached.id === itemNew.id),
        ...itemNew,
      };
    });
  },

  updateCachedItem(ctx, { itemNew, itemsCached }) {
    return itemsCached.map((el) => {
      if (el.id === itemNew.id) return itemNew;
      return el;
    });
  },
};

const getters = {
  getCartItems: ({ cart }) => cart.items || [],
  getFavoritesItems: ({ favorites }) => favorites.items || [],
  getCheckProductCartById:
    ({ cart }) =>
    (id) => {
      return !!cart.items.find((item) => item.id === id);
    },
  getCounterAddToCartById:
    ({ cart }) =>
    (id) => {
      return cart.items.find((item) => item.id === id).counterAddToCart || 1;
    },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
