import { defineStore } from "pinia";

export const useToggle = defineStore("toggle", {
  state: () => ({
    onamaOpen: false,
    programiOpen: false,
    pitanjaOpen: false,
    pripremeOpen: false,
    splash: true,
    splash1: false,
    splash2: false,
    splash3: false,
    splash4: false,
    splash5: false,
    splash6: false,

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
    toggleSplash() {
      this.splash = false;
      setInterval(() => {
        this.splash1 = true;
      }, 900);
      setInterval(() => {
        this.splash2 = true;
      }, 1500);
      setInterval(() => {
        this.splash3 = true;
      }, 2300);
      setInterval(() => {
        this.splash4 = true;
      }, 3100);
      setInterval(() => {
        this.splash5 = true;
      }, 3900);
      setInterval(() => {
        this.splash6 = true;
      }, 4700);
    },
  }),
  actions: {},
});
