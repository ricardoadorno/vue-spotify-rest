import { createRouter, createWebHistory } from "vue-router";

import SearchListView from "../../views/SearchListView.vue";
import AlbumView from "../../views/AlbumView.vue";
import TrackView from "../../views/TrackView.vue";

const routes = [
  { path: "/", component: SearchListView, props: true },
  { path: "/album/:id", component: AlbumView },
  { path: "/song/:id", component: TrackView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
