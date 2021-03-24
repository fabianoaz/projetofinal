import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscolaregularComponent } from './escolaregular/escolaregular.component';
import { FonoComponent } from './fono/fono.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PsicomotricidadeComponent } from './psicomotricidade/psicomotricidade.component';

const routes: Routes = [
  {path: 'homepage', redirectTo: '/', pathMatch: 'full'},
  {path: 'fono',component: FonoComponent},
  {path: 'escolaregular',component: EscolaregularComponent},
  {path: 'psicomotricidade',component: PsicomotricidadeComponent},
  {path: 'pacientes',component: PacientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
