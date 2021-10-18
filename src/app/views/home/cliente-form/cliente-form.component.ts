import { ActivatedRoute, Router } from '@angular/router';
import { empty, Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

import { ClienteService } from 'src/app/shared/service/cliente.service';
import { StatusProduto } from 'src/app/shared/model/status-produto.enum';
import { Cliente } from 'src/app/shared/model/cliente.model';
import {  BsModalRef } from 'ngx-bootstrap/modal'
import { AlertModelService } from 'src/app/shared/alert-model.service';
import { catchError, map, switchMap } from 'rxjs/operators';

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
  bsModalRef!: BsModalRef;
  error$ = new Subject<boolean>();
  clientes$!: Observable<Cliente[]>;
  
  constructor(
    private fb: FormBuilder,
    private service: ClienteService,
    private alertService: AlertModelService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

    ngOnInit(): void {

      this.route.params
      .pipe(
        map(( params: any) => params['id']),
        switchMap(id => this.service.loadById(id))
      )
      .subscribe(cliente => this.updateForm(cliente));

      this.form = this.fb.group({
        id: [null],
        nome: [null, [this.validarObrigatoriedade, Validators.minLength(2), Validators.maxLength(50)]],
        sobrenome: [null, [this.validarObrigatoriedade, Validators.minLength(2), Validators.maxLength(50)]],
        codigo: [null, [this.validarObrigatoriedade, Validators.minLength(4), Validators.maxLength(5)]],
        dataRecebimento: [ null, this.validarObrigatoriedade],
        dataEntreg: [null],
        contato: [null, [this.validarObrigatoriedade, Validators.minLength(8)]],
        statusProduto: StatusProduto.RECEBIDO
      });
      this.onRefresh();
    }

    validarObrigatoriedade(input: FormControl) {
      return (input.value ? null : { obrigatoriedade: true });
    }
  
    
   getClientes(){
      // this.service.getClientes()
      // .subscribe(dados =>  this.clientes = dados);
    }

    updateForm(cliente: any){
      this.form.patchValue({
        id: cliente.id,
        nome: cliente.nome,
        sobrenome: cliente.sobrenome,
        codigo: cliente.codigo,
        dataRecebimento: cliente.dataRecebimento,
        datEntrega: cliente.dataEntrega,
        contato: cliente.contato,
        statusProduto: StatusProduto.RECEBIDO
      })
    }
    
    criaCliente(){
      this.submitted = true;
      let newDate: moment.Moment = moment.utc(this.form.value.dataRecebimento).local();
      this.form.value.dataRecebimento = newDate.format("YYYY-MM-DD");
      this.service.postCliente(this.form.value).subscribe(
        success => {
          this.alertService.showAlertSuccess('Produto criado com sucesso!')
        },
        error => this.alertService.showAlertDanger('Error ao criar produto, tente novamente!'),
        () => console.log('request completo')
      );
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

    handleError() {
      this.alertService.showAlertDanger('Erro ao carregar produtos. Tente novamente mais tarde');
      // this.bsModalRef = this.modalService.show(AlertModalComponent);
      // this.bsModalRef.content.type = 'danger';
      // this.bsModalRef.content.message = 'danger';
    }

    onRefresh() {
      this.clientes$ = this.service.getClientes()
      .pipe(
        catchError(error => {
          console.error(error);
          this.error$.next(true);
          this.handleError()
          return empty();
        })
      );
    }

    onEdit(id: any) {
      this.router.navigate(['editar', id], { relativeTo: this.route });
    }

}

