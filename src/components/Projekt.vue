<script setup lang="ts">







</script>
<template>


<section class="main-container">
    <article class="text-content">
        <h2>Projekt</h2>
        <div>
            Här kan du se några 
            av de projekt  jag 
            gjort. Fler 
            projekt finns på min <a href="https://github.com/Carinalak" target="_blank" rel="noopener noreferrer">GitHub profil</a>.
        </div>
    </article>    
    <article> 
        <div class="citat-dream1">Dream big, <br>
            work hard!</div>
    </article>
</section>
<section class="main-container-align-top">
    <article class="text-content">
        <div><h3>Tic Tac Toe</h3></div>
        <div>
            Det här är ett tre i rad - spel 
            som jag fick i uppgift att göra 
            på Medieinstitutet våren 
            2024. Den är gjord i Vue, 
            som vi höll på att lära oss då. 
            Jag använde mig av TypeScript. Sidan är responsiv och fungerar bra i både mobil och desktop-läge.
        </div>
    </article>
    <article>
        <div><a href="https://medieinstitutet.github.io/vue-tictactoe-Carinalak/" target="_blank" rel="noopener noreferrer"><img class="image-size" src=".././assets/img/tictactoe.png"/></a></div>
    </article>
</section>
<section class="main-container-align-top">
    <article class="text-content">
        <div><h3>The Brewery Club</h3></div>
        <div>
           Det här projektet gjorde vi i grupp. Vår grupp skulle göra en webbsida av en layout-design vi fick av en annan 
           grupp i klassen. Layouten och planen för vilka effekter som skulle ingå gjordes i Figma och överlämnades till oss. 
           Vi fick förverkliga den i en webbsida.
        </div>
    </article>
    <article>
        <div><a href="https://carinalak.github.io/Gruppuppgift-Gabriella-Brewery/" target="_blank" rel="noopener noreferrer"><img class="image-size" src=".././assets/img/breweryclub.png"/></a></div>
    </article>
</section>
<section class="main-container-align-top">
    <article class="text-content">
        <div><h3>Att göra lista</h3></div>
        <div>
            Det här är en “att göra lista”
            som är gjord med Vue, i maj 2024. 
            Jag använde mest TypeScript. Sidan är inte responsiv, 
            utan ser bäst ut i desktop-format.
        </div>
    </article>
    <article>
        <div><a href="https://carinalak.github.io/Vue-TodoList/" target="_blank" rel="noopener noreferrer"><img class="image-size" src=".././assets/img/todolist.png"></a></div>
    </article>
</section>
<section class="main-container-align-top">
    <article class="text-content">
        <div><h3>Butterfly animation</h3></div>
        <div>
            Vi fick i uppgift att göra en svg-animation på Medieinstitutet i april 2024 i ämnet "Grafiska verktyg för gränsnittsdesign". Jag designade den här i 
            Adobe Illustrator, och använde 
            GSAP för att få fjärilen och bokstäverna att röra sig med JavaScript. Sidan är inte responsiv, den ser bäst ut i desktop-format.
        </div>
    </article>
    <article>
        <div><a href="https://carinalak.github.io/Medieinstitutet-grafiska-verktyg-butterfly/" target="_blank" rel="noopener noreferrer"><img class="image-size" src=".././assets/img/butterfly.png"/></a></div>
    </article>
</section>
<section class="main-container-align-top">
    <article class="text-content">
        <div><h3>Gottfrids Badankor</h3></div>
        <div>
            En webbsida som jag gjorde i december 2023 
            när jag lärde mig JavaScript på Medieinstitutet.
            Uppgiften gick ut på att göra en 
            webshop där det skulle gå att sortera 
            produkterna effer kategori, pris och så vidare. 
            Det skulle ha ett fungerande betalningsformulär. 
        </div>
    </article>
    <article>
        <div><a href="https://carinalak.github.io/gottfrids-badankor/" target="_blank" rel="noopener noreferrer"><img class="image-size" src=".././assets/img/gottfrids.png"></a></div>
    </article>
</section>
<section class="main-container">
    <article> 
        <div class="citat-dream2">Dream big, <br>
            work hard!</div>
    </article>
</section>
<section class="main-container">
    <article> 
        <div class="my-videos1">Lägg till en bild här<br>
            på fiskar eller Stars</div>
    </article>
    <article class="text-content">
        <h2>Mina videos</h2>
        <div>Jag har haft många olika intressen. Till exempel att skriva musik och spela in videos till dem - Carina Stars. Musiken finns även på Spotify. Ett annat intresse jag haft är mitt akvarium. Då 
            gjorde jag filmer om mina akvariefiskars liv och hur de pratar med varann på ett roligt sätt - Fiskbubbel.
        </div>
        <article> 
        <div class="my-videos2">Lägg till en bild här<br>
            på fiskar eller Stars</div>
    </article>
    </article>
</section>







</template>
<style scoped>
.citat-dream1 {
    display: none;
   
}
.citat-dream2 {
    display: block;
    font-family: "Caveat", cursive;
    font-size: 3.2rem;
    text-align: center;
    padding-top: 80px;
    line-height: 3.5rem;
    width: 350px;
}
.my-videos1 {
    display: none;
}
.my-videos2 {
    display: block;
    padding-top: 40px;
}
.image-size {
    width: 350px;
    border-radius: 10px;
}
    
.citat-line {
  font-family: "Caveat", cursive;
  font-size: 4rem;
  text-align: center;
  padding-top: 60px;
}
@media screen and (min-width: 640px) {

    .citat-dream1 {
        display: block;
        font-family: "Caveat", cursive;
        font-size: 3.5rem;
        text-align: center;
        padding-top: 80px;
        line-height: 3.5rem;
        width: 350px;
    }

    .citat-dream2 {
        display: none;
    }
    .my-videos1 {
    display: block;
}
.my-videos2 {
    display: none;
}
}
</style>
