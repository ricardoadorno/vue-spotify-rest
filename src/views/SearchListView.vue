<script lang="ts">
import getSearchResults from "../utils/fetchers/getSearchResults";
import AlbumCard from "../components/AlbumCard.vue";
import SearchForm from "../components/SearchForm.vue";
import { reactive } from "vue";
import { AlbumTypes } from "../utils/types";

export default {
  name: "SearchListView",
  components: {
    AlbumCard,
    SearchForm,
  },

  data() {
    const formData = reactive({
      inputSearch: "",
    });

    const albums = reactive<AlbumTypes[]>([]);

    const handleSearch = () => {
      const searchTerm = formData.inputSearch;
      const accessToken = localStorage.getItem("acessToken") as string;

      if (!searchTerm) return alert("Please enter a search term");

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
    <SearchForm @handleSearch="handleSearch" :formData="formData" />
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

.cards-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
