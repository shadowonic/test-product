import { Component, OnInit, Input } from '@angular/core';

import { ProductService } from '../product.service';
import { IProduct } from '../types';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent {
  public products: IProduct[];
  constructor(
    private productService: ProductService
  ) {
    productService.getProduct().subscribe((data) => {
      this.products = data.products;
    });
  }
}



