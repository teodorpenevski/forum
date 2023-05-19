import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { UserDto } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComment(commentId: number) {
    return this.http.get('http://localhost:8080/api/comments/' + commentId);
  }

  getCommentCreator(commentId: number): Observable<UserDto> {
    console.log("called");
    return this.http.get<UserDto>('http://localhost:8080/api/comments/' + commentId + '/user');
  }
}
