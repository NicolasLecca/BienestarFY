import { MatTableDataSource } from '@angular/material/table';
import { CategoriaService } from './../../../service/categoria.service';
import { Categoria } from './../../../model/categoria';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-categoria-listar',
  templateUrl: './categoria-listar.component.html',
  styleUrls: ['./categoria-listar.component.css']
})
export class CategoriaListarComponent implements OnInit {
  dataSource: MatTableDataSource<Categoria> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'descripcion'];
  constructor(private cs:CategoriaService) { }

  ngOnInit(): void {
    this.cs.listar().subscribe(data =>{
      this.dataSource=new MatTableDataSource(data);
    })  }

}
