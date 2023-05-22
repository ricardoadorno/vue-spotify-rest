<script lang="ts">
import { formatDate, formatArtistArray } from "../utils/helpers";
import { AlbumTypes } from "../utils/types";

export default {
  name: "AlbumCard",

  props: {
    album: {
      type: Object as () => AlbumTypes,
      required: true,
    },
  },

  methods: {
    handleAlbumRoute(id: string) {
      this.$router.push("/album/" + id);
    },
    formatDate,
    formatArtistArray,
  },
};
</script>

<template>
  <div class="card">
    <img
      @click="() => handleAlbumRoute(album.id)"
      :src="album.images[1].url"
      alt="Album Image"
      class="card__img"
    />
    <div class="card__content">
      <h3 class="card__content-title" @click="() => handleAlbumRoute(album.id)">
        {{ album.name }}
      </h3>
      <p>Artist's Name: {{ formatArtistArray(album.artists) }}</p>

      <small>Release Date: {{ formatDate(album.release_date) }}</small>
    </div>
  </div>
</template>

<style lang="scss">
@import "../styles/variables";

.card {
  display: flex;
  gap: 1rem;
  width: 100%;
  padding-bottom: 2rem;
  border-bottom: 1px solid #ccc;

  @media (max-width: 768px) {
    margin-top: 2rem;
    flex-direction: column;
  }

  &__img {
    flex: 1;
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  &__content {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }

  &__content-title {
    font-size: 1.5rem;
    font-weight: bold;
    transition: color 0.2s ease-in-out;

    &:hover {
      text-decoration: underline;
      color: $spotify-green;
      cursor: pointer;
    }
  }
}
</style>
```
