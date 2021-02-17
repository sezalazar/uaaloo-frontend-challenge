import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetCoreService {

  readonly APIurl = "http://localhost:5000/api/cliente";

  constructor(private http: HttpClient) { }

  Get(): Observable<any[]>{
    return this.http.get<any>(this.APIurl);
  }

  // tslint:disable-next-line: typedef
  agregarCliente(val: any){
    return this.http.post(this.APIurl, val);
  }

}
