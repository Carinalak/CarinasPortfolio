<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  showOm: () => void,
  showProjekt: () => void,
  showKontakt: () => void
}>()

const emit = defineEmits(['toggleHamburgerMenu'])



</script>
<template>
  
<nav class="hamburger-links">
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
  z-index: 99;
  position: absolute;
  top: 10px;
  right: 5px;
    
}

ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        background-color: #325072;
        color: #F5F5F5;
        padding: 10px;
        width: 300px;
        border-radius: 5px;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        
    }
li {
    border-bottom: 1px solid #4C6A8D;
    padding: 10px;
    padding-left: 30px;
    width: 300px;
    text-align: center;
    text-align: left;
}
.hamburger-menu-link {
    cursor: pointer;
}
.close-menu-box {
    position: relative;
    
    
    display: flex;
    align-items: center;
}
.close-menu-icon {
    fill: #F5F5F5;
    width: 30px;
    height: 30px;
    position: absolute;
    right: 25px;
    top: 0;
    stroke: #325072;
    cursor: pointer;
}
@media screen and (min-width: 640px) {
    .hamburger-links {
        display: none;
    }
}

</style>
