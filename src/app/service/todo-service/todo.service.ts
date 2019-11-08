import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Todo} from "../../model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList = [
    {id : '1', description : 'Learn Canvas Painting', createdDate: new Date(), completed: true, username: 'Ana'},
    {id : '2', description : 'Be an expert in Java 8', createdDate: new Date(), completed: false, username: 'Ana'}
  ];

  constructor(private http: HttpClient) { }

  fetchTodos(username: string) : Observable<any> {
    //when we get result , what should we do.
    return this.http.get<Todo[]>(environment.apiUrl +  'todos', {responseType : 'json'});
  }

  addTodo(todo: Todo) {
    this.todoList.push(todo);
  }

}
