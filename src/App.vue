<script lang="ts">
import Navbar from "./components/Navbar.vue";
import MusicPlayer from "./components/MusicPlayer.vue";
import getAcessToken from "./utils/fetchers/getAcessToken";

// TODO solve the problem of acess token store
// TODO use vue-query
// TODO type the data
// TODO fix artists array
// TODO break down the components more
//TODO  add styles and animations

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
  <MusicPlayer />
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
