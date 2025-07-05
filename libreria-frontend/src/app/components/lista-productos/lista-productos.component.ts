import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  standalone: false
})

export class ListaProductosComponent { @Input() libros: any[] = []; }