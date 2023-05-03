import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { apiLink, Post } from "./global-constants";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PostService {
  postsApi = apiLink + '/posts';
  constructor(private http: HttpClient) { }

  getPost(id: number): Observable<Post | null> {
    return this.http.get<Post | null>(this.postsApi + '/' + id);
  }

  onComment() {

  }

  onEdit() {

  }

  onDelete() {

  }

  sort(attribute: string) {

  }
}
