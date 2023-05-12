import { Store } from "vuex";

declare module "@vue/runtime-core" {
  interface State {
    acessToken: string;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
