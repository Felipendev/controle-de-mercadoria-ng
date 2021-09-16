import { ClienteService } from './../../../shared/service/cliente.service';
import { Cliente } from './../../../shared/model/cliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes!: Cliente[];

  constructor(
    public clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(){
    this.clienteService.getClientes().subscribe(data => {
      this.clientes = data;
      console.log(this.clientes);
    });
  }

}
