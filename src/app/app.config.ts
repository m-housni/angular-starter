// Importing necessary modules and functions from Angular core and router
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

// Importing the routes configuration from the local app.routes file
import { routes } from './app.routes';

// Defining the application configuration object
export const appConfig: ApplicationConfig = {
  // Providing the necessary providers for the application
  providers: [
    // Enabling zone change detection with event coalescing
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Providing the router configuration with the defined routes
    provideRouter(routes)
  ]
};
