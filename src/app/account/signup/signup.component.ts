import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServicesService } from '../../services/ApiServices/api-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  registerForm: FormGroup;
  hidePassword: boolean = true;  
  hideConfirmPassword: boolean = true;  

  constructor(private fb: FormBuilder  ,  private signup: ApiServicesService, private route:Router) {
    this.registerForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z ]*$') // Name must contain only letters and spaces
        ]
      ],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{10}$') // Phone number pattern (10 digits)
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6) // Password must be at least 6 characters long
        ]
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6) // Confirm password must be at least 6 characters long
        ]
      ]
    }, { 
      validators: this.passwordMatcher('password', 'confirmPassword') 
    });
  }

  // Method to handle form submission
  onSubmit() {
    if (this.registerForm.invalid) {
      Object.values(this.registerForm.controls).forEach((control) => {
        control.markAsTouched();
      });
      return;
    } else {
      let form={
        "phoneNumber":this.registerForm.controls?.['phoneNumber'].value,
        "password":this.registerForm.controls?.['password'].value,
        "name":this.registerForm.controls?.['name'].value,
        "email":"chahar59shivam@gmail.com"
      }
      this.signup.signup(form).subscribe((res:any) => {
        console.log(res)
        if (res.success ==true) {
           this.route.navigate(['/account/login'])

        }
        if (res.code == 400) {
          // this.bar.openSnackBar(res.messages, 'close ', 'red-snackbar');
        }

      }, (err:any) => {

      })
      console.log('Form Submitted!', this.registerForm.value);
    }
  }

  // Toggle password visibility
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  // Toggle confirm password visibility
  toggleConfirmPasswordVisibility() {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }

  // Custom validator to check if password and confirm password match
  passwordMatcher(password: string, confirmPassword: string) {
    return (group: FormGroup) => {
      const passwordControl = group.controls[password];
      const confirmPasswordControl = group.controls[confirmPassword];

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors['mismatch']) {
        return;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ mismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }
}
