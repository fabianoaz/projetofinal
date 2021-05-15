import { Component, OnInit } from '@angular/core';
import { PacientesClass } from '../pacientes/pacientes';
import { PacientesService } from '../pacientes/pacientes.service';
import { ProfissionalClass } from '../profissionais/profissionais';
import { ProfissionaisService } from '../profissionais/profissionais.service';
import { FonoClass } from './fono';
import { FonoService } from './fono.service';

@Component({
  selector: 'app-fono',
  templateUrl: './fono.component.html',
  styleUrls: ['./fono.component.css']
})
export class FonoComponent implements OnInit {

  info: FonoClass = new FonoClass;
  informacoes: FonoClass[] = [];
  pacientes: PacientesClass[] = [];
  paciente:PacientesClass = new PacientesClass;
  selectedPaciente:PacientesClass = new PacientesClass;

  pacienteId:string="";
  pacienteNome:string="";
  pacienteIdade:string="";

  profissionais: ProfissionalClass[] = [];
  profissional:ProfissionalClass = new ProfissionalClass;

  profissionalId:string="";
  profissionalNome:string="";
  profissionalEspecialidade:string="";

  constructor(private atendimentoService: FonoService, private pacientesService: PacientesService, private profissionaisService: ProfissionaisService) { }

  ngOnInit(): void {
    this.info = new FonoClass();
    this.selectedPaciente = new PacientesClass;
    this.atendimentoService.getAtendimentos().subscribe(dados =>this.informacoes = dados);
    this.pacientesService.getPacientes().subscribe(dados => this.pacientes = dados);
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
    this.atendimentoService.addatendimento(this.info);
    this.info = new FonoClass();
  }

  selecionaPaciente(_id:string,_nome:string,_idade:string){
    this.pacienteId = _id;
    this.pacienteNome = _nome;
    this.pacienteIdade = _idade;
  }

  selecionaProfissional(_id:string,_nome:string,_especializacao:string){
    this.profissionalId = _id;
    this.profissionalNome = _nome;
    this.profissionalEspecialidade = _especializacao;
  }

  getNomePacienteSelecionado(){
    alert("ID: " + this.pacienteId + " Nome: " + this.pacienteNome);
    return "ID: " + this.pacienteId + " Nome: " + this.pacienteNome;
  }
}
