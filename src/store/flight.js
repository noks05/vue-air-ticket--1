// flight.js
const state = {
  modalShow: false,
};

const getters = {
  showFilter: (state) => state.modalShow,
};

const mutations = {
  setModalShow(state, value) {
    state.modalShow = value;
  },
};

const actions = {
  toggleFilter({ commit, state }) {
    const newModalShow = !state.modalShow;
    commit("setModalShow", newModalShow);
    return newModalShow;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
