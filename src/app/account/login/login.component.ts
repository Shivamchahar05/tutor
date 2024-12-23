import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/services/ApiServices/api-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword: boolean = true;  // Variable to toggle password visibility

  constructor(private fb: FormBuilder , private route:Router ,  private signIn: ApiServicesService,) {
    // Create the form group and add validators
    this.loginForm = this.fb.group({
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
          Validators.minLength(6) 
        ]
      ]
    });
  }

  // Method to handle form submission
  onSubmit() {
    if (this.loginForm.invalid) {
      Object.values(this.loginForm.controls).forEach((control) => {
        control.markAsTouched();
      });
     
      return;
    } else {
      this.signIn.login(this.loginForm.value).subscribe((res:any) => {
        console.log(res)
        if (res.success ==true) {
          this.route.navigate(['/home'])
          localStorage.setItem('accessToken',res.data.accessToken)
        }
        if (res.code == 400) {
          // this.bar.openSnackBar(res.messages, 'close ', 'red-snackbar');
        }

      }, (err:any) => {

      })
       
    }

    console.log('Form Submitted!', this.loginForm.value);
  }

  // Toggle password visibility
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
