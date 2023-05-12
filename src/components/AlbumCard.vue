<script lang="ts">
export default {
  name: "AlbumCard",

  props: {
    album: {
      type: Object,
      required: true,
    },
  },

  methods: {
    handleAlbumClick(id: string) {
      this.$router.push("/album/" + id);
    },
  },
};
</script>

<template>
  <div class="card">
    <img
      @click="() => handleAlbumClick(album.id)"
      :src="album.images[1].url"
      alt="Album Image"
      class="card__img"
    />
    <div class="card__content">
      <h3 class="card__content-title" @click="() => handleAlbumClick(album.id)">
        {{ album.name }}
      </h3>
      <p>Artist's Name: {{ album.artists[0].name }}</p>

      <small>Release Date: {{ album.release_date }}</small>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  display: flex;
  gap: 1rem;
  width: 100%;
  padding-bottom: 2rem;
  border-bottom: 1px solid #ccc;

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

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>
```
