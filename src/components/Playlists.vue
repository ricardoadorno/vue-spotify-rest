<script setup lang="ts">
// fetch playlists from spotify
async function fetchProfile(): Promise<any> {
  const result = await fetch(
    "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_SPOTIFY_TOKEN}`,
      },
    }
  );

  return await result.json();
}

fetchProfile().then((data) => console.log(data));
</script>

<template>
  <main>
    <h2>Search</h2>
  </main>
</template>

<style scoped></style>
