import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostComponent } from "./post/post.component";
import { PostsPageComponent } from "./posts-page/posts-page.component";

const routes: Routes = [
  { path: '', component:  PostsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
