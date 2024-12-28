import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  user_id:any;
  baseurl = "https://2669-2405-201-4050-d08b-7347-632d-c4b7-d881.ngrok-free.app"
  paymentIds: any;
  constructor(private http:HttpClient) { }

  signup(data: any): Observable <any>{
    return this.http.post(this.baseurl + "/dev/user/v1/userRegister" , data);
  }

  login(data: any): Observable <any>{
    return this.http.post(this.baseurl + "/dev/user/v1/login" , data);
  }

  getProfile(): Observable <any>{
    return this.http.get(this.baseurl + "/dev/user/v1/user-profile");
  }

  getTutorProfile(): Observable <any>{
    return this.http.get(this.baseurl + "/dev/tutor/v1/tutor");
  }

  bookedTutor(data:any): Observable <any>{
    return this.http.post(this.baseurl + "/dev/tutor/v1/booked-tutor" , data);
  }

}
