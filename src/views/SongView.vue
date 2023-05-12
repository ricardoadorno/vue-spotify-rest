<script setup lang="ts"></script>

<template>
  <div class="song">
    <img src="http://placehold.it/300x300" alt="" class="song__image" />

    <div class="song__details">
      <div class="song__details-title">Song Title</div>
      <div class="song__details-artist">Artist Name</div>
      <button class="song__details-btn">
        <v-icon>fa fa-play</v-icon>
        Play a Demo
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.song {
  width: 100%;
  display: flex;
  place-items: center;
  gap: 2rem;
}

.song__image {
  flex: 1;
}

.song__details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &-title {
    font-size: 1.5rem;
    font-weight: 700;
  }

  &-artist {
    font-size: 1.2rem;
    font-weight: 500;
  }

  &-btn {
    display: flex;
    gap: 1rem;
  }
}
</style>
