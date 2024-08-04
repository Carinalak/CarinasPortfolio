<script setup lang="ts">
import Menu from './Menu.vue'








</script>
<template>

<Menu />

<section class="main-container">
    <article class="about">
        <h2>Om</h2>
        <div>
            Hej! Mitt namn är 
            Carina och jag bor i 
            Stockholm. Jag studerar 
            till Front End Utvecklare 
            och är på mitt andra år
            nu. På den här sidan 
            hittar du några av de 
            projekt jag gjort och lite
            annat smått och gott.  
        </div>
    </article>

    <article>
        <img src="../assets/img/CarinaFoto24.png">
    </article>

    <article>
        <div class="citat">Enjoy</div>
    </article>
    


</section>





</template>
<style scoped>
/*----------------- MOBILE -----------------------*/
h2 {
    margin-bottom: 0;
}
img {
    width: 200px;
    height: 167.6px;
}
.main-container {
    border: 1 px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-items: center;
    gap: 30px;
}
.about {
    width: 250px;
   
}
/*----------------- TABLET -----------------------*/
@media screen and (min-width: 640px) {
    img {
        width: 250px;
        height: 209.5px;
    }
}
</style>
