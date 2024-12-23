import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ChooseComponent } from 'src/app/components/choose/choose.component';
import { RatingComponent } from 'src/app/components/rating/rating.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module/shared-module.module';
import { CourcesComponent } from 'src/app/components/cources/cources.component';
import { TestimonialComponent } from 'src/app/components/testimonial/testimonial.component';
import { CarouselModule } from 'ngx-bootstrap/carousel'; // Import the CarouselModule
import { HttpClientModule } from '@angular/common/http';
import { ApiServicesService } from 'src/app/services/ApiServices/api-services.service';
// import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    HomeComponent,
    ChooseComponent,
    RatingComponent,
    CourcesComponent,
    TestimonialComponent
  ],
  providers: [ApiServicesService],

  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModuleModule,
    CarouselModule,
    HttpClientModule
    // NgbCarouselModule
  ]
})
export class HomeModule { }
