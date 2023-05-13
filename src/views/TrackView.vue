<script lang="ts">
import { ref, Ref } from "vue";
import { useRoute } from "vue-router";
import getTrackById from "../utils/fetchers/getTrackById";
import { toMinutes, formatDate, formatArtistArray } from "../utils/helpers";
import { TrackTypes } from "../utils/types";

import { useQuery } from "@tanstack/vue-query";

export default {
  name: "TrackView",

  data() {
    return {
      playerActive: false,
    };
  },
  setup() {
    const route = useRoute();
    const trackId = route.params.id as string;
    const acessToken = localStorage.getItem("acessToken") as string;

    const useQueryTrack = () => {
      return useQuery({
        queryKey: ["track", trackId],
        queryFn: async () => {
          const response = await getTrackById(acessToken, trackId);
          return response;
        },
        staleTime: Infinity,
      });
    };

    const { isLoading, isError, data, error } = useQueryTrack();

    const trackData = ref(data) as Ref<TrackTypes>;

    return {
      isLoading,
      isError,
      trackData,
      error,
    };
  },
  methods: {
    toMinutes,
    formatDate,
    formatArtistArray,
  },
};
</script>

<template>
  <div v-if="isLoading">
    <v-progress-circular indeterminate :size="80"></v-progress-circular>
  </div>
  <div v-else-if="isError">Error: {{ error }}</div>

  <v-icon class="song__back-btn align-self-start" @click="$router.go(-1)">
    fa fa-arrow-left
  </v-icon>

  <div class="song">
    <img
      :src="trackData.album.images[1].url"
      alt="Album Image"
      class="song__image"
    />

    <!-- TODO Find solution like JSX componets: DRY code -->
    <div class="song__details">
      <div class="song__details-title">{{ trackData.name }}</div>
      <div>
        <v-icon class="icon-size text-purple">fa fa-microphone</v-icon>
        <b>Artist:</b> {{ formatArtistArray(trackData.artists) }}
      </div>

      <div>
        <v-icon class="icon-size">fa fa-compact-disc</v-icon>
        <b>Album:</b>
        {{ trackData.album.name }}
      </div>
      <div>
        <v-icon class="icon-size text-blue">fa fa-music</v-icon>
        <b>Duration:</b> {{ toMinutes(trackData.duration_ms) }}
      </div>
      <div>
        <v-icon class="icon-size text-amber">fa fa-fire</v-icon>
        <b>Popularity:</b> {{ trackData.popularity }}/100
      </div>
      <div>
        <v-icon class="icon-size text-green">fa fa-calendar</v-icon>
        <b>Release Date:</b> {{ formatDate(trackData.album.release_date) }}
      </div>
      <div>
        <v-icon class="icon-size text-red">fa fa-exclamation-circle</v-icon>
        <b>Explicit:</b> {{ trackData.explicit ? "Yes" : "No" }}
      </div>

      <button @click="playerActive = !playerActive" class="song__details-btn">
        <v-icon>fa fa-play</v-icon>
        Play a Demo
      </button>
      <audio v-if="playerActive" controls :src="trackData.preview_url"></audio>
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

.icon-size {
  font-size: 1rem;
  margin-right: 0.5rem;
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
