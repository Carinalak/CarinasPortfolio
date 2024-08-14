
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';


const ladybugRef = ref<SVGSVGElement | null>(null);
const clickCount = ref(0);
const moveLadybug = () => {
  if (ladybugRef.value) {
    const timeline = gsap.timeline();
    const rightWing = ladybugRef.value.querySelector("#RightWing");
    const leftWing = ladybugRef.value.querySelector("#LeftWing");
    const eyeBlackLeft = ladybugRef.value.querySelector("#EyeBlackLeft");
    const eyeBlackRight = ladybugRef.value.querySelector("#EyeBlackRight");
    const tongue = ladybugRef.value.querySelector("#Tongue");

    switch (clickCount.value % 6) {
      case 0:
        // Första klicket: flytta åt höger och flaxa med vingarna
        timeline
        .to(ladybugRef.value, { x: "+=100", duration: 1 })
          .to(rightWing, { rotation: -20, yoyo: true, repeat: 3, transformOrigin: "80% 50%", duration: 0.1 })
          .to(leftWing, { rotation: 20, yoyo: true, repeat: 3, transformOrigin: "80% 50%", duration: 0.1 }, "<");
        
        break;
      case 1:
        // Andra klicket: rotera 90 grader och flytta neråt
        timeline
          .to(ladybugRef.value, { rotation: 90, transformOrigin: "center center", duration: 0.5 })
          .to(ladybugRef.value, { y: "+=100", duration: 0.5 })
          .to(tongue, { opacity: 8, duration: 0.9 }) // Gör tungan synlig  
          .to(tongue, { opacity: 0, duration: 0.2 });
          
        break;
      case 2:
        // Tredje klicket: rotera 180 grader och flytta åt vänster
        timeline
          .to(ladybugRef.value, { rotation: 180, transformOrigin: "center center", duration: 0.5 })
          .to(ladybugRef.value, { x: "-=100", duration: 0.5 })
          .to(rightWing, { rotation: -20, yoyo: true, repeat: 3, transformOrigin: "80% 50%", duration: 0.1 })
          .to(leftWing, { rotation: 20, yoyo: true, repeat: 3, transformOrigin: "80% 50%", duration: 0.1 }, "<")
          .to(eyeBlackLeft, { y: "+=3", x: "-=2", duration: 0.9 }, "<")
          .to(eyeBlackRight, { y: "+=3", x: "-=2",  duration: 0.9 }, "<")
          .to(eyeBlackLeft, { y: "0", x: "0", duration: 0.3 })
          .to(eyeBlackRight, { y: "0", x: "0", duration: 0.3 }, "<");
        break;
      case 3:
        // Fjärde klicket: rotera 270 grader och flytta uppåt 
        timeline
          .to (ladybugRef.value, {rotation: 270, transformOrigin: "center center", duration: 0.5})
          .to(ladybugRef.value, { y: "-=100", duration: 0.5 })
          .to(tongue, { opacity: 8, duration: 0.9 }) // Gör tungan synlig  
          .to(tongue, { opacity: 0, duration: 0.2 });
          break;
      case 4:
        // Femte klicket: rotera 360 grader och reset position
        timeline
          .to(ladybugRef.value, { rotation: 360, transformOrigin: "center center", duration: 0.5 })
          .to(ladybugRef.value, { x: 0, y: 0, duration: 0.5 }); // Reset position
          
          break;
      case 5:
        // Sjätte klicket: rotera runt och flaxa med vingarna
        timeline
          .to(ladybugRef.value, { rotation: 0, transformOrigin: "center center", duration: 0.5 })
          .to(ladybugRef.value, { x: 0, y: 0, duration: 0.5 }) // Reset position
          .to(rightWing, { rotation: -20, yoyo: true, repeat: 3, transformOrigin: "80% 50%", duration: 0.1 })
          .to(leftWing, { rotation: 20, yoyo: true, repeat: 3, transformOrigin: "80% 50%", duration: 0.1 }, "<") // "<" betyder att båda vingarna rör sig samtidigt
          .to(eyeBlackLeft, { x: "-=2", duration: 0.9 })
          .to(eyeBlackRight, { x: "-=2", duration: 0.9 }, "<")
          .to(eyeBlackLeft, { x: "0", duration: 0.3 })
          .to(eyeBlackRight, { x: "0", duration: 0.3 }, "<");
          break;
    } 
    clickCount.value++;
  }
};

const handleClick = () => {
  if (ladybugRef.value) {
    ladybugRef.value.style.backgroundColor = 'transparent';
  }
};

onMounted(() => {
  if (ladybugRef.value) {
    ladybugRef.value.addEventListener('click', moveLadybug);
    ladybugRef.value.addEventListener('click', handleClick);
  }
});
</script>


<template>

<div class="ladybug-box">
<div class="ladybug-text">Nyckelpigan gillar inte att bli klickad på. Låt den vara ifred.</div>
<div class="ladybug-container">
<svg ref="ladybugRef" id="ladybug" viewBox="88.907 129.718 100.523 86.33" width="52.164" height="44.648">
  <line id="LegLeft1" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0); stroke-linecap: round;" x1="158.158" y1="148.817" x2="167.178" y2="138.594"></line>
  <line id="LegLeft2" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0); stroke-linecap: round;" x1="134.321" y1="141.785" x2="136.726" y2="131.562"></line>
  <path id="LegLeft3" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0); stroke-linecap: round;" d="M 111.406 145.423 C 111.634 145.423 103.68 134.771 103.653 134.771"></path>
  <line id="LegRight1" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0); stroke-linecap: round;" x1="154.765" y1="196.106" x2="163.785" y2="205.126"></line>
  <line id="LegRight2" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0); stroke-linecap: round;" x1="127.105" y1="201.917" x2="126.503" y2="215.146"></line>
  <line id="LegRight3" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0); stroke-linecap: round;" x1="104.254" y1="194.302" x2="92.829" y2="204.525"></line>
  <g id="Body" style="">
    <ellipse id="BodyInner" style="stroke: rgb(0, 0, 0);" cx="131.134" cy="171.663" rx="39.988" ry="30.066"></ellipse>
    <path id="BackLine1" style="stroke-linecap: round; stroke: rgb(175, 190, 172); fill: rgb(78, 77, 77);" d="M 144.628 144.473 L 141.405 171.135 L 144.412 198.921"></path>
    <path id="BackLine2" style="stroke-linecap: round; stroke: rgb(175, 190, 172); fill: rgb(78, 77, 77);" d="M 133.713 142.754 L 130.275 171.168 L 133.605 200.532"></path>
    <path id="BackLine3" style="stroke-linecap: round; stroke: rgb(175, 190, 172); fill: rgb(78, 77, 77);" d="M 122.759 143.614 L 119.322 171.751 L 122.33 200.21"></path>
    <path id="BackLine4" style="stroke-linecap: round; stroke: rgb(175, 190, 172); fill: rgb(78, 77, 77);" d="M 112.664 146.084 L 109.446 172.143 L 112.665 197.31"></path>
    <path id="BackLine5" style="stroke-linecap: round; stroke: rgb(175, 190, 172); fill: rgb(78, 77, 77);" d="M 101.602 152.85 L 98.432 173.082 L 102.031 191.19"></path>
  </g>
  <ellipse id="Tongue" class="tongue" style="paint-order: fill; fill: rgb(239, 11, 11); stroke: rgb(130, 11, 11);" cx="179.96" cy="170.49" rx="7.199" ry="5.526"></ellipse>
  
  <g id="RightWing" style="">
    <path id="WingRight" style="stroke: rgb(0, 0, 0); fill: rgb(234, 16, 16); transform-origin: 134.135px 187.222px;" d="M 174.626 173.035 L 93.652 171.461 C 94.711 195.387 119.816 202.43 130.883 202.699 C 154.767 204.872 174.868 194.078 174.626 173.035 Z" transform="matrix(0.978148, -0.207911, 0.207911, 0.978148, 0, 0.000002)"></path>
    <ellipse id="Dot1" style="stroke: rgb(0, 0, 0);" cx="110.812" cy="188.067" rx="6.712" ry="6.712"></ellipse>
    <ellipse id="Dot2" style="stroke: rgb(0, 0, 0);" cx="130.014" cy="190.692" rx="6.712" ry="6.712"></ellipse>
    <ellipse id="Dot3" style="stroke: rgb(0, 0, 0);" cx="148.241" cy="186.576" rx="6.712" ry="6.712"></ellipse>
  </g>
  <g id="LeftWing" style="">
    <path id="WingLeft" style="stroke: rgb(0, 0, 0); fill: rgb(234, 16, 16); transform-origin: 135.104px 155.488px;" d="M 175.595 141.301 L 94.621 139.727 C 95.68 163.653 120.785 170.696 131.852 170.965 C 150.201 172.551 173.495 160.968 175.595 141.301 Z" transform="matrix(-0.978148, -0.207912, 0.207912, -0.978148, -0.000007, -0.000016)"></path>
    <ellipse id="Dot1" style="stroke: rgb(0, 0, 0);" cx="112.007" cy="154.279" rx="6.712" ry="6.712"></ellipse>
    <ellipse id="Dot2" style="stroke: rgb(0, 0, 0);" cx="130.229" cy="151.803" rx="6.712" ry="6.712"></ellipse>
    <ellipse id="Dot3" style="stroke: rgb(0, 0, 0);" cx="146.901" cy="159.34" rx="6.712" ry="6.712"></ellipse>
  </g>
  <ellipse id="Head" style="stroke: rgb(0, 0, 0); transform-origin: 166.753px 171.248px;" cx="166.753" cy="171.248" rx="13.079" ry="18.845"></ellipse>
  <g id="EyeLeft">
    <ellipse id="EyeWhiteLeft" style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255);" cx="169.315" cy="162.44" rx="6" ry="6"></ellipse>
    <ellipse id="EyeBlackLeft" style="stroke: rgb(0, 0, 0);" cx="171.159" cy="162.629" rx="3.5" ry="3.5"></ellipse>
  </g>
  <g id="RightEye">
    <ellipse id="EyeWhiteRight" style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255);" cx="169.689" cy="178.663" rx="6" ry="6"></ellipse>
    <ellipse id="EyeBlackRight" style="stroke: rgb(0, 0, 0);" cx="171.126" cy="178.515" rx="3.5" ry="3.5"></ellipse>
  </g>
  <g id="AntennaLeft">
    <line id="LeftAntenna" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0); transform-box: fill-box; transform-origin: 50% 50%;" x1="162.093" y1="154.356" x2="152.272" y2="151.666" transform="matrix(0.891006, 0.453991, -0.453991, 0.891006, 0.000002, -0.000004)"></line>
    <ellipse id="BlobLeft" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);" cx="152.997" cy="149.151" rx="1.342" ry="1.342"></ellipse>
  </g>
  <g id="AntennaRight">
    <line id="RightAntenna" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0); transform-box: fill-box; transform-origin: 50% 50%;" x1="164.201" y1="188.876" x2="153.385" y2="192.71" transform="matrix(0.93358, -0.358368, 0.358368, 0.93358, -0.000003, 0.000001)"></line>
    <ellipse id="BlobRight" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);" cx="154.855" cy="194.328" rx="1.342" ry="1.342"></ellipse>
  </g>
</svg>
</div>

</div>
</template>


<style scoped>
/*
#ladybug {
  cursor: pointer;
  outline: none;
  outline-offset: 0;
  background-color: transparent;
}
#ladybug:active, #ladybug:focus {
  background-color: transparent;
  outline: none;
}
.ladybug-text {
  padding-bottom: 50px;
  margin-top: 0;
  padding-top: 0;
}
.ladybug-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ladybug-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; 
  height: 100px;
  outline: none;
  outline-offset: 0;
  background-color: transparent;
}
.tongue {
  opacity: 0;
  transition: opacity 0.9s;
}
*/
</style>