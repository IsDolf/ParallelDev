<template>
  <h2 class="title mx-4 pt-1 mb-0 pt-4 mt-3">Cijene po kategorijama:</h2>
  <div class="inset-shadow bg-info rounded-5 mx-2 mb-4">
    <div class="scroll-wrapper mt-3 pt-3 pb-4 px-4">
      <div class="card-wrapper">
        <div
          class="card box-shadow d-flex justify-content-center text-center"
          @click="useToggle().togglePripreme()"
        >
          <div class="row g-0">
            <div
              class="col-12 d-flex justify-content-center align-items-center"
            >
              <div class="card-body">
                <h5 class="card-title m-0 p-0">
                  Pripreme <br /><span class="card-text"
                    >za državnu maturu</span
                  >
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div
          class="card box-shadow d-flex justify-content-center align-items-center text-center"
        >
          <div class="row g-0">
            <div
              class="col-12 d-flex align-items-center justify-content-center"
            >
              <div class="card-body">
                <h5 class="card-title m-0 p-0">Instrukcije</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="card box-shadow d-flex justify-content-center text-center">
          <div class="row g-0">
            <div
              class="col-12 d-flex align-items-center justify-content-center"
            >
              <div class="card-body">
                <h5 class="card-title m-0 p-0 pb-1 pt-1 fs-5">
                  Pomoć u pisanju
                  <span class="fs-2 fst-italic">{{ pomoc }}</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div class="card box-shadow d-flex justify-content-center text-center">
          <div class="row g-0">
            <div
              class="col-12 d-flex align-items-center justify-content-center"
            >
              <div class="card-body">
                <h5 class="card-title m-0 p-0 pb-1 pt-1 ps-0">
                  Priprema <br /><span class="card-text">za natjecanja</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div class="card box-shadow d-flex justify-content-center text-center">
          <div class="row g-0">
            <div
              class="col-12 d-flex align-items-center justify-content-center"
            >
              <div class="card-body">
                <h5 class="card-title m-0 p-0 pb-1 pt-1 ps-1">
                  Organizacija seminara
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div class="card box-shadow d-flex justify-content-center text-center">
          <div class="row g-0">
            <div
              class="col-12 d-flex align-items-center justify-content-center"
            >
              <div class="card-body">
                <h5 class="card-title m-0 p-0 pb-1 pt-1 ps-0">
                  Najam učionice
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from "../router";
import { useToggle } from "../stores/toggle";
let currentPomoc = ref(0);
let pomoc = ref("zadaća");
let array = ["zadaća", "seminara", "projekata", "lektira"];
window.setInterval(() => {
  if (currentPomoc.value == 3) {
    currentPomoc.value = 0;
  } else currentPomoc.value++;
  pomoc.value = array[currentPomoc.value];
}, 2000);
</script>

<style scoped>
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
  font-family: "Rubik Maze", cursive;
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

.scroll-wrapper .card {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 230.38px;
  height: 106px;
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
  font-family: "Rubik Maze", cursive;
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
</style>
