<script setup lang="ts">
import { ref } from 'vue'
import Menu from './components/Menu.vue'
import HamburgerMenu from './components/HamburgerMenu.vue'
import Om from './components/Om.vue'
import Projekt from './components/Projekt.vue'
import Kontakt from './components/Kontakt.vue'
import Foot from './components/Foot.vue'



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

<div class="app-container">
    <Menu :showOm="showOm" :showProjekt="showProjekt" :showKontakt="showKontakt" @toggleHamburgerMenu="toggleHamburgerMenu"/>
    <HamburgerMenu :showOm="showOm" :showProjekt="showProjekt" :showKontakt="showKontakt" :isOpen="isHamburgerMenuOpen" @toggleHamburgerMenu="toggleHamburgerMenu"/>
    <div class="content-wrapper">
      <main class="main-content">
        <Om v-if="currentComponent === 'om'" />
        <Projekt v-if="currentComponent === 'projekt'" />
        <Kontakt v-if="currentComponent === 'kontakt'" />
      </main>
      <Foot />
    </div>
  </div>


</template>
<style scoped>

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.main-content {
  flex: 1;
}

</style>
