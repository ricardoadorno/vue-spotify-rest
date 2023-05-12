<script lang="ts">
import { useRoute } from "vue-router";
import getSongById from "../utils/fetchers/getSongById";

export default {
  name: "SongView",

  data() {
    return {
      // TODO fix types
      songData: {} as any,
    };
  },
  async mounted() {
    const route = useRoute();
    const songId = route.params.id as string;
    const acessToken = localStorage.getItem("acessToken") as string;

    this.songData = await getSongById(acessToken, songId)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<template>
  <div class="song">
    <img :src="songData.album?.images[1].url" alt="" class="song__image" />

    <div class="song__details">
      <div class="song__details-title">{{ songData.name }}</div>
      <div class="song__details-text">
        <!-- Artists: {{ songData.artists[0]?.name }} -->
      </div>
      <div class="song__details-text">Album: {{ songData.album?.name }}</div>
      <div class="song__details-text">Duration: {{ songData.duration_ms }}</div>
      <div class="song__details-text">
        Popularity: {{ songData.popularity }}/100
      </div>
      <div class="song__details-text">
        Release Date: {{ songData.release_date }}
      </div>
      <div class="song__details-text">
        Explicit: {{ songData.explicit ? "Yes" : "No" }}
      </div>
      <!-- <div class="song__details-artist">{{ songData.artists[0]?.name }}</div> -->
      <button class="song__details-btn" @click="$refs.song.play()">
        <audio ref="song">
          <source :src="songData.preview_url" type="audio/mpeg" />
        </audio>
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
    font-size: 2rem;
    font-weight: 700;
  }

  &-artist {
    font-size: 1rem;
    font-weight: 500;
  }

  &-btn {
    display: flex;
    gap: 1rem;
    border-radius: 1rem;
    border: 1px solid #ffffff;
    padding: 0.5rem 1rem;
    align-self: flex-start;
  }
}
</style>
