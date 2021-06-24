import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map, tap } from 'rxjs/operators';
import { PacientesClass} from './pacientes';
import { PacientesClassCreate } from './pacientescreate';
import {environment} from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  pacientes: PacientesClass[] = [];

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getPacientes(){
    return this.httpClient.get<PacientesClass[]>(environment.apiUrl + '/pacientes/');
  }

  getPacienteID(_idPaciente:string){
    console.log("getPacienteID: " + _idPaciente)
    return this.httpClient.get<PacientesClass>(environment.apiUrl + '/pacientes/semid/' + _idPaciente);
  }

  getPacientesProfissional(profissionalID:string){
    return this.httpClient.get<PacientesClass[]>(environment.apiUrl + '/pacientes/profissional/' + profissionalID);
  }

  putAssociaPacienteProfissional(_pacienteId:string,_pacienteUpdate:PacientesClassCreate){
    console.log("Paciente A Ser Atualizado: " + _pacienteUpdate)
    this.httpClient.put(environment.apiUrl + "/pacientes/" + _pacienteId,_pacienteUpdate)
    .subscribe(
      res => {
       alert('Paciente Atualizado com Sucesso! ' /*+ _pacienteUpdate.profissionalID*/);
      },
      err => {
       console.error(err);
      }
      );
  }

  addpaciente(paciente:PacientesClassCreate){
    return this.httpClient.post(environment.apiUrl + '/pacientes/',paciente)
    .subscribe(
      res => {
       alert('Cadastro salvo com sucesso!');
      },
      err => {
       console.error(err);
      }
      );
  }
}
