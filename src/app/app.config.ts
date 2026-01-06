import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; // Necesario para tus formularios cute
import { routes } from './app.routes';
import { ApplicationConfig } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(ReactiveFormsModule) // Esto inyecta el soporte para formularios en toda la app
  ]
};