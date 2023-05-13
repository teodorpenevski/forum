import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { TagsPageComponent } from './pages/tags-page/tags-page.component';
import { PostComponent } from "./components/post/post.component";
import { PostsPageComponent } from "./pages/posts-page/posts-page.component";
import { CreatePostComponent } from "./components/create-post/create-post.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'tags', component: TagsPageComponent },
  { path: 'posts', component: PostsPageComponent },
  { path: 'posts/:id', component: PostComponent },
  { path: 'create-post', component: CreatePostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
