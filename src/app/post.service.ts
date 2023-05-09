import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { apiLink} from "./global-constants";
import { Observable } from "rxjs";
import { Post } from "./post";

@Injectable({
  providedIn: 'root'
})

export class PostService {
  postsApi = apiLink + '/posts';
  constructor(private http: HttpClient) { }

  getPost(id: number): Observable<Post | null> {
    return this.http.get<Post | null>(this.postsApi + '/' + id);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsApi);
  }

  getPostIds(): Observable<number[]> {
    return this.http.get<number[]>(this.postsApi + '/ids');
  }

  onComment(postId: number, comment: string) {
    return this.http.post(this.postsApi + '/' + postId + '/comment', comment);
  }

  onEdit() {

  }

  onDelete() {

  }

  sort() {

  }
}
