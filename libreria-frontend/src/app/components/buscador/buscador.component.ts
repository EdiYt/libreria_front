import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buscador',
  standalone: false,
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent {
  @Input() generos: any[] = []; 
  @Output() onBuscar = new EventEmitter<string>();
  @Output() onFiltrar = new EventEmitter<number>();
  
  termino: string = '';

  buscar() {
    this.onBuscar.emit(this.termino);
  }

  filtrarPorGenero(event: any) {
    const idGenero = Number(event.target.value);
    this.onFiltrar.emit(idGenero);
  }
}