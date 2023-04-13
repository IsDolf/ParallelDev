<template>
  <div
    class="popup px-5 fixed-bottom bg-info pb-3"
    @click="useToggle().toggleProgrami()"
  >
    <div class="pt-4 d-flex justify-content-center">
      <p class="title m-0 p-0 fs-2">{{ data.title }}</p>
    </div>
    <div class="mt-4 free-days fs-5">
      <div
        class="card bg-info my-2 box-shadow d-flex justify-content-center text-center"
        v-for="item in data.list"
      >
        <div class="row g-0">
          <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="card-body">
              <h5 class="card-title m-0 p-0 pb-1 pt-1 fs-5">
                {{ item }}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToggle } from "../stores/toggle";
const props = defineProps(["data"]);
</script>

<style scoped>
.title {
  width: 100vw;
  font-weight: 600;
  font-size: 18px;
  font-family: Chalkduster;
  white-space: nowrap;
}

.popup {
  border-radius: 12px 12px 0 0;
  overflow: scroll;
  height: 99vh;
  z-index: 1032;
}

.inset-shadow {
  box-shadow: rgb(21, 91, 153) 3px 3px 6px 0px inset,
    rgb(21, 91, 153) -3px -3px 6px 1px inset;
}
.title {
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 26px;
  color: rgb(0, 7, 101);
  width: 80vw;
  font-family: Chalkduster;
}

.scroll-wrapper {
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 27px;
  color: var(--component-title-color);
  overflow-x: scroll;
  gap: 10px;
  margin-inline: 6px;
  border-radius: 36px;
  display: flex;
}

.card {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  background-image: linear-gradient(
    90deg,
    rgb(0, 255, 34) 0.2%,
    rgba(53, 252, 79, 0.544) 99.1%
  );
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

.card-wrapper .card:hover {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 2px,
    rgba(0, 0, 0, 0.3) 0px 3.5px 6.5px -1.5px,
    rgba(0, 0, 0, 0.2) 0px -1.5px 0px inset;
}

.card-wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 11px;
  margin: 10px 10px;
}

.card-title {
  font-style: normal;
  font-size: 25px;
  line-height: 25px;
  letter-spacing: -0.2px;
  color: rgb(9, 53, 0);
  font-family: Chalkduster;
  font-weight: 900;
}

.card-text {
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  color: rgb(9, 53, 0);
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}

.card-text small {
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 23px;
  color: var(--component-light-text);
}

.boat-icon {
  width: 20px;
  height: 20px;
}

.card {
  background-image: linear-gradient(
    90deg,
    rgba(0, 255, 34, 0.763) 0.2%,
    rgba(53, 252, 79, 0.415) 99.1%
  );
}
</style>
