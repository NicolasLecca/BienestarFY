import { TipoSuscripcion } from './../../../model/tipo-suscripcion';
import { MatTableDataSource } from '@angular/material/table';
import { TipoSuscripcionService } from './../../../service/tipo-suscripcion.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tipo-suscripcion-listar',
  templateUrl: './tipo-suscripcion-listar.component.html',
  styleUrls: ['./tipo-suscripcion-listar.component.css']
})
export class TipoSuscripcionListarComponent implements OnInit {
  dataSource: MatTableDataSource<TipoSuscripcion> = new MatTableDataSource();
  displayedColumns: string[]=['id','nombre','descripcion','descuento'];
  constructor(private tss: TipoSuscripcionService) { }

  ngOnInit(): void {
    this.tss.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}