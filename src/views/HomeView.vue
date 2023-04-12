<template>
  <main>
    <InfoONama :data="useDataStore().onama">
      <slot> Mi smo <span class="parallelFont">Parallel</span>. </slot>
    </InfoONama>

    <Cards />
asd
    <InfoProgrami :data="useDataStore().programi" />

    <InfoONamaOpen v-if="useToggle().onamaOpen" :data="useDataStore().onama">
      <slot> Mi smo <span class="parallelFont">Parallel</span>. </slot>
    </InfoONamaOpen>
    <InfoProgramiOpen
      v-if="useToggle().programiOpen"
      :data="useDataStore().programi"
    />
    <FooterComponent />
  </main>
</template>

<script setup>
import { useDataStore } from "../stores/dataStore";
import { useToggle } from "../stores/toggle";
import InfoONamaOpen from "../components/InfoONamaOpen.vue";
import InfoProgramiOpen from "../components/InfoProgramiOpen.vue";
import InfoONama from "../components/InfoONama.vue";
import InfoProgrami from "../components/InfoProgrami.vue";
import Cards from "../components/Cards.vue";
import FooterComponent from "../components/FooterComponent.vue";
</script>
