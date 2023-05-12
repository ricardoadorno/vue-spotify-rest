import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      acessToken: "",
      audioState: {
        URL: "",
        name: "",
        isPlaying: false,
      },
    };
  },
  mutations: {
    // setAcessTokenState(state, payload) {
    //   state.acessToken = payload;
    // },
    setAudioState(state, payload) {
      state.audioState = payload;
    },
  },
  actions: {
    // setAcessToken({ commit }, payload) {
    //   commit("setAcessTokenState", payload);
    // },
    setPlayer({ commit }, payload) {
      commit("setAudioState", payload);
    },
  },
});

export default store;
