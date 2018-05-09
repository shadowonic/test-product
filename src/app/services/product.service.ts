import { Injectable } from '@angular/core';

import { IProduct, Product } from '../types';
import { API } from '../config';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }
  getProduct(): Observable<{ products: IProduct[] }> {
    return this.http.get<{ products: IProduct[] }>(API + '/product', {
      responseType: 'json',
      withCredentials: true
    });
  }
  postProduct(product: Product) {
    console.log(product);
    const body = { title: product.title, image: product.image, text: product.text };
    console.log(body);

    return this.http.post<{ product: Product }>(API + '/product', body, {
      headers: { 'Authorization': localStorage.getItem('userToken') }
    }).subscribe(
      res => console.log(res),
      err => console.log((err))
    );
  }
}
