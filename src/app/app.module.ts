import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { TagComponent } from './tag/tag.component';
import { CommentComponent } from './comment/comment.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { VoteComponent } from './vote/vote.component';
import { AnswerComponent } from './answer/answer.component';
import {NgOptimizedImage} from "@angular/common";
import { PostPreviewComponent } from './post-preview/post-preview.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    TagComponent,
    CommentComponent,
    UserComponent,
    VoteComponent,
    AnswerComponent,
    PostPreviewComponent,
    PostsPageComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
