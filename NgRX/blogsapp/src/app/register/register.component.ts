import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { AppState } from '../State';
import { Store } from '@ngrx/store';
import { AuthActions } from '../State/Actions/auth.actions';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent  implements OnInit{
  form!:FormGroup

  constructor(private fb:FormBuilder, private router:Router, private store:Store<AppState>){}

  ngOnInit(): void {
    this.form= this.fb.group({
      Name: this.fb.control(null, Validators.required),
      Email: this.fb.control(null, Validators.required),
      Password: this.fb.control(null, Validators.required)
    })
  }


  onSubmit(){
    // this.auth.registerUser(this.form.value).subscribe(res=>{
    //   this.router.navigate(['/login'])
    // })

    this.store.dispatch(AuthActions.register({user:this.form.value}))
  }

}
