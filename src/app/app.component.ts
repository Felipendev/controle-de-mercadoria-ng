import { ApiService } from './main/api.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'controle-mercadoria-ng';

  clientes: Object[] = [];
  
  constructor(apiService: ApiService){

    apiService
    .listFromUser('vinicius')
    .subscribe(clientes => this.clientes = this.clientes);

  }
}
