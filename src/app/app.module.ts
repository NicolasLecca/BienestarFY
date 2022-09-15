

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuscripcionComponent } from "./page/suscripcion/suscripcion.component";
import { SuscripcionListarComponent } from "./page/suscripcion/suscripcion-listar/suscripcion-listar.component";
import { TiposuscripcionComponent } from './page/tiposuscripcion/tiposuscripcion.component';
import { TiposuscripcionListarComponent } from './page/tiposuscripcion/tiposuscripcion-listar/tiposuscripcion-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    SuscripcionComponent,
    SuscripcionListarComponent,
    TiposuscripcionComponent,
    TiposuscripcionListarComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
