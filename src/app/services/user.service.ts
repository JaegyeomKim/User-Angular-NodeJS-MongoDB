import { Injectable } from '@angular/core';
import {from, Observable, of} from 'rxjs'
import {HttpClient, HttpHeaders} from '@angular/common/http';  // For Backend connection
import { USERS } from 'src/app/sample-Lists';
import { User } from 'src/app/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = "http://localhost:4000/user/"

  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]> { // rxjs library
    // const users = of(USERS); // rxjs library
    // return users;
    return this.http.get<User[]>(this.apiURL)
  }
}
