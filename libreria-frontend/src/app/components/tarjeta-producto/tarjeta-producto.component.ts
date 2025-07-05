import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  standalone: false
})

export class TarjetaProductoComponent { @Input() libro: any; }  