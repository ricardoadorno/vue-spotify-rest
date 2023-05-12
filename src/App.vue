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

  async mounted() {
    // getAcessToken().then((token) => {
    //   this.$store.dispatch("setAcessToken", token);
    // });

    if (localStorage.getItem("acessToken")) {
      return;
    }

    const acessToken = await getAcessToken();

    localStorage.setItem("acessToken", acessToken);
  },
};
</script>

<template>
  <Navbar />
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
  flex-direction: column;
  gap: 2rem;
  place-items: center;
}
</style>
