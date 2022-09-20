import { TipoActividad } from './../model/tipo-actividad';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoActividadService {
url:string="http://localhost:5100/tipoactividad"

  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<TipoActividad[]>(this.url);
  }
}
