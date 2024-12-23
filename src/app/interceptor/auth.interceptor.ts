import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = localStorage.getItem('accessToken');
     console.log(accessToken, "accessToken>>>")
    let clonedRequest = request.clone({
      setHeaders: {
        Authorization: accessToken || ''  
      }
    });

    // clonedRequest = clonedRequest.clone({
    //   headers: clonedRequest.headers.delete('User-Agent')
    // });

    console.log(clonedRequest.headers , "console.log(clonedRequest.headers)");

    if (accessToken) {
      return next.handle(clonedRequest).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401 || error.status === 498) {
            this.router.navigate(['/account/login']);
            localStorage.removeItem('accessToken');
          }
          throw error;
        })
      );
    }

    return next.handle(request);
  }
}
