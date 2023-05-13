<script lang="ts">
import { ref, Ref } from "vue";
import { useRoute } from "vue-router";
import SongsList from "../components/SongsList.vue";
import { formatArtistArray } from "../utils/helpers";
import { AlbumTypes } from "../utils/types";

import useQueryAlbum from "../utils/fetchers/query/useQueryAlbum";

export default {
  name: "AlbumView",
  components: { SongsList },

  setup() {
    const route = useRoute();
    const albumId = route.params.id as string;
    const acessToken = localStorage.getItem("acessToken") as string;

    const { isLoading, isError, data, error } = useQueryAlbum(
      acessToken,
      albumId
    );
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
  <div v-if="isLoading">
    <v-progress-circular indeterminate :size="80"></v-progress-circular>
  </div>
  <div v-else-if="isError">Error: {{ error }}</div>
  <div v-else>
    <v-icon class="align-self-start mb-4" @click="$router.go(-1)">
      fa fa-arrow-left
    </v-icon>
    <div class="header mb-4">
      <img :src="albumData.images?.[1].url" alt="" class="album__image" />
      <div class="header__content">
        <div class="header__content-title">{{ albumData.name }}</div>

        <div>By {{ formatArtistArray(albumData.artists) }}</div>
      </div>
    </div>
    <SongsList :songs="albumData.tracks.items" />
  </div>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  display: flex;
  gap: 2rem;
  place-items: center;
  padding: 2rem;
  background: linear-gradient(254.06deg, #686868 37.59%, #9f9f9f 93.6%);
  box-shadow: 3px 7px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

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
</style>
