<script setup lang="ts">
import { ref } from 'vue';
import emailjs from 'emailjs-com';

const formRef = ref<HTMLFormElement | null>(null);

function clearForm() {
  formRef.value?.reset();
}
const loading = ref(false);


const onSubmit = async (event: Event) => {
  event.preventDefault();
  loading.value = true;

  try {
    const formData = new FormData(formRef.value!);
    const data = Object.fromEntries(formData);
    
    const response = await emailjs.send(
      'service_qkc144e', // SERVICE_ID
      'template_xu9kb36', // TEMPLATE_ID
      data,
      'H74Jjt9ZAOQP4cSfK' // PUBLIC_KEY
    );

    console.log('E-post skickat:', response);
    clearForm();
    loading.value = false;
    alert('Tack! Ditt meddelande har skickats.');
  } catch (error) {
    console.error('E-postfel:', error);
    loading.value = false;
    alert('Ett fel inträffade, försök igen senare.');
  }
};

</script>

<template>



<section class="main-container-align-top">
    <article class="text-content">
        <h2>Kontakt</h2>
        <div>
            Fyll i formuläret eller 
            skicka ett mail så hör jag av mig! Är du arbetsgivare och vill ha mitt CV skickar jag det gärna. 

            <a href="mailto:carina.lakosil@gmail.com">carina.lakosil@gmail.com </a>
        </div>
    </article>

    <article>
        <form ref="formRef" @submit="onSubmit">
  <input class="input" placeholder="Namn" type="text" name="name" required />
  <input class="input" placeholder="Epost" type="email" name="email" required />
  <textarea class="textarea" placeholder="Meddelande" name="message" rows="10" required></textarea>
  <div class="button-wrapper">
    <button class="formBtn" type="button" @click="clearForm">Rensa</button>
    <button class="formBtn" type="submit" :disabled="loading">Skicka</button>
   <!-- <div v-if="loading" class="spinner">Skickar...</div> -->


  </div>
</form>
       <!--  <img src="../assets/img/carina24c.png" alt="Carina Lakosil"> -->
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
form {
    display: flex;
    flex-direction: column;
}
.input {
  padding: 0.5rem;
  border-radius: 10px;
  border-color: #4C6A8D;
  margin-bottom: 10px;
  width: 300px;
}

.textarea {
  padding: 0.5rem;
  border-radius: 10px;
  margin-bottom: 10px;
  border-color: #4C6A8D;
  width: 300px;
}

.input,
.textarea {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
}

.input:focus,
.textarea:focus {
  border-color: #A1D2E2;
  outline: none; 
}

.formBtn {
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid #A1D2E2;
  border-radius: 15px;
  background-color: #A1D2E2;
  color: #4C6A8D;
  font-weight: 600;
  width: 120px;
  cursor: pointer;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.formBtn:hover {
    border: 1px solid #041c39;
    background-color: #041c39;
    color: #A1D2E2;
}

.formBtn:active {
  background-color: white;
  color: grey;
  border: 1px solid grey;
}

.formBtn:hover:active {
    border: 1px solid #A1D2E2;
    background-color: #A1D2E2;
    color: #FFFFFF;  
}

.button-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 300px;
    padding: 0.5rem;

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
