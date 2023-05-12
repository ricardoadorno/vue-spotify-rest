<script lang="ts">
import { useRoute } from "vue-router";
import getAlbumById from "../utils/fetchers/getAlbumById";
import SongsList from "../components/SongsList.vue";

export default {
  name: "AlbumView",
  components: { SongsList },

  data() {
    return {
      // TODO fix types
      albumData: {} as any,
    };
  },
  async mounted() {
    const route = useRoute();
    const albumId = route.params.id as string;
    const acessToken = localStorage.getItem("acessToken") as string;

    this.albumData = await getAlbumById(acessToken, albumId)
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
  <div class="header">
    <img :src="albumData.images?.[1].url" alt="" class="album__image" />
    <div class="header__content">
      <div class="header__content-title">{{ albumData.name }}</div>

      <div class="header__content-artist">
        By {{ albumData.artists?.[0].name }}
      </div>
    </div>
  </div>

  <SongsList :songs="albumData.tracks?.items" />
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

    &-artist {
      font-size: 1.5rem;
      font-weight: 500;
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
