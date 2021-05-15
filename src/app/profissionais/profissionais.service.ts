import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ProfissionalClass } from './profissionais';
import { ProfissionalClassCreate } from './profissionalcreate';

@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService {

  profissionais: ProfissionalClass[] = [];

  private readonly url = 'https://projetofinal-back2021.herokuapp.com/profissionais';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getProfissionais(){
    return this.httpClient.get<ProfissionalClass[]>(this.url);
  }

  addprofissional(profissional:ProfissionalClassCreate){
    this.httpClient.post(this.url,profissional)
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
