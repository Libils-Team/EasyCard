import { API_REQUEST } from "@/modules/api";
import {
  updateItems,
  updateItem,
  findItemNested,
  deepClone,
} from "@/store/utils";

const createrRoutesCategories = (arr) => {
  return arr.map((el) => {
    el.path = "/catalog/" + el.id;
    if (el.dropdownMenu !== null) {
      el.type = "dropdown";
      el.dropdownMenu = createrRoutesCategories(el.dropdownMenu);
    } else {
      el.type = "link";
    }
    return el;
  });
};

const state = () => ({
  categories: [],
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
      return acc + val.priceCurrent * val.counterAddedToCart;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(items));
  },
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
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

      const updated = updateItems({
        itemsNew: cartShop,
        itemsCached: cartCached,
        nestingKey: "id",
      });

      commit("SET_CART", updated);
    }
    if (Object.keys(favoritesCached).length) {
      const favoritesShop = await dispatch(
        "getProductsByIds",
        favoritesCached.map((item) => item.id)
      );

      const updated = updateItems({
        itemsNew: favoritesShop,
        itemsCached: favoritesCached,
        nestingKey: "id",
      });

      commit("SET_FAVORITES", updated);
    }
    const categories = await API_REQUEST("GetCategories");
    commit("SET_CATEGORIES", createrRoutesCategories(categories));
  },

  async addToCart({ state, commit, dispatch }, id) {
    const item = await dispatch("getProductsByIds", [id]);
    const cart = deepClone(state.cart.items);
    item[0].counterAddedToCart = 1;
    cart.push(item[0]);
    commit("SET_CART", cart);
  },

  async getProductsByIds(ctx, ids) {
    return await API_REQUEST("GetProductById", { id: ids.toString() });
  },

  async getProductsByCategory(ctx, { categoryId, take = 10, offset = 0 }) {
    return await API_REQUEST("GetProductsByCategory", {
      categoryId,
      offset,
      take,
    });
  },

  updateCartItemCounter({ state, commit }, { id, action }) {
    const item = state.cart.items.find((el) => el.id === id);
    if (action && item.counterAddedToCart < 10) {
      item.counterAddedToCart++;
    } else if (!action && item.counterAddedToCart > 1) {
      item.counterAddedToCart--;
    }

    const updated = updateItem({
      itemNew: item,
      itemsCached: state.cart.items,
      nestingKey: "id",
    });

    commit("SET_CART", updated);
  },
};

const getters = {
  getCartItems: ({ cart }) => cart.items || [],
  getCartItemsTotal: ({ cart }) => cart.total,
  getFavoritesItems: ({ favorites }) => favorites.items || [],
  getProductCartById:
    ({ cart }) =>
    (id) => {
      return cart.items.find((item) => item.id === id) || {};
    },
  getCategories: ({ categories }) => {
    return categories;
  },
  getCategoryById:
    ({ categories }) =>
    (id) => {
      return findItemNested(categories, id, "dropdownMenu") || [];
    },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
