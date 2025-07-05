import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/servicios/api.service';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html'
})
export class InicioComponent implements OnInit {
  librosDestacados: any[] = []; 

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.cargarLibrosDestacados();
  }

  cargarLibrosDestacados(): void {
    this.api.obtenerLibros().subscribe({
      next: (libros) => {
        this.librosDestacados = libros.slice(0, 3); 
      },
      error: (err) => console.error('Error cargando libros destacados', err)
    });
  }
}