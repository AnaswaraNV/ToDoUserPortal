import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {BasicAuthenticationService} from "../basic-authentication/basic-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private basicAuthService: BasicAuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if(this.basicAuthService.isUserLoggedIn() === true) {
      return true;
    }

    this.router.navigateByUrl('/login');
    return false;
  }
}
