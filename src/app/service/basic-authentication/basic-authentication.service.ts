import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) {

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return user === null ? false:true;
  }

  logout() {
    sessionStorage.removeItem('authenticatedUSer');
    sessionStorage.clear();
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser');
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser) {
      return sessionStorage.getItem('token');
    }
  }

  executeBasicAuthentication(username: string, password: string){

    let basicAuthenticationHeaders = 'Basic ' + window.btoa(username + ':' + password); //Base64 encoding
    let headers = new HttpHeaders({
      Authorization: basicAuthenticationHeaders
    })

    return this.http.get<AuthenticationBean>(environment.apiUrl +  'basicauth',
      {headers: headers}
      )
      .pipe(
        map(data=> {
          sessionStorage.setItem('authenticatedUser' , username);
          sessionStorage.setItem('token', basicAuthenticationHeaders);
          return data;
        })
      );
  }

}

export class AuthenticationBean {
  constructor(public message: string) {

  }
}
