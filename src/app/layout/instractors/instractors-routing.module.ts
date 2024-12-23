import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstractorsComponent } from './instractors.component';

const routes: Routes = [
  {
    path:"" , component:InstractorsComponent, pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstractorsRoutingModule { }
