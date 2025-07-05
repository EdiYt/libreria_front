import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../components/shared.module';
import { InicioComponent } from './inicio/inicio.component';
import { GaleriaComponent } from './galeria/galeria.component';

@NgModule({
  declarations: [
    InicioComponent,
    GaleriaComponent
  ],
  imports: [
    CommonModule,   
    SharedModule    
  ],
  exports: [
    InicioComponent,
    GaleriaComponent
  ]
})
export class PaginasModule {}
