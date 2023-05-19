import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { apiLink } from '../interfaces/global-constants';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  tagsApi = apiLink + '/tags';

  constructor(private http: HttpClient) { }

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.tagsApi);
  }

  createTag(tag: Tag) {
    return this.http.post(this.tagsApi, tag);
  }

  getTag(name: String): Observable<Tag | null> {
    return this.http.get<Tag | null>(this.tagsApi + '/' + name);
  }

}
