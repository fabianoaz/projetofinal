import { Component, OnInit } from '@angular/core';
import { PacientesClass} from './pacientes';
import { PacientesService } from './pacientes.service';
import { PacientesClassCreate } from './pacientescreate';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  paciente: PacientesClassCreate = new PacientesClassCreate;
  listapacientes: PacientesClass[] = [];

  constructor(private service: PacientesService) { }

  ngOnInit(): void {
    this.paciente = new PacientesClassCreate;
    this.service.getPacientes().subscribe(dados => this.listapacientes = dados);
  }

  addPaciente(_nome: string, _idade: string, _condicao: string) {
    this.paciente.nome = _nome;
    this.paciente.idade = _idade;
    this.paciente.diagnostico = _condicao;
    this.service.addpaciente(this.paciente);
    this.paciente = new PacientesClass;
    this.listarPacientes()
  }

  listarPacientes() {
    this.service.getPacientes().subscribe(dados => this.listapacientes = dados)
  }

}
