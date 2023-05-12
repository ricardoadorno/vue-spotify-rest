<script lang="ts">
import { useRoute } from "vue-router";
import getSongById from "../utils/fetchers/getSongById";
import { toMinutes, formatDate, formatArtistArray } from "../utils/methods";

export default {
  name: "SongView",

  data() {
    return {
      // TODO fix types
      songData: {} as any,
      playerActive: false,
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
  methods: {
    toMinutes,
    formatDate,
    formatArtistArray,
  },
};
</script>

<template>
  <v-icon class="song__back-btn align-self-start" @click="$router.go(-1)">
    fa fa-arrow-left
  </v-icon>
  <div class="song">
    <img :src="songData.album?.images[1].url" alt="" class="song__image" />

    <div class="song__details">
      <!-- <div class="song__details-title">{{ songData?.name }}</div>
      <div class="song__details-text">
        <b>Artist:</b> {{ formatArtistArray(songData?.artists) }}
      </div>

      <div class="song__details-text">
        <b>Album:</b> {{ songData.album.name }}
      </div>
      <div class="song__details-text">
        <b>Duration:</b> {{ toMinutes(songData.duration_ms) }}
      </div>
      <div class="song__details-text">
        <b>Popularity:</b> {{ songData.popularity }}/100
      </div>
      <div class="song__details-text">
        <b>Release Date:</b> {{ formatDate(songData.album?.release_date) }}
      </div>
      <div class="song__details-text">
        <b>Explicit:</b> {{ songData.explicit ? "Yes" : "No" }}
      </div> -->

      <button @click="playerActive = !playerActive" class="song__details-btn">
        <v-icon>fa fa-play</v-icon>
        Play a Demo
      </button>
      <audio v-if="playerActive" controls :src="songData.preview_url"></audio>
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
  gap: 0.4rem;

  &-title {
    font-size: 2rem;
    font-weight: 700;
  }

  &-btn {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    border-radius: 1rem;
    border: 1px solid #ffffff;
    padding: 0.5rem 1rem;
    align-self: flex-start;
  }
}

@media (max-width: 768px) {
  .song {
    flex-direction: column;
    gap: 1rem;
  }

  .song__image {
    width: 100%;
  }

  .song__details {
    width: 100%;
    align-items: flex-start;
  }
}
</style>
