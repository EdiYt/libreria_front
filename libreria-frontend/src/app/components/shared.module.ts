import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CabeceraComponent } from './cabecera/cabecera.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { TarjetaProductoComponent } from './tarjeta-producto/tarjeta-producto.component';

@NgModule({
  declarations: [
    CabeceraComponent,
    PiePaginaComponent,
    BuscadorComponent,
    ListaProductosComponent,
    TarjetaProductoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CabeceraComponent,
    PiePaginaComponent,
    BuscadorComponent,
    ListaProductosComponent,
    TarjetaProductoComponent
  ]
})
export class SharedModule {}