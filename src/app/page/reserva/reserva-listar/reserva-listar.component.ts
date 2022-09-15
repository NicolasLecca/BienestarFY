import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/service/reserva.service';
import { MatTableDataSource } from '@angular/material/table'
import { Reserva } from 'src/app/model/reserva';
@Component({
  selector: 'app-reserva-listar',
  templateUrl: './reserva-listar.component.html',
  styleUrls: ['./reserva-listar.component.css']
})
export class ReservaListarComponent implements OnInit {
  dataSource: MatTableDataSource<Reserva> = new MatTableDataSource();
  displayedColumns:string[]=['idrs','fecha','iduser','idses'];
  constructor(private ps: ReservaService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
