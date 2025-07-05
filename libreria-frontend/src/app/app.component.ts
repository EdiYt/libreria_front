import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <app-cabecera></app-cabecera>
    <router-outlet></router-outlet>
    <app-pie-pagina></app-pie-pagina>
  `
})
export class AppComponent {
  constructor(router: Router) {
    console.log('Rutas configuradas:', router.config);
  }
}