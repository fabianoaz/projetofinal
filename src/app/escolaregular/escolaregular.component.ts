import { Component, OnInit } from '@angular/core';
import { AtendimentoClass } from '../atendimento/atendimento';
import { AtendimentoService } from '../atendimento/atendimento.service';
import { PacientesClass } from '../pacientes/pacientes';
import { PacientesService } from '../pacientes/pacientes.service';
import { EscolaregularClass } from './escolaregular';
import { EscolaregularService } from './escolaregular.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-escolaregular',
  templateUrl: './escolaregular.component.html',
  providers: [NgbModalConfig, NgbModal],
  styleUrls: ['./escolaregular.component.css','../styles/generic.style.css']
})
export class EscolaregularComponent implements OnInit {

  info: EscolaregularClass = new EscolaregularClass;
  informacoes: EscolaregularClass[] = [];
  atendimento:AtendimentoClass = new AtendimentoClass;
  atendimentos: AtendimentoClass[] = [];
  listapacientes: PacientesClass[] = [];
  atendimentosPaciente: AtendimentoClass[] = [];
  pacienteNome:string="Selecionar aluno";
  paciente: PacientesClass = new PacientesClass;

  constructor(private service: EscolaregularService, private atendimentoService: AtendimentoService, private pacienteService: PacientesService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  ngOnInit(): void {
    this.info = new EscolaregularClass();
    this.paciente = new PacientesClass;
    this.informacoes = this.service.getInfos();
    this.atendimentoService.getAtendimentos().subscribe(dados =>this.atendimentos = dados);
    this.pacienteService.getPacientes().subscribe(dados => this.listapacientes = dados);
  }

  addInfo(_atendimento: string, _orientacao: string) {
    this.info.data = new Date;
    this.info.atendimento = _atendimento;
    this.info.orientacao = _orientacao;
    this.service.addInfo(this.info);
    this.info = new EscolaregularClass();
  }

  listarAtendimentosPaciente(_idPaciente:string) {
    this.pacienteService.getPacienteID(_idPaciente).subscribe(dados =>this.paciente = dados);
    this.pacienteNome = this.paciente.nome
    this.atendimentoService.getAtendimentoPorPaciente(_idPaciente).subscribe(dados => this.atendimentosPaciente = dados)
  }

  print(){
    window.print();
  }

  open(content: any) {
    this.modalService.open(content, { size: 'xl' });
  }

}