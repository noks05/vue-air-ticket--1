export const HIDE_NEWSLETTER = "HIDE_NEWSLETTER";
export const REFRESH_STORE = "REFRESH_STORE";

const state = () => ({
  current: 4,
  showNewsletter: true,
});

const getters = {
  currentDemo: (state) => {
    return "demo" + state.current;
  },
  newsletterShow: (state) => {
    return state.showNewsletter;
  },
};

const mutations = {
  [HIDE_NEWSLETTER](state) {
    state.showNewsletter = false;
  },
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
