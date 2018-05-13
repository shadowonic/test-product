import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductService } from '../../services/product.service';
import { IProduct, IComment } from '../../types';
import { API } from '../../config';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  public product: IProduct;
  public url = API;
  public comment: IComment[];

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private commentService: CommentService,
  ) {
    route.params.subscribe(params => {
      this.commentService.getCommentById(params['id']).subscribe((data) => {
        this.comment = data.comments;
      }
      );
      this.productService.getProductById(params['id']).subscribe(({ product }) => {
        this.product = { ...product, imageURL: product.imageURL && API + product.imageURL || '/assets/images/no-product.png' };
      });
    });
  }
}
