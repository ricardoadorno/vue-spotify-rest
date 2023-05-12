import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      acessToken: "",
    };
  },
  mutations: {
    setAcessTokenState(state, payload) {
      state.acessToken = payload;
    },
  },
  actions: {
    setAcessToken({ commit }, payload) {
      commit("setAcessTokenState", payload);
    },
  },
});

export default store;
