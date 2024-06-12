const state = {
    showCalendar: false,
};

const getters = {
    shCalendar: (state) => state.showCalendar,
};

const mutations = {
    setCalendar(state, value) {
        state.showCalendar = value;
    },
};

const actions = {
    toggleCalendar({ commit, state }) {
        const newModalShow = !state.showCalendar;
        commit("setCalendar", newModalShow);
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
