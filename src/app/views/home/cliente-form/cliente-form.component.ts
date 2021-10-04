import { Cliente } from './../../../shared/model/cliente.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/shared/service/cliente.service';



@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  searchValue!: string;
  form!: FormGroup;
  submitted = false;
  clientes: Cliente[] = [];

  
  constructor(
    private fb: FormBuilder,
    private service: ClienteService
  ) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(){
    this.service.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }
}

