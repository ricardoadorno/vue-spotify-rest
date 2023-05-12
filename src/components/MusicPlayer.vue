<script lang="ts">
export default {
  name: "MusicPlayer",
  data() {
    return {
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      playing: false,
      songName: "Crazy Love - Aaron Neville",
      songAudio: null as HTMLAudioElement | null,
      isMuted: false,
      songVolume: 0,
      duration: 0,
      currentTime: 0,
    };
  },
  methods: {
    playOrPause() {
      if (this.playing) {
        this.songAudio?.pause();
      } else {
        this.songAudio?.play();
      }
      this.playing = !this.playing;
    },
    mute() {
      this.songAudio!.muted = !this.songAudio!.muted;
      this.isMuted = !this.isMuted;
    },
    formatTime(time: number) {
      const minutes = Math.floor(time / 60)
        .toString()
        .padStart(2, "0");
      const seconds = Math.floor(time % 60)
        .toString()
        .padStart(2, "0");
      return `${minutes}:${seconds}`;
    },

    // TODO Set volume and time

    handleVolumeChange() {
      this.songAudio!.volume = this.songVolume;
    },
    handleTimeChange() {
      this.songAudio!.currentTime = this.currentTime;
    },
  },
  mounted() {
    this.songAudio = this.$refs.audio as HTMLAudioElement;
    this.songVolume = this.songAudio.volume;
    this.songAudio.addEventListener("timeupdate", () => {
      this.currentTime = Math.floor(this.songAudio!.currentTime);
      this.duration = Math.floor(this.songAudio!.duration);
    });
  },
};
</script>

<template>
  <footer>
    <div>
      <audio ref="audio">
        <source :src="audioUrl" type="audio/mpeg" />
      </audio>
      <h4>{{ songName }}</h4>
      <div class="volume">
        <v-slider
          track-color="white"
          v-model="songVolume"
          max="1"
          step="0.1"
          @change="handleVolumeChange"
        ></v-slider>
        <v-icon
          class="pointer"
          @click="mute"
          :color="isMuted ? 'red' : 'white'"
          >{{ isMuted ? "fas fa-volume-mute" : "fas fa-volume-up" }}</v-icon
        >
        <div>{{ songVolume * 100 }}%</div>
      </div>
    </div>

    <div class="player-controls">
      <div class="d-flex justify-center align-center">
        <v-icon class="pointer">fas fa-step-backward</v-icon>

        <v-btn class="ma-2 pa-2" icon @click="playOrPause">
          <v-icon>{{ playing ? "fas fa-pause" : "fas fa-play" }}</v-icon>
        </v-btn>

        <v-icon class="pointer">fas fa-step-forward</v-icon>
      </div>
    </div>

    <div class="timeline">
      <span>{{ formatTime(currentTime) }}</span
      >/ <span>{{ formatTime(duration) }}</span>

      <v-slider
        track-color="white"
        v-model="currentTime"
        :max="duration"
        @change="handleTimeChange"
      ></v-slider>
    </div>
  </footer>
</template>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #1db954;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.player-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
}

.volume {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.timeline {
  display: flex;
  flex: 9;
  justify-content: space-around;
  align-items: center;
}

.pointer {
  cursor: pointer;
}
</style>
```
