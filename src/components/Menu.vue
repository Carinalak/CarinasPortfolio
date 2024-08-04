<script setup lang="ts">










</script>
<template>

<header>
   

    <section class="header-objects">
        <div class="menu-links">
            <ul>
                <li class="menu-link">Om</li>
                <li class="menu-link">Projekt</li>
                <li class="menu-link">Kontakt</li>
            </ul>
        </div>
        <div class="header-content">
            <div class="header-title">Carina</div>
            <div class="line"></div>
        </div>
    </section>
  </header>




</template>
<style scoped>


/* ----------------------------- MENU BUTTONS ------------------------------------------- */

.header-objects {
    display: flex;
    flex-direction: column;
    width: 95vw;
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
    color: #f5f5f5;
    font-family: Roboto, "Sans-serif";
    font-weight: bold;
    font-size: 1.4rem;
    cursor: pointer;
}
.menu-link:hover {
    color: #a1d2e2;
}
.menu-link:active {
    color: #041c39;
}

.menu-links {
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
}

/* ----------------------------- HEADER STYLES ------------------------------------------- */

.header-content {
    display: flex;
    align-items: center;
    width: 95vw;
    position: relative;
}

.header-title {
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 3rem;  
    margin-left: 200px; /* Adjust this value to move the title more to the left */
    margin-right: 10px;
    position: relative;
}

.line {
    flex: 1;
    height: 1px;
    background: #f5f5f5;
}

.header-content::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 190px; /* Length of the line before the title */
    height: 1px;
    background: #f5f5f5;
}

.header-content::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #f5f5f5;
}


</style>
