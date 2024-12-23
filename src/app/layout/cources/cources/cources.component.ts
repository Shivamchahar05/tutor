import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { courses } from 'src/app/utils/cources/cources';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.scss']
})
export class CourcesComponent {
  courses = courses; 
  constructor(private router: Router) {}

  hiretutor(){
   this.router.navigate(['/instractors'])
  }

}
