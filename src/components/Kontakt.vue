<script setup lang="ts">



</script>
<template>



<section class="main-container">
    <article class="text-content">
        <h2>Kontakt</h2>
        <div>
            Jag finns på Ekerö, nära Stockholm. 
            Skicka ett mail så hör jag av mig! Är du arbetsgivare och vill ha mitt CV skickar jag det gärna. 

            <a href="mailto:carina.lakosil@gmail.com">carina.lakosil@gmail.com </a>
        </div>
    </article>

    <article>
        <img src="../assets/img/carinapic-24b.png" alt="Carina Lakosil">
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
    width: 308px;
    height: 311px;
    }
    /*
img {
    width: 200px;
    height: 167.6px;
}
*/
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
