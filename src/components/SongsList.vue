<script lang="ts">
import { toMinutes } from "../utils/methods";

export default {
  name: "SongsList",

  props: {
    songs: {
      type: Array,
      required: true,
    },
  },

  methods: {
    toMinutes,
    handleSongRoute(id: string) {
      this.$router.push("/song/" + id);
    },
  },
};
</script>

<template>
  <div class="album__songs">
    <div
      @click="() => handleSongRoute(song.id)"
      class="song"
      v-for="(song, index) in songs"
      :key="song.id"
    >
      <div class="song-number">{{ index + 1 }}</div>
      <div class="song-name">{{ song.name }}</div>
      <div class="song-duration">{{ toMinutes(song.duration_ms) }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.album__songs {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.song {
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  padding: 1rem;
  border-bottom: 1px solid #fff;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #686868;
    cursor: pointer;
  }
}
</style>
