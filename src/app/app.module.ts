import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservaComponent } from './page/reserva/reserva.component';
import { ReservaListarComponent } from './page/reserva/reserva-listar/reserva-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatTableModule} from '@angular/material/table';
import { CategoriaComponent } from './page/categoria/categoria.component';
import { CategoriaListarComponent } from './page/categoria/categoria-listar/categoria-listar.component'
@NgModule({
  declarations: [
    AppComponent,
    ReservaComponent,
    ReservaListarComponent,
    CategoriaComponent,
    CategoriaListarComponent
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
