import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstractorsRoutingModule } from './instractors-routing.module';
import { InstractorsComponent } from './instractors.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HireTutorComponent } from 'src/app/dialog-box/hire-tutor/hire-tutor.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    InstractorsComponent,
    HireTutorComponent
  ],
  imports: [
    CommonModule,
    InstractorsRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ]
})
export class InstractorsModule { }
