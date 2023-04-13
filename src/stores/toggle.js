import { defineStore } from "pinia";

export const useToggle = defineStore("toggle", {
  state: () => ({
    onamaOpen: false,
    programiOpen: false,
    pitanjaOpen: false,
    pripremeOpen: false,
    toggleOnama() {
      this.onamaOpen = !this.onamaOpen;
    },
    toggleProgrami() {
      this.programiOpen = !this.programiOpen;
    },
    togglePitanja() {
      this.pitanjaOpen = !this.pitanjaOpen;
    },
    togglePripreme() {
      this.pripremeOpen = !this.pripremeOpen;
    },
  }),
  actions: {},
});
