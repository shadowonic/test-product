import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private isLogged: boolean;
  constructor(private authService: AuthService) {
    this.authService.isLogged.subscribe(isLogged => {
      this.isLogged = isLogged;
    });
  }
  logout() {
    this.authService.logout();

  }

  ngOnInit() {
  }

}
