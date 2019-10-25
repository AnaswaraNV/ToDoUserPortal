import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  invalidCredentialMessage = 'Invalid Credentials';
  invalidCredentials = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log('username ' + this.username);
    console.log('password' + this.password);
    if(this.username === 'abc' && this.password === 'abc') {
      this.invalidCredentials = false;
      //navigate to welcome , if login success
      this.router.navigateByUrl('/welcome/' + this.username);
    } else {
      this.invalidCredentials = true;
    }
  }
}
