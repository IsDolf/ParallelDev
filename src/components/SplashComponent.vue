<template>
  <div class="main-div">
    <div class="display-1 py-2 text-center pangolinFont">
      <p>Dobrodošli na službenu stranicu</p>
    </div>
    <div class="d-flex justify-content-center">
      <div
        class="card mb-3 py-2 d-flex justify-content-center text-center px-5 pangolinFont fw-bold display-4"
      >
        Započnimo!
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToggle } from "../stores/toggle";
</script>

<style scoped>
.card {
  flex-direction: row;
  align-items: center;
  padding: 0px;
  background: rgba(72, 75, 255, 0.403);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 4px,
    rgba(0, 0, 0, 0.3) 0px 3px 3px -2px, rgba(0, 0, 0, 0.2) 0px -1px 1px inset;
  border: 1px solid rgba(156, 252, 248, 1) 11.2%, rgba(110, 123, 251, 1) 91.1%;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}
.main-div {
  width: 100vw;
  height: auto;
}

.pangolinFont {
  font-family: Pangolin;
}
</style>
