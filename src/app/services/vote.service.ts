import { apiLink } from "../interfaces/global-constants";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../models/post";
import { Comment } from "../models/comment";

@Injectable({
  providedIn: 'root'
})

export class VoteService {
  usersApi = apiLink + '/users';
  postsApi = apiLink + '/posts';
  commentsApi = apiLink + '/comments';
  constructor(private http: HttpClient) { }

  getVoteCount(id: number): Observable<Post | null> {
    return this.http.get<Post | null>(this.postsApi + '/' + id);
  }

  getVoteStatus(username: string, id: number): Observable<number> {
    return this.http.get<number>(this.usersApi + '/' + username + '/voteStatus/' + id);
  }

  getFollowStatus(username: string, id: number): Observable<boolean> {
    return this.http.get<boolean>(this.usersApi + '/' + username + '/followStatus/' + id);
  }

  getVoteCountComment(id: number): Observable<Comment | null> {
    return this.http.get<Comment | null>(this.commentsApi + '/' + id);
  }

  getVoteStatusComment(username: string, id: number): Observable<number> {
    return this.http.get<number>(this.usersApi + '/' + username + '/voteStatusComment/' + id);
  }

  likeComment(username: string, id: number) {
    return this.http.post(this.commentsApi + username + '/like' + id, null);
  }

  dislikeComment(username: string, id: number) {
    return this.http.post(this.commentsApi + username + '/dislike' + id, null);
  }

  likePost(username: string, id: number) {
    return this.http.post(this.usersApi + '/' + username + '/likePost/' + id, null);
  }

  dislikePost(username: string, id: number) {
    return this.http.post(this.usersApi + '/' + username + '/dislikePost/' + id, null);
  }

  followPost(username: string, id: number) {
    return this.http.post(this.usersApi + '/' + username + '/followPost/' + id, null);
  }


}
