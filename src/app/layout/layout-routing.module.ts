import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'cources',
        loadChildren: () => import('./cources/cources/cources.module').then(m => m.CourcesModule)
      },
      {
        path: 'instractors',
        loadChildren: () => import('./instractors/instractors.module').then(m => m.InstractorsModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: '',
        redirectTo: '/home',  
        pathMatch: 'full'     
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
