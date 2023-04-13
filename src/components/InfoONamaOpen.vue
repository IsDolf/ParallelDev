<template>
  <div
    class="wrapper fixed-bottom"
    @click="useToggle().toggleOnama()"
  >
    <div class="popup px-4 fixed-bottom bg-white pb-3">
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
  </div>
</template>

<script setup>
import { useToggle } from '../stores/toggle';
const props = defineProps(["data"]);
</script>

<style scoped>
.title {
  width: 90vw;
  font-weight: 600;
  font-size: 18px;
  font-family: Chalkduster;
}

.transparent-black {
  background: rgb(25, 32, 34);
  background: linear-gradient(
    180deg,
    rgba(34, 25, 25, 0.5284488795518207) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

.wrapper {
  height: 100vh;
  background-color: transparent;
  z-index: 1032;
}

.popup {
  border-radius: 12px 12px 0 0;
  overflow: scroll;
  height: 85vh;
}
</style>
