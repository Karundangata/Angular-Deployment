import { Component, OnInit } from '@angular/core';
import { Blog } from '../Models/Blog';
import { BlogService } from '../Services/blog.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AppState } from '../State';
import { Store } from '@ngrx/store';
import { BlogActions } from '../State/Actions/blog.actions';
import { blogSelector } from '../State/Selectors/blogs.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.css'
})
export class SingleBlogComponent  implements OnInit{

  blog!:Blog
  constructor(private store:Store<AppState>, private route:ActivatedRoute){}
 
  ngOnInit(): void {
    this.route.params.subscribe((param:Params)=>{
      // this.blogService.getBlog(param['id']).subscribe(res=>{
      //   this.blog=res
      // })
      this.store.dispatch(BlogActions.getBlog({id:param['id']}))
      this.store.select(blogSelector).subscribe(blog=>{
        if(blog){
          this.blog=blog
        }
      })
    })
  }

}
