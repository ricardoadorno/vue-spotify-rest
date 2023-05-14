import { Store } from "vuex";

declare module "@vue/runtime-core" {
  interface State {
    audioState: {
      audioUrl: string;
      trackName: string;
    };
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
