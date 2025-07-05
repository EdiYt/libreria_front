import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({ selector: 'app-buscador', templateUrl: './buscador.component.html' })
export class BuscadorComponent {
  @Input() generos: any[] = [];
  @Output() onBuscar  = new EventEmitter<string>();
  @Output() onFiltrar = new EventEmitter<number>();

  termino = '';

  buscar() { this.onBuscar.emit(this.termino); }

  filtrarPorGenero(e: Event) {
    const id = Number((e.target as HTMLSelectElement).value);
    this.onFiltrar.emit(id);
  }
}
