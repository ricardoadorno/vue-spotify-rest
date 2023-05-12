<script lang="ts">
import Navbar from "./components/Navbar.vue";
import MusicPlayer from "./components/MusicPlayer.vue";
import getAcessToken from "./utils/fetchers/getAcessToken";

export default {
  name: "App",
  components: {
    Navbar,
    MusicPlayer,
  },

  mounted() {
    getAcessToken().then((token) => {
      this.$store.dispatch("setAcessToken", token);
    });
  },
};
</script>

<template>
  <Navbar />

  <!-- <form @submit.prevent="handleSearch">
    <input type="text" placeholder="Search for an album" />
    <input type="submit" value="Search" />
  </form>

  <ul>
    <li v-for="album in albumList" :key="album.id">
      {{ album.name }}
    </li>
  </ul> -->

  <router-view v-slot="{ Component }">
    <div class="container">
      <component :is="Component" />
    </div>
  </router-view>
</template>

<style scoped>
.container {
  max-width: 50vw;
  margin: 2rem auto;
  display: flex;
  gap: 2rem;
  place-items: center;
}
</style>
