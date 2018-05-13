import { Injectable, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import { API } from '../config';
import { Comment, IComment } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  postComment(commentForm) {

    return this.http.post(API + '/comment', commentForm.value,
      { headers: { 'Authorization': localStorage.getItem('userToken') } })
      .subscribe(
        res => console.log(res),
        error => console.error('oops', error.statusText));
  }
  postStar(commentForm) {
    console.log(commentForm.value);
    return this.http.post(API + '/rate', commentForm.value, {
      headers: {
        'Authorization': localStorage.getItem('userToken'),
      }
    }).subscribe(
      res => console.log(res),
      err => console.error(err.errorText));
  }
  getCommentById(id): Observable<{ comments: IComment []}> {
    return this.http.get<{ comments: IComment []}>(`${API}/comment`, {
      responseType: 'json',
      headers: {
        'Authorization': localStorage.getItem('userToken'),
        'X-productID': `${id}`
      }
    });
  }
}

