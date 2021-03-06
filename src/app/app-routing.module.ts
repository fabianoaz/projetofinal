import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscolaregularComponent } from './escolaregular/escolaregular.component';
import { AtendimentoComponent } from './atendimento/atendimento.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PacientemodalComponent } from './pacientemodal/pacientemodal.component';
import { RelatorioComponent } from './relatorio/relatorio.component';

const routes: Routes = [
  {path: 'homepage', redirectTo: '/', pathMatch: 'full'},
  {path: 'atendimento',component: AtendimentoComponent},
  {path: 'escolaregular',component: EscolaregularComponent},
  {path: 'pacientes',component: PacientesComponent},
  {path: 'pacientemodal',component: PacientemodalComponent},
  {path: 'relatorio',component: RelatorioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
