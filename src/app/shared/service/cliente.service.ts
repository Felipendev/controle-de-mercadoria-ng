import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {



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
    return this.http.get<Cliente[]>(`${environment.api}/listAll`);
  }

  public postCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${environment.api}`, cliente, this.httpOptions);
  }
}
