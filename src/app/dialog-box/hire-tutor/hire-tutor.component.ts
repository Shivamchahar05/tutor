import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Data, Router } from '@angular/router';
import { ApiServicesService } from 'src/app/services/ApiServices/api-services.service';

@Component({
  selector: 'app-hire-tutor',
  templateUrl: './hire-tutor.component.html',
  styleUrls: ['./hire-tutor.component.scss']
})
export class HireTutorComponent {
  hireForm!: FormGroup;
  tutor: any; 
  filteredSubjects: string[] = [];
  selectedSubjects: any[] = [];  

  readonly dialogRef = inject(MatDialogRef<HireTutorComponent>);

  readonly data = inject<Data>(MAT_DIALOG_DATA);
  
  constructor(private router: Router , private tutorBooking:ApiServicesService) {}


  ngOnInit(): void {
    this.tutor=this.data
    // Define the form and its controls with validations
    this.hireForm = new FormGroup({
      studentName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      studentPhone: new FormControl('', [Validators.required, Validators.pattern('^\\+?\\d{10,15}$')]), // phone validation
      studentClass: new FormControl('', Validators.required),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required)
    });
  }


  onCancelClick(){
    this.dialogRef.close();

  }
  // Form submit method
  onSubmit() {
    if (this.hireForm.valid) {
    let bookingData={
      "studentName":this.f['studentName'].value,
      "studentPhone":this.f['studentPhone'].value.toString(),
      "studentClass":this.f['studentClass'].value,
      "name":this.f['name'].value,
      "email":this.f['email'].value,
      "subject":this.selectedSubjects,
      "tutor":this.data['_id'],
      "sessionDate": new Date()
    }
    console.log(bookingData, "bookingData")
     
        this.tutorBooking.bookedTutor(bookingData).subscribe((res:any) => {
          console.log(res)
          if (res.success ==true) {
            this.dialogRef.close();

          }
          if (res.code == 400) {
          
            // this.bar.openSnackBar(res.messages, 'close ', 'red-snackbar');
          }
    
        }, (err:any) => {
         
        })

     let booked={
      userDetails:this.hireForm.value,
      tutorDeatils:this.data
     }
      console.log('Form Submitted:', booked);

      return;
    } else {
      Object.values(this.hireForm.controls).forEach((control) => {
        // console.group(this.hireForm.controls)
        control.markAsTouched();
      });
      console.log('Form is invalid');
    }
  }


  onClassChange(event: any) {
    const selectedClass = event.target.value;
    const selectedClassObj = this.tutor.classes.find((classItem:any) => classItem.className === selectedClass);
    
    if (selectedClassObj) {
      this.filteredSubjects = selectedClassObj.subjects;
      this.selectedSubjects=[]
    }
  }

  onSubjectChange(event: any) {
    const selectedValues = Array.from(event.target.selectedOptions, (option: any) => option.value);
    this.selectedSubjects.push(selectedValues);  
  }


  // Helper method to get controls for easier validation checks in the template
  get f() {
    return this.hireForm.controls;
  }
}
