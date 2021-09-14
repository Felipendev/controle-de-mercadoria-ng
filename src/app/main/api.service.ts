import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'https://controle-de-mercadoria-api.herokuapp.com'

@Injectable({providedIn: 'root' })
export class ApiService {

    constructor(private http: HttpClient){}

    listFromUser(userName: string){

        return this.http
        .get<Object[]>(API + '/api/v1/cliente/listAll')
       
    };
}
