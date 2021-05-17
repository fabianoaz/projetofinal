import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AtendimentoClass } from './atendimento';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  atendimentos: AtendimentoClass[] = [];

  //private readonly url = 'https://projetofinal-back2021.herokuapp.com/atendimentos';
  private readonly url = 'http://localhost:3000/atendimentos';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  addatendimento(atendimento:AtendimentoClass){
    this.httpClient.post(this.url,atendimento)
    .subscribe(
      res => {
       alert('Atendimento Salvo com Sucesso!');
      },
      err => {
       console.error(err);
      }
      );
  }

  getAtendimentos(){
    return this.httpClient.get<AtendimentoClass[]>(this.url);
  }

getAtendimentoPorPaciente(_id:string){
  return this.httpClient.get<AtendimentoClass[]>(this.url + '/paciente/'+_id);
}

}
