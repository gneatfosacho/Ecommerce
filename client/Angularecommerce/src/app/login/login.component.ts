//Logincomponent.ts - Type Script file that contains code to render Login feature to elearning application

//including the required files and services
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';

//component specifc details 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

//exporting Login Component 
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  btnDisabled = false;

  constructor(
    private router: Router,
    private rest: RestApiService,
    private data: DataService,
  ) {}

  ngOnInit() {}

  validate() {
    if (this.email) {
      if (this.password) {
        return true;
      } else {
        this.data.error('Password is not entered');
      }
    } else {
      this.data.error('Email is not entered.');
    }
  }

  async login() {
    this.btnDisabled = true;
    try {
      if (this.validate()) {
        const data = await this.rest.post(
          'http://localhost:3030/api/accounts/login',
          {
            email: this.email,
            password: this.password,
          },
        );
        if (data['success']) {
          localStorage.setItem('token', data['token']);
          await this.data.getProfile();
          this.router.navigate(['/']);
        } else {
          this.data.error(data['message']);
        }
      }
    } catch (error) {
      this.data.error(error['message']);
    }
    this.btnDisabled = false;
  }
}
