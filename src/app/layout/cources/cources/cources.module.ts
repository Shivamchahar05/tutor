import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourcesRoutingModule } from './cources-routing.module';
import { CourcesComponent } from './cources.component';


@NgModule({
  declarations: [
    CourcesComponent
  ],
  imports: [
    CommonModule,
    CourcesRoutingModule
  ]
})
export class CourcesModule { }
