import { createApp } from "vue";
import App from "./App.vue";
import "./styles/global.scss";

import store from "./utils/store";
import vuetify from "./utils/plugins/vuetify";
import router from "./utils/router";
import { VueQueryPlugin } from "@tanstack/vue-query";

createApp(App)
  .use(router)
  .use(store)
  .use(VueQueryPlugin)
  .use(vuetify)
  .mount("#app");
