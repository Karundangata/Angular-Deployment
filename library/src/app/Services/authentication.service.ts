import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddUser, LoginReq, LoginResponse, RegisterResponse } from '../Models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly Base_URL="http://localhost:4000/auth/"

  constructor(private http:HttpClient) { }

  registerUser(newUser:AddUser):Observable<RegisterResponse>{
      return this.http.post<RegisterResponse>(this.Base_URL+"register",newUser)
  }

  loginUser(user:LoginReq):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.Base_URL+'login', user)
  }
}
