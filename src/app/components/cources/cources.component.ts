import { Component } from '@angular/core';
import { courses } from './../../utils/cources/cources';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.scss']
})
export class CourcesComponent {
  courses = courses; 
}
