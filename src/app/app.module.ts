import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { TagComponent } from './components/tag/tag.component';
import { CommentComponent } from './components/comment/comment.component';
import { UserComponent } from './components/user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TagsPageComponent } from './pages/tags-page/tags-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NavLinksComponent } from './components/nav-links/nav-links.component';
import { PostPreviewComponent } from './components/post-preview/post-preview.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { ContentDisplayComponent } from './components/components/content-display/content-display.component';
import { VoteComponent } from './components/vote/vote.component';
import { NgOptimizedImage } from "@angular/common";
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CreatePostComponent } from './components/create-post/create-post.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    TagComponent,
    CommentComponent,
    UserComponent,
    NavBarComponent,
    HomePageComponent,
    TagsPageComponent,
    SearchBarComponent,
    NavLinksComponent,
    PostPreviewComponent,
    SideBarComponent,
    ContentDisplayComponent,
    VoteComponent,
    PostsPageComponent,
    FilterComponent,
    CreatePostComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
