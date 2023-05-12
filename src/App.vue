<script lang="ts">
import Navbar from "./components/Navbar.vue";
import MusicPlayer from "./components/MusicPlayer.vue";

async function getAcessToken() {
  const fetchParams = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:
      "grant_type=client_credentials&client_id=" +
      import.meta.env.VITE_SPOTIFY_API_KEY +
      "&client_secret=" +
      import.meta.env.VITE_CLIENTE_SECRET,
  };

  const token = await fetch(
    "https://accounts.spotify.com/api/token",
    fetchParams
  )
    .then((response) => response.json())
    .then((data) => {
      return data.access_token;
    })
    .catch((error) => {
      console.log(error);
    });

  return token;
}

async function searchAlbum(acessToken: string, searchTerm: string) {
  const searchParam = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + acessToken,
    },
  };

  const URLsearch = new URLSearchParams({
    q: searchTerm,
    type: "album",
    limit: "10",
  });

  const album = await fetch(
    "https://api.spotify.com/v1/search?" + URLsearch,
    searchParam
  )
    .then((response) => response.json())
    .then((data) => {
      return data.albums.items;
    });

  return album;

  // const albumTracks = await fetch(
  //   "https://api.spotify.com/v1/albums/" + album + "/tracks",
  //   searchParam
  // )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     return data.items;
  //   });

  // return albumTracks;
}

export default {
  name: "App",
  components: {
    Navbar,
    MusicPlayer,
  },

  data() {
    return {
      acessToken: "",
      albumList: [] as any,
    };
  },
  mounted() {
    getAcessToken().then((token) => {
      this.acessToken = token;
    });
  },
  methods: {
    searchAlbum,
    async handleSearch(event: any) {
      const searchTerm = event.target[0].value;
      this.albumList = await searchAlbum(this.acessToken, searchTerm);
    },
  },
};
</script>

<template>
  <Navbar />

  <form @submit.prevent="handleSearch">
    <input type="text" placeholder="Search for an album" />
    <input type="submit" value="Search" />
  </form>

  <ul>
    <li v-for="album in albumList" :key="album.id">
      {{ album.name }}
    </li>
  </ul>
</template>

<style scoped></style>
