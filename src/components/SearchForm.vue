<script lang="ts">
export default {
  name: "SearchForm",

  props: {
    handleSearch: {
      type: Function,
      required: true,
    },
    formData: {
      type: Object as () => { inputSearch: string },
      required: true,
    },
  },
};
</script>

<template>
  <form class="search-form" @submit.prevent="handleSearch()">
    <input
      class="search-form__input"
      type="text"
      placeholder="Search for an album..."
      v-model="formData.inputSearch"
    />
    <button class="search-form__btn">
      <v-icon>fa fa-search</v-icon>
    </button>
  </form>
</template>

<style scoped lang="scss">
@import "../styles/global.scss";

.search-form {
  width: 70%;
  margin: 0 auto;
  display: flex;

  @include mobile {
    width: 100%;
  }

  &__input {
    width: 100%;
    background-color: #b8b8b8;
    padding: 1rem;
    border-radius: 0.5rem 0 0 0.5rem;

    &::placeholder {
      color: #272727;
      font-style: italic;
    }
  }

  &__btn {
    border: none;
    border-radius: 0 0.5rem 0.5rem 0;
    background-color: $spotify-green;
    padding: 1rem;
  }
}
</style>
