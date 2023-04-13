<template>
  <div
    class="popup px-5 fixed-bottom bg-info pb-3"
    @click="useToggle().togglePitanja()"
  ></div>
</template>

<script setup>
import { useToggle } from "../stores/toggle";
</script>

<style scoped>
@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");

.card-wrapper-solo {
  min-width: 250px;
  padding-inline: 5px;
}
.title {
  width: 100vw;
  font-weight: 600;
  font-size: 18px;
  font-family:   var(--font);
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
  font-family:   var(--font);
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
  font-family:   var(--font);
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
