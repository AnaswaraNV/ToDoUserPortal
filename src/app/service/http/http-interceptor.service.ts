import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let username = 'user';
    let password = 'password';
    let basicAuthHeaders = 'Basic ' + window.btoa(username + ':' + password); //Base64 encoding

    req = req.clone({
      setHeaders: {
        Authorization : basicAuthHeaders
      }
    })
    return next.handle(req);
  }
}
