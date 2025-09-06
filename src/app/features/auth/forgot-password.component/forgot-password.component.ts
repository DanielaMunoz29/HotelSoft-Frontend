import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  step: number = 1;
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private http: HttpClient) {}

  enviarCorreo() {
    if (!this.email) {
      alert('Por favor, ingrese su correo electrónico');
      return;
    }

    this.http.post('http://localhost:8080/auth/forgot-password', { email: this.email })
      .subscribe({
        next: () => {
          alert('Correo de recuperación enviado');
          this.step = 2;
        },
        error: err => {
          console.error(err);
          alert('Error al enviar el correo');
        }
      });
  }

  restablecer() {
    if (!this.password || !this.confirmPassword) {
      alert('Debe completar ambos campos');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    this.http.post('http://localhost:8080/auth/reset-password', { email: this.email, password: this.password })
      .subscribe({
        next: () => {
          alert('Contraseña restablecida correctamente');
          this.step = 1;
        },
        error: err => {
          console.error(err);
          alert('Error al restablecer la contraseña');
        }
      });
  }
}
