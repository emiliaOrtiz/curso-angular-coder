import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink,RouterLinkActive} from '@angular/router';
import { HomeComponent } from './home.component';

//quiero agregar un router-outlet para que funcione la navegacion

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent, RouterOutlet,RouterLink,RouterLinkActive],
  template: `
  <div style="background: pink; padding: 10px; text-align: center; font-weight: bold; color: #5D4037;">
    ¡We are live - stay tuned for new collections arrived soon! ✨
  </div>

  <router-outlet></router-outlet>
`,
styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
    isScrolled = false;
    @HostListener('window:scroll', [])
    onWindowScroll() {
      this.isScrolled = window.scrollY > 50;
    } // Additional logic can be added here if needed
}