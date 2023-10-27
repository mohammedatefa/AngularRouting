import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { ContactComponent } from './Component/contact/contact.component';
import { ProductsComponent } from './Component/products/products.component';
import { ProductCardComponent } from './Component/product-card/product-card.component';
import { NotfoundpageComponent } from './Component/notfoundpage/notfoundpage.component';
import { ProductDetailesComponent } from './Component/product-detailes/product-detailes.component';
import { AddproductComponent } from './Component/addproduct/addproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    ProductCardComponent,
    NotfoundpageComponent,
    ProductDetailesComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
