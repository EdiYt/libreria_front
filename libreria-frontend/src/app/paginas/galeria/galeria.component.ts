import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/servicios/api.service';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html'
})
export class GaleriaComponent implements OnInit {
  libros: any[] = []; 
  librosFiltrados: any[] = []; 
  generos: any[] = []; 
  terminoBusqueda: string = ''; 

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.cargarLibros();
    this.cargarGeneros();
  }

  cargarLibros(): void {
    this.api.obtenerLibros().subscribe({
      next: (libros) => {
        this.libros = libros;
        this.librosFiltrados = [...libros]; 
      },
      error: (err) => console.error('Error cargando libros', err)
    });
  }

  cargarGeneros(): void {
    this.api.obtenerGeneros().subscribe({
      next: (generos) => this.generos = generos,
      error: (err) => console.error('Error cargando géneros', err)
    });
  }


  filtrarLibros(termino: string): void {
    this.terminoBusqueda = termino.toLowerCase();
    this.aplicarFiltros();
  }


  filtrarPorGenero(idGenero: number): void {
    this.aplicarFiltros(idGenero);
  }

  private aplicarFiltros(idGenero?: number): void {
    this.librosFiltrados = this.libros.filter(libro => {
      const coincideTitulo = libro.Titulo.toLowerCase().includes(this.terminoBusqueda);
      const coincideGenero = idGenero ? libro.IdGenero === idGenero : true;
      return coincideTitulo && coincideGenero;
    });
  }
}