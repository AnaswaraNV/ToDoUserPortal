import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Todo} from "../../model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  fetchTodos(username: string) : Observable<any> {
    //when we get result , what should we do.
    return this.http.get<Todo[]>(environment.apiUrl +  'todos', {responseType : 'json'});
  }

}
