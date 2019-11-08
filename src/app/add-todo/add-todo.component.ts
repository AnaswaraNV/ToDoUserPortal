import { Component, OnInit } from '@angular/core';
import {TodoService} from "../service/todo-service/todo.service";
import {Todo} from "../model/todo";
import {HardcodedAuthenticationService} from "../service/hardcoded-authentication/hardcoded-authentication.service";
import {MatDatepickerInputEvent} from "@angular/material";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  todoList: Array<Todo>;
  id: number;
  description:string;
  completed: boolean;
  createdDate: Date;
  private checkoutForm: FormGroup;
  successMsg:boolean;
  
  constructor(private todoService: TodoService, private hardCodedAuthentication: HardcodedAuthenticationService) { }

  ngOnInit() {
    this.todoList = this.todoService.todoList;
    this.checkoutForm = new FormGroup({
      id: new FormControl(''),
      description: new FormControl(''),
      completed: new FormControl(''),
      createdDate: new FormControl('')
    });

    console.log(this.hardCodedAuthentication.username());
  }

  addEvent(change: string, $event: MatDatepickerInputEvent<Date>) {
    console.log('user picked date ' + $event.value);
  }

  onSubmit(value: Todo) {
    console.log(value);
    if(value !== null) {
      this.successMsg= true;
    }
    this.todoService.addTodo(value);
  }
}
