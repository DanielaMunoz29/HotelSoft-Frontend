import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { routes } from './app/app.routes'; // ← Importante: importar las rutas

bootstrapApplication(App, {
  providers: [
    provideRouter(routes), // ← Importante: configurar el router
  ]
}).catch(err => console.error(err));
