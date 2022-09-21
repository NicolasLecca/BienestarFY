import { ActividadListarComponent } from './page/actividad/actividad-listar/actividad-listar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoActividadComponent } from './page/tipo-actividad/tipo-actividad.component';
import { ActividadComponent } from './page/actividad/actividad.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { TipoActividadListarComponent } from './page/tipo-actividad/tipo-actividad-listar/tipo-actividad-listar.component';



@NgModule({
  declarations: [
    AppComponent,
    TipoActividadComponent,
    ActividadComponent,
    TipoActividadListarComponent,
    ActividadListarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
