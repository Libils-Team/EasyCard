const state = () => ({
  modal: null,
});

const mutations = {
  SET_MODAL(state, modal) {
    state.modal = modal;
  },
};

const actions = {
  activeModal({ commit }, modal) {
    commit("SET_MODAL", modal);
  },
  offAll({ commit }) {
    commit("SET_MODAL", null);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
