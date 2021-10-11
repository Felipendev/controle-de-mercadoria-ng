import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  API = "http://localhost:8080/api/v1/cliente";

  filtroEmpleado: '' = "";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  public getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>( this.API + "/listAll");
  }

  public postCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.API, cliente, this.httpOptions);
  }
}
