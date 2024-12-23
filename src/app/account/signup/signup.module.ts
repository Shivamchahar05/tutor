import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';  // Import MatIconModule
import { HttpClientModule } from '@angular/common/http';
import { ApiServicesService } from 'src/app/services/ApiServices/api-services.service';


@NgModule({
  declarations: [
    SignupComponent
  ],
  providers: [ApiServicesService],
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule
  ]
})
export class SignupModule { }
