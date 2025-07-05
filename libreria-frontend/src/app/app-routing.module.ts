import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { GaleriaComponent } from './paginas/galeria/galeria.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}