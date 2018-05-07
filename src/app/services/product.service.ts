import { Injectable } from '@angular/core';

import { IProduct } from '../types';
import { API, KEY, HEADERS } from '../config';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public headers = new HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers.set('Authorization', KEY);
  }
  getProduct(): Observable<{ products: IProduct[] }> {
    return this.http.get<{ products: IProduct[] }>(API + '/product', {
      headers: HEADERS,
      responseType: 'json',
      withCredentials: true
    });
  }
}
