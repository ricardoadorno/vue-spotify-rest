import { Store } from "vuex";

declare module "@vue/runtime-core" {
  interface State {
    acessToken: string;
    audioState: {
      URL: string;
      name: string;
      isPlaying: boolean;
    };
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
