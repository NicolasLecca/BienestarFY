import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservaComponent } from './page/reserva/reserva.component';
import { CategoriaComponent } from './page/categoria/categoria.component';

const routes: Routes = [{
  path: 'reservas', component: ReservaComponent, children: [

  ]
}, {
  path: 'categorias', component: CategoriaComponent, children: [

  ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
