import { Component, OnInit } from '@angular/core';
import { ActividadService } from 'src/app/service/actividad.service';
import {MatTableDataSource} from '@angular/material/table';
import { Actividad } from 'src/app/model/actividad';

@Component({
  selector: 'app-actividad-listar',
  templateUrl: './actividad-listar.component.html',
  styleUrls: ['./actividad-listar.component.css']
})
export class ActividadListarComponent implements OnInit {
  dataSource:MatTableDataSource<Actividad>=new MatTableDataSource();
  displayedColumns:string[]=['id','nombre','descripcion','tipo']
  constructor(private aS:ActividadService) { }

  ngOnInit(): void {
    this.aS.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data)
    })
  }

}
