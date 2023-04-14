<template>
  <main>
    <div>
      <Transition name="slide-right">
        <InfoONama
          v-if="!useToggle().pripremeOpen && useToggle().splash2"
          :data="useDataStore().onama"
        >
          <slot> Mi smo Parallel.</slot>
        </InfoONama>
      </Transition>

      <Transition name="slide-fade">
        <div v-if="!useToggle().pripremeOpen && useToggle().splash3">
        <Cards />
      </div>
      </Transition>
      <Transition name="slide-right">
        <InfoProgrami
          v-if="!useToggle().pripremeOpen && useToggle().splash4"
          :data="useDataStore().programi"
        />
      </Transition>
      <Transition name="slide-right">
        <InfoPitanja v-if="!useToggle().pripremeOpen && useToggle().splash5" />
      </Transition>
      <Transition name="slide-fade">
        <InfoONamaOpen
          v-if="useToggle().onamaOpen && !useToggle().pripremeOpen"
          :data="useDataStore().onama"
        >
          <slot> Mi smo Parallel.</slot>
        </InfoONamaOpen>
      </Transition>

      <Transition name="slide-fade">
        <InfoProgramiOpen
          v-if="useToggle().programiOpen && !useToggle().pripremeOpen"
          :data="useDataStore().programi"
        />
      </Transition>
      <Transition name="slide-fade">
        <PripremeComponent v-if="useToggle().pripremeOpen" />
      </Transition>
      <Transition name="slide-fade">
      <FooterComponent
        v-if="!useToggle().pripremeOpen && useToggle().splash6"
      />
      </Transition>
    </div>
  </main>
</template>

<script setup>
import { useDataStore } from "../stores/dataStore";
import { useToggle } from "../stores/toggle";
import InfoONamaOpen from "../components/InfoONamaOpen.vue";
import InfoProgramiOpen from "../components/InfoProgramiOpen.vue";
import PripremeComponent from "../components/PripremeComponent.vue";
import InfoONama from "../components/InfoONama.vue";
import InfoProgrami from "../components/InfoProgrami.vue";
import InfoPitanja from "../components/InfoPitanja.vue";
import Cards from "../components/Cards.vue";
import FooterComponent from "../components/FooterComponent.vue";
import SplashComponent from "../components/SplashComponent.vue";
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.6s;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(90vh);
  opacity: 0;
}

.slide-right-enter-active {
  transition: all 0.6s;
}

.slide-right-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(-100vw);
  opacity: 0;
}
</style>
