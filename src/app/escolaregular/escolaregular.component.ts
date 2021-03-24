import { Component, OnInit } from '@angular/core';
import { EscolaregularClass } from './escolaregular';
import { EscolaregularService } from './escolaregular.service';

@Component({
  selector: 'app-escolaregular',
  templateUrl: './escolaregular.component.html',
  styleUrls: ['./escolaregular.component.css']
})
export class EscolaregularComponent implements OnInit {

  info: EscolaregularClass = new EscolaregularClass;
  informacoes: EscolaregularClass[] = [];

  constructor(private service: EscolaregularService) { }

  ngOnInit(): void {
    this.info = new EscolaregularClass();
    this.informacoes = this.service.getInfos();
  }

  addInfo(_atendimento: string, _orientacao: string) {
    this.info.data = new Date;
    this.info.atendimento = _atendimento;
    this.info.orientacao = _orientacao;
    this.service.addInfo(this.info);
    this.info = new EscolaregularClass();
  }

}
