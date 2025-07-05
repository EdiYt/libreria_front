import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: false,
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.css']
})
export class TarjetaProductoComponent {
  @Input() libro: any;

  handleImageError(event: any) {
    event.target.src = 'assets/imagenes/libro-default.jpg';
    event.target.style.width = '120px';
    event.target.style.height = '160px';
  }
}