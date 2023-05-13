<script lang="ts">
import Navbar from "./components/Navbar.vue";
import getAcessToken from "./utils/fetchers/getAcessToken";

// TODO solve the problem of acess token store
// TODO undestand types problems on vue-query
// TODO break down the components more
//TODO  add styles and animations

export default {
  name: "App",
  components: {
    Navbar,
  },

  async mounted() {
    const accessToken = await getAcessToken();
    localStorage.setItem("acessToken", accessToken);
  },
};
</script>

<template>
  <Navbar />
  <router-view v-slot="{ Component }">
    <div class="container">
      <components :is="Component" />
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
