import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/servicios/api.service';

@Component({ selector: 'app-galeria', templateUrl: './galeria.component.html', standalone: false })
export class GaleriaComponent implements OnInit {
  libros: any[] = [];
  librosFiltrados: any[] = [];
  generos: any[] = [];

  termino = '';
  idGenero = 0;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.obtenerGeneros().subscribe(g => this.generos = g);
    this.api.obtenerLibros().subscribe(l => {
      this.libros = this.librosFiltrados = l;
    });
  }

  aplicarBusqueda(t: string) { this.termino = t.toLowerCase(); this.filtrar(); }
  aplicarFiltro(id: number)   { this.idGenero = id;            this.filtrar(); }

  private filtrar() {
    this.librosFiltrados = this.libros.filter(l => {
      const okTitulo  = l.titulo.toLowerCase().includes(this.termino);
      const okGenero  = this.idGenero ? l.idGenero === this.idGenero : true;
      return okTitulo && okGenero;
    });
  }
}
