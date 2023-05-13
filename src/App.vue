<script lang="ts">
import { useQuery } from "@tanstack/vue-query";
import Navbar from "./components/Navbar.vue";
import getAcessToken from "./utils/fetchers/getAcessToken";

// TODO adding vuex with player
// TODO do 4 tests

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
      <transition name="slide-fade" mode="out-in">
        <component :is="Component" />
      </transition>
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

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
