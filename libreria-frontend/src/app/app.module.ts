import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './components/shared.module';
import { PaginasModule } from './paginas/paginas.module'; 
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    PaginasModule, 
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}