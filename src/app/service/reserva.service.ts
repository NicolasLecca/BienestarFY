import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Reserva } from '../model/reserva';
@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  url: string = "http://localhost:5000/reserva"
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Reserva[]>(this.url);
  }
}
