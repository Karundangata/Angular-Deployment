import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products=[
    {
      id:1,
      title:"Mouse "
    },  {
      id:2,
      title:"Keyboard "
    },
    {
      id:3,
      title:"Monitor "
    }
    ,  {
      id:4,
      title:"Laptop "
    }
  ]
}
