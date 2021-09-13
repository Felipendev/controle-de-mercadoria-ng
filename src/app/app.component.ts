import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'controle-mercadoria-ng';

  clientes: Object[] = [];
  
  constructor(http: HttpClient){
    http
    .get<Object[]>('https://controle-de-mercadoria-api.herokuapp.com/api/v1/cliente/listAll')
    .subscribe(clientes => this.clientes = clientes);
  }
}
