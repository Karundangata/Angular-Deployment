import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private products:Product[]=[ {
    Id:1,
    Name:"Laptop",
    Description:"Lenovo Laptop with 16 Gb RAM ",
    price:3000
  },

  {
    Id:2,
    Name:"Flash Disk",
    Description:" SanDisk Flash ",
    price:30
  },
  {
    Id:3,
    Name:" HP Mouse",
    Description:"Mouse",
    price:30
  }]

  addProduct(newproduct:Product){
    this.products.push(newproduct)
  }

  getProducts(){
    return this.products;
  }

  getProduct(id:number){
    return this.products.find(x=>x.Id===id)
  }

  deleteProduct(id:number){
    let index= this.products.findIndex(x=>x.Id===id)
    if(index>=0){
      this.products.splice(index,1)
    }
  }

  updateProduct(id:number, updatedProduct:Product){
    let index= this.products.findIndex(x=>x.Id===id)
    if(index>=0){
      this.products[index]=updatedProduct
    }
  }
}
