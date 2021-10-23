const state = () => ({
  modal: null,
});

const mutations = {
  SET_MODAL(state, modal) {
    state.modal = modal;
  },
  OFF_ALL(state) {
    state.modal = null;
  },
};

const actions = {
  activeModal({ commit }, modal) {
    commit("SET_MODAL", modal);
  },
  offAll({ commit }) {
    commit("OFF_ALL");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
