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
    return this.httpClient.get<PacientesClass>(environment.apiUrl + '/pacientes/' + _idPaciente);
  }

  getPacientesProfissional(profissionalID:string){
    return this.httpClient.get<PacientesClass[]>(environment.apiUrl + '/pacientes/profissional/' + profissionalID);
  }

  addpaciente(paciente:PacientesClassCreate){
    this.httpClient.post(environment.apiUrl + '/pacientes/',paciente)
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
