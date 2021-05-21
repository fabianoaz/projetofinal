import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtendimentoComponent } from './atendimento/atendimento.component';
import { EscolaregularComponent } from './escolaregular/escolaregular.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfissionaisComponent } from './profissionais/profissionais.component';
import { PacientemodalComponent } from './pacientemodal/pacientemodal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AtendimentoComponent,
    EscolaregularComponent,
    HomepageComponent,
    PacientesComponent,
    ProfissionaisComponent,
    PacientemodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
