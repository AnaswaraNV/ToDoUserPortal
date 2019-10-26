import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username , password){
    console.log('username ' + username);
    console.log('password' + password);

    console.log('before ' + this.isUserLoggedIn());
    if(username === 'abc' && password === 'abc') {
      sessionStorage.setItem('authenticatedUser' , username);
      console.log('after ' + this.isUserLoggedIn());
      return true;
    }
      return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    console.log('user ' + user);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUSer');
  }
}
