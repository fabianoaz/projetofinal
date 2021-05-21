import { Component, OnInit } from '@angular/core';
import { ProfissionalClass } from '../profissionais/profissionais';
import { ProfissionaisService } from '../profissionais/profissionais.service';
import { ProfissionalClassCreate } from '../profissionais/profissionalcreate';
import { PacientesClass} from './pacientes';
import { PacientesService } from './pacientes.service';
import { PacientesClassCreate } from './pacientescreate';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  paciente: PacientesClassCreate = new PacientesClassCreate;
  listapacientes: PacientesClass[] = [];
  profissional: ProfissionalClassCreate = new ProfissionalClassCreate;
  listaprofissionais: ProfissionalClass[] = [];

  constructor(private pacientesService: PacientesService, private profissionaisService: ProfissionaisService) { }

  ngOnInit(): void {
    this.listarPacientes()
    this.paciente = new PacientesClassCreate;
    this.pacientesService.getPacientes().subscribe(dados => this.listapacientes = dados);
    this.profissional = new ProfissionalClassCreate;
    this.profissionaisService.getProfissionais().subscribe(dados => this.listaprofissionais = dados);
  }

  addPaciente(_nome: string, _idade: string, _condicao: string, _faz:string, _dificuldade:string) {
    this.paciente.nome = _nome;
    this.paciente.idade = _idade;
    this.paciente.diagnostico = _condicao;
    this.paciente.faz = _faz;
    this.paciente.dificuldade = _dificuldade;
    this.pacientesService.addpaciente(this.paciente);
    this.paciente = new PacientesClassCreate;
    this.listarPacientes()
  }

  listarPacientes() {
    this.pacientesService.getPacientes().subscribe(dados => this.listapacientes = dados)
  }

  addProfissional(_nome: string, _especializacao: string) {
    this.profissional.nome = _nome;
    this.profissional.especializacao = _especializacao;
    this.profissionaisService.addprofissional(this.profissional);
    this.profissional = new ProfissionalClassCreate;
    this.listarProfissionais()
  }

  listarProfissionais() {
    this.profissionaisService.getProfissionais().subscribe(dados => this.listaprofissionais = dados)
  }
}
