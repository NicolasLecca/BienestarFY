import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tiposuscripcion } from "../model/tiposuscripcion";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TiposuscripcionService {
  private url1: string = `${environment.host1}`;
  constructor(private http:HttpClient ) { }
  listar(){
    return this.http.get<Tiposuscripcion[]>(this.url1);
  }
}
