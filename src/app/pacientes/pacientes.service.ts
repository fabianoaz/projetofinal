import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map, tap } from 'rxjs/operators';
import { PacientesClass} from './pacientes';
import { PacientesClassCreate } from './pacientescreate';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  pacientes: PacientesClass[] = [];

  private readonly url = 'https://projetofinal-back2021.herokuapp.com/pacientes';

  constructor(private httpClient: HttpClient) { }

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
