import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginRequest } from './loginRequest';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(credentials: LoginRequest): Observable<User> {
    // Usando JSON de prueba
    return this.http.get<User>('assets/data.json').pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Error de red o del cliente', error.error);
    } else {
      console.error(`Backend retornó código ${error.status}, body: `, error.error);
    }
    return throwError(() => new Error('Error en la solicitud HTTP'));
  }
}
