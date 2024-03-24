import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "post", loadChildren: () => import('../app/features/post/post.module').then(m => m.PostModule)
  },
  {
    path: "todo", loadChildren: () => import('../app/features/todo/todo.module').then(m => m.TodoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
