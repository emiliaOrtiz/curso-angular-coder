import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ContactoComponent } from './contacto.component'; // Asegúrate de que este archivo exista

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contacto', component: ContactoComponent }
  ,
  { 
    path: '**', 
    redirectTo: '', 
    pathMatch: 'full' 
  } // Redirige a inicio si el usuario escribe cualquier otra cosa
];