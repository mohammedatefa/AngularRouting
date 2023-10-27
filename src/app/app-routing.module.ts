import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { ProductsComponent } from './Component/products/products.component';
import { ContactComponent } from './Component/contact/contact.component';
import { NotfoundpageComponent } from './Component/notfoundpage/notfoundpage.component';
import { ProductDetailesComponent } from './Component/product-detailes/product-detailes.component';
import { AddproductComponent } from './Component/addproduct/addproduct.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent,title:"Pinocchio-Home"},
  {path:"about",component:AboutComponent,title:"Pinocchio-About"},
  {path:"products",component:ProductsComponent,title:"Pinocchio-Products"},
  {path:"contact",component:ContactComponent,title:"Pinocchio-Contact"},
  {path:"product",component:ProductDetailesComponent,title:"Pinocchio-Add-Products",children:[
    {path:"addproduct",component:AddproductComponent}
  ]},
  {path:"**",component:NotfoundpageComponent,title:"Not-Found-Pinocchio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
