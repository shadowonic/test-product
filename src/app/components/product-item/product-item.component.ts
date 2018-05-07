import { Component, OnInit } from '@angular/core';

import { IProduct } from '../../types';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  public products: IProduct[];
  constructor(private service: ProductService) {
    this.service.getProduct().subscribe((data) => {
      console.log(data);
      this.products = data.products;
    });
  }

  ngOnInit() {

  }

}
