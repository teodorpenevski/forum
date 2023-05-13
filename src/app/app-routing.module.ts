import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostComponent } from "./components/post/post.component";
import { PostsPageComponent } from "./pages/posts-page/posts-page.component";
import { CreatePostComponent } from "./components/create-post/create-post.component";

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts/:id', component: PostComponent },
  { path: 'posts', component: PostsPageComponent },
  { path: 'create-post', component: CreatePostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
