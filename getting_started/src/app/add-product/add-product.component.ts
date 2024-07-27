import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../Services/product.service';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div>
    <label> Product Name</label>
    <input type="text" [(ngModel)]="productName">

    <label> Product Description</label>
    <input type="text" [(ngModel)]="productDescription">

    <label> Product Price</label>
    <input type="text" [(ngModel)]="productPrice">
    <button (click)="addProduct()"> Add Product</button>
</div>
  `,
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  constructor(private ps:ProductService){}
  productName=''
  productDescription=''
  productPrice=''

  addProduct(){
    let product:Product={
        Id:this.ps.getProducts().length +1,
        Name:this.productName,
        Description:this.productDescription,
        price:+this.productPrice
    }
    this.ps.addProduct(product)
  }
}
