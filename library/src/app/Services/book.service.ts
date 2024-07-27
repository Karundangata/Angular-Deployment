import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../Models';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  private readonly BASE_URL='http://localhost:4000/books'

  getBooks():Observable<Book[]>{
    const token = localStorage.getItem('token')as string
    return this.http.get<Book[]>(this.BASE_URL, {
      
    })
  }
}
