import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http:HttpClient) { }

  private readonly BASE_URL="http://localhost:4000/authors/"

  getAuthors():Observable<Author[]>{
      return this.http.get<Author[]>(this.BASE_URL)
  }

  getAuthor(Id:string):Observable<Author>{
    return this.http.get<Author>(this.BASE_URL+Id)
}
  postAuthor(Name:string):Observable<{message:string}>{
    return this.http.post<{message:string}>(this.BASE_URL, {Name})
  } 
  
  updateAuthor(Name:string, Id:string):Observable<{message:string}>{
    return this.http.patch<{message:string}>(this.BASE_URL+Id, {Name})
  }

}
