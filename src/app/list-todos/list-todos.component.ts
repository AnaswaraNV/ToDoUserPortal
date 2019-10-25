import {Component, OnInit, ViewChild} from '@angular/core';
import {Todo} from "../model/todo";
import {MatPaginator, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'description'];

  private todoList = [
    {id : '1', description : 'Learn Canvas Painting'},
    {id : '2', description : 'Be an expert in Java 8'}
  ];


  dataSource = new MatTableDataSource<Todo>(this.todoList);


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
