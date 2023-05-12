import { createApp } from "vue";
import "./styles/global.scss";
import App from "./App.vue";

import store from "./store";
import vuetify from "./utils/plugins/vuetify";
import router from "./router";

import {
  QueryClient,
  VueQueryPlugin,
  VueQueryPluginOptions,
} from "@tanstack/vue-query";
const myClient = new QueryClient();
const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClient: myClient,
};

createApp(App)
  .use(router)
  .use(store)
  .use(VueQueryPlugin, vueQueryPluginOptions)
  .use(vuetify)
  .mount("#app");
