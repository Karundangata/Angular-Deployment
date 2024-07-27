import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { BlogService } from '../Services/blog.service';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { BlogActions } from '../State/Actions/blog.actions';

@Component({
  selector: 'app-add-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './add-blog.component.html',
  styleUrl: './add-blog.component.css'
})
export class AddBlogComponent  implements OnInit{
form!:FormGroup
  constructor(private fb:FormBuilder, private store:Store<AppState>, private router:Router){}
  ngOnInit(): void {
    this.form= this.fb.group({
      Heading:this.fb.control(null, Validators.required),
      Description:this.fb.control(null, Validators.required),
      ImageUrl:this.fb.control(null, Validators.required)
    })
  }

  onSubmit(){
    // this.blogService.addBlog(this.form.value).subscribe(res=>{
    //   console.log(res.message);
    //   this.router.navigate(['/blogs'])
    // })

    this.store.dispatch(BlogActions.add({newblog:this.form.value}))
  }
}
