import { Usuario } from "./usuario";
import { Horario } from "./horario";

export class Reserva{
    idReserva:number=0;
    FechaReserva:string="";
    usuario: Usuario = new Usuario();
    horario: Horario = new Horario();
}