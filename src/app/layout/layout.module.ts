import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../common-component/header.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ApiServicesService } from '../services/ApiServices/api-services.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  providers: [ApiServicesService],

  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatTabsModule,
    HttpClientModule
  ]
})
export class LayoutModule { }
