import { Component, OnInit } from '@angular/core';
import { AtendimentoClass } from '../atendimento/atendimento';
import { AtendimentoService } from '../atendimento/atendimento.service';
import { PacientesClass } from '../pacientes/pacientes';
import { PacientesService } from '../pacientes/pacientes.service';
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
  atendimento:AtendimentoClass = new AtendimentoClass;
  atendimentos: AtendimentoClass[] = [];
  listapacientes: PacientesClass[] = [];
  atendimentosPaciente: AtendimentoClass[] = [];

  constructor(private service: EscolaregularService, private atendimentoService: AtendimentoService, private pacienteService: PacientesService) { }

  ngOnInit(): void {
    this.info = new EscolaregularClass();
    this.informacoes = this.service.getInfos();
    this.atendimentoService.getAtendimentos().subscribe(dados =>this.atendimentos = dados);
    this.pacienteService.getPacientes().subscribe(dados => this.listapacientes = dados)
  }

  addInfo(_atendimento: string, _orientacao: string) {
    this.info.data = new Date;
    this.info.atendimento = _atendimento;
    this.info.orientacao = _orientacao;
    this.service.addInfo(this.info);
    this.info = new EscolaregularClass();
  }

  listarAtendimentosPaciente(_idPaciente:string) {
    this.atendimentoService.getAtendimentoPorPaciente(_idPaciente).subscribe(dados => this.atendimentosPaciente = dados)
  }

}