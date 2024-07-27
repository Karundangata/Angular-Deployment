import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Observable, Subscription, filter, map } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../Services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy, OnInit{

  form!:FormGroup
  error!:string

  mesage!:string

  constructor(private authService:AuthenticationService,  private router:Router , private fb:FormBuilder){}
  ngOnDestroy(): void {
   
  }

 

  ngOnInit(): void {
   this.form= this.fb.group({
    Email:this.fb.control(null, Validators.required),
    Password:this.fb.control(null, Validators.required)
   })
  }

  OnSubmit(){
    this.authService.loginUser(this.form.value).subscribe(
      res=>{
       localStorage.setItem('token', res.token)
        this.mesage=res.message
        if(res.token){
          this.router.navigate(['/products'])
        }
        // if(!res.isSuccess){
        //   this.error= res.message

        //   console.log(this.error);
          
        // }

       
      },
      
      err=>{

        console.log(err);
        
          this.error=err.error.message 
      }

    )
  }
}
