import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {BasicAuthenticationService} from "../basic-authentication/basic-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(private basicAuthService: BasicAuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let username = 'user';
    // let password = 'password';
    // let basicAuthHeaders = 'Basic ' + window.btoa(username + ':' + password); //Base64 encoding

    let basicAuthHeaders = this.basicAuthService.getAuthenticatedToken();
    let authenticatedUser = this.basicAuthService.getAuthenticatedUser();

    if(basicAuthHeaders && authenticatedUser) {
      req = req.clone({
        setHeaders: {
          Authorization : basicAuthHeaders
        }
      })
    }
    return next.handle(req);
  }
}
