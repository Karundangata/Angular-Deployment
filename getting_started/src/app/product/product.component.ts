import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../Models/Product';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../Pipes/filter.pipe';
import { ShortenDescription } from '../Pipes/ShortenDescription';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FilterPipe,ShortenDescription],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnChanges,
 AfterContentInit, AfterContentChecked, 
 AfterViewInit, AfterViewChecked, DoCheck, OnDestroy{
@Input() products!:Product[]

constructor(){
  console.log("Constructor is called!!!");
  // the property was created and initialized with the default of the datatype / value given
}
ngOnInit(): void {
  /// perfect place to initialize any property
  console.log("On Init  is called!!!");
}
ngOnChanges(changes: SimpleChanges): void {
  // lifecycle method that deals with changes of our bound input
  // coming from the parent 
  console.log("On changes is Called ")
  console.log(changes);
}

ngDoCheck(): void {
  console.log("NgCheck is Called ")
}

ngAfterContentInit(): void {
  console.log("AfterContentInit is Called ")
}
ngAfterContentChecked(): void {
  console.log("AfterContentChecked is Called ")
}

ngAfterViewInit(): void {
  console.log("AfterViewInit is Called ")
}
ngAfterViewChecked(): void {
  console.log("AfterViewChecked is Called ")
}

ngOnDestroy(): void {
  ///cleanups
  console.log(" On Destroy Called");
  
}


}
