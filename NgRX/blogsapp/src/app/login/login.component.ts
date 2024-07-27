import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { AuthActions } from '../State/Actions/auth.actions';
import { errorSelector } from '../State/Selectors/auth.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{
  form!:FormGroup

  constructor(private fb:FormBuilder, private router:Router, private store :Store<AppState>){}
  ngOnInit(): void {
    this.form= this.fb.group({
      Email:this.fb.control(null, Validators.required),
      Password:this.fb.control(null, Validators.required)
    })
  }
  error$=this.store.select(errorSelector)
  onSubmit(){
  //  this.authService.loginUsers(this.form.value). subscribe(res=>{
  //      localStorage.setItem('token', res.token)
  //      this.router.navigate(['/blogs'])
  //  })

  this.store.dispatch(AuthActions.login({user:this.form.value}))
  }
}
