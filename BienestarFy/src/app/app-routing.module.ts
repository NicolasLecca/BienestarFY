import { ActividadComponent } from './page/actividad/actividad.component';
import { TipoActividadComponent } from './page/tipo-actividad/tipo-actividad.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'tipoactividad', component: TipoActividadComponent, children:[

    ]
  },{
    path:'actividad',component:ActividadComponent,children:[

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
