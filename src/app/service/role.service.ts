import { Role } from './../model/role';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  url:string="http://localhost:5100/role"

  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Role[]>(this.url);
  }
}
