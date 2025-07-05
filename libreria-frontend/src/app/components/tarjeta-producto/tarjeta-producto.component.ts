import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: false,
  templateUrl: './tarjeta-producto.component.html'
})
export class TarjetaProductoComponent {
  @Input() libro: any;

  handleImageError(event: any) {
    event.target.src = 'assets/imagenes/libro-default.jpg';
  }
}