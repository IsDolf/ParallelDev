<template>
  <div class="main-div">
    <div class="display-1 py-5 text-center pangolinFont">
      <p>Dobrodošli na službenu stranicu</p>
    </div>
    <div
      class="display-1 py-5 text-center pangolinFont"
      @click="useToggle().toggleSplash()"
    >
      <button class="btn btn-lg fs-1">Započnimo!</button>
    </div>
  </div>
</template>

<script setup>
import { useToggle } from "../stores/toggle";
</script>

<style scoped>
.main-div {
  width: 100vw;
  height: auto;
}

.pangolinFont {
  font-family: Pangolin;
}
</style>
