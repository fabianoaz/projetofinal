import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AtendimentoClass } from './atendimento';
import { environment } from '../../environments/environment.prod'
import { EvolucaoClass } from './evolucao';
import { Row } from 'angular-google-charts';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  atendimentos: AtendimentoClass[] = [];
  idPacienteSelecionado: string = "";

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  addatendimento(atendimento: AtendimentoClass) {
    this.httpClient.post(environment.apiUrl + '/atendimentos/', atendimento)
      .subscribe(
        res => {
          alert('Atendimento Salvo com Sucesso!');
        },
        err => {
          console.error(err);
        }
      );
  }

  getAtendimentos() {
    return this.httpClient.get<AtendimentoClass[]>(environment.apiUrl + '/atendimentos/');
  }

  getAtendimentoPorPaciente(_id: string) {
    return this.httpClient.get<AtendimentoClass[]>(environment.apiUrl + '/atendimentos/paciente/' + _id);
  }

  getEvolucaoPorPaciente(_id: string) {
    this.idPacienteSelecionado = _id;
    return this.httpClient.get<Row[]>(environment.apiUrl + '/atendimentos/evolucao/' + _id);
  }

  getEvolucaoPorPacienteProfissional(_profissionalNome: string) {
    return this.httpClient.get<Row[]>(environment.apiUrl + '/atendimentos/evolucao/' + this.idPacienteSelecionado + "/" + _profissionalNome);
  }

}
