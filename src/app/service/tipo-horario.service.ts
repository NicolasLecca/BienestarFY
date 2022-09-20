import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoHorario } from '../model/tipo-horario';

@Injectable({
  providedIn: 'root'
})
export class TipoHorarioService {
url:string="http://localhost:5100/tipohorario"
  constructor( private http:HttpClient) { }
  listar(){
    return this.http.get<TipoHorario[]>(this.url);
  }
}
