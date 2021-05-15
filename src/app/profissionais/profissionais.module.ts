import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfissionaisService } from './profissionais.service';



@NgModule({
  providers: [ProfissionaisService],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProfissionaisModule { }
