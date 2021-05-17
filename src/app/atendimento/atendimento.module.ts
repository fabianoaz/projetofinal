import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtendimentoService } from './atendimento.service';



@NgModule({
  providers: [AtendimentoService],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AtendimentoModule { }
