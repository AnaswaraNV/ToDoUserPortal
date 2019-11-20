import {Component, OnInit, ViewChild} from '@angular/core';
import {Todo} from "../model/todo";
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {TodoService} from "../service/todo-service/todo.service";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'Created Date' , 'Description', 'Completed', 'Username', 'actions'];

  private todoList: Array<Todo> = [];
  private username: string = '';
  private dataSource: MatTableDataSource<Todo>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private todoService: TodoService, private router: Router) {
  }

  ngOnInit() {

    this.todoService.fetchTodos(this.username).subscribe((data) =>
    {
      this.todoList = data;
      this.dataSource = new MatTableDataSource<Todo>(this.todoList);
    });

    // this.todoList = this.todoService.todoList;
    // this.dataSource = new MatTableDataSource<Todo>(this.todoList);

    this.dataSource.paginator = this.paginator;
  }

  updateToDo(id: string) {
    console.log('selected todo id '+ id);
    this.router.navigateByUrl(environment.apiUrl +  'update-todo/' + id);
  }
}
