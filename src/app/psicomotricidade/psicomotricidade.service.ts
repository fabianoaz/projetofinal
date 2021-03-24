import { Injectable } from '@angular/core';
import { PsicomotricidadeClass } from './psicomotricidade';

@Injectable({
  providedIn: 'root'
})
export class PsicomotricidadeService {

  informacoes: PsicomotricidadeClass[] = [];

  constructor() { }

  addInfo(info: PsicomotricidadeClass) {
    this.informacoes.push(info);
  }

  getInfos() {
    return this.informacoes;
  }
}
