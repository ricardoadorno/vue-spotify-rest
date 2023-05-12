<script lang="ts">
import getAcessToken from "../utils/fetchers/getAcessToken";

export default {
  name: "SearchForm",
  props: {
    albuns: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <form class="search-form">
    <input
      class="search-form__input"
      type="text"
      placeholder="Search for an album"
    />
    <button class="search-form__btn" type="submit">
      <v-icon>fa fa-search</v-icon>
    </button>
  </form>
</template>

<style lang="scss">
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
</style>
```
