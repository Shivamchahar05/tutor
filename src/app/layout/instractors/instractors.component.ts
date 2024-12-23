import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HireTutorComponent } from 'src/app/dialog-box/hire-tutor/hire-tutor.component';
import { ApiServicesService } from 'src/app/services/ApiServices/api-services.service';
// import { teachers } from 'src/app/utils/teachers/teachers';

@Component({
  selector: 'app-instractors',
  templateUrl: './instractors.component.html',
  styleUrls: ['./instractors.component.scss']
})
export class InstractorsComponent {
  Tutors:any 
  readonly dialog = inject(MatDialog);

  selectedClass: string | null = null;
  selectedClassDetails: any | null = null;

  constructor(private router: Router , private tutor:ApiServicesService) {}

  ngOnInit(): void {
    this.tutor.getTutorProfile().subscribe((res:any) => {
      console.log(res)
      if (res.success ==true) {
        this.Tutors= res.data
        // this.username= res.data.name
      }
      if (res.code == 400) {
      
        // this.bar.openSnackBar(res.messages, 'close ', 'red-snackbar');
      }

    }, (err:any) => {
     
    })
  }


  onClassChange(teacher: any): void {
    // Find the selected class details from the teacher's classes based on selectedClass
    const classDetails = teacher.classes.find((classItem:any) => classItem._id === this.selectedClass);
    if (classDetails) {
      this.selectedClassDetails = classDetails;
    }
  }
 
  hireTutor(teacher:any): void {
    const dialogRef = this.dialog.open(HireTutorComponent, {
      data: teacher,
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        // this.animal.set(result);
      }
    });
  }

  isClassGreaterThan8(classDetails: any): boolean {
    const className = classDetails.className;
    const grade = parseInt(className.split(' ')[0], 10);
    return grade > 8;
  }
}
