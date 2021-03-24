import { Injectable } from '@angular/core';
import { PacientesClass } from '../pacientes/pacientes';
import { FonoClass } from './fono';

@Injectable({
  providedIn: 'root'
})
export class FonoService {

  informacoes: FonoClass[] = [];

  constructor() { }

  addInfo(info: FonoClass) {
    this.informacoes.push(info);
  }

  getInfos() {
    return this.informacoes;
  }
}
