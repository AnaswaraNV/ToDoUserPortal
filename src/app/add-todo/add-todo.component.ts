import { Component, OnInit } from '@angular/core';
import {TodoService} from "../service/todo-service/todo.service";
import {Todo} from "../model/todo";
import {HardcodedAuthenticationService} from "../service/hardcoded-authentication/hardcoded-authentication.service";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  todoList: Array<Todo>;
  constructor(private todoService: TodoService, private hardCodedAuthentication: HardcodedAuthenticationService) { }

  ngOnInit() {
    this.todoList = this.todoService.todoList;
    console.log(this.hardCodedAuthentication.username());
  }

}
