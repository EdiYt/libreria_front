import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/servicios/api.service';

@Component({ selector: 'app-inicio', templateUrl: './inicio.component.html', standalone: false })
export class InicioComponent implements OnInit {
  destacados: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.obtenerLibros().subscribe(l => this.destacados = l.slice(0, 4));
  }
}
