import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { API, KEY, HEADERS } from './config';
import { IProduct } from './types';

@Injectable()

export class ProductService {
  public httpHeaders = new HttpHeaders();
  constructor(private http: HttpClient) {
    this.httpHeaders.set('Authorization', KEY);
  }

  getProduct(): Observable<{products: IProduct[]}> {
    return this.http.get<{products: IProduct[]}>(API + '/product', {
      headers: HEADERS,
      responseType: 'json',
      withCredentials: true
    });
  }

}
