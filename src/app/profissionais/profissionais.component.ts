import { Component, OnInit } from '@angular/core';
import { ProfissionalClass } from './profissionais';
import { ProfissionaisService } from './profissionais.service';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.css']
})
export class ProfissionaisComponent implements OnInit {

  profissional: ProfissionalClass = new ProfissionalClass;
  listaprofissionais: ProfissionalClass[] = [];

  constructor(private service: ProfissionaisService) { }

  ngOnInit(): void {
    this.profissional = new ProfissionalClass;
    this.service.getProfissionais().subscribe(dados => this.listaprofissionais = dados);
  }

  listarProfissionais() {
    this.service.getProfissionais().subscribe(dados => this.listaprofissionais = dados)
  }

}
