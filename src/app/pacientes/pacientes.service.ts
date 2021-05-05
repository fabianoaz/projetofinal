import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { PacientesClass} from './pacientes';
import { PacientesClassCreate } from './pacientescreate';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  pacientes: PacientesClass[] = [];

  //private readonly url = 'http://localhost:3000/pacientes';
  private readonly url = 'http://35.168.241.134:3000/pacientes';

  constructor(private httpClient: HttpClient) { }

  //Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getPacientes(){
    return this.httpClient.get<PacientesClass[]>(this.url);
  }

  addpaciente(paciente:PacientesClassCreate){
    this.httpClient.post(this.url,paciente)
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
