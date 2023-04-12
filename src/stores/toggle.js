import { defineStore } from "pinia";

export const useToggle = defineStore("toggle", {
  state: () => ({
    onamaOpen: false,
    programiOpen: false,
    toggleOnama() {
      this.onamaOpen = !this.onamaOpen;
    },
    toggleProgrami() {
      this.programiOpen = !this.programiOpen;
    },
  }),
  actions: {},
});
