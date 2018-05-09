import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { UserData } from '../../types';
import { Route } from '@angular/compiler/src/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private isLogged: boolean;
  constructor(private authService: AuthService) {
    this.authService.isLogged.subscribe(isLogged => {
      this.isLogged = isLogged;
    });
  }
  user = new UserData('Hike', '123456');

  onSubmit() {
    this.authService.login(this.user)
      .catch(err => console.error(err));
       console.log(this.isLogged);
  }
}
