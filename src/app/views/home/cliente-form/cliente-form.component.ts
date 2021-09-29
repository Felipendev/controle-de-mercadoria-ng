import { Cliente } from './../../../shared/model/cliente.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StatusProduto } from './../../../shared/model/status-produto.enum';
import { ClienteService } from './../../../shared/service/cliente.service';
import * as moment from 'moment';
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
    this.form = this.fb.group({
        nome: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
        sobrenome: [null],
        codigo: [null, [Validators.required]],
        dataRecebimento: [ null, [Validators.required]],
        horaRecebimento: [null, [Validators.required]],
        contato: [null, [Validators.required]],
        statusProduto: StatusProduto.RECEBIDO
    });

    this.getClientes();
  }

  getClientes(){
    this.service.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }

  criaCliente(){
    this.submitted = true;
    let newDate: moment.Moment = moment.utc(this.form.value.dataRecebimento).local();
    this.form.value.dataRecebimento = newDate.format("YYYY-MM-DD");
    this.service.postCliente(this.form.value).subscribe(result => {});
    location.assign("/home");
  }

  cancelar(){
    this.submitted = false;
    this.form.reset();
    console.log("cancelado");
  }
}

