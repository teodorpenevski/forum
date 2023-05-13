import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { TagComponent } from './components/tag/tag.component';
import { CommentComponent } from './components/comment/comment.component';
import { UserComponent } from './components/user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { VoteComponent } from './components/vote/vote.component';
import { NgOptimizedImage } from "@angular/common";
import { PostPreviewComponent } from './components/post-preview/post-preview.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CreatePostComponent } from './components/create-post/create-post.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    TagComponent,
    CommentComponent,
    UserComponent,
    VoteComponent,
    PostPreviewComponent,
    PostsPageComponent,
    FilterComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
