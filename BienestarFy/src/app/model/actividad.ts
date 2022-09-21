import { TipoActividad } from "./tipo-actividad";

export class Actividad{
  idActividad:number=0;
  nombreActvidad:string="";
  descripcionActividad:string="";
  tipoActividad:TipoActividad = new TipoActividad() ;
}
