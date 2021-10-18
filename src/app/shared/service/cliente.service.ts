import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, tap, take } from 'rxjs/operators';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  API = "http://localhost:8080/api/v1/cliente";


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getClientes(){
    return this.http.get<Cliente[]>( this.API + "/listAll")
      .pipe(
        delay(2000),
        tap(console.log)
      )
  }

  loadById(id: any) {
    return this.http.get(`${this.API}/${id}`).pipe(take(1));
  }

  postCliente(cliente: Cliente){
    return this.http.post<Cliente>(this.API, cliente, this.httpOptions);
  }
}
