import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria.service';
import { Categoria } from 'src/app/model/categoria';

@Component({
  selector: 'app-categoria-listar',
  templateUrl: './categoria-listar.component.html',
  styleUrls: ['./categoria-listar.component.css']
})
export class CategoriaListarComponent implements OnInit {
  dataSource: MatTableDataSource<Categoria> = new MatTableDataSource();
  displayedColumns:string[]=['idcat','nombrecat']
  constructor(private Vs: CategoriaService) { }

  ngOnInit(): void {
    this.Vs.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
  }

}
