<script lang="ts">
import getSearchResults from "../utils/fetchers/getSearchResults";
import AlbumCard from "../components/AlbumCard.vue";
import { reactive } from "vue";

export default {
  name: "SearchListView",
  components: {
    AlbumCard,
  },

  data() {
    const formData = reactive({
      inputSearch: "",
    });

    const albums = [] as any;

    const handleSearch = () => {
      const searchTerm = formData.inputSearch;
      const accessToken = localStorage.getItem("acessToken") as string;

      getSearchResults(accessToken, searchTerm)
        .then((res) => {
          this.albums = res;
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return {
      formData,
      handleSearch,
      albums,
    };
  },
};
</script>

<template>
  <div class="search">
    <form class="search-form" @submit.prevent="handleSearch">
      <input
        class="search-form__input"
        type="text"
        placeholder="Search for an album"
        v-model="formData.inputSearch"
      />
      <button class="search-form__btn">
        <v-icon>fa fa-search</v-icon>
      </button>
    </form>

    <div class="cards-list">
      <AlbumCard v-for="album in albums" :album="album" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/variables";

.search {
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 100%;
  gap: 2rem;
}

.search-form {
  display: flex;
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
