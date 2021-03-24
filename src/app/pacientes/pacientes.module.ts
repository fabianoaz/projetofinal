import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesService } from './pacientes.service';



@NgModule({
  providers: [PacientesService],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PacientesModule { }
