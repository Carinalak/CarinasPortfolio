import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')


// Kontrollera regelbundet för uppdateringar
setInterval(() => {
  fetch(window.location.href, { cache: "no-cache" })
    .then(response => {
      if (response.ok) {
        response.text().then(body => {
          const parser = new DOMParser();
          const newDoc = parser.parseFromString(body, "text/html");
          if (document.documentElement.innerHTML !== newDoc.documentElement.innerHTML) {
            window.location.reload();
          }
        });
      }
    });
}, 60000); // Kontrollera var 60:e sekund

