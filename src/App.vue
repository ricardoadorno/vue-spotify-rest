<script lang="ts">
import Navbar from "./components/Navbar.vue";
import getAcessToken from "./utils/fetchers/getAcessToken";

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
      <transition name="slide-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </div>
  </router-view>

  <footer class="player" v-if="$store.state.audioState.audioUrl">
    <v-icon class="close-btn" @click="$store.dispatch('closeAudio')">
      fa fa-times
    </v-icon>
    <div class="track-name">
      {{ $store.state.audioState.trackName }}
    </div>

    <audio controls autoplay>
      <source :src="$store.state.audioState.audioUrl" type="audio/mpeg" />
    </audio>
  </footer>
</template>

<style lang="scss">
@import "./styles/global.scss";

.container {
  max-width: 50vw;
  margin: 2rem auto;
  margin-bottom: 8rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  place-items: center;

  @include mobile {
    max-width: 70vw;
  }
}

.player {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  padding: 0.8rem 1.5rem 0.4rem 1.5rem;
  border-radius: 1rem 1rem 0 0;
  background-color: #f1f3f4;
  color: #000;

  .close-btn {
    position: absolute;
    font-size: 1.2rem;
    top: 0.4rem;
    right: 0.4rem;
  }

  .track-name {
    font-size: 0.8rem;
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
