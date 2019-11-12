import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HardcodedAuthenticationService} from "../service/hardcoded-authentication/hardcoded-authentication.service";
import {BasicAuthenticationService} from "../service/basic-authentication/basic-authentication.service";

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

  constructor(private router: Router,
              private basicAuthService: BasicAuthenticationService) {
  }

  ngOnInit() {
  }

  // login() {
  //   console.log('username ' + this.username);
  //   console.log('password' + this.password);
  //   if (this.hardCodedAuthenticationService.authenticate(this.username, this.password)) {
  //     this.invalidCredentials = false;
  //     //navigate to welcome , if login success
  //     this.router.navigateByUrl('/welcome/' + this.username);
  //   } else {
  //     this.invalidCredentials = true;
  //   }
  // }

  handleBasicAuthLogin() {
    console.log('username ' + this.username);
    console.log('password' + this.password);
    // if(this.basicAuthSerive.executeBasicAuthentication(this.username, this.password)) {
    this.basicAuthService.executeBasicAuthentication(this.username, this.password)
      .subscribe((result) => {
        console.log(result);
        this.invalidCredentials = false;
        //navigate to welcome , if login success
        this.router.navigateByUrl('/welcome/' + this.username);
      }), error => {
      console.log(error);
      this.invalidCredentials = true;
    };
  }
}
