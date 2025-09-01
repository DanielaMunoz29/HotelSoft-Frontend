import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

declare var bootstrap: any; // Para usar Bootstrap modals

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      cedula: ['', [Validators.required, Validators.minLength(6)]],
      nombres: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      terminos: [false, [Validators.requiredTrue]]
    });
  }

  register() {
    if (this.registerForm.valid) {
      console.log('Formulario de registro:', this.registerForm.value);
      // Mostrar modal de éxito
      this.mostrarModalExito();

    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  mostrarModalExito() {
    const modalElement = document.getElementById('exitoModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement, {
        keyboard: true,    // Permite cerrar con Escape
        backdrop: 'static' // No permite cerrar clickeando fuera
      });
      modal.show();
    }
  }

  irALogin() {
    // Cerrar modal primero
    const modalElement = document.getElementById('exitoModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }

    // Redirigir después de un breve delay para que cierre el modal
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 300);
  }
}
