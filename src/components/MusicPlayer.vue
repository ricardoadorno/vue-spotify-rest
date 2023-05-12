<script lang="ts">
export default {
  name: "MusicPlayer",

  data() {
    return {
      audioUrl: "",
      songName: "",
      isPlaying: false,
    };
  },
};
</script>

<template>
  <footer v-if="audioUrl">
    <audio ref="audio">
      <source :src="audioUrl" type="audio/mpeg" />
    </audio>
    <h4>{{ songName }}</h4>
  </footer>
</template>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #1db954;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
```
