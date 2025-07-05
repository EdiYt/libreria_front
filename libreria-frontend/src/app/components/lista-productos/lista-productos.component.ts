import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
})

export class ListaProductosComponent { @Input() libros: any[] = []; }