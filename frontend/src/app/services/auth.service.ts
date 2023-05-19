import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginDto } from '../models/login.dto';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  logIn(loginDto: LoginDto): Observable<User> {
    return this.http.post(`${this.apiUrl}/users/login`, loginDto) as Observable<User>
  }

  getCurrentUser(): Observable<string> {
    return this.http.get(`${this.apiUrl}/users/current`, { responseType: 'text' }) as Observable<string>
  }

}
