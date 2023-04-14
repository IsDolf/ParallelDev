<template>
  <div
    class="info rounded-4 rounded-start py-2 mt-4"
    @click="useToggle().toggleOnama()"
  >
    <p class="mx-3 my-1 title">
      <!-- O nama -->
      {{ data.title }}
    </p>
    <div class="text-wrapper">
    <p class="mx-3 my-1 text">
      <slot></slot>
      {{ data.text }}
    </p>
  </div>
  </div>
</template>

<script setup>
import { useToggle } from "../stores/toggle";
const props = defineProps(["data"]);
</script>

<style scoped>
.text-wrapper {
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.info {
  position: relative;
  display: inline-block;
  width: 95vw;
  background: rgb(5, 218, 255);
  color: rgb(0, 7, 101);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border: 1px solid rgba(156, 252, 248, 1) 11.2%, rgba(110, 123, 251, 1) 91.1%;
}
.info:hover {
  color: rgb(0, 10, 148);
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 2px,
    rgba(0, 0, 0, 0.3) 0px 3.5px 6.5px -1.5px,
    rgba(0, 0, 0, 0.2) 0px -1.5px 0px inset;
}

@font-face {
  font-family: Pangolin;
  src: url("../assets/Pangolin-Regular.ttf");
}

.title {
  width: 90vw;
  font-weight: 600;
  font-size: 22px;
  font-family:   var(--font);
}
.text {
  width: 90vw;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  border-radius: 5px;
  font-family: Pangolin;
}
</style>
