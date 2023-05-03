import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostComponent } from "./post/post.component";
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'post', component: PostComponent },
  { path: 'user/:username', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
