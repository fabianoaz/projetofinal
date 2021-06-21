import { Component, OnInit } from '@angular/core';
import { distinct } from 'rxjs/operators';
import { PacientesClass } from '../pacientes/pacientes';
import { PacientesService } from '../pacientes/pacientes.service';
import { ProfissionalClass } from '../profissionais/profissionais';
import { ProfissionaisService } from '../profissionais/profissionais.service';
import { AtendimentoClass } from './atendimento';
import { AtendimentoService } from './atendimento.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EvolucaoClass } from './evolucao';

@Component({
  selector: 'app-Atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.css','../styles/generic.style.css']
})
export class AtendimentoComponent implements OnInit {

  info: AtendimentoClass = new AtendimentoClass;
  informacoes: AtendimentoClass[] = [];
  pacientes: PacientesClass[] = [];
  paciente:PacientesClass = new PacientesClass;
  selectedPaciente:PacientesClass = new PacientesClass;

  pacienteId:string="";
  pacienteNome:string="Selecionar paciente";
  pacienteIdade:string="";
  pacienteDiagnostico:string="";
  pacienteEvolucao:number = 0;
  pacienteEvolucaoDsc:string="";
  //evolucao:number[] = [0,1,2,3];
  btnEvolucao:string="Selecionar evolução"
  evolucao = [{"descricao":"Ruim","valor":1},{"descricao":"Regular","valor":2},{"descricao":"Médio","valor":3},{"descricao":"Ótimo","valor":4}];

  profissionais: ProfissionalClass[] = [];
  profissional:ProfissionalClass = new ProfissionalClass;

  profissionalId:string="";
  profissionalNome:string="Selecionar profissional";
  profissionalEspecialidade:string="";

  constructor(private atendimentoService: AtendimentoService, private pacientesService: PacientesService, private profissionaisService: ProfissionaisService) { }

  ngOnInit(): void {
    this.info = new AtendimentoClass();
    this.selectedPaciente = new PacientesClass;
    this.atendimentoService.getAtendimentos().subscribe(dados =>this.informacoes = dados);
    this.profissionaisService.getProfissionais().subscribe(dados =>this.profissionais = dados);
  }

  addInfo(_atendimento: string, _orientacao: string) {
    this.info.pacienteID = this.pacienteId;
    this.info.pacienteNome = this.pacienteNome;
    this.info.atendimentoData = new Date;
    this.info.profissionalNome = this.profissionalNome;
    this.info.profissionalEspecialidade = this.profissionalEspecialidade;
    this.info.atendimento = _atendimento;
    this.info.orientacao = _orientacao;
    this.info.evolucao = this.pacienteEvolucao;
    this.atendimentoService.addatendimento(this.info);
    this.info = new AtendimentoClass();
    this.selectedPaciente = new PacientesClass;
  }

  selecionaPaciente(_id:string,_nome:string,_idade:string,_diagnostico:string){
    this.pacienteId = _id;
    this.pacienteNome = _nome;
    this.pacienteIdade = _idade;
    this.pacienteDiagnostico = _diagnostico;
    this.atendimentoService.getAtendimentoPorPaciente(this.pacienteId).subscribe(dados =>this.informacoes = dados);
  }

  selecionaEvolucao(_evolucao:number){
    this.pacienteEvolucao = _evolucao;
    this.pacienteEvolucaoDsc = this.evolucao[_evolucao - 1].descricao
    this.btnEvolucao = this.pacienteEvolucaoDsc
  }

  selecionaProfissional(_id:string,_nome:string,_especializacao:string){
    this.profissionalId = _id;
    this.profissionalNome = _nome;
    this.profissionalEspecialidade = _especializacao;
    this.pacientesService.getPacientesProfissional(_id).subscribe(dados => this.pacientes = dados);
  }
}
