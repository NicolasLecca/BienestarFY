import { Component, OnInit } from '@angular/core';
import { Suscripcion } from 'src/app/model/suscripcion';
import { MatTableDataSource } from '@angular/material/table';
import { SuscripcionService } from 'src/app/service/suscripcion.service';

@Component({
  selector: 'app-suscripcion-listar',
  templateUrl: './suscripcion-listar.component.html',
  styleUrls: ['./suscripcion-listar.component.css']
})
export class SuscripcionListarComponent implements OnInit {
  lista: Suscripcion[] = [];
  dataSource: MatTableDataSource<Suscripcion> = new MatTableDataSource();
  displayedColumns: string[]=['id','nombreSuscripcion','fechaInicio','fechaFin'];
  constructor(private pService: SuscripcionService) { }

  ngOnInit(): void {
    this.pService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

  }
}
