import { Injectable } from '@angular/core';
import { EscolaregularClass } from './escolaregular';

@Injectable({
  providedIn: 'root'
})
export class EscolaregularService {

  informacoes: EscolaregularClass[] = [];

  constructor() { }

  addInfo(info: EscolaregularClass) {
    this.informacoes.push(info);
  }

  getInfos() {
    return this.informacoes;
  }

}
