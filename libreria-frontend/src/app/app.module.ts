import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './components/shared.module';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { GaleriaComponent } from './paginas/galeria/galeria.component';

const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: 'galeria', component: GaleriaComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,  
    GaleriaComponent  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    SharedModule  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}