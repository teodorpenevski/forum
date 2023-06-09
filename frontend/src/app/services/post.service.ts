import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { apiLink } from "../interfaces/global-constants";
import { Observable } from "rxjs";
import { Post, PostDTO } from "../models/post";
import { Comment } from "../models/comment";
import { ParamMap } from "@angular/router";

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

  getPostIdsWithParams(params: ParamMap): Observable<number[]> {
    let httpParams = new HttpParams();
    params.keys.forEach(key => {
      // @ts-ignore
      httpParams = httpParams.append(key, params.get(key));
    });
    return this.http.get<number[]>(this.postsApi + '/ids', { params: httpParams });
  }

  getPostComments(id: number, sortAttribute: string, ascendingOrDescending: boolean): Observable<Comment[]> {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('sort', sortAttribute);
    httpParams = httpParams.append('ascending', ascendingOrDescending);
    return this.http.get<Comment[]>(this.postsApi + '/' + id + '/comments', { params: httpParams });
  }

  onComment(postId: number, comment: string) {
    return this.http.post(this.postsApi + '/' + postId + '/comment', { text: comment });
  }

  searchPosts(search: string, tags: string): Observable<number[]> {
    if (!search.trim()) {
      return this.getPostIds();
    }
    return this.http.get<number[]>(this.postsApi + '/search?query=' + search + '&tags=' + tags);
  }

  editPost(id: number, post: PostDTO) {
    return this.http.post(this.postsApi + '/' + id + '/edit', post);
  }

  onDelete() {

  }

  sort() {

  }
}
