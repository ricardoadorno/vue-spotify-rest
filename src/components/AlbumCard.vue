<script lang="ts">
export default {
  name: "AlbumCard",
  props: {
    album: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="card">
    <img :src="album.image" alt="Album Image" class="card__img" />
    <div class="card__content">
      <h3>
        {{ album.name }}
      </h3>
      <p>Artist Name</p>

      <small> Duration: <span>00:00</span> </small>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 30rem;

  &__img {
    flex: 1;
    width: 100%;
    height: auto;
  }

  &__content {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
}
</style>
```
