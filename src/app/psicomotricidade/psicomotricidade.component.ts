import { Component, OnInit } from '@angular/core';
import { PsicomotricidadeClass } from './psicomotricidade';
import { PsicomotricidadeService } from './psicomotricidade.service';

@Component({
  selector: 'app-psicomotricidade',
  templateUrl: './psicomotricidade.component.html',
  styleUrls: ['./psicomotricidade.component.css']
})
export class PsicomotricidadeComponent implements OnInit {

  info: PsicomotricidadeClass = new PsicomotricidadeClass;
  informacoes: PsicomotricidadeClass[] = [];

  constructor(private service: PsicomotricidadeService) { }

  ngOnInit(): void {
    this.info = new PsicomotricidadeClass();
    this.informacoes = this.service.getInfos();
  }

  addInfo(_atendimento: string, _orientacao: string) {
    this.info.data = new Date;
    this.info.atendimento = _atendimento;
    this.info.orientacao = _orientacao;
    this.service.addInfo(this.info);
    this.info = new PsicomotricidadeClass();
  }

}
