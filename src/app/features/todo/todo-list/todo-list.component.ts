import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {
  items: Array<TodoModel> = new Array<TodoModel>();
  constructor(private readonly _http: HttpClient) { }
  ngOnInit(): void {
    this._http.get('https://jsonplaceholder.typicode.com/todos').subscribe({
      next: (items: any) => {
        this.items = items
      }
    })
  }
}