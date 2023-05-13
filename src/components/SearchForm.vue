<script lang="ts">
export default {
  name: "SearchForm",

  props: {
    handleSearch: Function as () => void,
    FormData: Object as () => { inputSearch: string },
  },

  data() {
    return {
      props: this.$props,
    };
  },
};
</script>

<template>
  <form class="search-form" @submit.prevent="props.handleSearch">
    <input
      class="search-form__input"
      type="text"
      placeholder="Search for an album"
      v-model="props.FormData?.inputSearch"
    />
    <button class="search-form__btn">
      <v-icon>fa fa-search</v-icon>
    </button>
  </form>
</template>

<style scoped lang="scss">
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
</style>
