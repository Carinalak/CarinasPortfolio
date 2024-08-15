import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')


// ---------------- Check for updates every three hours ------------------------- //

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
  const nextCheck: Date = new Date(now.getTime());

  // Ställ in nästa kontrolltid till tre timmar framåt
  nextCheck.setHours(now.getHours() + 3, 0, 0, 0);

  const timeToNextCheck: number = nextCheck.getTime() - now.getTime();

  setTimeout(() => {
    checkForUpdates(); // Kontrollera vid nästa tre-timmars intervall
    setInterval(checkForUpdates, 3 * 60 * 60 * 1000); // Kontrollera var tredje timme
  }, timeToNextCheck);
};

scheduleUpdateCheck(); // Schemalägg första kontrollen

// ---------------- End update check ------------------------- //


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

