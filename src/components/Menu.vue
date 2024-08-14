<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  showOm: () => void,
  showProjekt: () => void,
  showKontakt: () => void
}>()

const emit = defineEmits(['toggleHamburgerMenu'])


</script>
<template>

<header>
    <div class="header-objects">
        <nav class="menu-links">
            <ul>
                <li @click="props.showOm" class="menu-link">Om</li>
                <li @click="props.showProjekt" class="menu-link">Projekt</li>
                <li @click="props.showKontakt" class="menu-link">Kontakt</li>
            </ul>
            <button class="toggle-menu" @click="emit('toggleHamburgerMenu')" aria-label="Öppna meny">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
        <div class="header-content">
            <div class="line"></div>
            <div class="header-title">Carina</div>
            <div class="line"></div>
        </div>
    </div>
  </header>




</template>
<style scoped>

/* ----------------------------- MENU BUTTONS - MOBILE VERSION ------------------------------------------- */
/* Hamburgerknapp börjar: */

.toggle-menu {
    border-radius: 8px;
    border: 0;
    cursor: pointer;
    padding: 4px 8px;
    color: #ffffff;
    background: transparent;
    display: block;
    margin-top: 10px;
}
.toggle-menu span  {
    display: block;
    background-color: #f5f5f5;
    width: 35px;
    height: 4px;
    border-radius:4px;
    margin-bottom: 4px;
}
/* Hamburgerknapp slutar */

.menu-links {
        display: flex;
        justify-content: flex-end;
        margin-right: 10px;
    }
.menu-link {
    display: none;
}

/* ----------------------------- HEADER STYLES - MOBILE VERSION ------------------------------------------- */

.header-content {
    display: flex;
    align-items: center;
    width: 95vw;
    position: relative;
    margin-left: 10px;
    margin-right: 10px;
}
.header-title {
    font-family: Roboto, sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-weight: 600;
    font-size: 2.3rem;  
    margin-left: 10px; /* Titeln flyttas mer till vänster */
    margin-right: 10px;
    position: relative;
}
.line {
    flex: 0.3;
    height: 1px;
    background: #f5f5f5;
}
.header-content::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    /*width: 80px;  /*Length of the line before the title */
    flex: 1;
    height: 1px;
    background: #f5f5f5;
}
.header-content::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #f5f5f5;
}


@media screen and (min-width: 640px) {

/* ----------------------------- MENU BUTTONS TABLET VERSION ------------------------------------------ */
    .toggle-menu {
        display: none;
    }
    .header-objects {
    display: flex;
    flex-direction: column;
    width: 95vw;
    padding-top: 15px;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: row;
        gap: 10px;
    }
    .menu-link {
        display: block;
        color: #f5f5f5;
        font-family: Roboto, "Sans-serif";
        font-weight: bold;
        font-size: 1.4rem;
        cursor: pointer;
    }
    /*
    .menu-link a {
        color: #f5f5f5;
    }
    .menu-link a:hover {
        color: #a1d2e2;
    }
    .menu-link a:active {
        color: #041c39;   
    }
    .menu-links {
        display: flex;
        justify-content: flex-end;
        margin-right: 30px;
    }*/


    .menu-link:hover {
        color: #a1d2e2;
    }
    .menu-link:active {
        color: #041c39;
    }
    .menu-links {
        display: flex;
        justify-content: flex-end;
        margin-right: 35px;
    }

/* ----------------------------- HEADER STYLES TABLET VERSION ------------------------------------------- */

.header-title {
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 3rem;  
    margin-left: 10px; /* Adjust this value to move the title more to the left */
    margin-right: 10px;
    position: relative;
}
/*
.header-content::before {
    width: 190px; 

}*/

}


</style>
