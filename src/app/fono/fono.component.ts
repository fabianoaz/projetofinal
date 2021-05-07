import { Component, OnInit } from '@angular/core';
import { PacientesClass } from '../pacientes/pacientes';
import { PacientesService } from '../pacientes/pacientes.service';
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

  constructor(private service: FonoService, private pacientesService: PacientesService) { }

  ngOnInit(): void {
    this.info = new FonoClass();
    this.selectedPaciente = new PacientesClass;
    this.informacoes = this.service.getInfos();
    this.pacientesService.getPacientes().subscribe(dados => this.pacientes = dados);

  }

  addInfo(_atendimento: string, _orientacao: string) {
    this.info.pacienteId = this.pacienteId;
    this.info.pacienteNome = this.pacienteNome;
    this.info.data = new Date;
    this.info.atendimento = _atendimento;
    this.info.orientacao = _orientacao;
    this.service.addInfo(this.info);
    this.info = new FonoClass();
  }

  selecionaPaciente(_id:string,_nome:string,_idade:string){
    this.pacienteId = _id;
    this.pacienteNome = _nome;
    this.pacienteIdade = _idade;
  }

  getNomePacienteSelecionado(){
    alert("ID: " + this.pacienteId + " Nome: " + this.pacienteNome);
    return "ID: " + this.pacienteId + " Nome: " + this.pacienteNome;
  }
}
