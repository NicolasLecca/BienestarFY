import { HttpClient } from '@angular/common/http';
import { Categoria } from './../model/categoria';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url:string="http://localhost:5100/categoria"
  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Categoria[]>(this.url);
  }
}
