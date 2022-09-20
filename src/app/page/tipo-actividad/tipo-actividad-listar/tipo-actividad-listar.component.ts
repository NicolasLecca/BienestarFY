import { MatTableDataSource } from '@angular/material/table';
import { TipoActividadService } from './../../../service/tipo-actividad.service';
import { TipoActividad } from './../../../model/tipo-actividad';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tipo-actividad-listar',
  templateUrl: './tipo-actividad-listar.component.html',
  styleUrls: ['./tipo-actividad-listar.component.css']
})
export class TipoActividadListarComponent implements OnInit {
  dataSource: MatTableDataSource<TipoActividad> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'descripcion','acciones'];
  constructor(private tas:TipoActividadService) { }

  ngOnInit(): void {
    this.tas.listar().subscribe(data =>{
      this.dataSource=new MatTableDataSource(data);

      this.tas.getLista().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      });
    
    })  }

}
