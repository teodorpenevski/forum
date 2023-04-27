import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

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
    NavLinksComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
