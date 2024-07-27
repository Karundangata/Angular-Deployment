import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Product } from '../Models/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-products.component.html',
  styleUrl: './display-products.component.css'
})
export class DisplayProductsComponent implements OnInit {

  products!:Product[]
  constructor(private ps:ProductService){}

  ngOnInit(): void {
    this.products=this.ps.getProducts()
  }
  deleteProduct(Id:number){
    this.ps.deleteProduct(Id)
  }
}
