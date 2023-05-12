<script lang="ts">
import SearchForm from "../components/SearchForm.vue";
import AlbumCard from "../components/AlbumCard.vue";

import { ref } from "vue";

const albums = ref([
  {
    name: "Album Name",
    artist: "Artist Name",
    duration: "00:00",
    image: "https://placehold.it/200x200",
  },
  {
    name: "Album Name2",
    artist: "Artist Name2",
    duration: "00:00",
    image: "https://placehold.it/200x200",
  },
]);

export default {
  name: "SearchListView",
  components: {
    SearchForm,
    AlbumCard,
  },
  setup() {
    return {
      albums,
    };
  },
};
</script>

<template>
  <div class="container">
    <SearchForm albuns="albuns" />
    <div class="cards-list">
      <AlbumCard v-for="album in albums" :album="album" />
    </div>
  </div>
</template>

<style lang="scss">
.container {
  max-width: 80vw;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  place-items: center;
}

.cards-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
