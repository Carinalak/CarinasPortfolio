<script setup lang="ts">






</script>
<template>



<section class="main-container">
    <article class="text-content">
        <h2>Om</h2>
        <div>
            Hej! Mitt namn är 
            Carina och jag bor i 
            Stockholm. Jag studerar 
            till Front End Utvecklare 
            och är på mitt andra år
            nu. På den här sidan 
            hittar du några av de 
            projekt jag gjort och annat intressant.
        </div>
        
        <div class="citat2">Enjoy</div>
    </article>

    <article>
        <img src="../assets/img/CarinaFoto24.png" alt="En bild på en glad tjej i halvlångt brunt hår och glasögon.">
    </article>

</section>
<section>
        <div class="citat1">Enjoy</div>
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

.citat1 {
        display: block;
        font-family: "Caveat", cursive;
        font-size: 3.2rem;
        text-align: center;
        padding-top: 30px;
    }
.citat2 {
        display: none;
        font-family: "Caveat", cursive;
        font-size: 2.6rem;

    }
/*----------------- TABLET -----------------------*/
@media screen and (min-width: 640px) {
    img {
        width: 333.33px;
        height: 279.33px;
    }

    
    .citat1 {
        display: none;
    }
    .citat2 {
        display: block;
        font-family: "Caveat", cursive;
        font-size: 3.5rem;
        text-align: center;
        padding-top: 80px;
    }
}

</style>
