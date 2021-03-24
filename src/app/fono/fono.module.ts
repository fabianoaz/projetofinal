import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FonoService } from './fono.service';



@NgModule({
  providers: [FonoService],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FonoModule { }
