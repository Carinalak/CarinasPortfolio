<script setup lang="ts">
import { ref } from 'vue'
import Menu from './components/Menu.vue'
import Om from './components/Om.vue'
import HamburgerMenu from './components/HamburgerMenu.vue'
import Projekt from './components/Projekt.vue'
import Foot from './components/Foot.vue'

// OLD
/*
const currentComponent = ref('om')

const showOm = () => currentComponent.value = 'om'
const showProjekt = () => currentComponent.value = 'projekt'
const showKontakt = () => currentComponent.value = 'kontakt'
*/

const currentComponent = ref('om')
const isHamburgerMenuOpen = ref(false)

const showOm = () => {
  currentComponent.value = 'om'
  isHamburgerMenuOpen.value = false
}
const showProjekt = () => {
  currentComponent.value = 'projekt'
  isHamburgerMenuOpen.value = false
}
const showKontakt = () => {
  currentComponent.value = 'kontakt'
  isHamburgerMenuOpen.value = false
}

const toggleHamburgerMenu = () => {
  isHamburgerMenuOpen.value = !isHamburgerMenuOpen.value
}






</script>

<template>
  <!-- OLD 
  <Menu :showOm="showOm" :showProjekt="showProjekt" :showKontakt="showKontakt"/>
  <HamburgerMenu :showOm="showOm" :showProjekt="showProjekt" :showKontakt="showKontakt"/>
  <Om v-if="currentComponent === 'om'" />
  <Projekt v-if="currentComponent === 'projekt'" />
  <Foot />

-->

<Menu  :showOm="showOm" :showProjekt="showProjekt" :showKontakt="showKontakt" @toggleHamburgerMenu="toggleHamburgerMenu"/>
  <HamburgerMenu v-if="isHamburgerMenuOpen" :showOm="showOm" :showProjekt="showProjekt" :showKontakt="showKontakt" @toggleHamburgerMenu="toggleHamburgerMenu"/>
  <Om v-if="currentComponent === 'om'" />
  <Projekt v-if="currentComponent === 'projekt'" />
  <Foot />





</template>
<style scoped>

/* NEW */ 

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}




</style>
