<script lang="ts">
import getSearchResults from "../utils/fetchers/getSearchResults";

export default {
  name: "SearchListView",
  data() {
    return {
      searchTerm: "",
      albums: [],
    };
  },
  methods: { getSearchResults },
};
</script>

<template>
  <div class="search-form">
    <input
      class="search-form__input"
      v-model="searchTerm"
      type="text"
      placeholder="Search for an album"
    />
    <button
      @click="
        async () => {
          albums = await getSearchResults(
            $store.state.acessToken,
            'searchTerm'
          );
        }
      "
      class="search-form__btn"
    >
      <v-icon>fa fa-search</v-icon>
    </button>
  </div>

  <!-- 
    <div class="cards-list">
      <AlbumCard v-for="album in albums" :album="album" />
    </div> -->
</template>

<style scoped lang="scss">
@import "../styles/variables";

.search-form {
  display: flex;
  place-items: center;
  padding: 1rem;

  &__input {
    background-color: #fff;
    padding: 1rem;
    border-radius: 0.5rem 0 0 0.5rem;
  }

  &__btn {
    border: none;
    border-radius: 0 0.5rem 0.5rem 0;
    background-color: $spotify-green;
    padding: 1rem;
  }
}

.cards-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
