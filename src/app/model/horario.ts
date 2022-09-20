import { TipoHorario } from './tipo-horario';
import {Usuario} from './usuario';

export class Horario {
    idHorario: number = 0;
    nombreHorario: string = "";
    descripcionHorario: string = "";
    fechaHorario: string="";
    horaHorario: string="";
    tipoHorario:TipoHorario=new TipoHorario();
    usuario:Usuario = new Usuario();
}