import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactoComponent } from './contacto.component';
import { RouterLink,RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
     ReactiveFormsModule,
     ContactoComponent,
     RouterLink,
     RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // 1. Definición de variables
  contactForm: FormGroup;
  carritoCount: number = 0; 
  bgColor: string = '#FFF9F0'; // Color crema por defecto

  productos = [
    { id: 1, titulo: 'Gatito Cósmico', precio: 15.00, img: 'assets/ilus1.jpg' },
    { id: 2, titulo: 'Nubes de Pastel', precio: 12.50, img: 'assets/ilus2.jpg' },
    { id: 3, titulo: 'Aventura Botánica', precio: 18.00, img: 'assets/ilus3.jpg' }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  // --- AQUÍ VAN LOS MÉTODOS ---

  //Metodo para cambiar el color de fondo de la página
  cambiarFondo(color: string) {
    this.bgColor = color;
  }

  restablecerFondo() {
    this.bgColor = '#FFF9F0'; // Vuelve al original
  }
  // Método para el botón del carrito en el Menú
  abrirCarrito() {
    console.log('Abriendo el carrito de sueños... ✨');
    alert('¡Tu carrito está lleno de arte! Próximamente podrás finalizar tu compra.');
  }

  // Método para los botones de las tarjetas de producto
  agregarAlCarrito() {
    this.carritoCount++;
    console.log('Producto añadido. Total:', this.carritoCount);
  }

  // Método para el formulario de contacto
  enviarMensaje() {
    if (this.contactForm.valid) {
      console.log('Mensaje enviado:', this.contactForm.value);
      alert('¡Gracias por tu mensaje! ✨');
      this.contactForm.reset();
    }
  }
}