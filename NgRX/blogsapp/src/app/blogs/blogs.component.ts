import { Component, OnInit } from '@angular/core';
import { Blog } from '../Models/Blog';
import { BlogService } from '../Services/blog.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { BlogActions } from '../State/Actions/blog.actions';
import { blogsSelector } from '../State/Selectors/blogs.selector';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit {


constructor(private store:Store<AppState>){}
blogs$= this.store.select(blogsSelector)
ngOnInit(): void {
  // this.blogServices.getAllBlogs().subscribe(res=>{
  //   console.log(res);
  
  //   this.blogs=res
  // })

  this.store.dispatch(BlogActions.get())
}
}
