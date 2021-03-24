import { Component, OnInit } from '@angular/core';
import { PacientesClass } from './pacientes';
import { PacientesService } from './pacientes.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

paciente: PacientesClass = new PacientesClass;
listapacientes: PacientesClass[] = [];

  constructor(private service: PacientesService) { }

  ngOnInit(): void {
    this.paciente = new PacientesClass;
    this.listapacientes = this.service.getPacientes();
  }

  addPaciente(_nome:string, _idade:string, _condicao:string, _condicao_tipo:string){
    this.paciente.id = Math.floor(Math.random() * 10000).toString();
    this.paciente.nome = _nome;
    this.paciente.idade = _idade;
    this.paciente.condicao = _condicao;
    this.paciente.condicao_tipo = _condicao_tipo;
    this.service.addpaciente(this.paciente);
    this.paciente = new PacientesClass;
  }

}
