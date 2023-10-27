import { Component } from '@angular/core';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productlist:Product[]=[
    {title:"Zaza $ Gargeer",description:"two frindes face trakee he is evel man and solve the secrets",imgurl:"assets/images/4.jpg"},
    {title:"Bakar",description:"this is historical charachter in egyption childhold",imgurl:"assets/images/3.jpeg"},
    {title:"Snohe",description:"story of three friends in the old history of egypt",imgurl:"assets/images/5.jpg"},
    {title:"Suber Henide",description:"henide detective to solve egyptions problems",imgurl:"assets/images/7.jpeg"},
    {title:"Semsem World",description:"this is the best cartoon to childerns",imgurl:"assets/images/8.jpeg"},
    {title:"Sabek&Lahek",description:"this is two boys play  with cars game ",imgurl:"assets/images/2.jpg"},
    {title:"Conan",description:"the greet detictive for ever in child body",imgurl:"assets/images/2.jpeg"},
    {title:"Essam with lamb",description:"boy need to achive what he need by using lamb",imgurl:"assets/images/6.jpeg"},
  ]
}
