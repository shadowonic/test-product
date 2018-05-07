import { Component, OnInit, NgModule} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserData } from '../../types';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent  {

  constructor(private service: AuthService) { }
  user = new UserData('Hike', '123456');

  onSubmit() {
    this.service.registration(this.user);
  }
}
