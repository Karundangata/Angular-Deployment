import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  form!:FormGroup

 constructor(private fb:FormBuilder, private auth:AuthenticationService){}
  ngOnInit(): void {
    this.form= this.fb.group({
      Name:this.fb.control(null, Validators.required),
      Email:this.fb.control(null, Validators.required),
      Password:this.fb.control(null, Validators.required)
    })
  }

  onSubmit(){
    this.auth.registerUser(this.form.value).subscribe(res=>{
      console.log(res.Message);
      
    })
  }
}
