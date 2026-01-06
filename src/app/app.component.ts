import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home.component';

//quiero agregar un router-outlet para que funcione la navegacion

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent, RouterOutlet],
  template: `
  <div style="background: pink; padding: 10px; text-align: center; font-weight: bold; color: #5D4037;">
    ¡We are live! ✨
  </div>

  <router-outlet></router-outlet>
`
})
export class AppComponent {
  // Additional logic can be added here if needed
}