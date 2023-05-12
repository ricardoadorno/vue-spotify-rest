<script lang="ts">
import { useRoute } from "vue-router";
import getAlbumById from "../utils/fetchers/getAlbumById";

export default {
  name: "AlbumView",
};
</script>

<template>
  <div class="header">
    <img
      src="http://placehold.it/150x150
    "
      alt=""
      class="album__image"
    />
    <div class="header__content">
      <div class="header__content-title">Album Title</div>
      <div class="header__content-artist">By Artist Name</div>
    </div>
  </div>

  <div class="album__songs">
    <div class="album__song__item">
      <v-icon>fa fa-play</v-icon>
      <div class="album__song__item__number">1</div>
      <div class="album__song__item__title">Song Title</div>
      <div class="album__song__item__duration">3:00</div>
    </div>
    <div class="album__song__item">
      <v-icon>fa fa-play</v-icon>
      <div class="album__song__item__number">1</div>
      <div class="album__song__item__title">Song Title</div>
      <div class="album__song__item__duration">3:00</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  display: flex;
  gap: 2rem;
  place-items: center;
  padding: 2rem;
  background-color: #686868;
  border-radius: 1rem;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &-title {
      font-size: 2rem;
      font-weight: 700;
    }

    &-artist {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
}

.album__song {
  display: flex;
  flex-direction: column;

  &__item {
    display: flex;
    gap: 4rem;
    padding: 1rem;
    border-bottom: 1px solid #fff;
  }
}
</style>
