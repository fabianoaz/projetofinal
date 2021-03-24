import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FonoComponent } from './fono/fono.component';
import { PsicomotricidadeComponent } from './psicomotricidade/psicomotricidade.component';
import { EscolaregularComponent } from './escolaregular/escolaregular.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FonoComponent,
    PsicomotricidadeComponent,
    EscolaregularComponent,
    HomepageComponent,
    PacientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
