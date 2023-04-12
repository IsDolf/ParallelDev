<template>
  <main>
    <Info :data="useDataStore().onama" @action="useToggle().toggleOnama()">
      <slot> Mi smo <span class="parallelFont">Parallel</span>. </slot>
    </Info>

    <Cards />

    <Info
      :data="useDataStore().programi"
      @action="useToggle().toggleProgrami()"
    />

    <InfoOpen
      v-if="useToggle().onamaOpen"
      :data="useDataStore().onama"
      @action="useToggle().toggleOnama()"
    >
      <slot> Mi smo <span class="parallelFont">Parallel</span>. </slot>
    </InfoOpen>
    <InfoOpen
      v-if="useToggle().programiOpen"
      :data="useDataStore().programi"
      @action="useToggle().toggleProgrami()"
    />
    <FooterComponent />
  </main>
</template>

<script setup>
import { useDataStore } from "../stores/dataStore";
import { useToggle } from "../stores/toggle";
import InfoOpen from "../components/InfoOpen.vue";
import Info from "../components/Info.vue";
import Cards from "../components/Cards.vue";
import FooterComponent from "../components/FooterComponent.vue";
</script>
