import { Component, OnInit } from '@angular/core';

import { ChartType, Row } from "angular-google-charts"
import { AtendimentoService } from '../atendimento/atendimento.service';
import { EvolucaoClass } from '../atendimento/evolucao';
import { PacientesClass } from '../pacientes/pacientes';
import { PacientesService } from '../pacientes/pacientes.service';
import { ProfissionalClass } from '../profissionais/profissionais';
import { ProfissionaisService } from '../profissionais/profissionais.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  providers: [NgbModalConfig, NgbModal],
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  evolucao: Row[] = [];
  data: Row[] = [];
  paciente: PacientesClass = new PacientesClass;
  pacienteNome:string = "";
  pacienteID:string = "";
  listapacientes: PacientesClass[] = [];
  profissionais: ProfissionalClass[] = [];

  constructor(private atendimentoService: AtendimentoService, private pacienteService: PacientesService,private profissionaisService: ProfissionaisService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe(dados => this.listapacientes = dados);
    this.profissionaisService.getProfissionais().subscribe(dados =>this.profissionais = dados);
  }

  title = 'Evolução em Atendimentos ';

  type = ChartType.Bar;

  evolucaoPaciente(){
    this.atendimentoService.getEvolucaoPorPaciente('60a1958797b6ae00154449ff').subscribe(dados =>this.data = dados);
  }

  evolucaoPacienteID(_idPaciente:string){
    this.atendimentoService.getEvolucaoPorPaciente(_idPaciente).subscribe(dados =>this.data = dados);
    this.pacienteService.getPacienteID(_idPaciente).subscribe(dados =>this.paciente = dados);
  }

  evolucaoPacienteProfissional(_profissionalNome:string){
    this.atendimentoService.getEvolucaoPorPacienteProfissional(_profissionalNome).subscribe(dados =>this.data = dados);
  }

  selecionaPaciente(_idPaciente:string){
    this.pacienteID = _idPaciente;
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  columnNames = ['Período', 'Evolução'];

  options = {};

  width = 850;
  height = 450;

  widthM = 425;
  heightM = 225;

  print(){
    window.print();
  }

  open(content: any) {
    this.modalService.open(content);
  }

}