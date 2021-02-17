import { Component, OnInit } from '@angular/core';
import { NetCoreService } from 'src/app/net-core.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(
     private service: NetCoreService
    ) { }

   ListaClientes: any = [];

  ngOnInit(): void {
      this.refrescarLista();
  }

  refrescarLista(){
    this.service.Get().subscribe(data => {
      this.ListaClientes = data;
    });
  }
}
