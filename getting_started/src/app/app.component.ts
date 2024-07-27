import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddPeopleComponent } from './add-people/add-people.component';
import { DisplayComponent } from './display/display.component';
import { CommonModule } from '@angular/common';
import { Product } from './Models/Product';
import { ShortenDescription } from './Pipes/ShortenDescription';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './Pipes/filter.pipe';
import { ProductComponent } from './product/product.component';
import { DisplayProductsComponent } from './display-products/display-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ChangeBackgroundDirective } from '../Directives/changeBackground.directive';
import { ChangeBgDirective } from '../Directives/change-bg.directive';
import { HoverDirective } from '../Directives/hover.directive';
import { OurIfDirective } from '../Directives/our-if.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HoverDirective, OurIfDirective, ChangeBgDirective,ChangeBackgroundDirective, FormsModule, CommonModule,DisplayProductsComponent,AddProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

condition=false

}
