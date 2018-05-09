import { Component, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

import { IProduct } from '../../types';
import { ProductService } from '../../services/product.service';
import { API } from '../../config';

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
      this.products = data.products.map(item => (
        { ...item, imageURL: item.imageURL && API + item.imageURL || '/assets/images/no-product.png' }
      ));
    });
  }

  ngOnInit() {

  }

}
