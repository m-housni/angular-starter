// Importing the bootstrapApplication function from the Angular platform-browser package
import { bootstrapApplication } from '@angular/platform-browser';

// Importing the appConfig object from the local app configuration file
import { appConfig } from './app/app.config';

// Importing the AppComponent class from the local app component file
import { AppComponent } from './app/app.component';

// Bootstrapping the Angular application with the AppComponent and appConfig
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err)); // Handling any errors that occur during the bootstrapping process
