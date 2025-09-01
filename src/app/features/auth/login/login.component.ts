import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // aquí inicializas correctamente
    this.loginForm = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  get usuario() {
    return this.loginForm.controls['usuario'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }
  login() {
    if (this.loginForm.valid) {
      console.log('Usuario:', this.loginForm.value.usuario);
      console.log('Contraseña:', this.loginForm.value.contrasena);
      alert('Datos Correctos');
      this.loginForm.reset();
    } else {
      this.loginForm.markAsTouched();
      alert('Error al ingresar los datos');
    }
  }

  loginGoogle() {
    alert('Iniciar sesión con Google');
  }
}

