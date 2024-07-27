import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './Guards/auth.guard';
import { RegisterComponent } from './register/register.component';
import { AddAuthorsComponent } from './add-authors/add-authors.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'products', canActivate:[authGuard],children:[
        {path:'', component:ProductsComponent},
        {path:':id', component:ProductComponent}
    ]},
    {path:'register', component:RegisterComponent},
    {path:'authors/:id', component:AddAuthorsComponent},
    {path:"**", component:NotFoundComponent}// Wildcard Route
];
