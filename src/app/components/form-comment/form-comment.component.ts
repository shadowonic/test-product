import { Component } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Comment } from '../../types';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-form-comment',
  templateUrl: './form-comment.component.html',
  styleUrls: ['./form-comment.component.scss']
})
export class FormCommentComponent {
  commentForm: FormGroup;
  starList: boolean[] = [true, true, true, true, true];
  rating: number;

  setStar(data: any) {
    this.rating = data + 1;
    for (let i = 0; i <= 4; i++) {
      if (i <= data) {
        this.starList[i] = false;
      } else {
        this.starList[i] = true;
      }
    }
    this.commentForm.patchValue({
      rate: this.rating
    });
  }
  constructor(private fb: FormBuilder, private commentService: CommentService, private route: ActivatedRoute) {
    this.createForm();
    route.params.subscribe(data => this.commentForm.patchValue({
      productID: data.id
    }));
  }
  createForm() {
    this.commentForm = this.fb.group({
      rate: null,
      body: ['', Validators.required],
      productID: [undefined, Validators.required]
    });
  }
  onSubmit() {
    this.commentService.postComment(this.commentForm);
  }

}

