import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getUserData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
