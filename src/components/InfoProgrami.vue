<template>
  <div
    class="info rounded-4 rounded-start py-2 mt-4"
    @click="useToggle().toggleProgrami()"
  >
    <p class="mx-3 my-1 title">
      <!-- O nama -->
      {{ data.title }} (38)
    </p>
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
  display: inline-block;
  width: 95vw;
  max-height: 200px;
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

.title {
  width: 90vw;
  font-weight: 600;
  font-size: 22px;
  font-family:   var(--font);
  white-space: nowrap;
}
.text {
  width: 90vw;
  height: auto;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
}
</style>
