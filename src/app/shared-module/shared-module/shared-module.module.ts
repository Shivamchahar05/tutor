import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { FooterComponent } from './footer.component';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    FooterComponent  
  ]
})
export class SharedModuleModule { }
