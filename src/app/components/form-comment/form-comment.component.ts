import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Comment, FormRating } from '../../types';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-form-comment',
  templateUrl: './form-comment.component.html',
  styleUrls: ['./form-comment.component.scss']
})
export class FormCommentComponent implements OnInit {
  commentForm: FormGroup;
  starList: boolean[] = [true, true, true, true, true];
  rating: number;
  ratingForm: FormGroup;
  private idRoute: string;

  constructor(private fb: FormBuilder,
    private commentService: CommentService,
    private route: ActivatedRoute) {
    this.createForm();
    route.params.subscribe(data => {
      this.commentForm.patchValue({
        productID: data.id
      });
      this.ratingForm.patchValue({
        productID: data.id
      });
    }
    );
  }
  setStar(data: any) {
    this.rating = data + 1;
    for (let i = 0; i <= 4; i++) {
      if (i <= data) {
        this.starList[i] = false;
      } else {
        this.starList[i] = true;
      }
    }
    this.ratingForm.patchValue({
      rate: this.rating
    });
    this.commentService.postStar(this.ratingForm);
  }
  createForm() {
    this.commentForm = this.fb.group({
      rate: null,
      body: ['', Validators.required],
      productID: [undefined, Validators.required]
    });
    this.ratingForm = this.fb.group({
      rate: null,
      productID: undefined
    });
  }
  onSubmit() {
    this.commentService.postComment(this.commentForm);
    this.commentService.getCommentById(this.idRoute);
  }
  ngOnInit() {
    this.route.params.subscribe(params => this.idRoute = params['id']);
    console.log(this.route.params);
    console.log(this.idRoute);
  }
}

