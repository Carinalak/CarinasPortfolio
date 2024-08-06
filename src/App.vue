<script setup lang="ts">
import { ref } from 'vue'
import Menu from './components/Menu.vue'
import Om from './components/Om.vue'
import Projekt from './components/Projekt.vue'
import Foot from './components/Foot.vue'

const currentComponent = ref('om')

const showOm = () => currentComponent.value = 'om'
const showProjekt = () => currentComponent.value = 'projekt'
const showKontakt = () => currentComponent.value = 'kontakt'





</script>
<template>
  <Menu :showOm="showOm" :showProjekt="showProjekt" :showKontakt="showKontakt"/>
  <!-- Använd v-if för att visa rätt komponent baserat på currentComponent -->
  <Om v-if="currentComponent === 'om'" />
  <Projekt v-if="currentComponent === 'projekt'" />
  <Foot />







</template>
<style scoped>

</style>
