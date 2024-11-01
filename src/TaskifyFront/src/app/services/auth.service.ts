import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { LoginRequest } from '../interfaces/login-reques';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthResponse } from '../interfaces/auth-response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public apiURL:string = environment.apiUrl;
  private tokenKey = 'token';
  constructor(private http:HttpClient) { }

  public LogIn(data:LoginRequest):Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.apiURL}Account/login`,data).pipe(
      tap((response) =>{
        if(response.isSuccess){
          localStorage.setItem(this.tokenKey,response.token);
        }
        return response;
      }),
      catchError(error => {
        console.error('Login failed:', error); // Log the error for debugging
        return throwError(() => new Error('Login failed')); // Re-throw the error
      })
  

    );

  }
}
