import { Component, OnInit } from '@angular/core';
import { ProfissionalClass } from '../profissionais/profissionais';
import { ProfissionaisService } from '../profissionais/profissionais.service';
import { ProfissionalClassCreate } from '../profissionais/profissionalcreate';
import { PacientesClass } from './pacientes';
import { PacientesService } from './pacientes.service';
import { PacientesClassCreate } from './pacientescreate';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css', '../styles/generic.style.css'],
  providers: [NgbAccordionConfig]
})
export class PacientesComponent implements OnInit {

  paciente: PacientesClassCreate = new PacientesClassCreate;
  pacienteClass: PacientesClass = new PacientesClass;
  listapacientes: PacientesClass[] = [];
  profissional: ProfissionalClassCreate = new ProfissionalClassCreate;
  listaprofissionais: ProfissionalClass[] = [];
  profissionaisSelecionados: string[] = []
  disabled = false;
  pacienteNome: string = "Selecionar paciente"
  pacienteId: string = ""
  existeProfissional: boolean = false
  checked: boolean = false

  constructor(private pacientesService: PacientesService, private profissionaisService: ProfissionaisService, config: NgbAccordionConfig) {
    config.closeOthers = true;
  }

  ngOnInit(): void {
    this.listarPacientes()
    this.paciente = new PacientesClassCreate;
    this.pacienteClass = new PacientesClass;
    this.profissional = new ProfissionalClassCreate;
    this.pacientesService.getPacientes().subscribe(dados => this.listapacientes = dados);
    this.profissionaisService.getProfissionais().subscribe(dados => this.listaprofissionais = dados);
  }

  addPaciente(_nome: string, _idade: string, _condicao: string, _faz: string, _dificuldade: string) {
    if (_nome == "" || _idade == "" || _condicao == "") {
      alert("Campos obrigatórios devem ser preenchidos!")
    }
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
    if (_nome == "" || _especializacao == "") {
      alert("Campos obrigatórios devem ser preenchidos!")
    }
    this.profissional.nome = _nome;
    this.profissional.especializacao = _especializacao;
    this.profissionaisService.addprofissional(this.profissional);
    this.profissional = new ProfissionalClassCreate;
    this.listarProfissionais()
  }

  listarProfissionais() {
    this.profissionaisService.getProfissionais().subscribe(dados => this.listaprofissionais = dados)
  }

  selecionarPaciente(_pacienteId: string, _pacienteNome: string) {
    this.pacientesService.getPacienteID(_pacienteId).subscribe(dados => this.pacienteClass = dados)
    this.pacienteNome = _pacienteNome//this.pacienteClass.nome
    this.pacienteId = this.pacienteClass._id
    console.log("LISTA ATUAL DE PROFISSIONAIS DO PACIENTE: " + this.pacienteClass.profissionalID)
  }

  esvaziaListaProfissional() {
    this.profissionaisSelecionados = []
  }

  selecionarProfissional(_id: string) {
    this.profissionaisSelecionados.push(_id)
    this.validaCheckProfissional(_id)
    console.log("selecionarProfissional: " + this.profissionaisSelecionados)
  }

  selecionarProfissional2(_checked: any, _id: string) {
    if (_checked == true) {
      this.validaCheckProfissional(_id)
    }

    if(_checked == false){
      console.log("Lista atual: " + this.profissionaisSelecionados)
      console.log("REMOVER O REGISTRO: " + _id + " DA LISTA") 
      let teste = this.profissionaisSelecionados.indexOf(_id)
      console.log("INDICE DO ITEM: " + teste)
      this.profissionaisSelecionados.splice(teste,1)
      console.log("LISTA ATUALIZADA: " + this.profissionaisSelecionados)
    }
    console.log("Parametro: " + _checked)
  }

  validaCheckProfissional(_id: string) {
    console.log("Lista Atual de Profissionais do Paciente: " + this.pacienteClass.profissionalID)
    this.profissionaisSelecionados = this.pacienteClass.profissionalID
    console.log("Lista de profissionais atualizada a partir do que já existe: " + this.profissionaisSelecionados)

    if (this.pacienteClass.profissionalID.includes(_id)) {
      alert("Profissional já associado ao paciente")
    } else {
      this.profissionaisSelecionados.push(_id)
      console.log("ID: " + _id + " NÃO existe foi adicionado")
      console.log("Lista atualizada: " + this.profissionaisSelecionados)
    }
  }

  associar() {
    console.log("Associar 'profissionaisSelecionados': " + this.profissionaisSelecionados)
    this.pacienteClass.profissionalID = this.profissionaisSelecionados
    console.log("Associar 'pacienteClass.profissionalID': " + this.pacienteClass.profissionalID)
    this.pacientesService.putAssociaPacienteProfissional(this.pacienteClass._id, this.pacienteClass)
  }

}
