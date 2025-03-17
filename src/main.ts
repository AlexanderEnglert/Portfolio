import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("link[rel='preload']").forEach((el) => {
      if (el.getAttribute("href")?.includes("karla")) {
        el.remove();
      }
    });
  });
  

  