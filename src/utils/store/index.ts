import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      audioState: {
        audioUrl: "",
        trackName: "",
      },
    };
  },
  mutations: {
    setAudio(state, payload) {
      state.audioState.audioUrl = payload.audioUrl;
      state.audioState.trackName = payload.trackName;
    },
    closeAudio(state) {
      state.audioState.audioUrl = "";
      state.audioState.trackName = "";
    },
  },
  actions: {
    setAudio({ commit }, payload) {
      commit("closeAudio", payload);
      commit("setAudio", payload);
    },
    closeAudio({ commit }) {
      commit("closeAudio");
    },
  },
});

export default store;

// ! Audio https://p.scdn.co/mp3-preview/5603425e23a6378bfd2560ff871a656663ed2a44?cid=a6798384339f454bb5175a9fa59db306
