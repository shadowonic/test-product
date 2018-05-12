import { Injectable, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import { API } from '../config';
import { Comment } from '../types';

@Injectable({
  providedIn: 'root'
})
export class CommentService implements OnInit {

  constructor(private http: HttpClient) {
  }

  postComment(commentForm) {

    return this.http.post(API + '/comment', commentForm.value,
      { headers: { 'Authorization': localStorage.getItem('userToken') } })
      .subscribe(
        res => console.log(res),
        error => console.error('oops', error.statusText));
  }
  ngOnInit() {
  }
}


