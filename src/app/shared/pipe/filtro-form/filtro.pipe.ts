import { Cliente } from './../../model/cliente.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(Clientes: Cliente[], buscaValor: string): Cliente[] {
    if(!Clientes || !buscaValor) {
      return Clientes;
    }
    return Clientes.filter(cliente => 
      cliente.nome.toLocaleLowerCase().includes(buscaValor.toLocaleLowerCase()) || 
      cliente.sobrenome.toLocaleLowerCase().includes(buscaValor.toLocaleLowerCase()) ||
      cliente.codigo.toString().toLocaleString().includes(buscaValor.toLocaleLowerCase()) ||
      cliente.statusProduto.toLocaleLowerCase().includes(buscaValor.toLocaleLowerCase()))
  }
}
