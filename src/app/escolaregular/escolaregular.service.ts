import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PacientesClass } from '../pacientes/pacientes';
import { EscolaregularClass } from './escolaregular';

@Injectable({
  providedIn: 'root'
})
export class EscolaregularService {

  informacoes: EscolaregularClass[] = [];

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  addInfo(info: EscolaregularClass) {
    this.informacoes.push(info);
  }

  getInfos() {
    return this.informacoes;
  }

}
