import { Component, OnInit } from '@angular/core';
import {HardcodedAuthenticationService} from "../service/hardcoded-authentication/hardcoded-authentication.service";
import {BasicAuthenticationService} from "../service/basic-authentication/basic-authentication.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  // isUSerLoggerdIn: boolean = false;
  isToggle: boolean = false;
  constructor(private basicAuthService: BasicAuthenticationService) { }

  ngOnInit() {
    // this.isUSerLoggerdIn = this.hardcoddedAuthenticationService.isUserLoggedIn();
  }

  toggle() {
    this.isToggle = true;
  }
}
