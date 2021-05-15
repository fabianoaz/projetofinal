import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { FonoClass } from './fono';

@Injectable({
  providedIn: 'root'
})
export class FonoService {

  atendimentos: FonoClass[] = [];

  private readonly url = 'https://projetofinal-back2021.herokuapp.com/atendimentos';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  addInfo(info: FonoClass) {
    this.atendimentos.push(info);
  }

  addatendimento(atendimento:FonoClass){
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

  getInfos() {
    return this.atendimentos;
  }

  getAtendimentos(){
    return this.httpClient.get<FonoClass[]>(this.url);
  }
}
