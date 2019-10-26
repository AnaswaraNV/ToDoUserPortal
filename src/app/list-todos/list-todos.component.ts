import {Component, OnInit, ViewChild} from '@angular/core';
import {Todo} from "../model/todo";
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {TodoService} from "../service/todo-service/todo.service";

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'date' , 'description', 'isCompleted'];

  // private todoList = [
  //   {id : '1', description : 'Learn Canvas Painting', date: new Date(), isCompleted: true},
  //   {id : '2', description : 'Be an expert in Java 8', date: new Date(), isCompleted: false}
  // ];
  private todoList: Array<Todo> = [];
  private username: string = '';
  private dataSource: MatTableDataSource<Todo>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private todoService: TodoService) {
  }

  ngOnInit() {

    this.todoService.fetchTodos(this.username).subscribe((data) =>
    {
      this.todoList = data;
      this.dataSource = new MatTableDataSource<Todo>(this.todoList);
    });

    this.dataSource.paginator = this.paginator;
  }

}
