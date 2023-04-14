<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useToggle } from "./stores/toggle";
import SplashComponent from "./components/SplashComponent.vue";

setInterval(() => {
  useToggle().toggleSplash()
}, 1800);
</script>

<template>
  <Transition name="slide-fade">
    <nav class="navbar box-shadow" v-if="useToggle().splash"  @click="useToggle().toggleSplash()">
      <img class="m-auto py-5 mt-2" src="./assets/parallelLogoFinal.png" alt="" />
      <SplashComponent> </SplashComponent>
      <div class="container-fluid d-flex justify-content-center">
        <a class="navbar-brand fw-bold fst-italic" href="#"
          ><h1>Parallel Poduke</h1></a
        >
      </div>
    </nav>
  </Transition>
  <Transition name="slide-fade">
    <nav class="navbar navbar-expand-lg box-shadow" v-if="useToggle().splash1">
      <div class="container-fluid d-flex justify-content-center">
        <a class="navbar-brand fw-bold fst-italic" href="#"
          ><h1>Parallel Poduke</h1></a
        >
      </div>
    </nav>
  </Transition>
  <RouterView v-if="useToggle().splash1"/>
</template>

<style scoped>
@font-face {
  font-family: PermamentMarker;
  src: url("./assets/PermanentMarker-Regular.ttf");
}

img {
  width: 200px;
  opacity: 1;
}

nav {
  font-family: PermamentMarker;
  border-radius: 0 0 3000em 3000em / 0 0 100em 100em;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background-color: rgba(64, 255, 0, 0.132);
}

.slide-fade-enter-active {
  transition: all 0.6s;
}

.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-100%);
  opacity: 1;
}
</style>
