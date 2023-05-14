import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComment(commentId: number) {
    return this.http.get('http://localhost:8080/api/comments/' + commentId);
  }
}
