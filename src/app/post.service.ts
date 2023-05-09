import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { apiLink} from "./global-constants";
import { Observable } from "rxjs";
import {Post, PostDTO} from "./post";
import {Comment} from "./comment";

@Injectable({
  providedIn: 'root'
})

export class PostService {
  postsApi = apiLink + '/posts';
  constructor(private http: HttpClient) { }

  createPost(post: PostDTO) {
    return this.http.post(this.postsApi, post);
  }

  getPost(id: number): Observable<Post | null> {
    return this.http.get<Post | null>(this.postsApi + '/' + id);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsApi);
  }

  getPostIds(): Observable<number[]> {
    return this.http.get<number[]>(this.postsApi + '/ids');
  }

  getPostComments(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.postsApi + '/' + id + '/comments');
  }

  onComment(postId: number, comment: string) {
    return this.http.post(this.postsApi + '/' + postId + '/comment', {text: comment});
  }

  onEdit() {

  }

  onDelete() {

  }

  sort() {

  }
}