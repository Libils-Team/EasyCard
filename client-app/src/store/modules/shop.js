import { API_REQUEST } from "@/modules/api";
const deepClone = (val) => JSON.parse(JSON.stringify(val));

const updateCachedItems = ({ itemsNew, itemsCached }) => {
  return itemsNew.map((itemNew) => {
    return {
      ...itemsCached.find((itemCached) => itemCached.id === itemNew.id),
      ...itemNew,
    };
  });
};

const updateCachedItem = ({ itemNew, itemsCached }) => {
  return itemsCached.map((el) => {
    if (el.id === itemNew.id) return itemNew;
    return el;
  });
};

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

const findItemNested = (arr, itemId, nestingKey) => {
  return arr.reduce((a, item) => {
    if (a) return a;
    if (+item.id === +itemId) return item;
    if (item[nestingKey])
      return findItemNested(item[nestingKey], itemId, nestingKey);
  }, null);
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

      const updated = updateCachedItems({
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

      const updated = updateCachedItems({
        itemsNew: favoritesShop,
        itemsCached: favoritesCached,
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

  async getProductsByCategory(ctx, { categoryId, take = 0, offset = 10 }) {
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

    const updated = updateCachedItem({
      itemNew: item,
      itemsCached: state.cart.items,
    });

    commit("SET_CART", updated);
  },
};

const getters = {
  getCartItems: ({ cart }) => cart.items || [],
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
