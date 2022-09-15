import { HttpClient } from '@angular/common/http';
import { TipoSuscripcion } from './../model/tipo-suscripcion';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoSuscripcionService {
  url:string="http://localhost:5100/tiposuscripcion"
  constructor(private http:HttpClient ) { }
  listar(){
    return this.http.get<TipoSuscripcion[]>(this.url);
  }
}