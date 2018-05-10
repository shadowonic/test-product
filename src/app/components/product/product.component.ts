import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductService } from '../../services/product.service';
import { IProduct } from '../../types';
import { API } from '../../config';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public product: IProduct;
  public url = API;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    route.params.subscribe(params => {

      this.productService.getProductById(params['id']).subscribe(({ product }) => {
        this.product = { ...product, imageURL: product.imageURL && API + product.imageURL || '/assets/images/no-product.png' };
      });
    });
  }

  ngOnInit() {

  }
}
