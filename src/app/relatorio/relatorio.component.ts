import { Component, OnInit } from '@angular/core';

import { ChartType, Row } from "angular-google-charts"
import { AtendimentoService } from '../atendimento/atendimento.service';
import { PacientesClass } from '../pacientes/pacientes';
import { PacientesService } from '../pacientes/pacientes.service';
import { ProfissionalClass } from '../profissionais/profissionais';
import { ProfissionaisService } from '../profissionais/profissionais.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PacientesClassCreate } from '../pacientes/pacientescreate';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  providers: [NgbModalConfig, NgbModal],
  styleUrls: ['./relatorio.component.css', '../styles/generic.style.css']
})
export class RelatorioComponent implements OnInit {

  data: Row[] = []; // Dados para apresentação do gráfico
  paciente: PacientesClassCreate = new PacientesClassCreate;
  profissionalNome: string = "Selecionar profissional";
  profissionalEspecializacao: string = "";
  pacienteID: string = "";
  listapacientes: PacientesClass[] = [];
  profissionais: ProfissionalClass[] = [];

  constructor(private atendimentoService: AtendimentoService, private pacienteService: PacientesService, private profissionaisService: ProfissionaisService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe(dados => this.listapacientes = dados);
    this.profissionaisService.getProfissionais().subscribe(dados => this.profissionais = dados);
  }

  evolucaoPacienteID(_idPaciente: string) {
    this.data = [];
    this.atendimentoService.getEvolucaoPorPaciente(_idPaciente).subscribe(dados => this.data = dados);
    this.pacienteService.getPacienteID(_idPaciente).subscribe(dados => this.paciente = dados);
    this.profissionalNome = "Todos";
    this.profissionalEspecializacao = "";
  }

  evolucaoPacienteProfissional(_profissionalNome: string, _especializacao: string) {
    this.data = [];
    this.atendimentoService.getEvolucaoPorPacienteProfissional(_profissionalNome).subscribe(dados => this.data = dados);
    this.profissionalNome = _profissionalNome;
    this.profissionalEspecializacao = _especializacao;
  }

  title = 'Evolução em Atendimentos ';
  type = ChartType.Bar;
  columnNames = ['Período', 'Evolução'];
  options = {};
  width = 850;
  height = 450;

  widthM = 425;
  heightM = 225;

  print(content: any) {
    //window.document.body.innerHTML = content
    //window.open(content,'_blank')
    window.print();

  }

  open(content: any) {
    this.modalService.open(content);
  }

}