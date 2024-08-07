<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  showOm: () => void,
  showProjekt: () => void,
  showKontakt: () => void,
  isOpen: boolean
}>()

const emit = defineEmits(['toggleHamburgerMenu'])


</script>
<template>
  
<nav class="hamburger-links" :class="{ open: isOpen }">
    <ul>
        <li class="close-menu-box" @click="emit('toggleHamburgerMenu')">
            <div>Menu</div>
        <svg class="close-menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg></li>
            <li class="hamburger-menu-link" @click="props.showOm">Om</li>
            <li class="hamburger-menu-link" @click="props.showProjekt" >Projekt</li>
        <li class="hamburger-menu-link" @click="props.showKontakt">Kontakt</li>
    </ul>
</nav>
 


</template>
<style scoped>


.hamburger-links {
  position: fixed;
  top: 0;
  right: -300px; /* Hide off-screen */
  width: 300px;
  /*height: 100%;*/
  background-color: #325072;
  color: #F5F5F5;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: right 0.5s ease;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 99;
}

.hamburger-links.open {
  right: 0; /* Slide in on open */
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
  padding-top: 50px;
  padding: 10px;
}


li {
  width: 100%;
  text-align: left;
  padding: 15px;
  border-bottom: 1px solid #4C6A8D;
}

.hamburger-menu-link {
  cursor: pointer;
  margin-left: 25px;
}

.close-menu-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 2px;
  margin-left: 25px;
  font-weight: bold;
}

.close-menu-icon {
  fill: #F5F5F5;
  width: 30px;
  height: 30px;
  margin-right: 35px;
  cursor: pointer;
  
}

@media screen and (min-width: 640px) {
  .hamburger-links {
    display: none;
  }
}
</style>
