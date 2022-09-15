import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Suscripcion } from '../model/suscripcion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {
  private url: string = `${environment.host}`;
  constructor(private http:HttpClient ) { }
  listar(){
    return this.http.get<Suscripcion[]>(this.url);
  }
}
