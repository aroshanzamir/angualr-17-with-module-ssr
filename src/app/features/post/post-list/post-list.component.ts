import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostModel } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {
  items: Array<PostModel> = new Array<PostModel>();
  constructor(private readonly _http: HttpClient) { }
  ngOnInit(): void {
    this._http.get('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: (items: any) => {
        this.items = items
      }
    })
  }
}
