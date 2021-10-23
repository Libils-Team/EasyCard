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
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
