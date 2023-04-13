<template>
  <div class="popup px-4 fixed-bottom pb-3" @click="useToggle().toggleOnama()">
    <div class="pt-4">
      <p class="title m-0 p-0 fs-1">{{ data.title }}</p>
    </div>
    <div class="mt-4 free-days fs-5">
      <p><slot></slot> {{ data.list }}</p>
      <p v-for="section in data.sections">
        {{ section }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useToggle } from "../stores/toggle";
const props = defineProps(["data"]);
</script>

<style scoped>
.title {
  width: 90vw;
  font-weight: 600;
  font-size: 18px;
  font-family: Chalkduster !important;
}

.popup {
  border-radius: 12px 12px 0 0;
  overflow: scroll;
  height: 85vh;
  z-index: 1032;
  background: rgb(0, 255, 211);
  background: linear-gradient(rgb(0, 213, 255) 3%, rgb(52, 255, 184) 81%);
}
</style>
