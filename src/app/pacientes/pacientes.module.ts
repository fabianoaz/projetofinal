import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesService } from './pacientes.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  providers: [PacientesService],
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class PacientesModule { }
