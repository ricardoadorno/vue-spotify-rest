import { createApp } from "vue";
import "./styles/global.scss";
import App from "./App.vue";

import store from "./store";
import vuetify from "./utils/plugins/vuetify";
import router from "./router";

createApp(App).use(router).use(store).use(vuetify).mount("#app");
