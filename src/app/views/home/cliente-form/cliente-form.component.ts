import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

import { ClienteService } from 'src/app/shared/service/cliente.service';
import { StatusProduto } from 'src/app/shared/model/status-produto.enum';
import { Cliente } from 'src/app/shared/model/cliente.model';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  isShow = false;  
  searchValue!: string;
  form!: FormGroup;
  submitted = false;
  clientes: Cliente[] = [];

  @Input() pattern!: string | RegExp
  
  constructor(
    private fb: FormBuilder,
    private service: ClienteService
    ) { }

    ngOnInit(): void {
      this.form = this.fb.group({
        nome: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
        sobrenome: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
        codigo: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
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
      // location.assign("/home");
    }
    
    cancelar(){
      this.submitted = false;
      this.form.reset();
    }


    toggle() {
      this.isShow = !this.isShow;
    }
  
}

