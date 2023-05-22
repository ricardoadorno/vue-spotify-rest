<script lang="ts">
import { toMinutes, formatArtistArray } from "../utils/helpers";
import { TrackItemsTypes } from "../utils/types";

export default {
  name: "SongsList",

  props: {
    songs: {
      type: Array as () => TrackItemsTypes[],
      required: true,
    },
  },

  setup(props) {
    return {
      songs: props.songs,
    };
  },

  methods: {
    toMinutes,
    formatArtistArray,
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
      <div class="song-name">
        <b>{{ song.name }}</b>
      </div>
      <div class="song-artist">{{ formatArtistArray(song.artists) }}</div>
      <div class="song-duration">{{ toMinutes(song.duration_ms) }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/global.scss";

.album__songs {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.song {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  padding: 1rem;
  border-bottom: 1px solid #fff;
  transition: background-color 0.2s ease-in-out;

  @include mobile {
    gap: 1rem;
    font-size: 0.9rem;
  }

  &:hover {
    background-color: #686868;
    cursor: pointer;
  }
}
</style>
