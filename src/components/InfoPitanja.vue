<template>
  <div
    class="info rounded-4 rounded-start py-2 mt-4"
    @click="useToggle().togglePitanja()"
  >
    <p class="mx-3 my-1 title d-inline-block">
      <!-- O nama -->
      Kontakt
    </p>
    <Transition name="slide-fade">
      <div class="rounded-4 mx-1" v-if="useToggle().pitanjaOpen">
        <div class="d-flex justify-content-around d-inline-block">
          <a
            class="fs-8 text-decoration-none fw-bold text-dark"
            href="mailto:rudolf.rukavina@hexis.hr?subject=Pripreme%20za%20državnu%20maturu&body=Poštovani%2C%0D%0A%0D%0ANadam%20se%20da%20ste%20dobro.%20Javljam%20Vam%20se%20kako%20bih%20provjerio%2Fla%20dostupnost%20%20trenutno%20izabrane%20pripreme%20.%20Zanima%20me%20kupnja%20usluge%20u%20periodu%20od%20%20time%20frame%20.%20%0D%0A%0D%0AMolim%20Vas%2C%20možete%20li%20mi%20javiti%20je%20li%20usluga%20dostupna%20u%20tom%20razdoblju%3F%0D%0A%0D%0AUnaprijed%20zahvaljujem%20na%20Vašem%20vremenu%20i%20pomoći.%20Veselim%20se%20Vašem%20odgovoru.%0D%0A%0D%0ASrdačan%20pozdrav%2C%0D%0A%20ime%20klijenta%20"
          >
            <i
              class="fa fa-envelope mx-auto px-5 my-3"
              style="font-size: 46px"
            ></i
          ></a>

          <a
            class="fs-8 text-decoration-none fw-bold text-dark"
            href="tel:+385992053344"
          >
            <i class="fa fa-phone mx-auto px-5 my-3" style="font-size: 46px"></i
          ></a>
        </div>
        <div class="d-flex justify-content-around d-inline-block">
          <p>
            <a
              class="fs-8 text-decoration-none fw-bold text-dark"
              href="mailto:rudolf.rukavina@hexis.hr?subject=Pripreme%20za%20državnu%20maturu&body=Poštovani%2C%0D%0A%0D%0ANadam%20se%20da%20ste%20dobro.%20Javljam%20Vam%20se%20kako%20bih%20provjerio%2Fla%20dostupnost%20%20trenutno%20izabrane%20pripreme%20.%20Zanima%20me%20kupnja%20usluge%20u%20periodu%20od%20%20time%20frame%20.%20%0D%0A%0D%0AMolim%20Vas%2C%20možete%20li%20mi%20javiti%20je%20li%20usluga%20dostupna%20u%20tom%20razdoblju%3F%0D%0A%0D%0AUnaprijed%20zahvaljujem%20na%20Vašem%20vremenu%20i%20pomoći.%20Veselim%20se%20Vašem%20odgovoru.%0D%0A%0D%0ASrdačan%20pozdrav%2C%0D%0A%20ime%20klijenta%20"
              >rudolf.rukavina@hexis.hr</a
            >
          </p>

          <p>
            <a
              class="fs-8 text-decoration-none fw-bold text-dark"
              href="tel:+385992053344"
              >+385992053344</a
            >
          </p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { useToggle } from "../stores/toggle";
const props = defineProps(["data"]);
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.6s;
}

.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100vw);
  opacity: 0;
}
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
  font-family: var(--font);
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
