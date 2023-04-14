<template>
  <main>
<SplashComponent v-if="!splash">
  
</SplashComponent>
    
<div v-else>
    <InfoONama v-if="!useToggle().pripremeOpen" :data="useDataStore().onama">
      <slot> Mi smo Parallel.</slot>
    </InfoONama>

    <Cards v-if="!useToggle().pripremeOpen" />

    <InfoProgrami
      v-if="!useToggle().pripremeOpen"
      :data="useDataStore().programi"
    />

    <InfoPitanja v-if="!useToggle().pripremeOpen" />

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

    <FooterComponent v-if="!useToggle().pripremeOpen" />
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
</style>
