import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddUser, LoginResponse, LoginUser, RegisterResponse } from '../Models/Auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient) { }


  private readonly Base_URL ='http://localhost:4005/auth/'
  
  loginUsers(user:LoginUser):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.Base_URL+'login', user)
  }

  registerUser(newUser:AddUser):Observable<RegisterResponse>{
    return this.http.post<RegisterResponse>(this.Base_URL+'register', newUser)
  }
}
