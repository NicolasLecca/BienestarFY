import { TipoActividadListarComponent } from './page/tipo-actividad/tipo-actividad-listar/tipo-actividad-listar.component';
import { TipoSuscripcionComponent } from './page/tipo-suscripcion/tipo-suscripcion.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoHorarioComponent } from './page/tipo-horario/tipo-horario.component';
import { HorarioComponent } from './page/horario/horario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { TipoHorarioListarComponent } from './page/tipo-horario/tipo-horario-listar/tipo-horario-listar.component';
import { HorarioListarComponent } from './page/horario/horario-listar/horario-listar.component';
import { UsuarioComponent } from './page/usuario/usuario.component';
import { UsuarioListarComponent } from './page/usuario/usuario-listar/usuario-listar.component';
import { RoleComponent } from './page/role/role.component';
import { RoleListarComponent } from './page/role/role-listar/role-listar.component';
import { SuscripcionComponent } from './page/suscripcion/suscripcion.component';
import { SuscripcionListarComponent } from './page/suscripcion/suscripcion-listar/suscripcion-listar.component';
import { TipoSuscripcionListarComponent } from './page/tipo-suscripcion/tipo-suscripcion-listar/tipo-suscripcion-listar.component';
import { ActividadComponent } from './page/actividad/actividad.component';
import { TipoActividadComponent } from './page/tipo-actividad/tipo-actividad.component';
import { ReservaComponent } from './page/reserva/reserva.component';
import { CategoriaComponent } from './page/categoria/categoria.component';
import { CategoriaListarComponent } from './page/categoria/categoria-listar/categoria-listar.component';
import { ReservaListarComponent } from './page/reserva/reserva-listar/reserva-listar.component';
import { ActividadListarComponent } from './page/actividad/actividad-listar/actividad-listar.component';


@NgModule({
  declarations: [
    AppComponent,
    TipoHorarioComponent,
    HorarioComponent,
    TipoHorarioListarComponent,
    HorarioListarComponent,
    UsuarioComponent,
    UsuarioListarComponent,
    RoleComponent,
    RoleListarComponent,
    SuscripcionComponent,
    TipoSuscripcionComponent,
    SuscripcionListarComponent,
    TipoSuscripcionListarComponent,
    ActividadComponent,
    TipoActividadComponent,
    ReservaComponent,
    CategoriaComponent,
    CategoriaListarComponent,
    ReservaListarComponent,
    ActividadListarComponent,
    TipoActividadListarComponent
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
