<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  showOm: () => void,
  showProjekt: () => void,
  showKontakt: () => void
}>()





</script>
<template>
  
<nav class="hamburger-links">
    <ul>
        <li class="Meny">MENY <button></button></li>
        <li @click="props.showOm">Om</li>
        <li @click="props.showProjekt" >Projekt</li>
        <li @click="props.showKontakt">Kontakt</li>
    </ul>
</nav>






</template>
<style scoped>
.hamburger-links {
    display: flex;
    flex-direction: column;
    align-items: last baseline;
    visibility: visible;
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
        width: 90vw;
        border-radius: 5px;
        width: 85vw;
        
    }
li {
    border-bottom: 1px solid #4C6A8D;
    padding: 10px;
    padding-left: 30px;
    width: 80vw;
    text-align: center;
    background-color:  #325072;
    cursor: pointer;
    text-align: left;


}

@media screen and (min-width: 640px) {
    .hamburger-links {
        display: none;
    }
}

</style>
