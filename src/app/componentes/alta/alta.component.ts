import { Component, OnInit } from '@angular/core';
import { NetCoreService } from 'src/app/net-core.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {
  ClienteId = 0;
  ClienteNombre = '';
  ClienteApellido = '';
  ClienteDireccion = '';

  constructor(private service: NetCoreService) { }

  ngOnInit(): void {

  }

  agregarCliente(){
    var val = {Id: this.ClienteId,
      Nombre: this.ClienteNombre,
      Apellido: this.ClienteApellido,
      Direccion: this.ClienteDireccion};
    this.service.agregarCliente(val).subscribe(res => {
      alert(res.toString());
    });
  }
}
