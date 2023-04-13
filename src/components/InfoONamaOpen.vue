<template>
  <div class="popup px-4 fixed-bottom pb-3">
    <div class="pt-4 d-flex justify-content-between">
      <p class="title m-0 p-0 fs-1 d-inline-block">{{ data.title }}</p><i @click="useToggle().toggleOnama()" class="fa fa-close  fs-1 d-inline-block" aria-hidden="true"></i>
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

@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");
.title {
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

.fa-close {
  cursor: pointer;
}
</style>
