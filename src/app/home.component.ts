import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  contactForm: FormGroup;

  // Datos de ejemplo para tus ilustraciones
  productos = [
    { id: 1, titulo: 'Gatito Cósmico', precio: 15.00, img: 'assets/ilus1.jpg' },
    { id: 2, titulo: 'Nubes de Pastel', precio: 12.50, img: 'assets/ilus2.jpg' },
    { id: 3, titulo: 'Aventura Botánica', precio: 18.00, img: 'assets/ilus3.jpg' },
    { id: 4, titulo: 'Café Mágico', precio: 10.00, img: 'assets/ilus4.jpg' }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  enviarMensaje() {
    if (this.contactForm.valid) {
      console.log('Mensaje enviado:', this.contactForm.value);
      alert('¡Gracias por tu mensaje! Te contactaremos pronto. ✨');
      this.contactForm.reset();
    }
  }
}