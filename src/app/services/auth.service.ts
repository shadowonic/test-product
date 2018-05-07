import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { API, KEY, HEADERS } from '../config';

import { UserData } from '../types';
import { Route, Router } from '@angular/router';


@Injectable()
export class AuthService {
    constructor(private http: HttpClient, private router: Router) { }
    login(user) {
        const body = { userName: user.userName, password: user.password };

        return this.http.post(API + '/login', body, {
            observe: 'response'
        }).subscribe(
            error => console.log('oops', error.statusText),
        );
    }
    registration(user) {
        const body = { userName: user.userName, password: user.password };
        return this.http.post(API + '/register', body, {
            observe: 'response'
        }).subscribe(
            res => {
                if (res.status === 200) {
                    this.router.navigate(['/login']);
                }
            },
    error => console.log('oops', error.statusText));
}
}


