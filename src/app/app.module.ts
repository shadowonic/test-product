import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductItemsComponent } from './product-items/product-items.component';

import { ProductService } from './product.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductItemsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent,
  ]
})
export class AppModule { }
