import { Component, OnInit } from '@angular/core';
import { ActividadService } from 'src/app/service/actividad.service';
import {MatTableDataSource} from '@angular/material/table';
import { Actividad } from 'src/app/model/actividad';

@Component({
  selector: 'app-tipo-actividad-listar',
  templateUrl: './tipo-actividad-listar.component.html',
  styleUrls: ['./tipo-actividad-listar.component.css']
})
export class TipoActividadListarComponent implements OnInit {

  dataSource:MatTableDataSource<Actividad>=new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','descripcion']
  constructor(private aS:ActividadService) { }

  ngOnInit(): void {
    this.aS.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data)
    })
  }


}
