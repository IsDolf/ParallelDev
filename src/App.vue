<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="asd">
  <nav class="navbar navbar-expand-lg box-shadow">
    <div class="container-fluid d-flex justify-content-center">
      <a class="navbar-brand fw-bold fst-italic" href="#"
        ><h1>Parallel Poduke</h1></a
      >
    </div>
  </nav>
  <RouterView />
</div>
</template>

<style scoped>
nav {
  font-family: Chalkduster;
  border-radius: 0 0 3000em 3000em / 0 0 100em 100em;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background-color: rgba(64, 255, 0, 0.132);
}

.asd {
  height: 100vh;
}
</style>
