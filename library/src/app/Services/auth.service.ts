import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isLoggedIn=false;

  logout(){
    localStorage.clear()
  }

  getRole(){
    //backend will have a protected route takes nothing but based on token it will return the role.
  }

  showStatus(){
   const token =localStorage.getItem('token') as string
   if(token){
    this.isLoggedIn=true
    return true
   }

   this.isLoggedIn=false
   return false
  }
}
