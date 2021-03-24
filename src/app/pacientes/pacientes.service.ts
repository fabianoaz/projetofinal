import { Injectable } from '@angular/core';
import { PacientesClass } from './pacientes';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  pacientes: PacientesClass[] = [];

  constructor() { }

  addpaciente(paciente:PacientesClass){
    this.pacientes.push(paciente);
  }

  getPacientes(){
    return this.pacientes;
  }
}
