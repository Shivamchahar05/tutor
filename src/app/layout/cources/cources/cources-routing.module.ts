import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourcesComponent } from './cources.component';

const routes: Routes = [
  {
    path:"" , component:CourcesComponent, pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourcesRoutingModule { }
