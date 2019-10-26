import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(private http: HttpClient ) { }

getWelcomeMessage(username: string) : Observable<any> {
  //when we get result , what should we do.
  return this.http.get(environment.apiUrl +  'welcome/' + username, {responseType : 'text'});
//
// .pipe(map( data => {
//
//   })); used in rxjs version 6 above instead of map u have to use .pipe(map())
}
}
