import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  
  constructor(
    private fb: FormBuilder,
    private service: ClienteService
    ) { }

    ngOnInit(): void {
      this.form = this.fb.group({
        nome: [null, [this.validarObrigatoriedade, Validators.minLength(2), Validators.maxLength(50)]],
        sobrenome: [null, [this.validarObrigatoriedade, Validators.minLength(2), Validators.maxLength(50)]],
        codigo: [null, [this.validarObrigatoriedade, Validators.minLength(4), Validators.maxLength(5)]],
        dataRecebimento: [ null, this.validarObrigatoriedade],
        horaRecebimento: [null, this.validarObrigatoriedade],
        contato: [null, [this.validarObrigatoriedade, Validators.minLength(8)]],
        statusProduto: StatusProduto.RECEBIDO
      });
      this.getClientes();
    }

    validarObrigatoriedade(input: FormControl) {
      return (input.value ? null : { obrigatoriedade: true });
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

    onSubmit() {
      this.submitted = true
      console.log(this.form.value);
      if(this.form.valid) {
        console.log('Subimit')
      }
    }

    hasError(field: string) {
      return this.form.get(field)?.errors;
    }

}

