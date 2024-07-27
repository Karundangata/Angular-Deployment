import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
   id!:string
   product!:any
   constructor(private route:ActivatedRoute, private ps:ProductService){}

   ngOnInit(): void {
     this.route.params.subscribe((params:Params)=>{
      this.id=params['id']
      this.product= this.ps.products.find(p=>p.id===+params['id'])
     })
   }
}
