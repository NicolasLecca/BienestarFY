import { Component, OnInit } from '@angular/core';
import {TiposuscripcionService} from "../../../service/tiposuscripcion.service";
import {MatTableDataSource} from "@angular/material/table";
import {Tiposuscripcion} from "../../../model/tiposuscripcion";

@Component({
  selector: 'app-tiposuscripcion-listar',
  templateUrl: './tiposuscripcion-listar.component.html',
  styleUrls: ['./tiposuscripcion-listar.component.css']
})
export class TiposuscripcionListarComponent implements OnInit {
  lista: Tiposuscripcion[] = [];
  dataSource: MatTableDataSource<Tiposuscripcion> = new MatTableDataSource();
  displayedColumns: string[]=['id','descripcionTipo','precio','descuento'];
  constructor(private tService: TiposuscripcionService) { }

  ngOnInit(): void {
    this.tService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
