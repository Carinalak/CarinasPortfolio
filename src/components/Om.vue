<script setup lang="ts">
import LadyBug from './LadyBug.vue';

</script>
<template>

<section class="main-container-align-top">
    <article class="text-content">
        <h2>Om</h2>
        <p>

            Hej! Mitt namn är 
            Carina och jag bor på Ekerö nära 
            Stockholm. Jag studerar 
            till Front End Developer på Medieinstitutet
            och är på mitt andra år
            nu. På den här sidan delar jag med mig av några 
            projekt jag gjort, både under studietiden, men även utanför.</p>
            <p>Jag avslutade min praktikperiod på tio veckor strax innan jul och söker nu praktikplats igen till nästa period som är 3 februari till 
                23 maj 2025. </p>
                <p>Nu i januari jobbar jag på ett 
                examensarbete till skolan.
            </p>
        
    </article>
    <article>
        <img src="../assets/img/carina24c.png" alt="Carina Lakosil">
    </article>
</section>
<section class="main-container-align-top">
    <article class="text-content"> 
        <LadyBug class="ladybug-tablet"/>
    </article>
    <article class="text-content">
        <h2>Mina kunskaper</h2>
        <div><ul class="kunskaps-lista">
            <li>
                HTML
            </li>
            <li>
                CSS, SASS
            </li>
            <li>
                JavaScript
            </li>
            <li>
                Typescript
            </li>
            <li>
                Vue
            </li>
            <li>
                React
            </li>
            <li>
                Adobe Photoshop
            </li>
            <li>
                Adobe Illustrator
            </li>
            <li>
                SVG-animation
            </li>
            <li>
                Figma
            </li>
            <li>
                Adobe Premiere Elements
            </li>
            <li>
                Ux-design
            </li>
            <li>
                MongoDB, MySql
            </li>
            <li>
                Testning (e2e och Cypress)
            </li>
        </ul>
    </div>
</article>

</section>
<section class="main-container-responsive-ladybug">
    <article class="text-content">
        <LadyBug class="ladybug-mobil"/>
    </article>
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
.ladybug-tablet {
    display: none;
}
.ladybug-mobil {
    visibility: visible;
    padding-top: 40px;
    padding-bottom: 100px;
}
.citat1 {
        display: none;
        font-family: "Caveat", cursive;
        font-size: 2.6rem;
}
.citat2 {
        display: block;
        font-family: "Caveat", cursive;
        font-size: 3.2rem;
        text-align: center;
        padding-top: 30px;
}
.kunskaps-lista {
    margin-left: 0;
    padding-left: 0;
}
.image1 {
    display: none;
}
.image2 {
    display: block;
    padding-top: 40px;
}
.main-container-responsive-ladybug {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-top: 0;
}

/*----------------- TABLET -----------------------*/
@media screen and (min-width: 640px) {
    
    .ladybug-tablet {
        display: contents;
        padding-top: 200px;
        width: 25%;
    }
    .ladybug-mobil {
    visibility: hidden;
    }

   
/*
    img {
        width: 333.33px;
        height: 279.33px;
    }
*/
    .citat1 {
        display: block;
        font-family: "Caveat", cursive;
        font-size: 3.5rem;
        text-align: center;
        padding-top: 80px;
    }
    .citat2 {
        display: none;
    }
    .image1 {
    display: block;
    }
    .image2 {
        display: none;
    }
    .main-container-responsive-ladybug {
        display: none;  
    }
}

</style>
