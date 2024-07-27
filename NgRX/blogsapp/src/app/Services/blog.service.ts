import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddBlog, AddResponse, Blog } from '../Models/Blog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private readonly BASE_URL='http://localhost:4005/blogs/'
  constructor(private http:HttpClient) { }

  addBlog(newBlog:AddBlog):Observable<AddResponse>{
    return this.http.post<AddResponse>(this.BASE_URL, newBlog)
  }

  getAllBlogs():Observable<Blog[]>{
    return this.http.get<Blog[]>(this.BASE_URL)
  }

  getmyBlogs():Observable<Blog[]>{
    return this.http.get<Blog[]>(this.BASE_URL+'/myblogs')
  }

  getBlog(Id:string):Observable<Blog>{
    return this.http.get<Blog>(this.BASE_URL+Id)
  }

}
