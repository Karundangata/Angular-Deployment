import { Component, OnInit } from '@angular/core';
import { BlogService } from '../Services/blog.service';
import { Blog } from '../Models/Blog';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Toggle } from '../State/Actions/dummy.actions';
import { AppState } from '../State';
import { dummyparagraphSelector } from '../State/Selectors/dummy.selector';

@Component({
  selector: 'app-my-blogs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './my-blogs.component.html',
  styleUrl: './my-blogs.component.css'
})
export class MyBlogsComponent implements OnInit {
  blogs:Blog[]=[]
  
  constructor(private blogServices:BlogService, private store:Store<AppState>){ }
  showParagraph$=this.store.select(dummyparagraphSelector)
  count$= this.store.select(state=>state.counter.count)
  onChange(){
    // this.showParagraph= !this.showParagraph
    this.store.dispatch(Toggle())
  }
  ngOnInit(): void {
    this.blogServices.getmyBlogs().subscribe(res=>{
      this.blogs=res
    })
  }

  onIncrement(){
      this.store.dispatch({type:'Increment'})
  }

  onDecrement(){
    this.store.dispatch({type:'Decrement'})
  }

  onReset(){
    this.store.dispatch({type:'Reset'})
  }
}
