import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { API, KEY, HEADERS } from '../config';

import { UserData, ILogged } from '../types';
import { Route, Router } from '@angular/router';
import { Observable, Subject, BehaviorSubject } from 'rxjs';


@Injectable()
export class AuthService {
    public isLogged = new BehaviorSubject<boolean>(!!localStorage.getItem('userToken'));
    constructor(private http: HttpClient, private router: Router) {
        console.log(1);

    }

    login(user): Promise<void> {
        const body = { userName: user.userName, password: user.password };
        return new Promise((resolve, reject) => {
            this.http.post<{ token: string }>(API + '/login', body, {
                observe: 'response'
            }).subscribe(
                ({ body: { token } }) => {
                    localStorage.setItem('userToken', token);
                    this.isLogged.next(true);
                    this.router.navigate(['']);
                    resolve();
                },
                err => reject(err)
            );
        });


    }
    logout() {
        localStorage.removeItem('userToken');
        this.isLogged.next(false);
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


