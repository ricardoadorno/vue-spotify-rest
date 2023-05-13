<script lang="ts">
import { ref, Ref } from "vue";
import { useRoute } from "vue-router";
import getAlbumById from "../utils/fetchers/getAlbumById";
import SongsList from "../components/SongsList.vue";
import { formatArtistArray } from "../utils/helpers";
import { AlbumTypes } from "../utils/types";

import { useQuery } from "@tanstack/vue-query";

export default {
  name: "AlbumView",
  components: { SongsList },

  setup() {
    const route = useRoute();
    const albumId = route.params.id as string;
    const acessToken = localStorage.getItem("acessToken") as string;

    const useQueryAlbum = () => {
      return useQuery({
        queryKey: ["album", albumId],
        queryFn: async () => {
          const response = await getAlbumById(acessToken, albumId);
          return response;
        },
        staleTime: Infinity,
      });
    };

    const { isLoading, isError, data, error } = useQueryAlbum();

    const albumData = ref(data) as Ref<AlbumTypes>;

    return {
      isLoading,
      isError,
      albumData,
      error,
    };
  },
  methods: {
    formatArtistArray,
  },
};
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-if="isError">Error: {{ error }}</div>
  <v-icon class="song__back-btn align-self-start" @click="$router.go(-1)">
    fa fa-arrow-left
  </v-icon>
  <div class="header">
    <img :src="albumData.images?.[1].url" alt="" class="album__image" />
    <div class="header__content">
      <div class="header__content-title">{{ albumData.name }}</div>

      <div>By {{ formatArtistArray(albumData.artists) }}</div>
    </div>
  </div>

  <SongsList :songs="albumData.tracks.items" />
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  display: flex;
  gap: 2rem;
  place-items: center;
  padding: 2rem;
  background-color: #686868;
  border-radius: 1rem;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &-title {
      font-size: 2rem;
      font-weight: 700;
    }
  }
}

.album__songs {
  display: flex;
  width: 100%;
  flex-direction: column;

  &__item {
    display: flex;
    justify-content: space-around;
    gap: 4rem;
    padding: 1rem;
    border-bottom: 1px solid #fff;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #686868;
      cursor: pointer;
    }
  }
}
</style>
