export interface User {
  id: number;          // identificador interno
  cedula: string;      // documento de identidad
  nombres: string;     // nombre completo
  email: string;       // correo de acceso
  telefono: string;    // número de contacto
  rol: 'ADMIN' | 'HUESPED' | 'RECEPCIONISTA'; // restringido a esos valores
  token?: string;
}
