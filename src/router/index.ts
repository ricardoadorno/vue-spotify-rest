import { createRouter, createWebHistory } from "vue-router";

import SearchListView from "../views/SearchListView.vue";
import AlbumView from "../views/AlbumView.vue";
import SongView from "../views/SongView.vue";

const routes = [
  { path: "/", component: SearchListView },
  { path: "/album/:id", component: AlbumView },
  { path: "/song/:id", component: SongView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
