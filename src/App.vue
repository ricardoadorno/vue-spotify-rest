<script lang="ts">
import Navbar from "./components/Navbar.vue";
import getAcessToken from "./utils/fetchers/getAcessToken";

// TODO undestand types problems on vue-query
//TODO  add styles and animations
// TODO adding vuex with player

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
      <component :is="Component" />
    </div>
  </router-view>
</template>

<style lang="scss">
@import "./styles/global.scss";

.container {
  max-width: 50vw;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  place-items: center;

  @include mobile {
    max-width: 70vw;
  }
}
</style>
