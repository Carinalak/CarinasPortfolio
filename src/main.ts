import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

// ---------------- Check for updates every midnight ------------------------- //
// Sidan reloadas varje midnatt och cashen töms, eftersom webbsidan hade problem på GitHub Pages
// att den inte uppdaterades på mobil och padda när jag uppdaterade en nyare version på Git Hub.
// Det här scriptet gör att cashen töms en gång per midnatt och sidan reloadas.

const checkForUpdates = (): void => {
    fetch('version.txt', { cache: 'no-cache' })
      .then(response => response.text())
      .then(latestVersion => {
        const currentVersion = localStorage.getItem('siteVersion');
  
        if (currentVersion !== latestVersion) {
          localStorage.setItem('siteVersion', latestVersion);
          window.location.reload();
        }
      })
      .catch(error => console.error('Error checking for updates:', error));
  };
  
  const scheduleUpdateCheck = (): void => {
    const now: Date = new Date();
    const nextMidnight: Date = new Date();
  
    // Ställ in nästa midnatt
    nextMidnight.setHours(24, 0, 0, 0);
  
    const timeToNextMidnight: number = nextMidnight.getTime() - now.getTime();
  
    setTimeout(() => {
      checkForUpdates(); // Kontrollera vid midnatt
      setInterval(checkForUpdates, 24 * 60 * 60 * 1000); // Kontrollera var 24:e timme
    }, timeToNextMidnight);
  };
  
  scheduleUpdateCheck(); // Schemalägg första kontrollen
  

  // ---------------- End updatecheck midnight ------------------------- //

  // ---------------- Check for updates every hour ------------------------- //
/*
  const checkForUpdates = (): void => {
    fetch('version.txt', { cache: 'no-cache' })
      .then(response => response.text())
      .then(latestVersion => {
        const currentVersion = localStorage.getItem('siteVersion');
  
        if (currentVersion !== latestVersion) {
          localStorage.setItem('siteVersion', latestVersion);
          window.location.reload();
        }
      })
      .catch(error => console.error('Error checking for updates:', error));
  };
  
  const scheduleUpdateCheck = (): void => {
    const now: Date = new Date();
    const nextHour: Date = new Date(now.getTime());
  
    // Ställ in nästa timme
    nextHour.setHours(now.getHours() + 1, 0, 0, 0);
  
    const timeToNextHour: number = nextHour.getTime() - now.getTime();
  
    setTimeout(() => {
      checkForUpdates(); // Kontrollera vid nästa timme
      setInterval(checkForUpdates, 60 * 60 * 1000); // Kontrollera var timme
    }, timeToNextHour);
  };
  
  scheduleUpdateCheck(); // Schemalägg första kontrollen
  */


   // ---------------- End updatecheck ------------------------- //

