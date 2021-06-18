import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ProfissionalClass } from './profissionais';
import { ProfissionalClassCreate } from './profissionalcreate';
import {environment} from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService {

  profissionais: ProfissionalClass[] = [];
  profissional: ProfissionalClass = new ProfissionalClass();

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getProfissionais(){
    return this.httpClient.get<ProfissionalClass[]>(environment.apiUrl + '/profissionais/');
  }

  getProfissionalPorNome(_nome:string){
    return this.httpClient.get<ProfissionalClass[]>(environment.apiUrl + '/profissionais/nome/'+ _nome)
  }

  addprofissional(profissional:ProfissionalClassCreate){
    this.httpClient.post(environment.apiUrl + '/profissionais/',profissional)
    .subscribe(
      res => {
       alert('Paciente Salvo com Sucesso!');
      },
      err => {
       console.error(err);
      }
      );
  }
}
