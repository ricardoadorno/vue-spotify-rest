<script setup lang="ts"></script>

<template>
  <nav class="navbar">
    <RouterLink to="/">
      <h1 class="d-flex align-items-center">
        <img
          src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/spotify-icon.svg"
          alt="Logo"
          width="40"
          class="mr-3"
        />
        Spotify Rest Api
      </h1>
    </RouterLink>

    <div>By Ricardo Adorno</div>
  </nav>
</template>

<style>
.navbar {
  width: 100%;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.5rem;
}

h1 {
  font-size: 2rem;
}
</style>
